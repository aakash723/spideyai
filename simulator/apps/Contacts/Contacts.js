(function() {
  var LS_KEY = 'Contacts';
  var currentId = null;
  var editMode = 'add';
  var currentPhoto = null;

  function getContacts() {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch(e) { return []; }
  }

  function saveContacts(contacts) {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }

  function hideAll() {
    ['listView','detailView','editView'].forEach(function(id) {
      document.getElementById(id).style.display = 'none';
    });
  }

  function showView(id) { document.getElementById(id).style.display = 'block'; }

  function getInitials(first, last) {
    return (first || '?').charAt(0).toUpperCase() + (last || '').charAt(0).toUpperCase();
  }

  // ===== AVATAR PHOTO HELPERS =====
  function setAvatar(el, initials, photo) {
    var container = el;
    var initialsSpan = container.querySelector('.avatar-initials');
    var img = container.querySelector('.avatar-img');
    if (!initialsSpan || !img) return;
    if (photo) {
      initialsSpan.textContent = initials;
      img.src = photo;
      img.style.display = 'block';
      container.classList.add('has-photo');
    } else {
      initialsSpan.textContent = initials || '?';
      img.style.display = 'none';
      img.src = '';
      container.classList.remove('has-photo');
    }
  }

  // ===== LIST VIEW =====
  function renderList() {
    var contacts = getContacts();
    var container = document.getElementById('contactsList');
    var delBtn = document.getElementById('deleteAllBtn');
    if (!contacts.length) {
      container.innerHTML = '';
      delBtn.style.display = 'none';
      return;
    }
    delBtn.style.display = 'block';
    var grouped = {};
    contacts.forEach(function(c) {
      var letter = (c.firstName || '?').charAt(0).toUpperCase();
      if (!letter.match(/[A-Z]/)) letter = '#';
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(c);
    });
    var sorted = Object.keys(grouped).sort();
    var html = '';
    sorted.forEach(function(letter) {
      html += '<div class="contact-section"><div class="section-letter">' + letter + '</div>';
      grouped[letter].forEach(function(c) {
        var initials = getInitials(c.firstName, c.lastName);
        var avatarHtml = c.photo
          ? '<div class="row-avatar"><img class="row-avatar-img" src="' + c.photo + '"></div>'
          : '<div class="row-avatar row-avatar-initials">' + initials + '</div>';
        html += '<div class="contact-row" data-id="' + c.id + '">' +
          avatarHtml +
          '<span class="contact-name-part">' + c.firstName + ' <strong>' + c.lastName + '</strong></span>' +
          '<span class="edit-icon" data-edit-id="' + c.id + '">&#9998;</span>' +
        '</div>';
      });
      html += '</div>';
    });
    container.innerHTML = html;
  }

  // ===== DETAIL VIEW =====
  function showDetail(id) {
    currentId = id;
    var contacts = getContacts();
    var c = contacts.find(function(x) { return x.id === id; });
    if (!c) return;
    var initials = getInitials(c.firstName, c.lastName);
    setAvatar(document.getElementById('detailAvatar'), initials, c.photo);
    document.getElementById('detailName').textContent = c.firstName + ' ' + c.lastName;
    document.getElementById('detailPhone').textContent = c.phone;
    hideAll();
    showView('detailView');
  }

  // ===== EDIT/CREATE VIEW =====
  function clearEditView() {
    document.getElementById('editFirstName').value = '';
    document.getElementById('editLastName').value = '';
    document.getElementById('editCompany').value = '';
    currentPhoto = null;
    setAvatar(document.getElementById('editAvatar'), '?', null);
    var list = document.getElementById('editPhoneList');
    var rows = list.querySelectorAll('.action-row:not(#addPhoneRow)');
    rows.forEach(function(r) { if (r.id !== 'phoneRowTemplate') r.remove(); });
    var template = document.getElementById('phoneRowTemplate');
    var clone = template.cloneNode(true);
    clone.id = '';
    clone.style.display = 'flex';
    clone.querySelector('.phone-input').value = '';
    list.insertBefore(clone, document.getElementById('addPhoneRow'));
  }

  function initEditView() {
    clearEditView();
    editMode = 'add';
    document.getElementById('editDone').textContent = 'Done';
    document.getElementById('editDone').className = 'nav-btn done-btn';
    document.getElementById('editCancel').textContent = 'Cancel';
    hideAll();
    showView('editView');
  }

  function populateEditView(contact) {
    clearEditView();
    currentId = contact.id;
    document.getElementById('editFirstName').value = contact.firstName || '';
    document.getElementById('editLastName').value = contact.lastName || '';
    document.getElementById('editCompany').value = contact.company || '';
    currentPhoto = contact.photo || null;
    var initials = getInitials(contact.firstName, contact.lastName);
    setAvatar(document.getElementById('editAvatar'), initials, currentPhoto);
    var list = document.getElementById('editPhoneList');
    var rows = list.querySelectorAll('.action-row:not(#addPhoneRow)');
    rows.forEach(function(r) { if (r.id !== 'phoneRowTemplate') r.remove(); });
    var phones = contact.phones && contact.phones.length ? contact.phones : [contact.phone || ''];
    phones.forEach(function(p) {
      var template = document.getElementById('phoneRowTemplate');
      var clone = template.cloneNode(true);
      clone.id = '';
      clone.style.display = 'flex';
      clone.querySelector('.phone-input').value = p;
      list.insertBefore(clone, document.getElementById('addPhoneRow'));
    });
    editMode = 'edit';
    document.getElementById('editDone').textContent = 'Done';
    document.getElementById('editDone').className = 'nav-btn done-btn active';
    document.getElementById('editCancel').textContent = 'Cancel';
    toggleDone();
    hideAll();
    showView('editView');
  }

  function saveEdit() {
    var f = document.getElementById('editFirstName').value.trim();
    var l = document.getElementById('editLastName').value.trim();
    if (!f || !l) return;
    var phoneInputs = document.querySelectorAll('#editPhoneList .phone-input');
    var phones = [];
    phoneInputs.forEach(function(inp) {
      var val = inp.value.trim();
      if (val) phones.push(val);
    });
    var phone = phones.length ? phones[0] : '';
    var company = document.getElementById('editCompany').value.trim();
    var contacts = getContacts();
    if (editMode === 'add') {
      var id = contacts.length ? contacts[contacts.length - 1].id + 1 : 0;
      contacts.push({ id: id, firstName: f, lastName: l, phone: phone, phones: phones, company: company, photo: currentPhoto });
      saveContacts(contacts);
    } else {
      contacts.forEach(function(c) {
        if (c.id === currentId) {
          c.firstName = f; c.lastName = l; c.phone = phone;
          c.phones = phones; c.company = company; c.photo = currentPhoto;
        }
      });
      saveContacts(contacts);
    }
    hideAll();
    showView('listView');
    renderList();
  }

  // ===== PHOTO HANDLING =====
  document.getElementById('addPhotoBtn').addEventListener('click', function() {
    document.getElementById('photoInput').click();
  });

  document.getElementById('photoInput').addEventListener('change', function(e) {
    var file = e.target.files && e.target.files[0];
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function(ev) {
      currentPhoto = ev.target.result;
      var initials = '?';
      var f = document.getElementById('editFirstName').value.trim();
      var l = document.getElementById('editLastName').value.trim();
      if (f || l) initials = getInitials(f, l);
      setAvatar(document.getElementById('editAvatar'), initials, currentPhoto);
    };
    reader.readAsDataURL(file);
    this.value = '';
  });

  // ===== PHONE ROW MANAGEMENT =====
  function addPhoneRow(value) {
    var list = document.getElementById('editPhoneList');
    var template = document.getElementById('phoneRowTemplate');
    var clone = template.cloneNode(true);
    clone.id = '';
    clone.style.display = 'flex';
    clone.querySelector('.phone-input').value = value || '';
    list.insertBefore(clone, document.getElementById('addPhoneRow'));
  }

  function removePhoneRow(btn) {
    var row = btn.closest('.action-row');
    if (row && row.parentNode) row.remove();
  }

  // ===== EVENT BINDING =====
  document.getElementById('showAddForm').addEventListener('click', function() { initEditView(); });

  document.getElementById('contactsList').addEventListener('click', function(e) {
    var editBtn = e.target.closest('.edit-icon');
    if (editBtn) {
      var id = parseInt(editBtn.dataset.editId);
      var contacts = getContacts();
      var c = contacts.find(function(x) { return x.id === id; });
      if (c) populateEditView(c);
      return;
    }
    var row = e.target.closest('.contact-row');
    if (!row) return;
    var id = parseInt(row.dataset.id);
    showDetail(id);
  });

  document.getElementById('deleteAllBtn').addEventListener('click', function() {
    saveContacts([]);
    renderList();
  });

  // Detail
  document.getElementById('backToList').addEventListener('click', function() {
    hideAll();
    showView('listView');
    renderList();
  });

  document.getElementById('detailEditBtn').addEventListener('click', function() {
    var contacts = getContacts();
    var c = contacts.find(function(x) { return x.id === currentId; });
    if (c) populateEditView(c);
  });

  document.getElementById('deleteContactBtn').addEventListener('click', function() {
    saveContacts(getContacts().filter(function(c) { return c.id !== currentId; }));
    hideAll();
    showView('listView');
    renderList();
  });

  // Edit view
  document.getElementById('editCancel').addEventListener('click', function() {
    if (editMode === 'add') {
      hideAll();
      showView('listView');
    } else {
      var contacts = getContacts();
      var c = contacts.find(function(x) { return x.id === currentId; });
      if (c) { showDetail(currentId); return; }
      hideAll();
      showView('listView');
    }
  });

  document.getElementById('editDone').addEventListener('click', function() {
    if (!this.classList.contains('active')) return;
    saveEdit();
  });

  document.getElementById('editFirstName').addEventListener('input', toggleDone);
  document.getElementById('editLastName').addEventListener('input', toggleDone);

  function toggleDone() {
    var f = document.getElementById('editFirstName').value.trim();
    var l = document.getElementById('editLastName').value.trim();
    var btn = document.getElementById('editDone');
    if (f && l) {
      btn.className = 'nav-btn done-btn active';
    } else {
      btn.className = 'nav-btn done-btn';
    }
  }

  document.getElementById('editPhoneList').addEventListener('click', function(e) {
    var addBtn = e.target.closest('#addPhoneRow');
    if (addBtn) { addPhoneRow(''); return; }
    var delBtn = e.target.closest('.phone-delete');
    if (delBtn) { removePhoneRow(delBtn); return; }
  });

  // Search
  document.getElementById('search-box').addEventListener('keyup', function(e) {
    var q = e.target.value.toLowerCase();
    document.querySelectorAll('.contact-row').forEach(function(row) {
      row.style.display = row.textContent.toLowerCase().indexOf(q) !== -1 ? 'flex' : 'none';
    });
  });

  // Alphabet sidebar
  document.getElementById('alphabetSidebar').addEventListener('click', function(e) {
    var letter = e.target.textContent;
    if (!letter) return;
    var rows = document.querySelectorAll('.contact-row');
    for (var i = 0; i < rows.length; i++) {
      var text = rows[i].textContent.trim();
      var first = text.charAt(0).toUpperCase();
      if (letter === '#' && !first.match(/[A-Z]/)) { rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' }); break; }
      if (first === letter) { rows[i].scrollIntoView({ behavior: 'smooth', block: 'center' }); break; }
    }
  });

  // ===== INIT =====
  renderList();
})();
