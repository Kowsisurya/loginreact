
import "./newsavingsmodel.css";
import QuickView from '../QuickView';
import Tapmenu from '../Tapmenu';
import AllListSavingsModel from "./AllListSavingsModel";
import { useState } from "react";
import AddTableRecords from "./AddTableRecords";

const SavingsModel = () => {
    const [addrecordsstatus, addRecordsStatus] = useState(false)
    return(
        <>
          <div className='plat-dashboard-body'>
                <div className='plat-dashboard-quickview'>
                    <QuickView/>
                </div>

                <div className='plat-dashboard-tabs'>
                    <Tapmenu  
                        excalname='savings models' 
                        type="savingsmodel"
                        osstatus = {false}
                        dbstatus = {false}
                    />
                    <div className='plat-main-title'>
                        <h1 className='top-Plat-quick-title'>Savings Models</h1> 
                    </div>
                   
                    <div className='plat-full-asset-spend-cover'>
                        <div className='plat-saving-table-body'>
                           
                            {
                                addrecordsstatus ?
                                    <>
                                        <div onClick={() => addRecordsStatus(false)} style={{  marginRight: "80px" }}>
                                            <iconify-icon  icon="material-symbols:arrow-back" class="plat-saving-add-icon"></iconify-icon>
                                        </div><br></br>
                                        <AddTableRecords />
                                    </>
                                    
                                :
                                    <>
                                        <div onClick={() => addRecordsStatus(true)}>
                                            <iconify-icon icon="material-symbols:edit" class="plat-saving-add-icon"></iconify-icon>
                                        </div>
                                        <AllListSavingsModel />
                                    </>
                            }
                            
                        </div>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default SavingsModel;