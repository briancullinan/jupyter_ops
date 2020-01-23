// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/telephone/telephone.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class telephoneLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly DIGIT = 5;
	public static readonly WS = 6;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "DIGIT", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'+1'", "'+'", "'011'", "'010'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "DIGIT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(telephoneLexer._LITERAL_NAMES, telephoneLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return telephoneLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(telephoneLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "telephone.g4"; }

	// @Override
	public get ruleNames(): string[] { return telephoneLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return telephoneLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return telephoneLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return telephoneLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\b%\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x06" +
		"\x07 \n\x07\r\x07\x0E\x07!\x03\x07\x03\x07\x02\x02\x02\b\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x03\x02\x04\x03\x022" +
		";\x05\x02\f\f\x0F\x0F\"\"\x02%\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02" +
		"\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02" +
		"\x02\x02\r\x03\x02\x02\x02\x03\x0F\x03\x02\x02\x02\x05\x12\x03\x02\x02" +
		"\x02\x07\x14\x03\x02\x02\x02\t\x18\x03\x02\x02\x02\v\x1C\x03\x02\x02\x02" +
		"\r\x1F\x03\x02\x02\x02\x0F\x10\x07-\x02\x02\x10\x11\x073\x02\x02\x11\x04" +
		"\x03\x02\x02\x02\x12\x13\x07-\x02\x02\x13\x06\x03\x02\x02\x02\x14\x15" +
		"\x072\x02\x02\x15\x16\x073\x02\x02\x16\x17\x073\x02\x02\x17\b\x03\x02" +
		"\x02\x02\x18\x19\x072\x02\x02\x19\x1A\x073\x02\x02\x1A\x1B\x072\x02\x02" +
		"\x1B\n\x03\x02\x02\x02\x1C\x1D\t\x02\x02\x02\x1D\f\x03\x02\x02\x02\x1E" +
		" \t\x03\x02\x02\x1F\x1E\x03\x02\x02\x02 !\x03\x02\x02\x02!\x1F\x03\x02" +
		"\x02\x02!\"\x03\x02\x02\x02\"#\x03\x02\x02\x02#$\b\x07\x02\x02$\x0E\x03" +
		"\x02\x02\x02\x04\x02!\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!telephoneLexer.__ATN) {
			telephoneLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(telephoneLexer._serializedATN));
		}

		return telephoneLexer.__ATN;
	}

}

