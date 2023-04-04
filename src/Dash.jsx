import { Outlet } from 'react-router'
import SideBar from './components/Dashboard/SideBar'
import { useSelector } from 'react-redux';
import EditUserform from './components/Dashboard/EditUserform';
import EditOrderform from './components/Dashboard/EditOrderform';
import EditProductform from './components/Dashboard/EditProductform';

const Dash = () => {
    const isOpenUserform = useSelector((state) => state.isOpenEditUser.isOpen)
    const isOpenOrderform = useSelector((state) => state.isOpenEditOrder.isOpen)
    const isOpenProductform = useSelector((state) => state.isOpenEditProduct.isOpen)


    return (
        <>
            {isOpenUserform &&
                <EditUserform />
            }
            {isOpenOrderform &&
                <EditOrderform />
            }
            {isOpenProductform &&
                <EditProductform />
            }
            <SideBar />
<            div className='md:ml-64 mx-2 mt-5'>
                <Outlet />
            </div>
        </>)
}

export default Dash