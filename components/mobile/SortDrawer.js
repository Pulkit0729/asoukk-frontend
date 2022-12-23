import BottomModal from './BottomModal';
import classes from './SortDrawer.module.css'
import { useRouter } from 'next/router';
const SortDrawer = ({ onClose, show, searchData }) => {
    const router = useRouter();
    const sort = searchData.sort;
    function Sort(e) {
        console.log('called');
        const sort = e.target.value;
        onClose();
        router.push(`/search?search=${searchData.query}&sort=${sort}`)
    }
    return (
        <BottomModal
            onClose={onClose}
            show={show}>
                <h5>SORT BY</h5>
                <hr/>
            <ul className={classes['sort-list']} >
                <li>
                    <label className={sort=='rec'?`text-success`:null}>
                        <input value='rec' onClick={(e)=>Sort(e)} ></input>Recommended</label>
                </li>
                <li>
                    <label className={sort=='asc'?`text-success`:null}>
                        <input type='radio' value='asc' onClick={Sort}></input>Price low to high</label>
                </li>
                <li>
                    <label className={sort=='desc'?`text-success`:null}>
                        <input type='radio' value='desc' onClick={Sort}></input>Price high to low</label>
                </li>
            </ul>
        </BottomModal>
    )
}
 export default SortDrawer;