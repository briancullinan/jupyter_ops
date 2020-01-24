"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/logo/ucb-logo/UCBLogo.g4 by ANTLR 4.7.3-SNAPSHOT
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ATNDeserializer_1 = require("antlr4ts/atn/ATNDeserializer");
var Lexer_1 = require("antlr4ts/Lexer");
var LexerATNSimulator_1 = require("antlr4ts/atn/LexerATNSimulator");
var VocabularyImpl_1 = require("antlr4ts/VocabularyImpl");
var Utils = require("antlr4ts/misc/Utils");
var UCBLogoLexer = /** @class */ (function (_super) {
    __extends(UCBLogoLexer, _super);
    function UCBLogoLexer(input) {
        var _this = _super.call(this, input) || this;
        _this.listDepth = 0;
        _this.arrayDepth = 0;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(UCBLogoLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(UCBLogoLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return UCBLogoLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "UCBLogo.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return UCBLogoLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return UCBLogoLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoLexer.prototype, "channelNames", {
        // @Override
        get: function () { return UCBLogoLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UCBLogoLexer.prototype, "modeNames", {
        // @Override
        get: function () { return UCBLogoLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    // @Override
    UCBLogoLexer.prototype.action = function (_localctx, ruleIndex, actionIndex) {
        switch (ruleIndex) {
            case 7:
                this.OPEN_ARRAY_action(_localctx, actionIndex);
                break;
            case 8:
                this.CLOSE_ARRAY_action(_localctx, actionIndex);
                break;
            case 9:
                this.OPEN_LIST_action(_localctx, actionIndex);
                break;
            case 10:
                this.CLOSE_LIST_action(_localctx, actionIndex);
                break;
            case 25:
                this.ANY_action(_localctx, actionIndex);
                break;
        }
    };
    UCBLogoLexer.prototype.OPEN_ARRAY_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 0:
                arrayDepth++;
                break;
        }
    };
    UCBLogoLexer.prototype.CLOSE_ARRAY_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 1:
                arrayDepth--;
                break;
        }
    };
    UCBLogoLexer.prototype.OPEN_LIST_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 2:
                listDepth++;
                break;
        }
    };
    UCBLogoLexer.prototype.CLOSE_LIST_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 3:
                listDepth--;
                break;
        }
    };
    UCBLogoLexer.prototype.ANY_action = function (_localctx, actionIndex) {
        switch (actionIndex) {
            case 4:
                System.err.println("unexpected char: " + getText());
                break;
        }
    };
    // @Override
    UCBLogoLexer.prototype.sempred = function (_localctx, ruleIndex, predIndex) {
        switch (ruleIndex) {
            case 5:
                return this.WORD_sempred(_localctx, predIndex);
        }
        return true;
    };
    UCBLogoLexer.prototype.WORD_sempred = function (_localctx, predIndex) {
        switch (predIndex) {
            case 0:
                return listDepth > 0;
            case 1:
                return arrayDepth > 0;
        }
        return true;
    };
    Object.defineProperty(UCBLogoLexer, "_ATN", {
        get: function () {
            if (!UCBLogoLexer.__ATN) {
                UCBLogoLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(UCBLogoLexer._serializedATN));
            }
            return UCBLogoLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    UCBLogoLexer.T__0 = 1;
    UCBLogoLexer.T__1 = 2;
    UCBLogoLexer.TO = 3;
    UCBLogoLexer.END = 4;
    UCBLogoLexer.MACRO = 5;
    UCBLogoLexer.WORD = 6;
    UCBLogoLexer.SKIP_ = 7;
    UCBLogoLexer.OPEN_ARRAY = 8;
    UCBLogoLexer.CLOSE_ARRAY = 9;
    UCBLogoLexer.OPEN_LIST = 10;
    UCBLogoLexer.CLOSE_LIST = 11;
    UCBLogoLexer.MINUS = 12;
    UCBLogoLexer.PLUS = 13;
    UCBLogoLexer.MULT = 14;
    UCBLogoLexer.DIV = 15;
    UCBLogoLexer.LT = 16;
    UCBLogoLexer.GT = 17;
    UCBLogoLexer.EQ = 18;
    UCBLogoLexer.LT_EQ = 19;
    UCBLogoLexer.GT_EQ = 20;
    UCBLogoLexer.NOT_EQ = 21;
    UCBLogoLexer.QUOTED_WORD = 22;
    UCBLogoLexer.NUMBER = 23;
    UCBLogoLexer.VARIABLE = 24;
    UCBLogoLexer.NAME = 25;
    UCBLogoLexer.ANY = 26;
    // tslint:disable:no-trailing-whitespace
    UCBLogoLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    UCBLogoLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    UCBLogoLexer.ruleNames = [
        "T__0", "T__1", "TO", "END", "MACRO", "WORD", "SKIP_", "OPEN_ARRAY", "CLOSE_ARRAY",
        "OPEN_LIST", "CLOSE_LIST", "MINUS", "PLUS", "MULT", "DIV", "LT", "GT",
        "EQ", "LT_EQ", "GT_EQ", "NOT_EQ", "QUOTED_WORD", "NUMBER", "VARIABLE",
        "NAME", "ANY", "COMMENT", "LINE_CONTINUATION", "LINE_BREAK", "SPACES",
        "SPACE_CHARS", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K",
        "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
        "Z",
    ];
    UCBLogoLexer._LITERAL_NAMES = [
        undefined, "'('", "')'", undefined, undefined, undefined, undefined, undefined,
        "'{'", "'}'", "'['", "']'", "'-'", "'+'", "'*'", "'/'", "'<'", "'>'",
        "'='", "'<='", "'>='", "'<>'",
    ];
    UCBLogoLexer._SYMBOLIC_NAMES = [
        undefined, undefined, undefined, "TO", "END", "MACRO", "WORD", "SKIP_",
        "OPEN_ARRAY", "CLOSE_ARRAY", "OPEN_LIST", "CLOSE_LIST", "MINUS", "PLUS",
        "MULT", "DIV", "LT", "GT", "EQ", "LT_EQ", "GT_EQ", "NOT_EQ", "QUOTED_WORD",
        "NUMBER", "VARIABLE", "NAME", "ANY",
    ];
    UCBLogoLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(UCBLogoLexer._LITERAL_NAMES, UCBLogoLexer._SYMBOLIC_NAMES, []);
    UCBLogoLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x1C\u014F\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x03\x02\x03\x02\x03" +
        "\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
        "\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03" +
        "\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\x8F\n\x07\x07\x07\x91\n\x07" +
        "\f\x07\x0E\x07\x94\v\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
        "\x03\x07\x05\x07\x9D\n\x07\x07\x07\x9F\n\x07\f\x07\x0E\x07\xA2\v\x07\x05" +
        "\x07\xA4\n\x07\x03\b\x03\b\x03\b\x03\b\x05\b\xAA\n\b\x03\b\x03\b\x03\t" +
        "\x03\t\x03\t\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03" +
        "\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11" +
        "\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15" +
        "\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17" +
        "\x03\x17\x05\x17\xD7\n\x17\x07\x17\xD9\n\x17\f\x17\x0E\x17\xDC\v\x17\x03" +
        "\x18\x06\x18\xDF\n\x18\r\x18\x0E\x18\xE0\x03\x18\x03\x18\x06\x18\xE5\n" +
        "\x18\r\x18\x0E\x18\xE6\x05\x18\xE9\n\x18\x03\x19\x03\x19\x03\x19\x03\x1A" +
        "\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x07\x1A\xF3\n\x1A\f\x1A\x0E\x1A\xF6\v" +
        "\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x07\x1C\xFD\n\x1C\f\x1C\x0E" +
        "\x1C\u0100\v\x1C\x03\x1D\x05\x1D\u0103\n\x1D\x03\x1D\x03\x1D\x05\x1D\u0107" +
        "\n\x1D\x03\x1D\x03\x1D\x03\x1E\x05\x1E\u010C\n\x1E\x03\x1E\x03\x1E\x05" +
        "\x1E\u0110\n\x1E\x03\x1F\x06\x1F\u0113\n\x1F\r\x1F\x0E\x1F\u0114\x03 " +
        "\x06 \u0118\n \r \x0E \u0119\x03!\x03!\x03\"\x03\"\x03#\x03#\x03$\x03" +
        "$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03(\x03(\x03)\x03)\x03*\x03*\x03+\x03" +
        "+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03/\x030\x030\x031\x031\x032\x03" +
        "2\x033\x033\x034\x034\x035\x035\x036\x036\x037\x037\x038\x038\x039\x03" +
        "9\x03:\x03:\x02\x02\x02;\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06" +
        "\v\x02\x07\r\x02\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19" +
        "\x02\x0E\x1B\x02\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14" +
        "\'\x02\x15)\x02\x16+\x02\x17-\x02\x18/\x02\x191\x02\x1A3\x02\x1B5\x02" +
        "\x1C7\x02\x029\x02\x02;\x02\x02=\x02\x02?\x02\x02A\x02\x02C\x02\x02E\x02" +
        "\x02G\x02\x02I\x02\x02K\x02\x02M\x02\x02O\x02\x02Q\x02\x02S\x02\x02U\x02" +
        "\x02W\x02\x02Y\x02\x02[\x02\x02]\x02\x02_\x02\x02a\x02\x02c\x02\x02e\x02" +
        "\x02g\x02\x02i\x02\x02k\x02\x02m\x02\x02o\x02\x02q\x02\x02s\x02\x02\x03" +
        "\x02*\b\x02\v\f\x0F\x0F\"\"==]]__\b\x02\v\f\x0F\x0F\"\"==__\x80\x80\t" +
        "\x02\v\v\"\"*+==]]__\x80\x80\b\x02\v\f\x0F\x0F\"\"==}}\x7F\x7F\x07\x02" +
        "\v\f\x0F\x0F\"\"==\x7F\x80\b\x02\v\v\"\"*+==}}\x7F\x80\n\x02\v\f\x0F\x0F" +
        "\"\"*+==]]__\x80\x80\x03\x022;\x0F\x02\v\f\x0F\x0F\"\"$$*-//11<<>@]]_" +
        "_}}\x7F\x7F\r\x02\v\f\x0F\x0F\"\"*-//11>@]]__}}\x7F\x7F\r\x02\v\f\x0F" +
        "\x0F\"\"*-//11=@]]__}}\x7F\x80\x05\x02\f\f\x0F\x0F\x80\x80\x04\x02\v\v" +
        "\"\"\x05\x02\v\f\x0F\x0F\"\"\x04\x02CCcc\x04\x02DDdd\x04\x02EEee\x04\x02" +
        "FFff\x04\x02GGgg\x04\x02HHhh\x04\x02IIii\x04\x02JJjj\x04\x02KKkk\x04\x02" +
        "LLll\x04\x02MMmm\x04\x02NNnn\x04\x02OOoo\x04\x02PPpp\x04\x02QQqq\x04\x02" +
        "RRrr\x04\x02SSss\x04\x02TTtt\x04\x02UUuu\x04\x02VVvv\x04\x02WWww\x04\x02" +
        "XXxx\x04\x02YYyy\x04\x02ZZzz\x04\x02[[{{\x04\x02\\\\||\x02\u014C\x02\x03" +
        "\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t" +
        "\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03" +
        "\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03" +
        "\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03" +
        "\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03" +
        "\x02\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02" +
        "\x02\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02" +
        "/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02" +
        "\x02\x02\x03u\x03\x02\x02\x02\x05w\x03\x02\x02\x02\x07y\x03\x02\x02\x02" +
        "\t|\x03\x02\x02\x02\v\x80\x03\x02\x02\x02\r\xA3\x03\x02\x02\x02\x0F\xA9" +
        "\x03\x02\x02\x02\x11\xAD\x03\x02\x02\x02\x13\xB0\x03\x02\x02\x02\x15\xB3" +
        "\x03\x02\x02\x02\x17\xB6\x03\x02\x02\x02\x19\xB9\x03\x02\x02\x02\x1B\xBB" +
        "\x03\x02\x02\x02\x1D\xBD\x03\x02\x02\x02\x1F\xBF\x03\x02\x02\x02!\xC1" +
        "\x03\x02\x02\x02#\xC3\x03\x02\x02\x02%\xC5\x03\x02\x02\x02\'\xC7\x03\x02" +
        "\x02\x02)\xCA\x03\x02\x02\x02+\xCD\x03\x02\x02\x02-\xD0\x03\x02\x02\x02" +
        "/\xDE\x03\x02\x02\x021\xEA\x03\x02\x02\x023\xED\x03\x02\x02\x025\xF7\x03" +
        "\x02\x02\x027\xFA\x03\x02\x02\x029\u0102\x03\x02\x02\x02;\u010F\x03\x02" +
        "\x02\x02=\u0112\x03\x02\x02\x02?\u0117\x03\x02\x02\x02A\u011B\x03\x02" +
        "\x02\x02C\u011D\x03\x02\x02\x02E\u011F\x03\x02\x02\x02G\u0121\x03\x02" +
        "\x02\x02I\u0123\x03\x02\x02\x02K\u0125\x03\x02\x02\x02M\u0127\x03\x02" +
        "\x02\x02O\u0129\x03\x02\x02\x02Q\u012B\x03\x02\x02\x02S\u012D\x03\x02" +
        "\x02\x02U\u012F\x03\x02\x02\x02W\u0131\x03\x02\x02\x02Y\u0133\x03\x02" +
        "\x02\x02[\u0135\x03\x02\x02\x02]\u0137\x03\x02\x02\x02_\u0139\x03\x02" +
        "\x02\x02a\u013B\x03\x02\x02\x02c\u013D\x03\x02\x02\x02e\u013F\x03\x02" +
        "\x02\x02g\u0141\x03\x02\x02\x02i\u0143\x03\x02\x02\x02k\u0145\x03\x02" +
        "\x02\x02m\u0147\x03\x02\x02\x02o\u0149\x03\x02\x02\x02q\u014B\x03\x02" +
        "\x02\x02s\u014D\x03\x02\x02\x02uv\x07*\x02\x02v\x04\x03\x02\x02\x02wx" +
        "\x07+\x02\x02x\x06\x03\x02\x02\x02yz\x05g4\x02z{\x05]/\x02{\b\x03\x02" +
        "\x02\x02|}\x05I%\x02}~\x05[.\x02~\x7F\x05G$\x02\x7F\n\x03\x02\x02\x02" +
        "\x80\x81\x070\x02\x02\x81\x82\x05Y-\x02\x82\x83\x05A!\x02\x83\x84\x05" +
        "E#\x02\x84\x85\x05c2\x02\x85\x86\x05]/\x02\x86\f\x03\x02\x02\x02\x87\x88" +
        "\x06\x07\x02\x02\x88\x92\n\x02\x02\x02\x89\x91\n\x03\x02\x02\x8A\x91\x05" +
        "9\x1D\x02\x8B\x8E\x07^\x02\x02\x8C\x8F\t\x04\x02\x02\x8D\x8F\x05;\x1E" +
        "\x02\x8E\x8C\x03\x02\x02\x02\x8E\x8D\x03\x02\x02\x02\x8F\x91\x03\x02\x02" +
        "\x02\x90\x89\x03\x02\x02\x02\x90\x8A\x03\x02\x02\x02\x90\x8B\x03\x02\x02" +
        "\x02\x91\x94\x03\x02\x02\x02\x92\x90\x03\x02\x02\x02\x92\x93\x03\x02\x02" +
        "\x02\x93\xA4\x03\x02\x02\x02\x94\x92\x03\x02\x02\x02\x95\x96\x06\x07\x03" +
        "\x02\x96\xA0\n\x05\x02\x02\x97\x9F\n\x06\x02\x02\x98\x9F\x059\x1D\x02" +
        "\x99\x9C\x07^\x02\x02\x9A\x9D\t\x07\x02\x02\x9B\x9D\x05;\x1E\x02\x9C\x9A" +
        "\x03\x02\x02\x02\x9C\x9B\x03\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x97" +
        "\x03\x02\x02\x02\x9E\x98\x03\x02\x02\x02\x9E\x99\x03\x02\x02\x02\x9F\xA2" +
        "\x03\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA4" +
        "\x03\x02\x02\x02\xA2\xA0\x03\x02\x02\x02\xA3\x87\x03\x02\x02\x02\xA3\x95" +
        "\x03\x02\x02\x02\xA4\x0E\x03\x02\x02\x02\xA5\xAA\x057\x1C\x02\xA6\xAA" +
        "\x05;\x1E\x02\xA7\xAA\x05=\x1F\x02\xA8\xAA\x059\x1D\x02\xA9\xA5\x03\x02" +
        "\x02\x02\xA9\xA6\x03\x02\x02\x02\xA9\xA7\x03\x02\x02\x02\xA9\xA8\x03\x02" +
        "\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\b\b\x02\x02\xAC\x10\x03\x02\x02" +
        "\x02\xAD\xAE\x07}\x02\x02\xAE\xAF\b\t\x03\x02\xAF\x12\x03\x02\x02\x02" +
        "\xB0\xB1\x07\x7F\x02\x02\xB1\xB2\b\n\x04\x02\xB2\x14\x03\x02\x02\x02\xB3" +
        "\xB4\x07]\x02\x02\xB4\xB5\b\v\x05\x02\xB5\x16\x03\x02\x02\x02\xB6\xB7" +
        "\x07_\x02\x02\xB7\xB8\b\f\x06\x02\xB8\x18\x03\x02\x02\x02\xB9\xBA\x07" +
        "/\x02\x02\xBA\x1A\x03\x02\x02\x02\xBB\xBC\x07-\x02\x02\xBC\x1C\x03\x02" +
        "\x02\x02\xBD\xBE\x07,\x02\x02\xBE\x1E\x03\x02\x02\x02\xBF\xC0\x071\x02" +
        "\x02\xC0 \x03\x02\x02\x02\xC1\xC2\x07>\x02\x02\xC2\"\x03\x02\x02\x02\xC3" +
        "\xC4\x07@\x02\x02\xC4$\x03\x02\x02\x02\xC5\xC6\x07?\x02\x02\xC6&\x03\x02" +
        "\x02\x02\xC7\xC8\x07>\x02\x02\xC8\xC9\x07?\x02\x02\xC9(\x03\x02\x02\x02" +
        "\xCA\xCB\x07@\x02\x02\xCB\xCC\x07?\x02\x02\xCC*\x03\x02\x02\x02\xCD\xCE" +
        "\x07>\x02\x02\xCE\xCF\x07@\x02\x02\xCF,\x03\x02\x02\x02\xD0\xDA\x07$\x02" +
        "\x02\xD1\xD9\n\b\x02\x02\xD2\xD9\x059\x1D\x02\xD3\xD6\x07^\x02\x02\xD4" +
        "\xD7\t\x04\x02\x02\xD5\xD7\x05;\x1E\x02\xD6\xD4\x03\x02\x02\x02\xD6\xD5" +
        "\x03\x02\x02\x02\xD7\xD9\x03\x02\x02\x02\xD8\xD1\x03\x02\x02\x02\xD8\xD2" +
        "\x03\x02\x02\x02\xD8\xD3\x03\x02\x02\x02\xD9\xDC\x03\x02\x02\x02\xDA\xD8" +
        "\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02\xDB.\x03\x02\x02\x02\xDC\xDA" +
        "\x03\x02\x02\x02\xDD\xDF\t\t\x02\x02\xDE\xDD\x03\x02\x02\x02\xDF\xE0\x03" +
        "\x02\x02\x02\xE0\xDE\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1\xE8\x03" +
        "\x02\x02\x02\xE2\xE4\x070\x02\x02\xE3\xE5\t\t\x02\x02\xE4\xE3\x03\x02" +
        "\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE4\x03\x02\x02\x02\xE6\xE7\x03\x02" +
        "\x02\x02\xE7\xE9\x03\x02\x02\x02\xE8\xE2\x03\x02\x02\x02\xE8\xE9\x03\x02" +
        "\x02\x02\xE90\x03\x02\x02\x02\xEA\xEB\x07<\x02\x02\xEB\xEC\x053\x1A\x02" +
        "\xEC2\x03\x02\x02\x02\xED\xF4\n\n\x02\x02\xEE\xF3\n\v\x02\x02\xEF\xF3" +
        "\x059\x1D\x02\xF0\xF1\x07^\x02\x02\xF1\xF3\t\f\x02\x02\xF2\xEE\x03\x02" +
        "\x02\x02\xF2\xEF\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF3\xF6\x03\x02" +
        "\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF54\x03\x02" +
        "\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF8\v\x02\x02\x02\xF8\xF9\b\x1B\x07" +
        "\x02\xF96\x03\x02\x02\x02\xFA\xFE\x07=\x02\x02\xFB\xFD\n\r\x02\x02\xFC" +
        "\xFB\x03\x02\x02\x02\xFD\u0100\x03\x02\x02\x02\xFE\xFC\x03\x02\x02\x02" +
        "\xFE\xFF\x03\x02\x02\x02\xFF8\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02" +
        "\u0101\u0103\x057\x1C\x02\u0102\u0101\x03\x02\x02\x02\u0102\u0103\x03" +
        "\x02\x02\x02\u0103\u0104\x03\x02\x02\x02\u0104\u0106\x07\x80\x02\x02\u0105" +
        "\u0107\x05=\x1F\x02\u0106\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02" +
        "\x02\u0107\u0108\x03\x02\x02\x02\u0108\u0109\x05;\x1E\x02\u0109:\x03\x02" +
        "\x02\x02\u010A\u010C\x07\x0F\x02\x02\u010B\u010A\x03\x02\x02\x02\u010B" +
        "\u010C\x03\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u0110\x07\f\x02" +
        "\x02\u010E\u0110\x07\x0F\x02\x02\u010F\u010B\x03\x02\x02\x02\u010F\u010E" +
        "\x03\x02\x02\x02\u0110<\x03\x02\x02\x02\u0111\u0113\t\x0E\x02\x02\u0112" +
        "\u0111\x03\x02\x02\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0112\x03\x02" +
        "\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115>\x03\x02\x02\x02\u0116\u0118" +
        "\t\x0F\x02\x02\u0117\u0116\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02" +
        "\u0119\u0117\x03\x02\x02\x02\u0119\u011A\x03\x02\x02\x02\u011A@\x03\x02" +
        "\x02\x02\u011B\u011C\t\x10\x02\x02\u011CB\x03\x02\x02\x02\u011D\u011E" +
        "\t\x11\x02\x02\u011ED\x03\x02\x02\x02\u011F\u0120\t\x12\x02\x02\u0120" +
        "F\x03\x02\x02\x02\u0121\u0122\t\x13\x02\x02\u0122H\x03\x02\x02\x02\u0123" +
        "\u0124\t\x14\x02\x02\u0124J\x03\x02\x02\x02\u0125\u0126\t\x15\x02\x02" +
        "\u0126L\x03\x02\x02\x02\u0127\u0128\t\x16\x02\x02\u0128N\x03\x02\x02\x02" +
        "\u0129\u012A\t\x17\x02\x02\u012AP\x03\x02\x02\x02\u012B\u012C\t\x18\x02" +
        "\x02\u012CR\x03\x02\x02\x02\u012D\u012E\t\x19\x02\x02\u012ET\x03\x02\x02" +
        "\x02\u012F\u0130\t\x1A\x02\x02\u0130V\x03\x02\x02\x02\u0131\u0132\t\x1B" +
        "\x02\x02\u0132X\x03\x02\x02\x02\u0133\u0134\t\x1C\x02\x02\u0134Z\x03\x02" +
        "\x02\x02\u0135\u0136\t\x1D\x02\x02\u0136\\\x03\x02\x02\x02\u0137\u0138" +
        "\t\x1E\x02\x02\u0138^\x03\x02\x02\x02\u0139\u013A\t\x1F\x02\x02\u013A" +
        "`\x03\x02\x02\x02\u013B\u013C\t \x02\x02\u013Cb\x03\x02\x02\x02\u013D" +
        "\u013E\t!\x02\x02\u013Ed\x03\x02\x02\x02\u013F\u0140\t\"\x02\x02\u0140" +
        "f\x03\x02\x02\x02\u0141\u0142\t#\x02\x02\u0142h\x03\x02\x02\x02\u0143" +
        "\u0144\t$\x02\x02\u0144j\x03\x02\x02\x02\u0145\u0146\t%\x02\x02\u0146" +
        "l\x03\x02\x02\x02\u0147\u0148\t&\x02\x02\u0148n\x03\x02\x02\x02\u0149" +
        "\u014A\t\'\x02\x02\u014Ap\x03\x02\x02\x02\u014B\u014C\t(\x02\x02\u014C" +
        "r\x03\x02\x02\x02\u014D\u014E\t)\x02\x02\u014Et\x03\x02\x02\x02\x1A\x02" +
        "\x8E\x90\x92\x9C\x9E\xA0\xA3\xA9\xD6\xD8\xDA\xE0\xE6\xE8\xF2\xF4\xFE\u0102" +
        "\u0106\u010B\u010F\u0114\u0119\b\b\x02\x02\x03\t\x02\x03\n\x03\x03\v\x04" +
        "\x03\f\x05\x03\x1B\x06";
    return UCBLogoLexer;
}(Lexer_1.Lexer));
exports.UCBLogoLexer = UCBLogoLexer;