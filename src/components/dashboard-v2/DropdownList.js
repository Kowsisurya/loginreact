import Dropdown from 'react-bootstrap/Dropdown';
import { capitalizeFirst } from '../custom_hook/CustomHook';

const DropdownList = (props) => {
    return(
        <>
        {/* <input type="text" className='menu-search-box' /> */}

        <Dropdown.Item as="button" active>
            <input 
                type="checkbox" 
                id="all"   
                className="plat-item-checkbox" 
                name='all'
                value='all'
                onChange={props.handleEnvironmentChange}
                // checked = {props.selectenvironment === 'all' ? 'checked' : ''}
                checked = {props.selectenvironment.indexOf("all") !== -1 ?  'checked' : ''}
            /><label htmlFor='all'></label>
            <span className='plat-item-list'>{props.alltitle}</span>
        </Dropdown.Item>
            {
                props.environmentlist.indexOf("Untagged") !== -1 &&
                <Dropdown.Item as="button" active>
                    <input 
                        type="checkbox" 
                        id="Untagged"   
                        className="plat-item-checkbox" 
                        name="Untagged"
                        value="Untagged"
                        onChange={props.handleEnvironmentChange}
                        checked = {props.selectenvironment.indexOf("Untagged") !== -1 ?  'checked' : ''}
                    /><label htmlFor={"Untagged"}></label>
                    <span className='plat-item-list text-danger'>--{capitalizeFirst("Untagged")}--</span>
                </Dropdown.Item>
            }
            {
                props.environmentlist.map((environmentlistdis, index) => 
                    environmentlistdis !== 'Untagged' &&
                     <Dropdown.Item as="button" active key={index}>
                        <input 
                            type="checkbox" 
                            id={environmentlistdis}   
                            className="plat-item-checkbox" 
                            name={environmentlistdis}
                            value={environmentlistdis}
                            onChange={props.handleEnvironmentChange}
                            // checked = {props.selectenvironment === environmentlistdis ? 'checked' : ''}
                            checked = {props.selectenvironment.indexOf(environmentlistdis) !== -1 ?  'checked' : ''}
                        /><label htmlFor={environmentlistdis}></label>
                        <span className='plat-item-list'>{capitalizeFirst(environmentlistdis)}</span>
                    </Dropdown.Item>
                   
                )
            }
        </>
    );
}

export default DropdownList;