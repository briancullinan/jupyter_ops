// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/pgn/PGN.g4 by ANTLR 4.7.3-SNAPSHOT


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


export class PGNLexer extends Lexer {
	public static readonly WHITE_WINS = 1;
	public static readonly BLACK_WINS = 2;
	public static readonly DRAWN_GAME = 3;
	public static readonly REST_OF_LINE_COMMENT = 4;
	public static readonly BRACE_COMMENT = 5;
	public static readonly ESCAPE = 6;
	public static readonly SPACES = 7;
	public static readonly STRING = 8;
	public static readonly INTEGER = 9;
	public static readonly PERIOD = 10;
	public static readonly ASTERISK = 11;
	public static readonly LEFT_BRACKET = 12;
	public static readonly RIGHT_BRACKET = 13;
	public static readonly LEFT_PARENTHESIS = 14;
	public static readonly RIGHT_PARENTHESIS = 15;
	public static readonly LEFT_ANGLE_BRACKET = 16;
	public static readonly RIGHT_ANGLE_BRACKET = 17;
	public static readonly NUMERIC_ANNOTATION_GLYPH = 18;
	public static readonly SYMBOL = 19;
	public static readonly SUFFIX_ANNOTATION = 20;
	public static readonly UNEXPECTED_CHAR = 21;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"WHITE_WINS", "BLACK_WINS", "DRAWN_GAME", "REST_OF_LINE_COMMENT", "BRACE_COMMENT", 
		"ESCAPE", "SPACES", "STRING", "INTEGER", "PERIOD", "ASTERISK", "LEFT_BRACKET", 
		"RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", "LEFT_ANGLE_BRACKET", 
		"RIGHT_ANGLE_BRACKET", "NUMERIC_ANNOTATION_GLYPH", "SYMBOL", "SUFFIX_ANNOTATION", 
		"UNEXPECTED_CHAR",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'1-0'", "'0-1'", "'1/2-1/2'", undefined, undefined, undefined, 
		undefined, undefined, undefined, "'.'", "'*'", "'['", "']'", "'('", "')'", 
		"'<'", "'>'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "WHITE_WINS", "BLACK_WINS", "DRAWN_GAME", "REST_OF_LINE_COMMENT", 
		"BRACE_COMMENT", "ESCAPE", "SPACES", "STRING", "INTEGER", "PERIOD", "ASTERISK", 
		"LEFT_BRACKET", "RIGHT_BRACKET", "LEFT_PARENTHESIS", "RIGHT_PARENTHESIS", 
		"LEFT_ANGLE_BRACKET", "RIGHT_ANGLE_BRACKET", "NUMERIC_ANNOTATION_GLYPH", 
		"SYMBOL", "SUFFIX_ANNOTATION", "UNEXPECTED_CHAR",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(PGNLexer._LITERAL_NAMES, PGNLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return PGNLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(PGNLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "PGN.g4"; }

	// @Override
	public get ruleNames(): string[] { return PGNLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return PGNLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return PGNLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return PGNLexer.modeNames; }

	// @Override
	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.ESCAPE_sempred(_localctx, predIndex);
		}
		return true;
	}
	private ESCAPE_sempred(_localctx: RuleContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return getCharPositionInLine() == 0;
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\x97\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05@" +
		"\n\x05\f\x05\x0E\x05C\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x07\x06I\n" +
		"\x06\f\x06\x0E\x06L\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03" +
		"\x07\x03\x07\x07\x07U\n\x07\f\x07\x0E\x07X\v\x07\x03\x07\x03\x07\x03\b" +
		"\x06\b]\n\b\r\b\x0E\b^\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t" +
		"\x07\ti\n\t\f\t\x0E\tl\v\t\x03\t\x03\t\x03\n\x06\nq\n\n\r\n\x0E\nr\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x06\x13\x87\n" +
		"\x13\r\x13\x0E\x13\x88\x03\x14\x03\x14\x07\x14\x8D\n\x14\f\x14\x0E\x14" +
		"\x90\v\x14\x03\x15\x03\x15\x05\x15\x94\n\x15\x03\x16\x03\x16\x02\x02\x02" +
		"\x17\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F" +
		"\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F" +
		"\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02\x16" +
		"+\x02\x17\x03\x02\n\x04\x02\f\f\x0F\x0F\x03\x02\x7F\x7F\x05\x02\v\f\x0F" +
		"\x0F\"\"\x04\x02$$^^\x03\x022;\x05\x022;C\\c|\n\x02%%--//2<??C\\aac|\x04" +
		"\x02##AA\x02\xA1\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03" +
		"\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03" +
		"\x02\x02\x02\x02!\x03\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02" +
		"\x02\x02\'\x03\x02\x02\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x03" +
		"-\x03\x02\x02\x02\x051\x03\x02\x02\x02\x075\x03\x02\x02\x02\t=\x03\x02" +
		"\x02\x02\vF\x03\x02\x02\x02\rQ\x03\x02\x02\x02\x0F\\\x03\x02\x02\x02\x11" +
		"b\x03\x02\x02\x02\x13p\x03\x02\x02\x02\x15t\x03\x02\x02\x02\x17v\x03\x02" +
		"\x02\x02\x19x\x03\x02\x02\x02\x1Bz\x03\x02\x02\x02\x1D|\x03\x02\x02\x02" +
		"\x1F~\x03\x02\x02\x02!\x80\x03\x02\x02\x02#\x82\x03\x02\x02\x02%\x84\x03" +
		"\x02\x02\x02\'\x8A\x03\x02\x02\x02)\x91\x03\x02\x02\x02+\x95\x03\x02\x02" +
		"\x02-.\x073\x02\x02./\x07/\x02\x02/0\x072\x02\x020\x04\x03\x02\x02\x02" +
		"12\x072\x02\x0223\x07/\x02\x0234\x073\x02\x024\x06\x03\x02\x02\x0256\x07" +
		"3\x02\x0267\x071\x02\x0278\x074\x02\x0289\x07/\x02\x029:\x073\x02\x02" +
		":;\x071\x02\x02;<\x074\x02\x02<\b\x03\x02\x02\x02=A\x07=\x02\x02>@\n\x02" +
		"\x02\x02?>\x03\x02\x02\x02@C\x03\x02\x02\x02A?\x03\x02\x02\x02AB\x03\x02" +
		"\x02\x02BD\x03\x02\x02\x02CA\x03\x02\x02\x02DE\b\x05\x02\x02E\n\x03\x02" +
		"\x02\x02FJ\x07}\x02\x02GI\n\x03\x02\x02HG\x03\x02\x02\x02IL\x03\x02\x02" +
		"\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02" +
		"\x02MN\x07\x7F\x02\x02NO\x03\x02\x02\x02OP\b\x06\x02\x02P\f\x03\x02\x02" +
		"\x02QR\x06\x07\x02\x02RV\x07\'\x02\x02SU\n\x02\x02\x02TS\x03\x02\x02\x02" +
		"UX\x03\x02\x02\x02VT\x03\x02\x02\x02VW\x03\x02\x02\x02WY\x03\x02\x02\x02" +
		"XV\x03\x02\x02\x02YZ\b\x07\x02\x02Z\x0E\x03\x02\x02\x02[]\t\x04\x02\x02" +
		"\\[\x03\x02\x02\x02]^\x03\x02\x02\x02^\\\x03\x02\x02\x02^_\x03\x02\x02" +
		"\x02_`\x03\x02\x02\x02`a\b\b\x02\x02a\x10\x03\x02\x02\x02bj\x07$\x02\x02" +
		"cd\x07^\x02\x02di\x07^\x02\x02ef\x07^\x02\x02fi\x07$\x02\x02gi\n\x05\x02" +
		"\x02hc\x03\x02\x02\x02he\x03\x02\x02\x02hg\x03\x02\x02\x02il\x03\x02\x02" +
		"\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02\x02lj\x03\x02\x02" +
		"\x02mn\x07$\x02\x02n\x12\x03\x02\x02\x02oq\t\x06\x02\x02po\x03\x02\x02" +
		"\x02qr\x03\x02\x02\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x14\x03\x02" +
		"\x02\x02tu\x070\x02\x02u\x16\x03\x02\x02\x02vw\x07,\x02\x02w\x18\x03\x02" +
		"\x02\x02xy\x07]\x02\x02y\x1A\x03\x02\x02\x02z{\x07_\x02\x02{\x1C\x03\x02" +
		"\x02\x02|}\x07*\x02\x02}\x1E\x03\x02\x02\x02~\x7F\x07+\x02\x02\x7F \x03" +
		"\x02\x02\x02\x80\x81\x07>\x02\x02\x81\"\x03\x02\x02\x02\x82\x83\x07@\x02" +
		"\x02\x83$\x03\x02\x02\x02\x84\x86\x07&\x02\x02\x85\x87\t\x06\x02\x02\x86" +
		"\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88" +
		"\x89\x03\x02\x02\x02\x89&\x03\x02\x02\x02\x8A\x8E\t\x07\x02\x02\x8B\x8D" +
		"\t\b\x02\x02\x8C\x8B\x03\x02\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8C\x03" +
		"\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F(\x03\x02\x02\x02\x90\x8E\x03" +
		"\x02\x02\x02\x91\x93\t\t\x02\x02\x92\x94\t\t\x02\x02\x93\x92\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94*\x03\x02\x02\x02\x95\x96\v\x02\x02\x02" +
		"\x96,\x03\x02\x02\x02\r\x02AJV^hjr\x88\x8E\x93\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!PGNLexer.__ATN) {
			PGNLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(PGNLexer._serializedATN));
		}

		return PGNLexer.__ATN;
	}

}
