import BottomModal from './BottomModal';
import classes from './FilterDrawer.module.css'
import StoreFilter from '../common/Filter/StoreFilter'
import PriceFilter from '../common/Filter/PriceFilter'

const FilterDrawer = ({ onClose, show}) => {
    return (
        <BottomModal
            onClose={onClose}
            show={show}>
            <StoreFilter></StoreFilter>
            <PriceFilter></PriceFilter>
        </BottomModal>
    )
}
 export default FilterDrawer;