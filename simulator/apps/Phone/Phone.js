const PhoneStorageCtrl = {
  getCalls: function() {
    return JSON.parse(localStorage.getItem('simulated_calls')) || [];
  },
  saveCall: function(callRecord) {
    const calls = this.getCalls();
    calls.unshift(callRecord);
    localStorage.setItem('simulated_calls', JSON.stringify(calls));
  },
  clearAllCalls: function() {
    localStorage.removeItem('simulated_calls');
  }
};

const PhoneDataCtrl = {
  dialedNumber: '',

  findContactByNumber: function(phoneNumber) {
    const cleanNum = phoneNumber.replace(/\D/g, '');
    const rawContacts = JSON.parse(localStorage.getItem('Contacts')) || [];
    return rawContacts.find(function(c) {
      return c.phone.replace(/\D/g, '') === cleanNum;
    });
  },

  getContactDisplayName: function(contact) {
    if (!contact) return null;
    return (contact.firstName || '') + ' ' + (contact.lastName || '');
  }
};

const PhoneUICtrl = {
  selectors: {
    tabItems: '.tab-item',
    views: '.phone-view',
    dialBtns: '.dial-btn',
    output: '#dialer-output',
    match: '#dialer-contact-match',
    backspace: '#action-backspace-btn',
    callBtn: '#action-call-btn',
    hangupBtn: '#action-hangup-btn',
    overlay: '#active-call-overlay',
    overlayName: '#active-call-name',
    overlayStatus: '#active-call-status',
    recentsList: '#recents-list',
    title: '#phone-title',
    clearBtn: '#clear-recents-btn'
  },

  updateDialerDisplay: function(number) {
    document.querySelector(this.selectors.output).textContent = number;

    const backspace = document.querySelector(this.selectors.backspace);
    if (number.length > 0) {
      backspace.classList.remove('invisible');
    } else {
      backspace.classList.add('invisible');
    }

    const matchedContact = PhoneDataCtrl.findContactByNumber(number);
    const matchEl = document.querySelector(this.selectors.match);
    if (matchedContact) {
      matchEl.textContent = PhoneDataCtrl.getContactDisplayName(matchedContact);
    } else {
      matchEl.textContent = '';
    }
  },

  renderRecents: function() {
    const container = document.querySelector(this.selectors.recentsList);
    const calls = PhoneStorageCtrl.getCalls();

    if (calls.length === 0) {
      container.innerHTML = '<div style="text-align:center;color:#8e8e93;margin-top:40px;">No Recents</div>';
      return;
    }

    var html = '';
    calls.forEach(function(call) {
      const contact = PhoneDataCtrl.findContactByNumber(call.number);
      const displayName = contact ? PhoneDataCtrl.getContactDisplayName(contact) : call.number;
      const date = new Date(call.timestamp);
      const timeStr = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      html += '<div class="recent-row">' +
        '<div class="recent-main">' +
          '<span class="recent-name">' + displayName + '</span>' +
          '<span class="recent-meta">mobile</span>' +
        '</div>' +
        '<div style="color:#8e8e93;font-size:14px;">' + timeStr + '</div>' +
      '</div>';
    });
    container.innerHTML = html;
  },

  switchView: function(targetViewId) {
    document.querySelectorAll(this.selectors.views).forEach(function(v) {
      v.classList.add('hidden');
    });
    document.getElementById(targetViewId).classList.remove('hidden');

    const title = document.querySelector(this.selectors.title);
    const clearBtn = document.querySelector(this.selectors.clearBtn);

    if (targetViewId === 'view-recents') {
      title.textContent = 'Recents';
      clearBtn.classList.remove('hidden');
      this.renderRecents();
    } else {
      title.textContent = 'Keypad';
      clearBtn.classList.add('hidden');
    }
  }
};

const PhoneAppCtrl = {
  init: function() {
    this.bindEvents();
    PhoneUICtrl.renderRecents();
  },

  bindEvents: function() {
    var self = this;
    var UI = PhoneUICtrl.selectors;

    document.querySelectorAll(UI.tabItems).forEach(function(tab) {
      tab.addEventListener('click', function(e) {
        document.querySelectorAll(UI.tabItems).forEach(function(t) {
          t.classList.remove('active');
        });
        var currentTab = e.currentTarget;
        currentTab.classList.add('active');
        PhoneUICtrl.switchView(currentTab.dataset.target);
      });
    });

    document.querySelectorAll(UI.dialBtns).forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        var val = e.currentTarget.dataset.value;
        if (PhoneDataCtrl.dialedNumber.length < 15) {
          PhoneDataCtrl.dialedNumber += val;
          PhoneUICtrl.updateDialerDisplay(PhoneDataCtrl.dialedNumber);
        }
      });
    });

    document.querySelector(UI.backspace).addEventListener('click', function() {
      PhoneDataCtrl.dialedNumber = PhoneDataCtrl.dialedNumber.slice(0, -1);
      PhoneUICtrl.updateDialerDisplay(PhoneDataCtrl.dialedNumber);
    });

    document.querySelector(UI.callBtn).addEventListener('click', function() {
      var number = PhoneDataCtrl.dialedNumber;
      if (!number) return;

      var contact = PhoneDataCtrl.findContactByNumber(number);
      var overlayName = document.querySelector(UI.overlayName);
      var displayName = contact ? PhoneDataCtrl.getContactDisplayName(contact) : number;
      overlayName.textContent = displayName;
      document.querySelector(UI.overlayStatus).textContent = 'calling...';
      document.querySelector(UI.overlay).classList.remove('hidden');

      PhoneStorageCtrl.saveCall({
        number: number,
        timestamp: new Date().getTime()
      });
    });

    document.querySelector(UI.hangupBtn).addEventListener('click', function() {
      document.querySelector(UI.overlay).classList.add('hidden');
      PhoneDataCtrl.dialedNumber = '';
      PhoneUICtrl.updateDialerDisplay('');
      PhoneUICtrl.renderRecents();
    });

    document.querySelector(UI.clearBtn).addEventListener('click', function() {
      PhoneStorageCtrl.clearAllCalls();
      PhoneUICtrl.renderRecents();
    });
  }
};

document.addEventListener('DOMContentLoaded', function() {
  PhoneAppCtrl.init();
});
