import IncreaseBudgetComponent from "./Increase Budget Components/Increase Budget Component";
import IfRuleComponent from "./If Rule Components/If Rule Component";
import DecreaseBudgetComponent from "./Decrease Budget Components/Decrease Budget Component";
import PauseComponent from "./Pause Components/Pause Component";
import NotifyComponent from "./Notify Components/Notify Component";


const getRuleComponent = (rule) => {
    const type = rule.type.name;
    switch (type) {
        case 'IfRule':
            return IfRuleComponent;
        case 'IncreaseBudget':
            return IncreaseBudgetComponent;
        case 'DecreaseBudget':
            return DecreaseBudgetComponent;
        case 'Pause':
            return PauseComponent;
        case 'Notify':
            return NotifyComponent;
        default:
            return null;
    }
};

export default getRuleComponent;