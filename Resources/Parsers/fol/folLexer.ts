// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/fol/fol.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class folLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly LPAREN = 6;
	public static readonly RPAREN = 7;
	public static readonly EQUAL = 8;
	public static readonly NOT = 9;
	public static readonly FORALL = 10;
	public static readonly EXISTS = 11;
	public static readonly CHARACTER = 12;
	public static readonly CONJ = 13;
	public static readonly DISJ = 14;
	public static readonly IMPL = 15;
	public static readonly BICOND = 16;
	public static readonly ENDLINE = 17;
	public static readonly WHITESPACE = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "LPAREN", "RPAREN", "EQUAL", "NOT", 
		"FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ", "IMPL", "BICOND", "ENDLINE", 
		"WHITESPACE",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'?'", "'_'", "'#'", "'.'", "','", "'('", "')'", "'='", "'!'", 
		"'Forall'", "'Exists'", undefined, "'\\'", "'^'", "'->'", "'<->'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "LPAREN", 
		"RPAREN", "EQUAL", "NOT", "FORALL", "EXISTS", "CHARACTER", "CONJ", "DISJ", 
		"IMPL", "BICOND", "ENDLINE", "WHITESPACE",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(folLexer._LITERAL_NAMES, folLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return folLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(folLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "fol.g4"; }

	// @Override
	public get ruleNames(): string[] { return folLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return folLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return folLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return folLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14a\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n" +
		"\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x06\x12" +
		"W\n\x12\r\x12\x0E\x12X\x03\x13\x06\x13\\\n\x13\r\x13\x0E\x13]\x03\x13" +
		"\x03\x13\x02\x02\x02\x14\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
		"\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
		"\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
		"\x03\x02\x05\x05\x022;C\\c|\x04\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02b\x02" +
		"\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02" +
		"\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F" +
		"\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15" +
		"\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B" +
		"\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!" +
		"\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x03\'\x03\x02" +
		"\x02\x02\x05)\x03\x02\x02\x02\x07+\x03\x02\x02\x02\t-\x03\x02\x02\x02" +
		"\v/\x03\x02\x02\x02\r1\x03\x02\x02\x02\x0F3\x03\x02\x02\x02\x115\x03\x02" +
		"\x02\x02\x137\x03\x02\x02\x02\x159\x03\x02\x02\x02\x17@\x03\x02\x02\x02" +
		"\x19G\x03\x02\x02\x02\x1BI\x03\x02\x02\x02\x1DL\x03\x02\x02\x02\x1FN\x03" +
		"\x02\x02\x02!Q\x03\x02\x02\x02#V\x03\x02\x02\x02%[\x03\x02\x02\x02\'(" +
		"\x07A\x02\x02(\x04\x03\x02\x02\x02)*\x07a\x02\x02*\x06\x03\x02\x02\x02" +
		"+,\x07%\x02\x02,\b\x03\x02\x02\x02-.\x070\x02\x02.\n\x03\x02\x02\x02/" +
		"0\x07.\x02\x020\f\x03\x02\x02\x0212\x07*\x02\x022\x0E\x03\x02\x02\x02" +
		"34\x07+\x02\x024\x10\x03\x02\x02\x0256\x07?\x02\x026\x12\x03\x02\x02\x02" +
		"78\x07#\x02\x028\x14\x03\x02\x02\x029:\x07H\x02\x02:;\x07q\x02\x02;<\x07" +
		"t\x02\x02<=\x07c\x02\x02=>\x07n\x02\x02>?\x07n\x02\x02?\x16\x03\x02\x02" +
		"\x02@A\x07G\x02\x02AB\x07z\x02\x02BC\x07k\x02\x02CD\x07u\x02\x02DE\x07" +
		"v\x02\x02EF\x07u\x02\x02F\x18\x03\x02\x02\x02GH\t\x02\x02\x02H\x1A\x03" +
		"\x02\x02\x02IJ\x07^\x02\x02JK\x071\x02\x02K\x1C\x03\x02\x02\x02LM\x07" +
		"`\x02\x02M\x1E\x03\x02\x02\x02NO\x07/\x02\x02OP\x07@\x02\x02P \x03\x02" +
		"\x02\x02QR\x07>\x02\x02RS\x07/\x02\x02ST\x07@\x02\x02T\"\x03\x02\x02\x02" +
		"UW\t\x03\x02\x02VU\x03\x02\x02\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02" +
		"XY\x03\x02\x02\x02Y$\x03\x02\x02\x02Z\\\t\x04\x02\x02[Z\x03\x02\x02\x02" +
		"\\]\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_`\b\x13\x02\x02`&\x03\x02\x02\x02\x05\x02X]\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!folLexer.__ATN) {
			folLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(folLexer._serializedATN));
		}

		return folLexer.__ATN;
	}

}

