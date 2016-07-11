import { PlacementEnum, AbstractExpression } from "./abstractExpression";
import { TextAlignment } from "../../../Common/Enums/TextAlignment";
export declare class UnknownExpression extends AbstractExpression {
    constructor(label: string, placementEnum: PlacementEnum, textAlignment: TextAlignment, staffNumber: number);
    private label;
    private placement;
    private textAlignment;
    private staffNumber;
    readonly Label: string;
    Placement: PlacementEnum;
    StaffNumber: number;
    readonly TextAlignment: TextAlignment;
}
