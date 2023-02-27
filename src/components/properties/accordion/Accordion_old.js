import Table from 'react-bootstrap/Table';
import "./accordion.css";
import { Box } from '@mui/material';


const Accordion = () => {
    return(
        <div className='plat-assets-spend-body'>
            <Table className='plat-table-assets-spend'>
                <thead className='plat-table-assets-spend-thead'>
                    <tr className='plat-table-assets-spend-tr'>
                        <th className='plat-table-assets-th'></th>
                        <th className='plat-table-assets-th'> 
                            <div className='assets-table-header'>
                                <p className='assets-table-header-title'>VM</p>
                            </div>
                        </th>
                        <th className='plat-table-assets-th'> 
                            <div className='assets-table-header'>
                                <p className='assets-table-header-title'>DBaaS</p>
                            </div>
                        </th>
                        <th className='plat-table-assets-th'> 
                            <div className='assets-table-header'>
                                <p className='assets-table-header-title'>Others</p>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className='plat-table-assets-tbody'>
                    <tr className='plat-table-assets-tr'>
                        <td className='plat-table-assets-td plat-table-environment-head'>Environment</td>
                        <td className='plat-table-assets-td plat-table-environment-body'>
                            <div className='assets-table-body'>
                                <p className='assets-table-count'>Count</p>
                                <p className='assets-table-spend'>Spend</p>
                            </div>
                        </td>
                        <td className='plat-table-assets-td plat-table-environment-body'>
                            <div className='assets-table-body'>
                                <p className='assets-table-count'>Count</p>
                                <p className='assets-table-spend'>Spend</p>
                            </div>
                        </td>
                        <td className='plat-table-assets-td plat-table-environment-body'>
                            <div className='assets-table-body'>
                                <p className='assets-table-count'>Count</p>
                                <p className='assets-table-spend'>Spend</p>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table> 

            <ul class="cd-accordion--animated">
                <li class="cd-accordion__item cd-accordion__item--has-children">
                   
                    <input class="cd-accordion__input" type="checkbox" name ="group-1" id="group-1" />
                    <label class="cd-accordion__label cd-accordion__label--icon-folder" for="group-1"><span> 
                        <div> 
                        <Table className='plat-table-assets-spend'>
                            <thead className='plat-table-assets-spend-thead'>
                                <tr className='plat-table-assets-spend-tr'>
                                    <th className='plat-table-assets-th'>Environment</th>
                                    <th className='plat-table-assets-th'>count </th>
                                    <th className='plat-table-assets-th'>count</th>
                                    <th className='plat-table-assets-th'>count</th>
                                </tr>
                            </thead>
                        </Table> 
                        </div></span></label>

                <ul class="cd-accordion__sub cd-accordion__sub--l1">
                  
                    
                    <li class="cd-accordion__item cd-accordion__item--has-children">
                    <input class="cd-accordion__input" type="checkbox" name ="sub-group-2" id="sub-group-2" />
                    <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-2"><span>
                    <div> 
                        <Table className='plat-table-assets-spend'>
                            <thead className='plat-table-assets-spend-thead'>
                                <tr className='plat-table-assets-spend-tr'>
                                    <th className='plat-table-assets-th'>Production</th>
                                    <th className='plat-table-assets-th'>count </th>
                                    <th className='plat-table-assets-th'>count</th>
                                    <th className='plat-table-assets-th'>count</th>
                                </tr>
                            </thead>
                        </Table> 
                        </div>
                        </span></label>

                    <ul class="cd-accordion__sub cd-accordion__sub--l2">
                        <li class="cd-accordion__item cd-accordion__item--has-children">
                        <input class="cd-accordion__input" type="checkbox" name ="sub-group-level-3" id="sub-group-level-3" />
                        <label class="cd-accordion__label cd-accordion__label--icon-folder" for="sub-group-level-3"><span>
                        <div> 
                        <Table className='plat-table-assets-spend'>
                            <thead className='plat-table-assets-spend-thead'>
                                <tr className='plat-table-assets-spend-tr'>
                                    <th className='plat-table-assets-th'>AWS</th>
                                    <th className='plat-table-assets-th'>count </th>
                                    <th className='plat-table-assets-th'>count</th>
                                    <th className='plat-table-assets-th'>count</th>
                                </tr>
                            </thead>
                        </Table> 
                        </div>
                        </span></label>

                        <ul class="cd-accordion__sub cd-accordion__sub--l3">
                            
                            <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)"><span>
                            <div> 
                                <Table className='plat-table-assets-spend'>
                                    <thead className='plat-table-assets-spend-thead'>
                                        <tr className='plat-table-assets-spend-tr'>
                                            <th className='plat-table-assets-th'>ERP</th>
                                            <th className='plat-table-assets-th'>count </th>
                                            <th className='plat-table-assets-th'>count</th>
                                            <th className='plat-table-assets-th'>count</th>
                                        </tr>
                                    </thead>
                                </Table> 
                            </div>
                                </span></a></li>
                            <li class="cd-accordion__item"><a class="cd-accordion__label cd-accordion__label--icon-img" href="javascript:void(0)"><span>
                            <div> 
                                <Table className='plat-table-assets-spend'>
                                    <thead className='plat-table-assets-spend-thead'>
                                        <tr className='plat-table-assets-spend-tr'>
                                            <th className='plat-table-assets-th'>CRM</th>
                                            <th className='plat-table-assets-th'>count </th>
                                            <th className='plat-table-assets-th'>count</th>
                                            <th className='plat-table-assets-th'>count</th>
                                        </tr>
                                    </thead>
                                </Table> 
                            </div>
                                </span></a></li>
                        </ul>
                        </li>
                    </ul>
                    </li>
                </ul>
                </li>   
            </ul>
           
        </div>
    );
}
export default Accordion;