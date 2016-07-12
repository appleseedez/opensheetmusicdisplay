import chai = require("chai");
import {MusicSheetReader} from "../../../src/MusicalScore/ScoreIO/MusicSheetReader";
import {MusicSheet} from "../../../src/MusicalScore/MusicSheet";
import {IXmlElement} from "../../../src/Common/FileIO/Xml";



describe("Music Sheet Reader Tests", () => {
    // Initialize variables
    let path: string = "test/data/MuzioClementi_SonatinaOpus36No1_Part1.xml";
    let reader: MusicSheetReader = new MusicSheetReader();
    let score: IXmlElement;
    let sheet: MusicSheet;

    function getSheet(filename: string): Document {
      return ((window as any).__xml__)[filename];
    }

    before((): void => {
        // Load the xml file
        let doc: Document = getSheet(path);
        chai.expect(doc).to.not.be.undefined;
        score = new IXmlElement(doc.getElementsByTagName("score-partwise")[0]);
        // chai.expect(score).to.not.be.undefined;
        sheet = reader.createMusicSheet(score, path);
    });

    beforeEach((): void => {
      // ???
    });

    afterEach((): void => {
      // cleanup?
    });

    it("Check XML", (done: MochaDone) => {
      done();
    });

    it("Read title and composer", (done: MochaDone) => {
        chai.expect(sheet.TitleString).to.equal("Sonatina Op.36 No 1 Teil 1 Allegro");
        chai.expect(sheet.ComposerString).to.equal("Muzio Clementi");
        done();
    });

    it("Measures", (done: MochaDone) => {
        chai.expect(sheet.SourceMeasures.length).to.equal(38);
        console.log("First Measure: ", sheet.SourceMeasures[0]);
        done();
    });

    it("Instruments", (done: MochaDone) => {
        chai.expect(reader.CompleteNumberOfStaves).to.equal(2);
        chai.expect(sheet.Instruments.length).to.equal(2);
        chai.expect(sheet.InstrumentalGroups.length).to.equal(2);
        chai.expect(sheet.Instruments[0].Name).to.equal("Piano (right)");
        chai.expect(sheet.Instruments[1].Name).to.equal("Piano (left)");
        done();
    });

    it("Notes", (done: MochaDone) => {
        // Staff Entries on first measure

        // chai.expect(sheet.SourceMeasures[0].VerticalSourceStaffEntryContainers[0].StaffEntries.length).to.equal(4);
        done();
    });
});
