import { Fraction } from "../../../Common/DataObjects/fraction";
import { SourceMeasure } from "../SourceMeasure";
import { InstantaniousTempoExpression } from "./instantaniousTempoExpression";
import { PlacementEnum } from "./abstractExpression";
import { FontStyles } from "../../../Common/Enums/FontStyles";
import { AbstractTempoExpression } from "./abstractTempoExpression";
import { ContinuousTempoExpression } from "./ContinuousExpressions/continuousTempoExpression";
export declare class MultiTempoExpression {
    constructor(sourceMeasure: SourceMeasure, timestamp: Fraction);
    private timestamp;
    private sourceMeasure;
    private instantaneousTempo;
    private continuousTempo;
    private expressions;
    private combinedExpressionsText;
    readonly Timestamp: Fraction;
    readonly AbsoluteTimestamp: Fraction;
    SourceMeasureParent: SourceMeasure;
    readonly InstantaniousTempo: InstantaniousTempoExpression;
    readonly ContinuousTempo: ContinuousTempoExpression;
    readonly EntriesList: TempoExpressionEntry[];
    CombinedExpressionsText: string;
    getPlacementOfFirstEntry(): PlacementEnum;
    getFontstyleOfFirstEntry(): FontStyles;
    addExpression(abstractTempoExpression: AbstractTempoExpression, prefix: string): void;
    CompareTo(other: MultiTempoExpression): number;
}
export declare class TempoExpressionEntry {
    prefix: string;
    expression: AbstractTempoExpression;
    label: string;
}
