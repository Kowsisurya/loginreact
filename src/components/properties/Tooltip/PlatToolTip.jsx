import { useState } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const PlatToolTip = (props) => {
    const [tooltipvalue, setToolTipValue] = useState(props.tooltipcontent);
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
           {tooltipvalue}
        </Tooltip>
      );


    return(
        <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip}
        >
            <span className='main-tooltip'>{props.bodycontent}</span>
        </OverlayTrigger>
    )
}

export default PlatToolTip;