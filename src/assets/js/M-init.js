document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var elems2 = document.querySelectorAll('.dropdown-trigger');
    var elemsdrop = M.Dropdown.init(elems2,{

    });
    var instances = M.Sidenav.init(elems, {
    
    });
  });

