// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asm/asmZ80/asmZ80.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class asmZ80Lexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly REGISTER = 10;
	public static readonly ASSEMBLER_DIRECTIVE = 11;
	public static readonly OPCODE = 12;
	public static readonly NAME = 13;
	public static readonly NUMBER = 14;
	public static readonly COMMENT = 15;
	public static readonly STRING = 16;
	public static readonly EOL = 17;
	public static readonly WS = 18;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"REGISTER", "ASSEMBLER_DIRECTIVE", "OPCODE", "A", "B", "C", "D", "E", 
		"F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 
		"T", "U", "V", "W", "X", "Y", "Z", "NAME", "NUMBER", "COMMENT", "STRING", 
		"EOL", "WS",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "':'", "','", "'+'", "'-'", "'*'", "'/'", "'('", "')'", "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "REGISTER", "ASSEMBLER_DIRECTIVE", "OPCODE", 
		"NAME", "NUMBER", "COMMENT", "STRING", "EOL", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(asmZ80Lexer._LITERAL_NAMES, asmZ80Lexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return asmZ80Lexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(asmZ80Lexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "asmZ80.g4"; }

	// @Override
	public get ruleNames(): string[] { return asmZ80Lexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return asmZ80Lexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return asmZ80Lexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return asmZ80Lexer.modeNames; }

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x14\u022C\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x8B\n\v\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05" +
		"\f\xB3\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x05\r\u01CA\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03" +
		"\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03\"\x03\"\x03" +
		"#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x07(\u0202" +
		"\n(\f(\x0E(\u0205\v(\x03)\x05)\u0208\n)\x03)\x06)\u020B\n)\r)\x0E)\u020C" +
		"\x03)\x05)\u0210\n)\x03*\x03*\x07*\u0214\n*\f*\x0E*\u0217\v*\x03*\x03" +
		"*\x03+\x03+\x07+\u021D\n+\f+\x0E+\u0220\v+\x03+\x03+\x03,\x06,\u0225\n" +
		",\r,\x0E,\u0226\x03-\x03-\x03-\x03-\x02\x02\x02.\x03\x02\x03\x05\x02\x04" +
		"\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v" +
		"\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!" +
		"\x02\x02#\x02\x02%\x02\x02\'\x02\x02)\x02\x02+\x02\x02-\x02\x02/\x02\x02" +
		"1\x02\x023\x02\x025\x02\x027\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02" +
		"A\x02\x02C\x02\x02E\x02\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02O\x02\x0F" +
		"Q\x02\x10S\x02\x11U\x02\x12W\x02\x13Y\x02\x14\x03\x02#\x06\x02CHJKNNT" +
		"T\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02FFff\x04\x02GGgg\x04\x02" +
		"HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02LLll\x04\x02MMmm\x04\x02" +
		"NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02RRrr\x04\x02SSss\x04\x02" +
		"TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02XXxx\x04\x02YYyy\x04\x02" +
		"ZZzz\x04\x02[[{{\x04\x02\\\\||\x04\x02C\\c|\x07\x02$$002;C\\c|\x05\x02" +
		"2;CHch\x04\x02\f\f\x0F\x0F\x03\x02))\x04\x02\v\v\"\"\x02\u026F\x02\x03" +
		"\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
		"\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
		"\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
		"\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02O\x03" +
		"\x02\x02\x02\x02Q\x03\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02" +
		"\x02\x02W\x03\x02\x02\x02\x02Y\x03\x02\x02\x02\x03[\x03\x02\x02\x02\x05" +
		"]\x03\x02\x02\x02\x07_\x03\x02\x02\x02\ta\x03\x02\x02\x02\vc\x03\x02\x02" +
		"\x02\re\x03\x02\x02\x02\x0Fg\x03\x02\x02\x02\x11i\x03\x02\x02\x02\x13" +
		"k\x03\x02\x02\x02\x15\x8A\x03\x02\x02\x02\x17\xB2\x03\x02\x02\x02\x19" +
		"\u01C9\x03\x02\x02\x02\x1B\u01CB\x03\x02\x02\x02\x1D\u01CD\x03\x02\x02" +
		"\x02\x1F\u01CF\x03\x02\x02\x02!\u01D1\x03\x02\x02\x02#\u01D3\x03\x02\x02" +
		"\x02%\u01D5\x03\x02\x02\x02\'\u01D7\x03\x02\x02\x02)\u01D9\x03\x02\x02" +
		"\x02+\u01DB\x03\x02\x02\x02-\u01DD\x03\x02\x02\x02/\u01DF\x03\x02\x02" +
		"\x021\u01E1\x03\x02\x02\x023\u01E3\x03\x02\x02\x025\u01E5\x03\x02\x02" +
		"\x027\u01E7\x03\x02\x02\x029\u01E9\x03\x02\x02\x02;\u01EB\x03\x02\x02" +
		"\x02=\u01ED\x03\x02\x02\x02?\u01EF\x03\x02\x02\x02A\u01F1\x03\x02\x02" +
		"\x02C\u01F3\x03\x02\x02\x02E\u01F5\x03\x02\x02\x02G\u01F7\x03\x02\x02" +
		"\x02I\u01F9\x03\x02\x02\x02K\u01FB\x03\x02\x02\x02M\u01FD\x03\x02\x02" +
		"\x02O\u01FF\x03\x02\x02\x02Q\u0207\x03\x02\x02\x02S\u0211\x03\x02\x02" +
		"\x02U\u021A\x03\x02\x02\x02W\u0224\x03\x02\x02\x02Y\u0228\x03\x02\x02" +
		"\x02[\\\x07<\x02\x02\\\x04\x03\x02\x02\x02]^\x07.\x02\x02^\x06\x03\x02" +
		"\x02\x02_`\x07-\x02\x02`\b\x03\x02\x02\x02ab\x07/\x02\x02b\n\x03\x02\x02" +
		"\x02cd\x07,\x02\x02d\f\x03\x02\x02\x02ef\x071\x02\x02f\x0E\x03\x02\x02" +
		"\x02gh\x07*\x02\x02h\x10\x03\x02\x02\x02ij\x07+\x02\x02j\x12\x03\x02\x02" +
		"\x02kl\x07&\x02\x02l\x14\x03\x02\x02\x02m\x8B\t\x02\x02\x02no\x07K\x02" +
		"\x02op\x07Z\x02\x02p\x8B\x07J\x02\x02qr\x07K\x02\x02rs\x07Z\x02\x02s\x8B" +
		"\x07N\x02\x02tu\x07K\x02\x02uv\x07[\x02\x02v\x8B\x07J\x02\x02wx\x07K\x02" +
		"\x02xy\x07[\x02\x02y\x8B\x07N\x02\x02z{\x07C\x02\x02{\x8B\x07H\x02\x02" +
		"|}\x07D\x02\x02}\x8B\x07E\x02\x02~\x7F\x07F\x02\x02\x7F\x8B\x07G\x02\x02" +
		"\x80\x81\x07J\x02\x02\x81\x8B\x07N\x02\x02\x82\x83\x07R\x02\x02\x83\x8B" +
		"\x07E\x02\x02\x84\x85\x07U\x02\x02\x85\x8B\x07R\x02\x02\x86\x87\x07K\x02" +
		"\x02\x87\x8B\x07Z\x02\x02\x88\x89\x07K\x02\x02\x89\x8B\x07[\x02\x02\x8A" +
		"m\x03\x02\x02\x02\x8An\x03\x02\x02\x02\x8Aq\x03\x02\x02\x02\x8At\x03\x02" +
		"\x02\x02\x8Aw\x03\x02\x02\x02\x8Az\x03\x02\x02\x02\x8A|\x03\x02\x02\x02" +
		"\x8A~\x03\x02\x02\x02\x8A\x80\x03\x02\x02\x02\x8A\x82\x03\x02\x02\x02" +
		"\x8A\x84\x03\x02\x02\x02\x8A\x86\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02" +
		"\x8B\x16\x03\x02\x02\x02\x8C\x8D\x057\x1C\x02\x8D\x8E\x05=\x1F\x02\x8E" +
		"\x8F\x05\'\x14\x02\x8F\xB3\x03\x02\x02\x02\x90\x91\x05#\x12\x02\x91\x92" +
		"\x055\x1B\x02\x92\x93\x05!\x11\x02\x93\xB3\x03\x02\x02\x02\x94\x95\x05" +
		"#\x12\x02\x95\x96\x05;\x1E\x02\x96\x97\x05C\"\x02\x97\xB3\x03\x02\x02" +
		"\x02\x98\x99\x05!\x11\x02\x99\x9A\x05#\x12\x02\x9A\x9B\x05%\x13\x02\x9B" +
		"\x9C\x05\x1D\x0F\x02\x9C\xB3\x03\x02\x02\x02\x9D\x9E\x05!\x11\x02\x9E" +
		"\x9F\x05#\x12\x02\x9F\xA0\x05%\x13\x02\xA0\xA1\x05G$\x02\xA1\xB3\x03\x02" +
		"\x02\x02\xA2\xA3\x05!\x11\x02\xA3\xA4\x05? \x02\xA4\xB3\x03\x02\x02\x02" +
		"\xA5\xA6\x05+\x16\x02\xA6\xA7\x05%\x13\x02\xA7\xB3\x03\x02\x02\x02\xA8" +
		"\xA9\x05#\x12\x02\xA9\xAA\x055\x1B\x02\xAA\xAB\x05!\x11\x02\xAB\xAC\x05" +
		"+\x16\x02\xAC\xAD\x05%\x13\x02\xAD\xB3\x03\x02\x02\x02\xAE\xAF\x05? \x02" +
		"\xAF\xB0\x05#\x12\x02\xB0\xB1\x05A!\x02\xB1\xB3\x03\x02\x02\x02\xB2\x8C" +
		"\x03\x02\x02\x02\xB2\x90\x03\x02\x02\x02\xB2\x94\x03\x02\x02\x02\xB2\x98" +
		"\x03\x02\x02\x02\xB2\x9D\x03\x02\x02\x02\xB2\xA2\x03\x02\x02\x02\xB2\xA5" +
		"\x03\x02\x02\x02\xB2\xA8\x03\x02\x02\x02\xB2\xAE\x03\x02\x02\x02\xB3\x18" +
		"\x03\x02\x02\x02\xB4\xB5\x05\x1B\x0E\x02\xB5\xB6\x05!\x11\x02\xB6\xB7" +
		"\x05\x1F\x10\x02\xB7\u01CA\x03\x02\x02\x02\xB8\xB9\x05\x1B\x0E\x02\xB9" +
		"\xBA\x05!\x11\x02\xBA\xBB\x05!\x11\x02\xBB\u01CA\x03\x02\x02\x02\xBC\xBD" +
		"\x05\x1B\x0E\x02\xBD\xBE\x055\x1B\x02\xBE\xBF\x05!\x11\x02\xBF\u01CA\x03" +
		"\x02\x02\x02\xC0\xC1\x05\x1D\x0F\x02\xC1\xC2\x05+\x16\x02\xC2\xC3\x05" +
		"A!\x02\xC3\u01CA\x03\x02\x02\x02\xC4\xC5\x05\x1F\x10\x02\xC5\xC6\x05\x1B" +
		"\x0E\x02\xC6\xC7\x051\x19\x02\xC7\xC8\x051\x19\x02\xC8\u01CA\x03\x02\x02" +
		"\x02\xC9\xCA\x05\x1F\x10\x02\xCA\xCB\x05\x1F\x10\x02\xCB\xCC\x05%\x13" +
		"\x02\xCC\u01CA\x03\x02\x02\x02\xCD\xCE\x05\x1F\x10\x02\xCE\xCF\x059\x1D" +
		"\x02\xCF\u01CA\x03\x02\x02\x02\xD0\xD1\x05\x1F\x10\x02\xD1\xD2\x059\x1D" +
		"\x02\xD2\xD3\x05!\x11\x02\xD3\u01CA\x03\x02\x02\x02\xD4\xD5\x05\x1F\x10" +
		"\x02\xD5\xD6\x059\x1D\x02\xD6\xD7\x05!\x11\x02\xD7\xD8\x05=\x1F\x02\xD8" +
		"\u01CA\x03\x02\x02\x02\xD9\xDA\x05\x1F\x10\x02\xDA\xDB\x059\x1D\x02\xDB" +
		"\xDC\x05+\x16\x02\xDC\u01CA\x03\x02\x02\x02\xDD\xDE\x05\x1F\x10\x02\xDE" +
		"\xDF\x059\x1D\x02\xDF\xE0\x05+\x16\x02\xE0\xE1\x05=\x1F\x02\xE1\u01CA" +
		"\x03\x02\x02\x02\xE2\xE3\x05\x1F\x10\x02\xE3\xE4\x059\x1D\x02\xE4\xE5" +
		"\x051\x19\x02\xE5\u01CA\x03\x02\x02\x02\xE6\xE7\x05!\x11\x02\xE7\xE8\x05" +
		"\x1B\x0E\x02\xE8\xE9\x05\x1B\x0E\x02\xE9\u01CA\x03\x02\x02\x02\xEA\xEB" +
		"\x05!\x11\x02\xEB\xEC\x05#\x12\x02\xEC\xED\x05\x1F\x10\x02\xED\u01CA\x03" +
		"\x02\x02\x02\xEE\xEF\x05!\x11\x02\xEF\xF0\x05+\x16\x02\xF0\u01CA\x03\x02" +
		"\x02\x02\xF1\xF2\x05!\x11\x02\xF2\xF3\x05-\x17\x02\xF3\xF4\x055\x1B\x02" +
		"\xF4\xF5\x05M\'\x02\xF5\u01CA\x03\x02\x02\x02\xF6\xF7\x05#\x12\x02\xF7" +
		"\xF8\x05+\x16\x02\xF8\u01CA\x03\x02\x02\x02\xF9\xFA\x05#\x12\x02\xFA\xFB" +
		"\x05I%\x02\xFB\u01CA\x03\x02\x02\x02\xFC\xFD\x05#\x12\x02\xFD\xFE\x05" +
		"I%\x02\xFE\xFF\x05I%\x02\xFF\u01CA\x03\x02\x02\x02\u0100\u0101\x05+\x16" +
		"\x02\u0101\u0102\x053\x1A\x02\u0102\u01CA\x03\x02\x02\x02\u0103\u0104" +
		"\x05+\x16\x02\u0104\u0105\x055\x1B\x02\u0105\u01CA\x03\x02\x02\x02\u0106" +
		"\u0107\x05+\x16\x02\u0107\u0108\x055\x1B\x02\u0108\u0109\x05\x1F\x10\x02" +
		"\u0109\u01CA\x03\x02\x02\x02\u010A\u010B\x05+\x16\x02\u010B\u010C\x05" +
		"5\x1B\x02\u010C\u010D\x05!\x11\x02\u010D\u01CA\x03\x02\x02\x02\u010E\u010F" +
		"\x05+\x16\x02\u010F\u0110\x055\x1B\x02\u0110\u0111\x05!\x11\x02\u0111" +
		"\u0112\x05=\x1F\x02\u0112\u01CA\x03\x02\x02\x02\u0113\u0114\x05+\x16\x02" +
		"\u0114\u0115\x055\x1B\x02\u0115\u0116\x05+\x16\x02\u0116\u01CA\x03\x02" +
		"\x02\x02\u0117\u0118\x05+\x16\x02\u0118\u0119\x055\x1B\x02\u0119\u011A" +
		"\x05+\x16\x02\u011A\u011B\x05=\x1F\x02\u011B\u01CA\x03\x02\x02\x02\u011C" +
		"\u011D\x05-\x17\x02\u011D\u011E\x059\x1D\x02\u011E\u01CA\x03\x02\x02\x02" +
		"\u011F\u0120\x05-\x17\x02\u0120\u0121\x05=\x1F\x02\u0121\u01CA\x03\x02" +
		"\x02\x02\u0122\u0123\x051\x19\x02\u0123\u0124\x05!\x11\x02\u0124\u01CA" +
		"\x03\x02\x02\x02\u0125\u0126\x051\x19\x02\u0126\u0127\x05!\x11\x02\u0127" +
		"\u0128\x05!\x11\x02\u0128\u01CA\x03\x02\x02\x02\u0129\u012A\x051\x19\x02" +
		"\u012A\u012B\x05!\x11\x02\u012B\u012C\x05!\x11\x02\u012C\u012D\x05=\x1F" +
		"\x02\u012D\u01CA\x03\x02\x02\x02\u012E\u012F\x051\x19\x02\u012F\u0130" +
		"\x05!\x11\x02\u0130\u0131\x05+\x16\x02\u0131\u01CA\x03\x02\x02\x02\u0132" +
		"\u0133\x051\x19\x02\u0133\u0134\x05!\x11\x02\u0134\u0135\x05+\x16\x02" +
		"\u0135\u0136\x05=\x1F\x02\u0136\u01CA\x03\x02\x02\x02\u0137\u0138\x05" +
		"5\x1B\x02\u0138\u0139\x05#\x12\x02\u0139\u013A\x05\'\x14\x02\u013A\u01CA" +
		"\x03\x02\x02\x02\u013B\u013C\x055\x1B\x02\u013C\u013D\x057\x1C\x02\u013D" +
		"\u013E\x059\x1D\x02\u013E\u01CA\x03\x02\x02\x02\u013F\u0140\x057\x1C\x02" +
		"\u0140\u0141\x05=\x1F\x02\u0141\u01CA\x03\x02\x02\x02\u0142\u0143\x05" +
		"7\x1C\x02\u0143\u0144\x05A!\x02\u0144\u0145\x05!\x11\x02\u0145\u0146\x05" +
		"=\x1F\x02\u0146\u01CA\x03\x02\x02\x02\u0147\u0148\x057\x1C\x02\u0148\u0149" +
		"\x05A!\x02\u0149\u014A\x05+\x16\x02\u014A\u014B\x05=\x1F\x02\u014B\u01CA" +
		"\x03\x02\x02\x02\u014C\u014D\x057\x1C\x02\u014D\u014E\x05C\"\x02\u014E" +
		"\u014F\x05A!\x02\u014F\u01CA\x03\x02\x02\x02\u0150\u0151\x057\x1C\x02" +
		"\u0151\u0152\x05C\"\x02\u0152\u0153\x05A!\x02\u0153\u0154\x05!\x11\x02" +
		"\u0154\u01CA\x03\x02\x02\x02\u0155\u0156\x057\x1C\x02\u0156\u0157\x05" +
		"C\"\x02\u0157\u0158\x05A!\x02\u0158\u0159\x05+\x16\x02\u0159\u01CA\x03" +
		"\x02\x02\x02\u015A\u015B\x059\x1D\x02\u015B\u015C\x057\x1C\x02\u015C\u015D" +
		"\x059\x1D\x02\u015D\u01CA\x03\x02\x02\x02\u015E\u015F\x059\x1D\x02\u015F" +
		"\u0160\x05C\"\x02\u0160\u0161\x05? \x02\u0161\u0162\x05)\x15\x02\u0162" +
		"\u01CA\x03\x02\x02\x02\u0163\u0164\x05=\x1F\x02\u0164\u0165\x05#\x12\x02" +
		"\u0165\u0166\x05? \x02\u0166\u01CA\x03\x02\x02\x02\u0167\u0168\x05=\x1F" +
		"\x02\u0168\u0169\x05#\x12\x02\u0169\u016A\x05A!\x02\u016A\u01CA\x03\x02" +
		"\x02\x02\u016B\u016C\x05=\x1F\x02\u016C\u016D\x05#\x12\x02\u016D\u016E" +
		"\x05A!\x02\u016E\u016F\x05+\x16\x02\u016F\u01CA\x03\x02\x02\x02\u0170" +
		"\u0171\x05=\x1F\x02\u0171\u0172\x05#\x12\x02\u0172\u0173\x05A!\x02\u0173" +
		"\u0174\x055\x1B\x02\u0174\u01CA\x03\x02\x02\x02\u0175\u0176\x05=\x1F\x02" +
		"\u0176\u0177\x051\x19\x02\u0177\u01CA\x03\x02\x02\x02\u0178\u0179\x05" +
		"=\x1F\x02\u0179\u017A\x051\x19\x02\u017A\u017B\x05\x1B\x0E\x02\u017B\u01CA" +
		"\x03\x02\x02\x02\u017C\u017D\x05=\x1F\x02\u017D\u017E\x051\x19\x02\u017E" +
		"\u017F\x05\x1F\x10\x02\u017F\u01CA\x03\x02\x02\x02\u0180\u0181\x05=\x1F" +
		"\x02\u0181\u0182\x051\x19\x02\u0182\u0183\x05\x1F\x10\x02\u0183\u0184" +
		"\x05\x1B\x0E\x02\u0184\u01CA\x03\x02\x02\x02\u0185\u0186\x05=\x1F\x02" +
		"\u0186\u0187\x051\x19\x02\u0187\u0188\x05!\x11\x02\u0188\u01CA\x03\x02" +
		"\x02\x02\u0189\u018A\x05=\x1F\x02\u018A\u018B\x05=\x1F\x02\u018B\u01CA" +
		"\x03\x02\x02\x02\u018C\u018D\x05=\x1F\x02\u018D\u018E\x05=\x1F\x02\u018E" +
		"\u018F\x05\x1B\x0E\x02\u018F\u01CA\x03\x02\x02\x02\u0190\u0191\x05=\x1F" +
		"\x02\u0191\u0192\x05=\x1F\x02\u0192\u0193\x05\x1F\x10\x02\u0193\u01CA" +
		"\x03\x02\x02\x02\u0194\u0195\x05=\x1F\x02\u0195\u0196\x05=\x1F\x02\u0196" +
		"\u0197\x05\x1F\x10\x02\u0197\u0198\x05\x1B\x0E\x02\u0198\u01CA\x03\x02" +
		"\x02\x02\u0199\u019A\x05=\x1F\x02\u019A\u019B\x05=\x1F\x02\u019B\u019C" +
		"\x05!\x11\x02\u019C\u01CA\x03\x02\x02\x02\u019D\u019E\x05=\x1F\x02\u019E" +
		"\u019F\x05? \x02\u019F\u01A0\x05A!\x02\u01A0\u01CA\x03\x02\x02\x02\u01A1" +
		"\u01A2\x05? \x02\u01A2\u01A3\x05\x1D\x0F\x02\u01A3\u01A4\x05\x1F\x10\x02" +
		"\u01A4\u01CA\x03\x02\x02\x02\u01A5\u01A6\x05? \x02\u01A6\u01A7\x05\x1F" +
		"\x10\x02\u01A7\u01A8\x05%\x13\x02\u01A8\u01CA\x03\x02\x02\x02\u01A9\u01AA" +
		"\x05? \x02\u01AA\u01AB\x05#\x12\x02\u01AB\u01AC\x05A!\x02\u01AC\u01CA" +
		"\x03\x02\x02\x02\u01AD\u01AE\x05? \x02\u01AE\u01AF\x051\x19\x02\u01AF" +
		"\u01B0\x05\x1B\x0E\x02\u01B0\u01CA\x03\x02\x02\x02\u01B1\u01B2\x05? \x02" +
		"\u01B2\u01B3\x051\x19\x02\u01B3\u01B4\x051\x19\x02\u01B4\u01CA\x03\x02" +
		"\x02\x02\u01B5\u01B6\x05? \x02\u01B6\u01B7\x051\x19\x02\u01B7\u01B8\x07" +
		"3\x02\x02\u01B8\u01CA\x03\x02\x02\x02\u01B9\u01BA\x05? \x02\u01BA\u01BB" +
		"\x05=\x1F\x02\u01BB\u01BC\x05\x1B\x0E\x02\u01BC\u01CA\x03\x02\x02\x02" +
		"\u01BD\u01BE\x05? \x02\u01BE\u01BF\x05=\x1F\x02\u01BF\u01C0\x051\x19\x02" +
		"\u01C0\u01CA\x03\x02\x02\x02\u01C1\u01C2\x05? \x02\u01C2\u01C3\x05C\"" +
		"\x02\u01C3\u01C4\x05\x1D\x0F\x02\u01C4\u01CA\x03\x02\x02\x02\u01C5\u01C6" +
		"\x05I%\x02\u01C6\u01C7\x057\x1C\x02\u01C7\u01C8\x05=\x1F\x02\u01C8\u01CA" +
		"\x03\x02\x02\x02\u01C9\xB4\x03\x02\x02\x02\u01C9\xB8\x03\x02\x02\x02\u01C9" +
		"\xBC\x03\x02\x02\x02\u01C9\xC0\x03\x02\x02\x02\u01C9\xC4\x03\x02\x02\x02" +
		"\u01C9\xC9\x03\x02\x02\x02\u01C9\xCD\x03\x02\x02\x02\u01C9\xD0\x03\x02" +
		"\x02\x02\u01C9\xD4\x03\x02\x02\x02\u01C9\xD9\x03\x02\x02\x02\u01C9\xDD" +
		"\x03\x02\x02\x02\u01C9\xE2\x03\x02\x02\x02\u01C9\xE6\x03\x02\x02\x02\u01C9" +
		"\xEA\x03\x02\x02\x02\u01C9\xEE\x03\x02\x02\x02\u01C9\xF1\x03\x02\x02\x02" +
		"\u01C9\xF6\x03\x02\x02\x02\u01C9\xF9\x03\x02\x02\x02\u01C9\xFC\x03\x02" +
		"\x02\x02\u01C9\u0100\x03\x02\x02\x02\u01C9\u0103\x03\x02\x02\x02\u01C9" +
		"\u0106\x03\x02\x02\x02\u01C9\u010A\x03\x02\x02\x02\u01C9\u010E\x03\x02" +
		"\x02\x02\u01C9\u0113\x03\x02\x02\x02\u01C9\u0117\x03\x02\x02\x02\u01C9" +
		"\u011C\x03\x02\x02\x02\u01C9\u011F\x03\x02\x02\x02\u01C9\u0122\x03\x02" +
		"\x02\x02\u01C9\u0125\x03\x02\x02\x02\u01C9\u0129\x03\x02\x02\x02\u01C9" +
		"\u012E\x03\x02\x02\x02\u01C9\u0132\x03\x02\x02\x02\u01C9\u0137\x03\x02" +
		"\x02\x02\u01C9\u013B\x03\x02\x02\x02\u01C9\u013F\x03\x02\x02\x02\u01C9" +
		"\u0142\x03\x02\x02\x02\u01C9\u0147\x03\x02\x02\x02\u01C9\u014C\x03\x02" +
		"\x02\x02\u01C9\u0150\x03\x02\x02\x02\u01C9\u0155\x03\x02\x02\x02\u01C9" +
		"\u015A\x03\x02\x02\x02\u01C9\u015E\x03\x02\x02\x02\u01C9\u0163\x03\x02" +
		"\x02\x02\u01C9\u0167\x03\x02\x02\x02\u01C9\u016B\x03\x02\x02\x02\u01C9" +
		"\u0170\x03\x02\x02\x02\u01C9\u0175\x03\x02\x02\x02\u01C9\u0178\x03\x02" +
		"\x02\x02\u01C9\u017C\x03\x02\x02\x02\u01C9\u0180\x03\x02\x02\x02\u01C9" +
		"\u0185\x03\x02\x02\x02\u01C9\u0189\x03\x02\x02\x02\u01C9\u018C\x03\x02" +
		"\x02\x02\u01C9\u0190\x03\x02\x02\x02\u01C9\u0194\x03\x02\x02\x02\u01C9" +
		"\u0199\x03\x02\x02\x02\u01C9\u019D\x03\x02\x02\x02\u01C9\u01A1\x03\x02" +
		"\x02\x02\u01C9\u01A5\x03\x02\x02\x02\u01C9\u01A9\x03\x02\x02\x02\u01C9" +
		"\u01AD\x03\x02\x02\x02\u01C9\u01B1\x03\x02\x02\x02\u01C9\u01B5\x03\x02" +
		"\x02\x02\u01C9\u01B9\x03\x02\x02\x02\u01C9\u01BD\x03\x02\x02\x02\u01C9" +
		"\u01C1\x03\x02\x02\x02\u01C9\u01C5\x03\x02\x02\x02\u01CA\x1A\x03\x02\x02" +
		"\x02\u01CB\u01CC\t\x03\x02\x02\u01CC\x1C\x03\x02\x02\x02\u01CD\u01CE\t" +
		"\x04\x02\x02\u01CE\x1E\x03\x02\x02\x02\u01CF\u01D0\t\x05\x02\x02\u01D0" +
		" \x03\x02\x02\x02\u01D1\u01D2\t\x06\x02\x02\u01D2\"\x03\x02\x02\x02\u01D3" +
		"\u01D4\t\x07\x02\x02\u01D4$\x03\x02\x02\x02\u01D5\u01D6\t\b\x02\x02\u01D6" +
		"&\x03\x02\x02\x02\u01D7\u01D8\t\t\x02\x02\u01D8(\x03\x02\x02\x02\u01D9" +
		"\u01DA\t\n\x02\x02\u01DA*\x03\x02\x02\x02\u01DB\u01DC\t\v\x02\x02\u01DC" +
		",\x03\x02\x02\x02\u01DD\u01DE\t\f\x02\x02\u01DE.\x03\x02\x02\x02\u01DF" +
		"\u01E0\t\r\x02\x02\u01E00\x03\x02\x02\x02\u01E1\u01E2\t\x0E\x02\x02\u01E2" +
		"2\x03\x02\x02\x02\u01E3\u01E4\t\x0F\x02\x02\u01E44\x03\x02\x02\x02\u01E5" +
		"\u01E6\t\x10\x02\x02\u01E66\x03\x02\x02\x02\u01E7\u01E8\t\x11\x02\x02" +
		"\u01E88\x03\x02\x02\x02\u01E9\u01EA\t\x12\x02\x02\u01EA:\x03\x02\x02\x02" +
		"\u01EB\u01EC\t\x13\x02\x02\u01EC<\x03\x02\x02\x02\u01ED\u01EE\t\x14\x02" +
		"\x02\u01EE>\x03\x02\x02\x02\u01EF\u01F0\t\x15\x02\x02\u01F0@\x03\x02\x02" +
		"\x02\u01F1\u01F2\t\x16\x02\x02\u01F2B\x03\x02\x02\x02\u01F3\u01F4\t\x17" +
		"\x02\x02\u01F4D\x03\x02\x02\x02\u01F5\u01F6\t\x18\x02\x02\u01F6F\x03\x02" +
		"\x02\x02\u01F7\u01F8\t\x19\x02\x02\u01F8H\x03\x02\x02\x02\u01F9\u01FA" +
		"\t\x1A\x02\x02\u01FAJ\x03\x02\x02\x02\u01FB\u01FC\t\x1B\x02\x02\u01FC" +
		"L\x03\x02\x02\x02\u01FD\u01FE\t\x1C\x02\x02\u01FEN\x03\x02\x02\x02\u01FF" +
		"\u0203\t\x1D\x02\x02\u0200\u0202\t\x1E\x02\x02\u0201\u0200\x03\x02\x02" +
		"\x02\u0202\u0205\x03\x02\x02\x02\u0203\u0201\x03\x02\x02\x02\u0203\u0204" +
		"\x03\x02\x02\x02\u0204P\x03\x02\x02\x02\u0205\u0203\x03\x02\x02\x02\u0206" +
		"\u0208\x07&\x02\x02\u0207\u0206\x03\x02\x02\x02\u0207\u0208\x03\x02\x02" +
		"\x02\u0208\u020A\x03\x02\x02\x02\u0209\u020B\t\x1F\x02\x02\u020A\u0209" +
		"\x03\x02\x02\x02\u020B\u020C\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02" +
		"\u020C\u020D\x03\x02\x02\x02";
	private static readonly _serializedATNSegment1: string =
		"\u020D\u020F\x03\x02\x02\x02\u020E\u0210\t\n\x02\x02\u020F\u020E\x03\x02" +
		"\x02\x02\u020F\u0210\x03\x02\x02\x02\u0210R\x03\x02\x02\x02\u0211\u0215" +
		"\x07=\x02\x02\u0212\u0214\n \x02\x02\u0213\u0212\x03\x02\x02\x02\u0214" +
		"\u0217\x03\x02\x02\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0216\x03\x02" +
		"\x02\x02\u0216\u0218\x03\x02\x02\x02\u0217\u0215\x03\x02\x02\x02\u0218" +
		"\u0219\b*\x02\x02\u0219T\x03\x02\x02\x02\u021A\u021E\x07)\x02\x02\u021B" +
		"\u021D\n!\x02\x02\u021C\u021B\x03\x02\x02\x02\u021D\u0220\x03\x02\x02" +
		"\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02\u021F\u0221" +
		"\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0222\x07)\x02\x02" +
		"\u0222V\x03\x02\x02\x02\u0223\u0225\t \x02\x02\u0224\u0223\x03\x02\x02" +
		"\x02\u0225\u0226\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227" +
		"\x03\x02\x02\x02\u0227X\x03\x02\x02\x02\u0228\u0229\t\"\x02\x02\u0229" +
		"\u022A\x03\x02\x02\x02\u022A\u022B\b-\x02\x02\u022BZ\x03\x02\x02\x02\r" +
		"\x02\x8A\xB2\u01C9\u0203\u0207\u020C\u020F\u0215\u021E\u0226\x03\b\x02" +
		"\x02";
	public static readonly _serializedATN: string = Utils.join(
		[
			asmZ80Lexer._serializedATNSegment0,
			asmZ80Lexer._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!asmZ80Lexer.__ATN) {
			asmZ80Lexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(asmZ80Lexer._serializedATN));
		}

		return asmZ80Lexer.__ATN;
	}

}

