import { Instrument } from "../Instrument";
import { SourceMeasure } from "../VoiceData/SourceMeasure";
import { KeyInstruction } from "../VoiceData/Instructions/KeyInstruction";
import { RhythmInstruction } from "../VoiceData/Instructions/RhythmInstruction";
import { Fraction } from "../../Common/DataObjects/fraction";
import { IXmlElement } from "../../Common/FileIO/Xml";
export declare type repetitionInstructionReader = any;
export declare class InstrumentReader {
    constructor(repetitionInstructionReader: repetitionInstructionReader, xmlMeasureList: IXmlElement[], instrument: Instrument);
    private xmlMeasureList;
    private musicSheet;
    private slurReader;
    private instrument;
    private voiceGeneratorsDict;
    private staffMainVoiceGeneratorDict;
    private inSourceMeasureInstrumentIndex;
    private divisions;
    private currentMeasure;
    private previousMeasure;
    private currentXmlMeasureIndex;
    private currentStaff;
    private currentStaffEntry;
    private activeClefs;
    private activeKey;
    private activeRhythm;
    private activeClefsHaveBeenInitialized;
    private activeKeyHasBeenInitialized;
    private abstractInstructions;
    private openChordSymbolContainer;
    private currentVoiceGenerator;
    private maxTieNoteFraction;
    readonly ActiveKey: KeyInstruction;
    readonly MaxTieNoteFraction: Fraction;
    ActiveRhythm: RhythmInstruction;
    readNextXmlMeasure(currentMeasure: SourceMeasure, measureStartAbsoluteTimestamp: Fraction, guitarPro: boolean): boolean;
    doCalculationsAfterDurationHasBeenSet(): void;
    private getOrCreateVoiceGenerator(voiceId, staffId);
    private createDefaultClefInstruction(staffIndex);
    private createDefaultKeyInstruction();
    private isAttributesNodeAtBeginOfMeasure(parentNode, attributesNode);
    private isAttributesNodeAtEndOfMeasure(parentNode, attributesNode);
    private getNoteDurationFromTypeNode(xmlNode);
    private addAbstractInstruction(node, guitarPro);
    private saveAbstractInstructionList(numberOfStaves, beginOfMeasure);
    private saveClefInstructionAtEndOfMeasure();
    private getNoteDurationForTuplet(xmlNode);
    private readDivisionsFromNotes();
}
