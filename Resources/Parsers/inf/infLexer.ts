// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/inf/inf.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class infLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly CHARS = 5;
	public static readonly STRING = 6;
	public static readonly COMMENT = 7;
	public static readonly EOL = 8;
	public static readonly WS = 9;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "CHARS", "STRING", "COMMENT", "EOL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "']'", "'='", "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "CHARS", "STRING", 
		"COMMENT", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(infLexer._LITERAL_NAMES, infLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return infLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(infLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "inf.g4"; }

	// @Override
	public get ruleNames(): string[] { return infLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return infLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return infLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return infLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\v?\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x06\x06\x1F\n\x06\r\x06\x0E\x06" +
		" \x03\x07\x03\x07\x07\x07%\n\x07\f\x07\x0E\x07(\v\x07\x03\x07\x03\x07" +
		"\x03\b\x03\b\x07\b.\n\b\f\b\x0E\b1\v\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03" +
		"\t\x03\n\x06\n:\n\n\r\n\x0E\n;\x03\n\x03\n\x02\x02\x02\v\x03\x02\x03\x05" +
		"\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13" +
		"\x02\v\x03\x02\x06\r\x02$$\'(,,/;>>@@B\\^^aac}\x7F\x7F\x04\x02\f\f$$\x04" +
		"\x02\f\f\x0F\x0F\x04\x02\v\v\"\"\x02B\x02\x03\x03\x02\x02\x02\x02\x05" +
		"\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03" +
		"\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03" +
		"\x02\x02\x02\x02\x13\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x17\x03" +
		"\x02\x02\x02\x07\x19\x03\x02\x02\x02\t\x1B\x03\x02\x02\x02\v\x1E\x03\x02" +
		"\x02\x02\r\"\x03\x02\x02\x02\x0F+\x03\x02\x02\x02\x116\x03\x02\x02\x02" +
		"\x139\x03\x02\x02\x02\x15\x16\x07]\x02\x02\x16\x04\x03\x02\x02\x02\x17" +
		"\x18\x07_\x02\x02\x18\x06\x03\x02\x02\x02\x19\x1A\x07?\x02\x02\x1A\b\x03" +
		"\x02\x02\x02\x1B\x1C\x07.\x02\x02\x1C\n\x03\x02\x02\x02\x1D\x1F\t\x02" +
		"\x02\x02\x1E\x1D\x03\x02\x02\x02\x1F \x03\x02\x02\x02 \x1E\x03\x02\x02" +
		"\x02 !\x03\x02\x02\x02!\f\x03\x02\x02\x02\"&\x07$\x02\x02#%\n\x03\x02" +
		"\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02" +
		"\x02\x02\')\x03\x02\x02\x02(&\x03\x02\x02\x02)*\x07$\x02\x02*\x0E\x03" +
		"\x02\x02\x02+/\x07=\x02\x02,.\n\x04\x02\x02-,\x03\x02\x02\x02.1\x03\x02" +
		"\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02\x02\x021/\x03\x02" +
		"\x02\x0223\x05\x11\t\x0234\x03\x02\x02\x0245\b\b\x02\x025\x10\x03\x02" +
		"\x02\x0267\t\x04\x02\x027\x12\x03\x02\x02\x028:\t\x05\x02\x0298\x03\x02" +
		"\x02\x02:;\x03\x02\x02\x02;9\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02" +
		"\x02\x02=>\b\n\x02\x02>\x14\x03\x02\x02\x02\x07\x02 &/;\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!infLexer.__ATN) {
			infLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(infLexer._serializedATN));
		}

		return infLexer.__ATN;
	}

}

