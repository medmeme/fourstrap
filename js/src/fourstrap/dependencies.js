// Bootstrap 4 depends on jQuery so we want to build it with it.
import jQuery from 'jquery'

window.jQuery = jQuery

// Bootstrap 4 also depends on popper.js again bundle it with it.
import popper from 'popper.js'

window.Popper = popper
