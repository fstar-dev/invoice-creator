import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faTachometerAlt,
  faFileAlt,
  faCreditCard,
  faSpaceShuttle,
  faSignal,
  faCog,
  faPlus,
  faComment,
  faMoneyBill,
  faBell,
  faHashtag,
  faSave,
  faFilter,
  faEdit,
  faTrash,
  faTrashAlt,
  faBackward,
  faShoppingBasket,
  faTimes,
  faUserPlus,
  faCartPlus,
  faArrowLeft,
  faArrowRight,
  faSpinner,
  faSignOutAlt,
  faCogs,
  faPencilAlt,
  faPrint,
  faCheck,
  faSync,
  faSortAmountDown,
  faSortAmountUp,
  faSearch,
  faAsterisk,
  faInfoCircle,
  faCheckCircle,
  faStar,
  faFile,
  faCloudUploadAlt,
  faDownload,
  faGripVertical,
  faCalendar,
  faFilePdf,
  faTimesCircle,
  faEnvelope,
  faEye,
  faShare,
  faEllipsisH,
  faCopy,
  faPaperPlane,
  faEyeSlash
} from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

window.Vue = require('vue')

library.add(
  far,
  faUser,
  faTrashAlt,
  faTachometerAlt,
  faFileAlt,
  faFile,
  faStar,
  faCreditCard,
  faSpaceShuttle,
  faSignal,
  faCog,
  faPlus,
  faMoneyBill,
  faComment,
  faBell,
  faHashtag,
  faSave,
  faFilter,
  faEdit,
  faTrash,
  faBackward,
  faShoppingBasket,
  faTimes,
  faTimesCircle,
  faUserPlus,
  faCartPlus,
  faArrowLeft,
  faArrowRight,
  faCartPlus,
  faSpinner,
  faSignOutAlt,
  faCogs,
  faPencilAlt,
  faPrint,
  faCheck,
  faSync,
  faSortAmountDown,
  faSortAmountUp,
  faSearch,
  faAsterisk,
  faInfoCircle,
  faCheckCircle,
  faPencilAlt,
  faCloudUploadAlt,
  faDownload,
  faGripVertical,
  faCalendar,
  faFilePdf,
  faEnvelope,
  faEye,
  faEyeSlash,
  faShare,
  faEllipsisH,
  faCopy,
  faPaperPlane
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
