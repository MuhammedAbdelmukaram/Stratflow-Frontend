import IncreaseBudgetComponent from "./Increase Budget Components/Increase Budget Component";
import IfRuleComponent from "./If Rule Components/If Rule Component";
import DecreaseBudgetComponent from "./Decrease Budget Components/Decrease Budget Component";
import PauseComponent from "./Pause Components/Pause Component";
import NotifyComponent from "./Notify Components/Notify Component";


const getRuleComponent = (node) => {
    const type = node.type;
    switch (type) {
        case 'IF_RULE':
            return IfRuleComponent;
        case 'INCREASE_BUDGET':
            return IncreaseBudgetComponent;
        case 'DECREASE_BUDGET':
            return DecreaseBudgetComponent;
        case 'PAUSE':
            return PauseComponent;
        case 'NOTIFY':
            return NotifyComponent;
        default:
            return null;
    }
};

export default getRuleComponent;
