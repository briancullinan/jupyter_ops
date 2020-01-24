"use strict";
// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/ruby/Corundum.g4 by ANTLR 4.7.3-SNAPSHOT
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
var CorundumLexer = /** @class */ (function (_super) {
    __extends(CorundumLexer, _super);
    // tslint:enable:no-trailing-whitespace
    function CorundumLexer(input) {
        var _this = _super.call(this, input) || this;
        _this._interp = new LexerATNSimulator_1.LexerATNSimulator(CorundumLexer._ATN, _this);
        return _this;
    }
    Object.defineProperty(CorundumLexer.prototype, "vocabulary", {
        // @Override
        // @NotNull
        get: function () {
            return CorundumLexer.VOCABULARY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer.prototype, "grammarFileName", {
        // @Override
        get: function () { return "Corundum.g4"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer.prototype, "ruleNames", {
        // @Override
        get: function () { return CorundumLexer.ruleNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer.prototype, "serializedATN", {
        // @Override
        get: function () { return CorundumLexer._serializedATN; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer.prototype, "channelNames", {
        // @Override
        get: function () { return CorundumLexer.channelNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer.prototype, "modeNames", {
        // @Override
        get: function () { return CorundumLexer.modeNames; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CorundumLexer, "_ATN", {
        get: function () {
            if (!CorundumLexer.__ATN) {
                CorundumLexer.__ATN = new ATNDeserializer_1.ATNDeserializer().deserialize(Utils.toCharArray(CorundumLexer._serializedATN));
            }
            return CorundumLexer.__ATN;
        },
        enumerable: true,
        configurable: true
    });
    CorundumLexer.LITERAL = 1;
    CorundumLexer.COMMA = 2;
    CorundumLexer.SEMICOLON = 3;
    CorundumLexer.CRLF = 4;
    CorundumLexer.REQUIRE = 5;
    CorundumLexer.END = 6;
    CorundumLexer.DEF = 7;
    CorundumLexer.RETURN = 8;
    CorundumLexer.PIR = 9;
    CorundumLexer.IF = 10;
    CorundumLexer.ELSE = 11;
    CorundumLexer.ELSIF = 12;
    CorundumLexer.UNLESS = 13;
    CorundumLexer.WHILE = 14;
    CorundumLexer.RETRY = 15;
    CorundumLexer.BREAK = 16;
    CorundumLexer.FOR = 17;
    CorundumLexer.TRUE = 18;
    CorundumLexer.FALSE = 19;
    CorundumLexer.PLUS = 20;
    CorundumLexer.MINUS = 21;
    CorundumLexer.MUL = 22;
    CorundumLexer.DIV = 23;
    CorundumLexer.MOD = 24;
    CorundumLexer.EXP = 25;
    CorundumLexer.EQUAL = 26;
    CorundumLexer.NOT_EQUAL = 27;
    CorundumLexer.GREATER = 28;
    CorundumLexer.LESS = 29;
    CorundumLexer.LESS_EQUAL = 30;
    CorundumLexer.GREATER_EQUAL = 31;
    CorundumLexer.ASSIGN = 32;
    CorundumLexer.PLUS_ASSIGN = 33;
    CorundumLexer.MINUS_ASSIGN = 34;
    CorundumLexer.MUL_ASSIGN = 35;
    CorundumLexer.DIV_ASSIGN = 36;
    CorundumLexer.MOD_ASSIGN = 37;
    CorundumLexer.EXP_ASSIGN = 38;
    CorundumLexer.BIT_AND = 39;
    CorundumLexer.BIT_OR = 40;
    CorundumLexer.BIT_XOR = 41;
    CorundumLexer.BIT_NOT = 42;
    CorundumLexer.BIT_SHL = 43;
    CorundumLexer.BIT_SHR = 44;
    CorundumLexer.AND = 45;
    CorundumLexer.OR = 46;
    CorundumLexer.NOT = 47;
    CorundumLexer.LEFT_RBRACKET = 48;
    CorundumLexer.RIGHT_RBRACKET = 49;
    CorundumLexer.LEFT_SBRACKET = 50;
    CorundumLexer.RIGHT_SBRACKET = 51;
    CorundumLexer.NIL = 52;
    CorundumLexer.SL_COMMENT = 53;
    CorundumLexer.ML_COMMENT = 54;
    CorundumLexer.WS = 55;
    CorundumLexer.INT = 56;
    CorundumLexer.FLOAT = 57;
    CorundumLexer.ID = 58;
    CorundumLexer.ID_GLOBAL = 59;
    CorundumLexer.ID_FUNCTION = 60;
    // tslint:disable:no-trailing-whitespace
    CorundumLexer.channelNames = [
        "DEFAULT_TOKEN_CHANNEL", "HIDDEN",
    ];
    // tslint:disable:no-trailing-whitespace
    CorundumLexer.modeNames = [
        "DEFAULT_MODE",
    ];
    CorundumLexer.ruleNames = [
        "ESCAPED_QUOTE", "LITERAL", "COMMA", "SEMICOLON", "CRLF", "REQUIRE", "END",
        "DEF", "RETURN", "PIR", "IF", "ELSE", "ELSIF", "UNLESS", "WHILE", "RETRY",
        "BREAK", "FOR", "TRUE", "FALSE", "PLUS", "MINUS", "MUL", "DIV", "MOD",
        "EXP", "EQUAL", "NOT_EQUAL", "GREATER", "LESS", "LESS_EQUAL", "GREATER_EQUAL",
        "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN",
        "EXP_ASSIGN", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_NOT", "BIT_SHL", "BIT_SHR",
        "AND", "OR", "NOT", "LEFT_RBRACKET", "RIGHT_RBRACKET", "LEFT_SBRACKET",
        "RIGHT_SBRACKET", "NIL", "SL_COMMENT", "ML_COMMENT", "WS", "INT", "FLOAT",
        "ID", "ID_GLOBAL", "ID_FUNCTION",
    ];
    CorundumLexer._LITERAL_NAMES = [
        undefined, undefined, "','", "';'", undefined, "'require'", "'end'", "'def'",
        "'return'", "'pir'", "'if'", "'else'", "'elsif'", "'unless'", "'while'",
        "'retry'", "'break'", "'for'", "'true'", "'false'", "'+'", "'-'", "'*'",
        "'/'", "'%'", "'**'", "'=='", "'!='", "'>'", "'<'", "'<='", "'>='", "'='",
        "'+='", "'-='", "'*='", "'/='", "'%='", "'**='", "'&'", "'|'", "'^'",
        "'~'", "'<<'", "'>>'", undefined, undefined, undefined, "'('", "')'",
        "'['", "']'", "'nil'",
    ];
    CorundumLexer._SYMBOLIC_NAMES = [
        undefined, "LITERAL", "COMMA", "SEMICOLON", "CRLF", "REQUIRE", "END",
        "DEF", "RETURN", "PIR", "IF", "ELSE", "ELSIF", "UNLESS", "WHILE", "RETRY",
        "BREAK", "FOR", "TRUE", "FALSE", "PLUS", "MINUS", "MUL", "DIV", "MOD",
        "EXP", "EQUAL", "NOT_EQUAL", "GREATER", "LESS", "LESS_EQUAL", "GREATER_EQUAL",
        "ASSIGN", "PLUS_ASSIGN", "MINUS_ASSIGN", "MUL_ASSIGN", "DIV_ASSIGN", "MOD_ASSIGN",
        "EXP_ASSIGN", "BIT_AND", "BIT_OR", "BIT_XOR", "BIT_NOT", "BIT_SHL", "BIT_SHR",
        "AND", "OR", "NOT", "LEFT_RBRACKET", "RIGHT_RBRACKET", "LEFT_SBRACKET",
        "RIGHT_SBRACKET", "NIL", "SL_COMMENT", "ML_COMMENT", "WS", "INT", "FLOAT",
        "ID", "ID_GLOBAL", "ID_FUNCTION",
    ];
    CorundumLexer.VOCABULARY = new VocabularyImpl_1.VocabularyImpl(CorundumLexer._LITERAL_NAMES, CorundumLexer._SYMBOLIC_NAMES, []);
    CorundumLexer._serializedATN = "\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02>\u0199\b\x01" +
        "\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
        "\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
        "\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
        "\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
        "\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
        "\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        "+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
        "4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
        "=\t=\x04>\t>\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x07\x03\x84" +
        "\n\x03\f\x03\x0E\x03\x87\v\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03" +
        "\x8D\n\x03\f\x03\x0E\x03\x90\v\x03\x03\x03\x05\x03\x93\n\x03\x03\x04\x03" +
        "\x04\x03\x05\x03\x05\x03\x06\x05\x06\x9A\n\x06\x03\x06\x03\x06\x03\x07" +
        "\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
        "\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03" +
        "\n\x03\v\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03\r\x03" +
        "\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03" +
        "\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
        "\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x12\x03" +
        "\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
        "\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03" +
        "\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x19\x03" +
        "\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03" +
        "\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03 \x03 \x03 \x03" +
        "!\x03!\x03!\x03\"\x03\"\x03#\x03#\x03#\x03$\x03$\x03$\x03%\x03%\x03%\x03" +
        "&\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03(\x03)\x03)\x03*\x03*" +
        "\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
        "/\x03/\x05/\u0134\n/\x030\x030\x030\x030\x050\u013A\n0\x031\x031\x031" +
        "\x031\x051\u0140\n1\x032\x032\x033\x033\x034\x034\x035\x035\x036\x036" +
        "\x036\x036\x037\x037\x077\u0150\n7\f7\x0E7\u0153\v7\x037\x057\u0156\n" +
        "7\x037\x037\x037\x037\x038\x038\x038\x038\x038\x038\x038\x038\x078\u0164" +
        "\n8\f8\x0E8\u0167\v8\x038\x038\x038\x038\x038\x038\x058\u016F\n8\x038" +
        "\x038\x038\x038\x039\x069\u0176\n9\r9\x0E9\u0177\x039\x039\x03:\x06:\u017D" +
        "\n:\r:\x0E:\u017E\x03;\x07;\u0182\n;\f;\x0E;\u0185\v;\x03;\x03;\x06;\u0189" +
        "\n;\r;\x0E;\u018A\x03<\x03<\x07<\u018F\n<\f<\x0E<\u0192\v<\x03=\x03=\x03" +
        "=\x03>\x03>\x03>\x05\x85\x8E\u0165\x02\x02?\x03\x02\x02\x05\x02\x03\x07" +
        "\x02\x04\t\x02\x05\v\x02\x06\r\x02\x07\x0F\x02\b\x11\x02\t\x13\x02\n\x15" +
        "\x02\v\x17\x02\f\x19\x02\r\x1B\x02\x0E\x1D\x02\x0F\x1F\x02\x10!\x02\x11" +
        "#\x02\x12%\x02\x13\'\x02\x14)\x02\x15+\x02\x16-\x02\x17/\x02\x181\x02" +
        "\x193\x02\x1A5\x02\x1B7\x02\x1C9\x02\x1D;\x02\x1E=\x02\x1F?\x02 A\x02" +
        "!C\x02\"E\x02#G\x02$I\x02%K\x02&M\x02\'O\x02(Q\x02)S\x02*U\x02+W\x02," +
        "Y\x02-[\x02.]\x02/_\x020a\x021c\x022e\x023g\x024i\x025k\x026m\x027o\x02" +
        "8q\x029s\x02:u\x02;w\x02<y\x02={\x02>\x03\x02\b\x04\x02\f\f\x0F\x0F\x04" +
        "\x02\v\v\"\"\x03\x022;\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x02AA\x02\u01A9" +
        "\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02" +
        "\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02" +
        "\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02" +
        "\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02\x02" +
        "\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02\x02" +
        "#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)\x03" +
        "\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03\x02\x02" +
        "\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02\x02\x02" +
        "7\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02=\x03\x02" +
        "\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02\x02\x02" +
        "\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02\x02K\x03" +
        "\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03\x02\x02" +
        "\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02\x02\x02" +
        "Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02_\x03\x02" +
        "\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02\x02\x02" +
        "\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02\x02m\x03" +
        "\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03\x02\x02" +
        "\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02\x02\x02" +
        "{\x03\x02\x02\x02\x03}\x03\x02\x02\x02\x05\x92\x03\x02\x02\x02\x07\x94" +
        "\x03\x02\x02\x02\t\x96\x03\x02\x02\x02\v\x99\x03\x02\x02\x02\r\x9D\x03" +
        "\x02\x02\x02\x0F\xA5\x03\x02\x02\x02\x11\xA9\x03\x02\x02\x02\x13\xAD\x03" +
        "\x02\x02\x02\x15\xB4\x03\x02\x02\x02\x17\xB8\x03\x02\x02\x02\x19\xBB\x03" +
        "\x02\x02\x02\x1B\xC0\x03\x02\x02\x02\x1D\xC6\x03\x02\x02\x02\x1F\xCD\x03" +
        "\x02\x02\x02!\xD3\x03\x02\x02\x02#\xD9\x03\x02\x02\x02%\xDF\x03\x02\x02" +
        "\x02\'\xE3\x03\x02\x02\x02)\xE8\x03\x02\x02\x02+\xEE\x03\x02\x02\x02-" +
        "\xF0\x03\x02\x02\x02/\xF2\x03\x02\x02\x021\xF4\x03\x02\x02\x023\xF6\x03" +
        "\x02\x02\x025\xF8\x03\x02\x02\x027\xFB\x03\x02\x02\x029\xFE\x03\x02\x02" +
        "\x02;\u0101\x03\x02\x02\x02=\u0103\x03\x02\x02\x02?\u0105\x03\x02\x02" +
        "\x02A\u0108\x03\x02\x02\x02C\u010B\x03\x02\x02\x02E\u010D\x03\x02\x02" +
        "\x02G\u0110\x03\x02\x02\x02I\u0113\x03\x02\x02\x02K\u0116\x03\x02\x02" +
        "\x02M\u0119\x03\x02\x02\x02O\u011C\x03\x02\x02\x02Q\u0120\x03\x02\x02" +
        "\x02S\u0122\x03\x02\x02\x02U\u0124\x03\x02\x02\x02W\u0126\x03\x02\x02" +
        "\x02Y\u0128\x03\x02\x02\x02[\u012B\x03\x02\x02\x02]\u0133\x03\x02\x02" +
        "\x02_\u0139\x03\x02\x02\x02a\u013F\x03\x02\x02\x02c\u0141\x03\x02\x02" +
        "\x02e\u0143\x03\x02\x02\x02g\u0145\x03\x02\x02\x02i\u0147\x03\x02\x02" +
        "\x02k\u0149\x03\x02\x02\x02m\u014D\x03\x02\x02\x02o\u015B\x03\x02\x02" +
        "\x02q\u0175\x03\x02\x02\x02s\u017C\x03\x02\x02\x02u\u0183\x03\x02\x02" +
        "\x02w\u018C\x03\x02\x02\x02y\u0193\x03\x02\x02\x02{\u0196\x03\x02\x02" +
        "\x02}~\x07^\x02\x02~\x7F\x07$\x02\x02\x7F\x04\x03\x02\x02\x02\x80\x85" +
        "\x07$\x02\x02\x81\x84\x05\x03\x02\x02\x82\x84\n\x02\x02\x02\x83\x81\x03" +
        "\x02\x02\x02\x83\x82\x03\x02\x02\x02\x84\x87\x03\x02\x02\x02\x85\x86\x03" +
        "\x02\x02\x02\x85\x83\x03\x02\x02\x02\x86\x88\x03\x02\x02\x02\x87\x85\x03" +
        "\x02\x02\x02\x88\x93\x07$\x02\x02\x89\x8E\x07)\x02\x02\x8A\x8D\x05\x03" +
        "\x02\x02\x8B\x8D\n\x02\x02\x02\x8C\x8A\x03\x02\x02\x02\x8C\x8B\x03\x02" +
        "\x02\x02\x8D\x90\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8E\x8C\x03\x02" +
        "\x02\x02\x8F\x91\x03\x02\x02\x02\x90\x8E\x03\x02\x02\x02\x91\x93\x07)" +
        "\x02\x02\x92\x80\x03\x02\x02\x02\x92\x89\x03\x02\x02\x02\x93\x06\x03\x02" +
        "\x02\x02\x94\x95\x07.\x02\x02\x95\b\x03\x02\x02\x02\x96\x97\x07=\x02\x02" +
        "\x97\n\x03\x02\x02\x02\x98\x9A\x07\x0F\x02\x02\x99\x98\x03\x02\x02\x02" +
        "\x99\x9A\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9C\x07\f\x02\x02" +
        "\x9C\f\x03\x02\x02\x02\x9D\x9E\x07t\x02\x02\x9E\x9F\x07g\x02\x02\x9F\xA0" +
        "\x07s\x02\x02\xA0\xA1\x07w\x02\x02\xA1\xA2\x07k\x02\x02\xA2\xA3\x07t\x02" +
        "\x02\xA3\xA4\x07g\x02\x02\xA4\x0E\x03\x02\x02\x02\xA5\xA6\x07g\x02\x02" +
        "\xA6\xA7\x07p\x02\x02\xA7\xA8\x07f\x02\x02\xA8\x10\x03\x02\x02\x02\xA9" +
        "\xAA\x07f\x02\x02\xAA\xAB\x07g\x02\x02\xAB\xAC\x07h\x02\x02\xAC\x12\x03" +
        "\x02\x02\x02\xAD\xAE\x07t\x02\x02\xAE\xAF\x07g\x02\x02\xAF\xB0\x07v\x02" +
        "\x02\xB0\xB1\x07w\x02\x02\xB1\xB2\x07t\x02\x02\xB2\xB3\x07p\x02\x02\xB3" +
        "\x14\x03\x02\x02\x02\xB4\xB5\x07r\x02\x02\xB5\xB6\x07k\x02\x02\xB6\xB7" +
        "\x07t\x02\x02\xB7\x16\x03\x02\x02\x02\xB8\xB9\x07k\x02\x02\xB9\xBA\x07" +
        "h\x02\x02\xBA\x18\x03\x02\x02\x02\xBB\xBC\x07g\x02\x02\xBC\xBD\x07n\x02" +
        "\x02\xBD\xBE\x07u\x02\x02\xBE\xBF\x07g\x02\x02\xBF\x1A\x03\x02\x02\x02" +
        "\xC0\xC1\x07g\x02\x02\xC1\xC2\x07n\x02\x02\xC2\xC3\x07u\x02\x02\xC3\xC4" +
        "\x07k\x02\x02\xC4\xC5\x07h\x02\x02\xC5\x1C\x03\x02\x02\x02\xC6\xC7\x07" +
        "w\x02\x02\xC7\xC8\x07p\x02\x02\xC8\xC9\x07n\x02\x02\xC9\xCA\x07g\x02\x02" +
        "\xCA\xCB\x07u\x02\x02\xCB\xCC\x07u\x02\x02\xCC\x1E\x03\x02\x02\x02\xCD" +
        "\xCE\x07y\x02\x02\xCE\xCF\x07j\x02\x02\xCF\xD0\x07k\x02\x02\xD0\xD1\x07" +
        "n\x02\x02\xD1\xD2\x07g\x02\x02\xD2 \x03\x02\x02\x02\xD3\xD4\x07t\x02\x02" +
        "\xD4\xD5\x07g\x02\x02\xD5\xD6\x07v\x02\x02\xD6\xD7\x07t\x02\x02\xD7\xD8" +
        "\x07{\x02\x02\xD8\"\x03\x02\x02\x02\xD9\xDA\x07d\x02\x02\xDA\xDB\x07t" +
        "\x02\x02\xDB\xDC\x07g\x02\x02\xDC\xDD\x07c\x02\x02\xDD\xDE\x07m\x02\x02" +
        "\xDE$\x03\x02\x02\x02\xDF\xE0\x07h\x02\x02\xE0\xE1\x07q\x02\x02\xE1\xE2" +
        "\x07t\x02\x02\xE2&\x03\x02\x02\x02\xE3\xE4\x07v\x02\x02\xE4\xE5\x07t\x02" +
        "\x02\xE5\xE6\x07w\x02\x02\xE6\xE7\x07g\x02\x02\xE7(\x03\x02\x02\x02\xE8" +
        "\xE9\x07h\x02\x02\xE9\xEA\x07c\x02\x02\xEA\xEB\x07n\x02\x02\xEB\xEC\x07" +
        "u\x02\x02\xEC\xED\x07g\x02\x02\xED*\x03\x02\x02\x02\xEE\xEF\x07-\x02\x02" +
        "\xEF,\x03\x02\x02\x02\xF0\xF1\x07/\x02\x02\xF1.\x03\x02\x02\x02\xF2\xF3" +
        "\x07,\x02\x02\xF30\x03\x02\x02\x02\xF4\xF5\x071\x02\x02\xF52\x03\x02\x02" +
        "\x02\xF6\xF7\x07\'\x02\x02\xF74\x03\x02\x02\x02\xF8\xF9\x07,\x02\x02\xF9" +
        "\xFA\x07,\x02\x02\xFA6\x03\x02\x02\x02\xFB\xFC\x07?\x02\x02\xFC\xFD\x07" +
        "?\x02\x02\xFD8\x03\x02\x02\x02\xFE\xFF\x07#\x02\x02\xFF\u0100\x07?\x02" +
        "\x02\u0100:\x03\x02\x02\x02\u0101\u0102\x07@\x02\x02\u0102<\x03\x02\x02" +
        "\x02\u0103\u0104\x07>\x02\x02\u0104>\x03\x02\x02\x02\u0105\u0106\x07>" +
        "\x02\x02\u0106\u0107\x07?\x02\x02\u0107@\x03\x02\x02\x02\u0108\u0109\x07" +
        "@\x02\x02\u0109\u010A\x07?\x02\x02\u010AB\x03\x02\x02\x02\u010B\u010C" +
        "\x07?\x02\x02\u010CD\x03\x02\x02\x02\u010D\u010E\x07-\x02\x02\u010E\u010F" +
        "\x07?\x02\x02\u010FF\x03\x02\x02\x02\u0110\u0111\x07/\x02\x02\u0111\u0112" +
        "\x07?\x02\x02\u0112H\x03\x02\x02\x02\u0113\u0114\x07,\x02\x02\u0114\u0115" +
        "\x07?\x02\x02\u0115J\x03\x02\x02\x02\u0116\u0117\x071\x02\x02\u0117\u0118" +
        "\x07?\x02\x02\u0118L\x03\x02\x02\x02\u0119\u011A\x07\'\x02\x02\u011A\u011B" +
        "\x07?\x02\x02\u011BN\x03\x02\x02\x02\u011C\u011D\x07,\x02\x02\u011D\u011E" +
        "\x07,\x02\x02\u011E\u011F\x07?\x02\x02\u011FP\x03\x02\x02\x02\u0120\u0121" +
        "\x07(\x02\x02\u0121R\x03\x02\x02\x02\u0122\u0123\x07~\x02\x02\u0123T\x03" +
        "\x02\x02\x02\u0124\u0125\x07`\x02\x02\u0125V\x03\x02\x02\x02\u0126\u0127" +
        "\x07\x80\x02\x02\u0127X\x03\x02\x02\x02\u0128\u0129\x07>\x02\x02\u0129" +
        "\u012A\x07>\x02\x02\u012AZ\x03\x02\x02\x02\u012B\u012C\x07@\x02\x02\u012C" +
        "\u012D\x07@\x02\x02\u012D\\\x03\x02\x02\x02\u012E\u012F\x07c\x02\x02\u012F" +
        "\u0130\x07p\x02\x02\u0130\u0134\x07f\x02\x02\u0131\u0132\x07(\x02\x02" +
        "\u0132\u0134\x07(\x02\x02\u0133\u012E\x03\x02\x02\x02\u0133\u0131\x03" +
        "\x02\x02\x02\u0134^\x03\x02\x02\x02\u0135\u0136\x07q\x02\x02\u0136\u013A" +
        "\x07t\x02\x02\u0137\u0138\x07~\x02\x02\u0138\u013A\x07~\x02\x02\u0139" +
        "\u0135\x03\x02\x02\x02\u0139\u0137\x03\x02\x02\x02\u013A`\x03\x02\x02" +
        "\x02\u013B\u013C\x07p\x02\x02\u013C\u013D\x07q\x02\x02\u013D\u0140\x07" +
        "v\x02\x02\u013E\u0140\x07#\x02\x02\u013F\u013B\x03\x02\x02\x02\u013F\u013E" +
        "\x03\x02\x02\x02\u0140b\x03\x02\x02\x02\u0141\u0142\x07*\x02\x02\u0142" +
        "d\x03\x02\x02\x02\u0143\u0144\x07+\x02\x02\u0144f\x03\x02\x02\x02\u0145" +
        "\u0146\x07]\x02\x02\u0146h\x03\x02\x02\x02\u0147\u0148\x07_\x02\x02\u0148" +
        "j\x03\x02\x02\x02\u0149\u014A\x07p\x02\x02\u014A\u014B\x07k\x02\x02\u014B" +
        "\u014C\x07n\x02\x02\u014Cl\x03\x02\x02\x02\u014D\u0151\x07%\x02\x02\u014E" +
        "\u0150\n\x02\x02\x02\u014F\u014E\x03\x02\x02\x02\u0150\u0153\x03\x02\x02" +
        "\x02\u0151\u014F\x03\x02\x02\x02\u0151\u0152\x03\x02\x02\x02\u0152\u0155" +
        "\x03\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0154\u0156\x07\x0F\x02\x02" +
        "\u0155\u0154\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\u0157\x03" +
        "\x02\x02\x02\u0157\u0158\x07\f\x02\x02\u0158\u0159\x03\x02\x02\x02\u0159" +
        "\u015A\b7\x02\x02\u015An\x03\x02\x02\x02\u015B\u015C\x07?\x02\x02\u015C" +
        "\u015D\x07d\x02\x02\u015D\u015E\x07g\x02\x02\u015E\u015F\x07i\x02\x02" +
        "\u015F\u0160\x07k\x02\x02\u0160\u0161\x07p\x02\x02\u0161\u0165\x03\x02" +
        "\x02\x02\u0162\u0164\v\x02\x02\x02\u0163\u0162\x03\x02\x02\x02\u0164\u0167" +
        "\x03\x02\x02\x02\u0165\u0166\x03\x02\x02\x02\u0165\u0163\x03\x02\x02\x02" +
        "\u0166\u0168\x03\x02\x02\x02\u0167\u0165\x03\x02\x02\x02\u0168\u0169\x07" +
        "?\x02\x02\u0169\u016A\x07g\x02\x02\u016A\u016B\x07p\x02\x02\u016B\u016C" +
        "\x07f\x02\x02\u016C\u016E\x03\x02\x02\x02\u016D\u016F\x07\x0F\x02\x02" +
        "\u016E\u016D\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0170\x03" +
        "\x02\x02\x02\u0170\u0171\x07\f\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172" +
        "\u0173\b8\x02\x02\u0173p\x03\x02\x02\x02\u0174\u0176\t\x03\x02\x02\u0175" +
        "\u0174\x03\x02\x02\x02\u0176\u0177\x03\x02\x02\x02\u0177\u0175\x03\x02" +
        "\x02\x02\u0177\u0178\x03\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179" +
        "\u017A\b9\x02\x02\u017Ar\x03\x02\x02\x02\u017B\u017D\t\x04\x02\x02\u017C" +
        "\u017B\x03\x02\x02\x02\u017D\u017E\x03\x02\x02\x02\u017E\u017C\x03\x02" +
        "\x02\x02\u017E\u017F\x03\x02\x02\x02\u017Ft\x03\x02\x02\x02\u0180\u0182" +
        "\t\x04\x02\x02\u0181\u0180\x03\x02\x02\x02\u0182\u0185\x03\x02\x02\x02" +
        "\u0183\u0181\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\u0186\x03" +
        "\x02\x02\x02\u0185\u0183\x03\x02\x02\x02\u0186\u0188\x070\x02\x02\u0187" +
        "\u0189\t\x04\x02\x02\u0188\u0187\x03\x02\x02\x02\u0189\u018A\x03\x02\x02" +
        "\x02\u018A\u0188\x03\x02\x02\x02\u018A\u018B\x03\x02\x02\x02\u018Bv\x03" +
        "\x02\x02\x02\u018C\u0190\t\x05\x02\x02\u018D\u018F\t\x06\x02\x02\u018E" +
        "\u018D\x03\x02\x02\x02\u018F\u0192\x03\x02\x02\x02\u0190\u018E\x03\x02" +
        "\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191x\x03\x02\x02\x02\u0192\u0190" +
        "\x03\x02\x02\x02\u0193\u0194\x07&\x02\x02\u0194\u0195\x05w<\x02\u0195" +
        "z\x03\x02\x02\x02\u0196\u0197\x05w<\x02\u0197\u0198\t\x07\x02\x02\u0198" +
        "|\x03\x02\x02\x02\x15\x02\x83\x85\x8C\x8E\x92\x99\u0133\u0139\u013F\u0151" +
        "\u0155\u0165\u016E\u0177\u017E\u0183\u018A\u0190\x03\b\x02\x02";
    return CorundumLexer;
}(Lexer_1.Lexer));
exports.CorundumLexer = CorundumLexer;