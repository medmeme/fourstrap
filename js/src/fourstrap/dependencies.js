import jQuery from 'jquery'
import popper from 'popper.js'

// Bootstrap 4 depends on jQuery so we want to build it with it.
window.jQuery = jQuery

// Bootstrap 4 also depends on popper.js again bundle it with it.
window.Popper = popper
