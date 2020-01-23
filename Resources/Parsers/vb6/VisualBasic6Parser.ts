// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/vb6/VisualBasic6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { VisualBasic6Listener } from "./VisualBasic6Listener";
import { VisualBasic6Visitor } from "./VisualBasic6Visitor";


export class VisualBasic6Parser extends Parser {
	public static readonly ACCESS = 1;
	public static readonly ADDRESSOF = 2;
	public static readonly ALIAS = 3;
	public static readonly AND = 4;
	public static readonly ATTRIBUTE = 5;
	public static readonly APPACTIVATE = 6;
	public static readonly APPEND = 7;
	public static readonly AS = 8;
	public static readonly BEEP = 9;
	public static readonly BEGIN = 10;
	public static readonly BEGINPROPERTY = 11;
	public static readonly BINARY = 12;
	public static readonly BOOLEAN = 13;
	public static readonly BYVAL = 14;
	public static readonly BYREF = 15;
	public static readonly BYTE = 16;
	public static readonly CALL = 17;
	public static readonly CASE = 18;
	public static readonly CHDIR = 19;
	public static readonly CHDRIVE = 20;
	public static readonly CLASS = 21;
	public static readonly CLOSE = 22;
	public static readonly COLLECTION = 23;
	public static readonly CONST = 24;
	public static readonly DATE = 25;
	public static readonly DECLARE = 26;
	public static readonly DEFBOOL = 27;
	public static readonly DEFBYTE = 28;
	public static readonly DEFDATE = 29;
	public static readonly DEFDBL = 30;
	public static readonly DEFDEC = 31;
	public static readonly DEFCUR = 32;
	public static readonly DEFINT = 33;
	public static readonly DEFLNG = 34;
	public static readonly DEFOBJ = 35;
	public static readonly DEFSNG = 36;
	public static readonly DEFSTR = 37;
	public static readonly DEFVAR = 38;
	public static readonly DELETESETTING = 39;
	public static readonly DIM = 40;
	public static readonly DO = 41;
	public static readonly DOUBLE = 42;
	public static readonly EACH = 43;
	public static readonly ELSE = 44;
	public static readonly ELSEIF = 45;
	public static readonly END_ENUM = 46;
	public static readonly END_FUNCTION = 47;
	public static readonly END_IF = 48;
	public static readonly END_PROPERTY = 49;
	public static readonly END_SELECT = 50;
	public static readonly END_SUB = 51;
	public static readonly END_TYPE = 52;
	public static readonly END_WITH = 53;
	public static readonly END = 54;
	public static readonly ENDPROPERTY = 55;
	public static readonly ENUM = 56;
	public static readonly EQV = 57;
	public static readonly ERASE = 58;
	public static readonly ERROR = 59;
	public static readonly EVENT = 60;
	public static readonly EXIT_DO = 61;
	public static readonly EXIT_FOR = 62;
	public static readonly EXIT_FUNCTION = 63;
	public static readonly EXIT_PROPERTY = 64;
	public static readonly EXIT_SUB = 65;
	public static readonly FALSE = 66;
	public static readonly FILECOPY = 67;
	public static readonly FRIEND = 68;
	public static readonly FOR = 69;
	public static readonly FUNCTION = 70;
	public static readonly GET = 71;
	public static readonly GLOBAL = 72;
	public static readonly GOSUB = 73;
	public static readonly GOTO = 74;
	public static readonly IF = 75;
	public static readonly IMP = 76;
	public static readonly IMPLEMENTS = 77;
	public static readonly IN = 78;
	public static readonly INPUT = 79;
	public static readonly IS = 80;
	public static readonly INTEGER = 81;
	public static readonly KILL = 82;
	public static readonly LOAD = 83;
	public static readonly LOCK = 84;
	public static readonly LONG = 85;
	public static readonly LOOP = 86;
	public static readonly LEN = 87;
	public static readonly LET = 88;
	public static readonly LIB = 89;
	public static readonly LIKE = 90;
	public static readonly LINE_INPUT = 91;
	public static readonly LOCK_READ = 92;
	public static readonly LOCK_WRITE = 93;
	public static readonly LOCK_READ_WRITE = 94;
	public static readonly LSET = 95;
	public static readonly MACRO_IF = 96;
	public static readonly MACRO_ELSEIF = 97;
	public static readonly MACRO_ELSE = 98;
	public static readonly MACRO_END_IF = 99;
	public static readonly ME = 100;
	public static readonly MID = 101;
	public static readonly MKDIR = 102;
	public static readonly MOD = 103;
	public static readonly NAME = 104;
	public static readonly NEXT = 105;
	public static readonly NEW = 106;
	public static readonly NOT = 107;
	public static readonly NOTHING = 108;
	public static readonly NULL = 109;
	public static readonly OBJECT = 110;
	public static readonly ON = 111;
	public static readonly ON_ERROR = 112;
	public static readonly ON_LOCAL_ERROR = 113;
	public static readonly OPEN = 114;
	public static readonly OPTIONAL = 115;
	public static readonly OPTION_BASE = 116;
	public static readonly OPTION_EXPLICIT = 117;
	public static readonly OPTION_COMPARE = 118;
	public static readonly OPTION_PRIVATE_MODULE = 119;
	public static readonly OR = 120;
	public static readonly OUTPUT = 121;
	public static readonly PARAMARRAY = 122;
	public static readonly PRESERVE = 123;
	public static readonly PRINT = 124;
	public static readonly PRIVATE = 125;
	public static readonly PROPERTY_GET = 126;
	public static readonly PROPERTY_LET = 127;
	public static readonly PROPERTY_SET = 128;
	public static readonly PUBLIC = 129;
	public static readonly PUT = 130;
	public static readonly RANDOM = 131;
	public static readonly RANDOMIZE = 132;
	public static readonly RAISEEVENT = 133;
	public static readonly READ = 134;
	public static readonly READ_WRITE = 135;
	public static readonly REDIM = 136;
	public static readonly REM = 137;
	public static readonly RESET = 138;
	public static readonly RESUME = 139;
	public static readonly RETURN = 140;
	public static readonly RMDIR = 141;
	public static readonly RSET = 142;
	public static readonly SAVEPICTURE = 143;
	public static readonly SAVESETTING = 144;
	public static readonly SEEK = 145;
	public static readonly SELECT = 146;
	public static readonly SENDKEYS = 147;
	public static readonly SET = 148;
	public static readonly SETATTR = 149;
	public static readonly SHARED = 150;
	public static readonly SINGLE = 151;
	public static readonly SPC = 152;
	public static readonly STATIC = 153;
	public static readonly STEP = 154;
	public static readonly STOP = 155;
	public static readonly STRING = 156;
	public static readonly SUB = 157;
	public static readonly TAB = 158;
	public static readonly TEXT = 159;
	public static readonly THEN = 160;
	public static readonly TIME = 161;
	public static readonly TO = 162;
	public static readonly TRUE = 163;
	public static readonly TYPE = 164;
	public static readonly TYPEOF = 165;
	public static readonly UNLOAD = 166;
	public static readonly UNLOCK = 167;
	public static readonly UNTIL = 168;
	public static readonly VARIANT = 169;
	public static readonly VERSION = 170;
	public static readonly WEND = 171;
	public static readonly WHILE = 172;
	public static readonly WIDTH = 173;
	public static readonly WITH = 174;
	public static readonly WITHEVENTS = 175;
	public static readonly WRITE = 176;
	public static readonly XOR = 177;
	public static readonly AMPERSAND = 178;
	public static readonly ASSIGN = 179;
	public static readonly AT = 180;
	public static readonly COLON = 181;
	public static readonly COMMA = 182;
	public static readonly DIV = 183;
	public static readonly DOLLAR = 184;
	public static readonly DOT = 185;
	public static readonly EQ = 186;
	public static readonly EXCLAMATIONMARK = 187;
	public static readonly GEQ = 188;
	public static readonly GT = 189;
	public static readonly HASH = 190;
	public static readonly LEQ = 191;
	public static readonly LBRACE = 192;
	public static readonly LPAREN = 193;
	public static readonly LT = 194;
	public static readonly MINUS = 195;
	public static readonly MINUS_EQ = 196;
	public static readonly MULT = 197;
	public static readonly NEQ = 198;
	public static readonly PERCENT = 199;
	public static readonly PLUS = 200;
	public static readonly PLUS_EQ = 201;
	public static readonly POW = 202;
	public static readonly RBRACE = 203;
	public static readonly RPAREN = 204;
	public static readonly SEMICOLON = 205;
	public static readonly L_SQUARE_BRACKET = 206;
	public static readonly R_SQUARE_BRACKET = 207;
	public static readonly STRINGLITERAL = 208;
	public static readonly DATELITERAL = 209;
	public static readonly COLORLITERAL = 210;
	public static readonly INTEGERLITERAL = 211;
	public static readonly DOUBLELITERAL = 212;
	public static readonly FILENUMBER = 213;
	public static readonly OCTALLITERAL = 214;
	public static readonly FRX_OFFSET = 215;
	public static readonly GUID = 216;
	public static readonly IDENTIFIER = 217;
	public static readonly LINE_CONTINUATION = 218;
	public static readonly NEWLINE = 219;
	public static readonly COMMENT = 220;
	public static readonly WS = 221;
	public static readonly RULE_startRule = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_moduleReferences = 2;
	public static readonly RULE_moduleReference = 3;
	public static readonly RULE_moduleReferenceValue = 4;
	public static readonly RULE_moduleReferenceComponent = 5;
	public static readonly RULE_moduleHeader = 6;
	public static readonly RULE_moduleConfig = 7;
	public static readonly RULE_moduleConfigElement = 8;
	public static readonly RULE_moduleAttributes = 9;
	public static readonly RULE_moduleOptions = 10;
	public static readonly RULE_moduleOption = 11;
	public static readonly RULE_moduleBody = 12;
	public static readonly RULE_moduleBodyElement = 13;
	public static readonly RULE_controlProperties = 14;
	public static readonly RULE_cp_Properties = 15;
	public static readonly RULE_cp_SingleProperty = 16;
	public static readonly RULE_cp_PropertyName = 17;
	public static readonly RULE_cp_PropertyValue = 18;
	public static readonly RULE_cp_NestedProperty = 19;
	public static readonly RULE_cp_ControlType = 20;
	public static readonly RULE_cp_ControlIdentifier = 21;
	public static readonly RULE_moduleBlock = 22;
	public static readonly RULE_attributeStmt = 23;
	public static readonly RULE_block = 24;
	public static readonly RULE_blockStmt = 25;
	public static readonly RULE_appActivateStmt = 26;
	public static readonly RULE_beepStmt = 27;
	public static readonly RULE_chDirStmt = 28;
	public static readonly RULE_chDriveStmt = 29;
	public static readonly RULE_closeStmt = 30;
	public static readonly RULE_constStmt = 31;
	public static readonly RULE_constSubStmt = 32;
	public static readonly RULE_dateStmt = 33;
	public static readonly RULE_declareStmt = 34;
	public static readonly RULE_deftypeStmt = 35;
	public static readonly RULE_deleteSettingStmt = 36;
	public static readonly RULE_doLoopStmt = 37;
	public static readonly RULE_endStmt = 38;
	public static readonly RULE_enumerationStmt = 39;
	public static readonly RULE_enumerationStmt_Constant = 40;
	public static readonly RULE_eraseStmt = 41;
	public static readonly RULE_errorStmt = 42;
	public static readonly RULE_eventStmt = 43;
	public static readonly RULE_exitStmt = 44;
	public static readonly RULE_filecopyStmt = 45;
	public static readonly RULE_forEachStmt = 46;
	public static readonly RULE_forNextStmt = 47;
	public static readonly RULE_functionStmt = 48;
	public static readonly RULE_getStmt = 49;
	public static readonly RULE_goSubStmt = 50;
	public static readonly RULE_goToStmt = 51;
	public static readonly RULE_ifThenElseStmt = 52;
	public static readonly RULE_ifBlockStmt = 53;
	public static readonly RULE_ifConditionStmt = 54;
	public static readonly RULE_ifElseIfBlockStmt = 55;
	public static readonly RULE_ifElseBlockStmt = 56;
	public static readonly RULE_implementsStmt = 57;
	public static readonly RULE_inputStmt = 58;
	public static readonly RULE_killStmt = 59;
	public static readonly RULE_letStmt = 60;
	public static readonly RULE_lineInputStmt = 61;
	public static readonly RULE_loadStmt = 62;
	public static readonly RULE_lockStmt = 63;
	public static readonly RULE_lsetStmt = 64;
	public static readonly RULE_macroIfThenElseStmt = 65;
	public static readonly RULE_macroIfBlockStmt = 66;
	public static readonly RULE_macroElseIfBlockStmt = 67;
	public static readonly RULE_macroElseBlockStmt = 68;
	public static readonly RULE_midStmt = 69;
	public static readonly RULE_mkdirStmt = 70;
	public static readonly RULE_nameStmt = 71;
	public static readonly RULE_onErrorStmt = 72;
	public static readonly RULE_onGoToStmt = 73;
	public static readonly RULE_onGoSubStmt = 74;
	public static readonly RULE_openStmt = 75;
	public static readonly RULE_outputList = 76;
	public static readonly RULE_outputList_Expression = 77;
	public static readonly RULE_printStmt = 78;
	public static readonly RULE_propertyGetStmt = 79;
	public static readonly RULE_propertySetStmt = 80;
	public static readonly RULE_propertyLetStmt = 81;
	public static readonly RULE_putStmt = 82;
	public static readonly RULE_raiseEventStmt = 83;
	public static readonly RULE_randomizeStmt = 84;
	public static readonly RULE_redimStmt = 85;
	public static readonly RULE_redimSubStmt = 86;
	public static readonly RULE_resetStmt = 87;
	public static readonly RULE_resumeStmt = 88;
	public static readonly RULE_returnStmt = 89;
	public static readonly RULE_rmdirStmt = 90;
	public static readonly RULE_rsetStmt = 91;
	public static readonly RULE_savepictureStmt = 92;
	public static readonly RULE_saveSettingStmt = 93;
	public static readonly RULE_seekStmt = 94;
	public static readonly RULE_selectCaseStmt = 95;
	public static readonly RULE_sC_Case = 96;
	public static readonly RULE_sC_Cond = 97;
	public static readonly RULE_sC_CondExpr = 98;
	public static readonly RULE_sendkeysStmt = 99;
	public static readonly RULE_setattrStmt = 100;
	public static readonly RULE_setStmt = 101;
	public static readonly RULE_stopStmt = 102;
	public static readonly RULE_subStmt = 103;
	public static readonly RULE_timeStmt = 104;
	public static readonly RULE_typeStmt = 105;
	public static readonly RULE_typeStmt_Element = 106;
	public static readonly RULE_typeOfStmt = 107;
	public static readonly RULE_unloadStmt = 108;
	public static readonly RULE_unlockStmt = 109;
	public static readonly RULE_valueStmt = 110;
	public static readonly RULE_variableStmt = 111;
	public static readonly RULE_variableListStmt = 112;
	public static readonly RULE_variableSubStmt = 113;
	public static readonly RULE_whileWendStmt = 114;
	public static readonly RULE_widthStmt = 115;
	public static readonly RULE_withStmt = 116;
	public static readonly RULE_writeStmt = 117;
	public static readonly RULE_explicitCallStmt = 118;
	public static readonly RULE_eCS_ProcedureCall = 119;
	public static readonly RULE_eCS_MemberProcedureCall = 120;
	public static readonly RULE_implicitCallStmt_InBlock = 121;
	public static readonly RULE_iCS_B_ProcedureCall = 122;
	public static readonly RULE_iCS_B_MemberProcedureCall = 123;
	public static readonly RULE_implicitCallStmt_InStmt = 124;
	public static readonly RULE_iCS_S_VariableOrProcedureCall = 125;
	public static readonly RULE_iCS_S_ProcedureOrArrayCall = 126;
	public static readonly RULE_iCS_S_NestedProcedureCall = 127;
	public static readonly RULE_iCS_S_MembersCall = 128;
	public static readonly RULE_iCS_S_MemberCall = 129;
	public static readonly RULE_iCS_S_DictionaryCall = 130;
	public static readonly RULE_argsCall = 131;
	public static readonly RULE_argCall = 132;
	public static readonly RULE_dictionaryCallStmt = 133;
	public static readonly RULE_argList = 134;
	public static readonly RULE_arg = 135;
	public static readonly RULE_argDefaultValue = 136;
	public static readonly RULE_subscripts = 137;
	public static readonly RULE_subscript = 138;
	public static readonly RULE_ambiguousIdentifier = 139;
	public static readonly RULE_asTypeClause = 140;
	public static readonly RULE_baseType = 141;
	public static readonly RULE_certainIdentifier = 142;
	public static readonly RULE_comparisonOperator = 143;
	public static readonly RULE_complexType = 144;
	public static readonly RULE_fieldLength = 145;
	public static readonly RULE_letterrange = 146;
	public static readonly RULE_lineLabel = 147;
	public static readonly RULE_literal = 148;
	public static readonly RULE_publicPrivateVisibility = 149;
	public static readonly RULE_publicPrivateGlobalVisibility = 150;
	public static readonly RULE_type = 151;
	public static readonly RULE_typeHint = 152;
	public static readonly RULE_visibility = 153;
	public static readonly RULE_ambiguousKeyword = 154;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"startRule", "module", "moduleReferences", "moduleReference", "moduleReferenceValue", 
		"moduleReferenceComponent", "moduleHeader", "moduleConfig", "moduleConfigElement", 
		"moduleAttributes", "moduleOptions", "moduleOption", "moduleBody", "moduleBodyElement", 
		"controlProperties", "cp_Properties", "cp_SingleProperty", "cp_PropertyName", 
		"cp_PropertyValue", "cp_NestedProperty", "cp_ControlType", "cp_ControlIdentifier", 
		"moduleBlock", "attributeStmt", "block", "blockStmt", "appActivateStmt", 
		"beepStmt", "chDirStmt", "chDriveStmt", "closeStmt", "constStmt", "constSubStmt", 
		"dateStmt", "declareStmt", "deftypeStmt", "deleteSettingStmt", "doLoopStmt", 
		"endStmt", "enumerationStmt", "enumerationStmt_Constant", "eraseStmt", 
		"errorStmt", "eventStmt", "exitStmt", "filecopyStmt", "forEachStmt", "forNextStmt", 
		"functionStmt", "getStmt", "goSubStmt", "goToStmt", "ifThenElseStmt", 
		"ifBlockStmt", "ifConditionStmt", "ifElseIfBlockStmt", "ifElseBlockStmt", 
		"implementsStmt", "inputStmt", "killStmt", "letStmt", "lineInputStmt", 
		"loadStmt", "lockStmt", "lsetStmt", "macroIfThenElseStmt", "macroIfBlockStmt", 
		"macroElseIfBlockStmt", "macroElseBlockStmt", "midStmt", "mkdirStmt", 
		"nameStmt", "onErrorStmt", "onGoToStmt", "onGoSubStmt", "openStmt", "outputList", 
		"outputList_Expression", "printStmt", "propertyGetStmt", "propertySetStmt", 
		"propertyLetStmt", "putStmt", "raiseEventStmt", "randomizeStmt", "redimStmt", 
		"redimSubStmt", "resetStmt", "resumeStmt", "returnStmt", "rmdirStmt", 
		"rsetStmt", "savepictureStmt", "saveSettingStmt", "seekStmt", "selectCaseStmt", 
		"sC_Case", "sC_Cond", "sC_CondExpr", "sendkeysStmt", "setattrStmt", "setStmt", 
		"stopStmt", "subStmt", "timeStmt", "typeStmt", "typeStmt_Element", "typeOfStmt", 
		"unloadStmt", "unlockStmt", "valueStmt", "variableStmt", "variableListStmt", 
		"variableSubStmt", "whileWendStmt", "widthStmt", "withStmt", "writeStmt", 
		"explicitCallStmt", "eCS_ProcedureCall", "eCS_MemberProcedureCall", "implicitCallStmt_InBlock", 
		"iCS_B_ProcedureCall", "iCS_B_MemberProcedureCall", "implicitCallStmt_InStmt", 
		"iCS_S_VariableOrProcedureCall", "iCS_S_ProcedureOrArrayCall", "iCS_S_NestedProcedureCall", 
		"iCS_S_MembersCall", "iCS_S_MemberCall", "iCS_S_DictionaryCall", "argsCall", 
		"argCall", "dictionaryCallStmt", "argList", "arg", "argDefaultValue", 
		"subscripts", "subscript", "ambiguousIdentifier", "asTypeClause", "baseType", 
		"certainIdentifier", "comparisonOperator", "complexType", "fieldLength", 
		"letterrange", "lineLabel", "literal", "publicPrivateVisibility", "publicPrivateGlobalVisibility", 
		"type", "typeHint", "visibility", "ambiguousKeyword",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "'&'", "':='", "'@'", "':'", "','", undefined, 
		"'$'", "'.'", "'='", "'!'", "'>='", "'>'", "'#'", "'<='", "'{'", "'('", 
		"'<'", "'-'", "'-='", "'*'", "'<>'", "'%'", "'+'", "'+='", "'^'", "'}'", 
		"')'", "';'", "'['", "']'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ACCESS", "ADDRESSOF", "ALIAS", "AND", "ATTRIBUTE", "APPACTIVATE", 
		"APPEND", "AS", "BEEP", "BEGIN", "BEGINPROPERTY", "BINARY", "BOOLEAN", 
		"BYVAL", "BYREF", "BYTE", "CALL", "CASE", "CHDIR", "CHDRIVE", "CLASS", 
		"CLOSE", "COLLECTION", "CONST", "DATE", "DECLARE", "DEFBOOL", "DEFBYTE", 
		"DEFDATE", "DEFDBL", "DEFDEC", "DEFCUR", "DEFINT", "DEFLNG", "DEFOBJ", 
		"DEFSNG", "DEFSTR", "DEFVAR", "DELETESETTING", "DIM", "DO", "DOUBLE", 
		"EACH", "ELSE", "ELSEIF", "END_ENUM", "END_FUNCTION", "END_IF", "END_PROPERTY", 
		"END_SELECT", "END_SUB", "END_TYPE", "END_WITH", "END", "ENDPROPERTY", 
		"ENUM", "EQV", "ERASE", "ERROR", "EVENT", "EXIT_DO", "EXIT_FOR", "EXIT_FUNCTION", 
		"EXIT_PROPERTY", "EXIT_SUB", "FALSE", "FILECOPY", "FRIEND", "FOR", "FUNCTION", 
		"GET", "GLOBAL", "GOSUB", "GOTO", "IF", "IMP", "IMPLEMENTS", "IN", "INPUT", 
		"IS", "INTEGER", "KILL", "LOAD", "LOCK", "LONG", "LOOP", "LEN", "LET", 
		"LIB", "LIKE", "LINE_INPUT", "LOCK_READ", "LOCK_WRITE", "LOCK_READ_WRITE", 
		"LSET", "MACRO_IF", "MACRO_ELSEIF", "MACRO_ELSE", "MACRO_END_IF", "ME", 
		"MID", "MKDIR", "MOD", "NAME", "NEXT", "NEW", "NOT", "NOTHING", "NULL", 
		"OBJECT", "ON", "ON_ERROR", "ON_LOCAL_ERROR", "OPEN", "OPTIONAL", "OPTION_BASE", 
		"OPTION_EXPLICIT", "OPTION_COMPARE", "OPTION_PRIVATE_MODULE", "OR", "OUTPUT", 
		"PARAMARRAY", "PRESERVE", "PRINT", "PRIVATE", "PROPERTY_GET", "PROPERTY_LET", 
		"PROPERTY_SET", "PUBLIC", "PUT", "RANDOM", "RANDOMIZE", "RAISEEVENT", 
		"READ", "READ_WRITE", "REDIM", "REM", "RESET", "RESUME", "RETURN", "RMDIR", 
		"RSET", "SAVEPICTURE", "SAVESETTING", "SEEK", "SELECT", "SENDKEYS", "SET", 
		"SETATTR", "SHARED", "SINGLE", "SPC", "STATIC", "STEP", "STOP", "STRING", 
		"SUB", "TAB", "TEXT", "THEN", "TIME", "TO", "TRUE", "TYPE", "TYPEOF", 
		"UNLOAD", "UNLOCK", "UNTIL", "VARIANT", "VERSION", "WEND", "WHILE", "WIDTH", 
		"WITH", "WITHEVENTS", "WRITE", "XOR", "AMPERSAND", "ASSIGN", "AT", "COLON", 
		"COMMA", "DIV", "DOLLAR", "DOT", "EQ", "EXCLAMATIONMARK", "GEQ", "GT", 
		"HASH", "LEQ", "LBRACE", "LPAREN", "LT", "MINUS", "MINUS_EQ", "MULT", 
		"NEQ", "PERCENT", "PLUS", "PLUS_EQ", "POW", "RBRACE", "RPAREN", "SEMICOLON", 
		"L_SQUARE_BRACKET", "R_SQUARE_BRACKET", "STRINGLITERAL", "DATELITERAL", 
		"COLORLITERAL", "INTEGERLITERAL", "DOUBLELITERAL", "FILENUMBER", "OCTALLITERAL", 
		"FRX_OFFSET", "GUID", "IDENTIFIER", "LINE_CONTINUATION", "NEWLINE", "COMMENT", 
		"WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(VisualBasic6Parser._LITERAL_NAMES, VisualBasic6Parser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return VisualBasic6Parser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "VisualBasic6.g4"; }

	// @Override
	public get ruleNames(): string[] { return VisualBasic6Parser.ruleNames; }

	// @Override
	public get serializedATN(): string { return VisualBasic6Parser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(VisualBasic6Parser._ATN, this);
	}
	// @RuleVersion(0)
	public startRule(): StartRuleContext {
		let _localctx: StartRuleContext = new StartRuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, VisualBasic6Parser.RULE_startRule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 310;
			this.module();
			this.state = 311;
			this.match(VisualBasic6Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, VisualBasic6Parser.RULE_module);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 314;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				{
				this.state = 313;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 319;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 316;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 321;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 1, this._ctx);
			}
			this.state = 328;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				{
				this.state = 322;
				this.moduleHeader();
				this.state = 324;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 323;
						this.match(VisualBasic6Parser.NEWLINE);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 326;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this.state = 331;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 330;
				this.moduleReferences();
				}
				break;
			}
			this.state = 336;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 333;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 338;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 5, this._ctx);
			}
			this.state = 340;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 339;
				this.controlProperties();
				}
				break;
			}
			this.state = 345;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 342;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 347;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 348;
				this.moduleConfig();
				}
				break;
			}
			this.state = 354;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 351;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 356;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 358;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 357;
				this.moduleAttributes();
				}
				break;
			}
			this.state = 363;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 360;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
			}
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 366;
				this.moduleOptions();
				}
				break;
			}
			this.state = 372;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 369;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 374;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 13, this._ctx);
			}
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 375;
				this.moduleBody();
				}
				break;
			}
			this.state = 381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VisualBasic6Parser.NEWLINE) {
				{
				{
				this.state = 378;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 385;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 384;
				this.match(VisualBasic6Parser.WS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleReferences(): ModuleReferencesContext {
		let _localctx: ModuleReferencesContext = new ModuleReferencesContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, VisualBasic6Parser.RULE_moduleReferences);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 388;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 387;
					this.moduleReference();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 390;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleReference(): ModuleReferenceContext {
		let _localctx: ModuleReferenceContext = new ModuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, VisualBasic6Parser.RULE_moduleReference);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.match(VisualBasic6Parser.OBJECT);
			this.state = 394;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 393;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 396;
			this.match(VisualBasic6Parser.EQ);
			this.state = 398;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 397;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 400;
			this.moduleReferenceValue();
			this.state = 406;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.SEMICOLON) {
				{
				this.state = 401;
				this.match(VisualBasic6Parser.SEMICOLON);
				this.state = 403;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 402;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 405;
				this.moduleReferenceComponent();
				}
			}

			this.state = 411;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 408;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 413;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleReferenceValue(): ModuleReferenceValueContext {
		let _localctx: ModuleReferenceValueContext = new ModuleReferenceValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, VisualBasic6Parser.RULE_moduleReferenceValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 414;
			this.match(VisualBasic6Parser.STRINGLITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleReferenceComponent(): ModuleReferenceComponentContext {
		let _localctx: ModuleReferenceComponentContext = new ModuleReferenceComponentContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, VisualBasic6Parser.RULE_moduleReferenceComponent);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 416;
			this.match(VisualBasic6Parser.STRINGLITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleHeader(): ModuleHeaderContext {
		let _localctx: ModuleHeaderContext = new ModuleHeaderContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, VisualBasic6Parser.RULE_moduleHeader);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 418;
			this.match(VisualBasic6Parser.VERSION);
			this.state = 419;
			this.match(VisualBasic6Parser.WS);
			this.state = 420;
			this.match(VisualBasic6Parser.DOUBLELITERAL);
			this.state = 423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 421;
				this.match(VisualBasic6Parser.WS);
				this.state = 422;
				this.match(VisualBasic6Parser.CLASS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleConfig(): ModuleConfigContext {
		let _localctx: ModuleConfigContext = new ModuleConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, VisualBasic6Parser.RULE_moduleConfig);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.match(VisualBasic6Parser.BEGIN);
			this.state = 427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 426;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 432;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 431;
					this.moduleConfigElement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 436;
			this.match(VisualBasic6Parser.END);
			this.state = 438;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 437;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 440;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleConfigElement(): ModuleConfigElementContext {
		let _localctx: ModuleConfigElementContext = new ModuleConfigElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, VisualBasic6Parser.RULE_moduleConfigElement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 442;
			this.ambiguousIdentifier();
			this.state = 444;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 443;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 446;
			this.match(VisualBasic6Parser.EQ);
			this.state = 448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 447;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 450;
			this.literal();
			this.state = 451;
			this.match(VisualBasic6Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleAttributes(): ModuleAttributesContext {
		let _localctx: ModuleAttributesContext = new ModuleAttributesContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, VisualBasic6Parser.RULE_moduleAttributes);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 459;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 453;
					this.attributeStmt();
					this.state = 455;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 454;
							this.match(VisualBasic6Parser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 457;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 29, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 461;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleOptions(): ModuleOptionsContext {
		let _localctx: ModuleOptionsContext = new ModuleOptionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, VisualBasic6Parser.RULE_moduleOptions);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 463;
					this.moduleOption();
					this.state = 465;
					this._errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							this.state = 464;
							this.match(VisualBasic6Parser.NEWLINE);
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						this.state = 467;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
					} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 471;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 32, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleOption(): ModuleOptionContext {
		let _localctx: ModuleOptionContext = new ModuleOptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, VisualBasic6Parser.RULE_moduleOption);
		let _la: number;
		try {
			this.state = 481;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.OPTION_BASE:
				_localctx = new OptionBaseStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 473;
				this.match(VisualBasic6Parser.OPTION_BASE);
				this.state = 474;
				this.match(VisualBasic6Parser.WS);
				this.state = 475;
				this.match(VisualBasic6Parser.INTEGERLITERAL);
				}
				break;
			case VisualBasic6Parser.OPTION_COMPARE:
				_localctx = new OptionCompareStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 476;
				this.match(VisualBasic6Parser.OPTION_COMPARE);
				this.state = 477;
				this.match(VisualBasic6Parser.WS);
				this.state = 478;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.BINARY || _la === VisualBasic6Parser.TEXT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			case VisualBasic6Parser.OPTION_EXPLICIT:
				_localctx = new OptionExplicitStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 479;
				this.match(VisualBasic6Parser.OPTION_EXPLICIT);
				}
				break;
			case VisualBasic6Parser.OPTION_PRIVATE_MODULE:
				_localctx = new OptionPrivateModuleStmtContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 480;
				this.match(VisualBasic6Parser.OPTION_PRIVATE_MODULE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, VisualBasic6Parser.RULE_moduleBody);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 483;
			this.moduleBodyElement();
			this.state = 492;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 484;
						this.match(VisualBasic6Parser.NEWLINE);
						}
						}
						this.state = 487;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === VisualBasic6Parser.NEWLINE);
					this.state = 489;
					this.moduleBodyElement();
					}
					}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 35, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBodyElement(): ModuleBodyElementContext {
		let _localctx: ModuleBodyElementContext = new ModuleBodyElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, VisualBasic6Parser.RULE_moduleBodyElement);
		try {
			this.state = 507;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 495;
				this.moduleBlock();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 496;
				this.moduleOption();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 497;
				this.declareStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 498;
				this.enumerationStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 499;
				this.eventStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 500;
				this.functionStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 501;
				this.macroIfThenElseStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 502;
				this.propertyGetStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 503;
				this.propertySetStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 504;
				this.propertyLetStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 505;
				this.subStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 506;
				this.typeStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public controlProperties(): ControlPropertiesContext {
		let _localctx: ControlPropertiesContext = new ControlPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, VisualBasic6Parser.RULE_controlProperties);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 509;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 512;
			this.match(VisualBasic6Parser.BEGIN);
			this.state = 513;
			this.match(VisualBasic6Parser.WS);
			this.state = 514;
			this.cp_ControlType();
			this.state = 515;
			this.match(VisualBasic6Parser.WS);
			this.state = 516;
			this.cp_ControlIdentifier();
			this.state = 518;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 517;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 521;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 520;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 526;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 525;
					this.cp_Properties();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 528;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 40, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 530;
			this.match(VisualBasic6Parser.END);
			this.state = 534;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 531;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
				}
				this.state = 536;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 41, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_Properties(): Cp_PropertiesContext {
		let _localctx: Cp_PropertiesContext = new Cp_PropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, VisualBasic6Parser.RULE_cp_Properties);
		try {
			this.state = 540;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 537;
				this.cp_SingleProperty();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 538;
				this.cp_NestedProperty();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 539;
				this.controlProperties();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_SingleProperty(): Cp_SinglePropertyContext {
		let _localctx: Cp_SinglePropertyContext = new Cp_SinglePropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, VisualBasic6Parser.RULE_cp_SingleProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 543;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				{
				this.state = 542;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 545;
			this.implicitCallStmt_InStmt();
			this.state = 547;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 546;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 549;
			this.match(VisualBasic6Parser.EQ);
			this.state = 551;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 550;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 553;
				this.match(VisualBasic6Parser.DOLLAR);
				}
				break;
			}
			this.state = 556;
			this.cp_PropertyValue();
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRX_OFFSET) {
				{
				this.state = 557;
				this.match(VisualBasic6Parser.FRX_OFFSET);
				}
			}

			this.state = 561;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 560;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_PropertyName(): Cp_PropertyNameContext {
		let _localctx: Cp_PropertyNameContext = new Cp_PropertyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, VisualBasic6Parser.RULE_cp_PropertyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				this.state = 565;
				this.match(VisualBasic6Parser.OBJECT);
				this.state = 566;
				this.match(VisualBasic6Parser.DOT);
				}
				break;
			}
			this.state = 569;
			this.ambiguousIdentifier();
			this.state = 574;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.LPAREN) {
				{
				this.state = 570;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 571;
				this.literal();
				this.state = 572;
				this.match(VisualBasic6Parser.RPAREN);
				}
			}

			this.state = 586;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VisualBasic6Parser.DOT) {
				{
				{
				this.state = 576;
				this.match(VisualBasic6Parser.DOT);
				this.state = 577;
				this.ambiguousIdentifier();
				this.state = 582;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.LPAREN) {
					{
					this.state = 578;
					this.match(VisualBasic6Parser.LPAREN);
					this.state = 579;
					this.literal();
					this.state = 580;
					this.match(VisualBasic6Parser.RPAREN);
					}
				}

				}
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_PropertyValue(): Cp_PropertyValueContext {
		let _localctx: Cp_PropertyValueContext = new Cp_PropertyValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, VisualBasic6Parser.RULE_cp_PropertyValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.DOLLAR) {
				{
				this.state = 589;
				this.match(VisualBasic6Parser.DOLLAR);
				}
			}

			this.state = 599;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.FALSE:
			case VisualBasic6Parser.NOTHING:
			case VisualBasic6Parser.NULL:
			case VisualBasic6Parser.TRUE:
			case VisualBasic6Parser.STRINGLITERAL:
			case VisualBasic6Parser.DATELITERAL:
			case VisualBasic6Parser.COLORLITERAL:
			case VisualBasic6Parser.INTEGERLITERAL:
			case VisualBasic6Parser.DOUBLELITERAL:
			case VisualBasic6Parser.FILENUMBER:
			case VisualBasic6Parser.OCTALLITERAL:
				{
				this.state = 592;
				this.literal();
				}
				break;
			case VisualBasic6Parser.LBRACE:
				{
				{
				this.state = 593;
				this.match(VisualBasic6Parser.LBRACE);
				this.state = 594;
				this.ambiguousIdentifier();
				this.state = 595;
				this.match(VisualBasic6Parser.RBRACE);
				}
				}
				break;
			case VisualBasic6Parser.POW:
				{
				this.state = 597;
				this.match(VisualBasic6Parser.POW);
				this.state = 598;
				this.ambiguousIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_NestedProperty(): Cp_NestedPropertyContext {
		let _localctx: Cp_NestedPropertyContext = new Cp_NestedPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, VisualBasic6Parser.RULE_cp_NestedProperty);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 602;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 601;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 604;
			this.match(VisualBasic6Parser.BEGINPROPERTY);
			this.state = 605;
			this.match(VisualBasic6Parser.WS);
			this.state = 606;
			this.ambiguousIdentifier();
			this.state = 610;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.LPAREN) {
				{
				this.state = 607;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 608;
				this.match(VisualBasic6Parser.INTEGERLITERAL);
				this.state = 609;
				this.match(VisualBasic6Parser.RPAREN);
				}
			}

			this.state = 614;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 612;
				this.match(VisualBasic6Parser.WS);
				this.state = 613;
				this.match(VisualBasic6Parser.GUID);
				}
			}

			this.state = 617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 616;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 619;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BEGINPROPERTY) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 621;
					this.cp_Properties();
					}
					}
					this.state = 624;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BEGINPROPERTY) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0));
				}
			}

			this.state = 628;
			this.match(VisualBasic6Parser.ENDPROPERTY);
			this.state = 630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 629;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_ControlType(): Cp_ControlTypeContext {
		let _localctx: Cp_ControlTypeContext = new Cp_ControlTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, VisualBasic6Parser.RULE_cp_ControlType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 634;
			this.complexType();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cp_ControlIdentifier(): Cp_ControlIdentifierContext {
		let _localctx: Cp_ControlIdentifierContext = new Cp_ControlIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, VisualBasic6Parser.RULE_cp_ControlIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 636;
			this.ambiguousIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public moduleBlock(): ModuleBlockContext {
		let _localctx: ModuleBlockContext = new ModuleBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, VisualBasic6Parser.RULE_moduleBlock);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 638;
			this.block();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public attributeStmt(): AttributeStmtContext {
		let _localctx: AttributeStmtContext = new AttributeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, VisualBasic6Parser.RULE_attributeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 640;
			this.match(VisualBasic6Parser.ATTRIBUTE);
			this.state = 641;
			this.match(VisualBasic6Parser.WS);
			this.state = 642;
			this.implicitCallStmt_InStmt();
			this.state = 644;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 643;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 646;
			this.match(VisualBasic6Parser.EQ);
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 647;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 650;
			this.literal();
			this.state = 661;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 652;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 651;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 654;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 656;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 655;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 658;
					this.literal();
					}
					}
				}
				this.state = 663;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 66, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let _localctx: BlockContext = new BlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, VisualBasic6Parser.RULE_block);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 664;
			this.blockStmt();
			this.state = 676;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 666;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 665;
						this.match(VisualBasic6Parser.NEWLINE);
						}
						}
						this.state = 668;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === VisualBasic6Parser.NEWLINE);
					this.state = 671;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 68, this._ctx) ) {
					case 1:
						{
						this.state = 670;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 673;
					this.blockStmt();
					}
					}
				}
				this.state = 678;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 69, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public blockStmt(): BlockStmtContext {
		let _localctx: BlockStmtContext = new BlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, VisualBasic6Parser.RULE_blockStmt);
		try {
			this.state = 746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 679;
				this.appActivateStmt();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 680;
				this.attributeStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 681;
				this.beepStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 682;
				this.chDirStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 683;
				this.chDriveStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 684;
				this.closeStmt();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 685;
				this.constStmt();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 686;
				this.dateStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 687;
				this.deleteSettingStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 688;
				this.deftypeStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 689;
				this.doLoopStmt();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 690;
				this.endStmt();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 691;
				this.eraseStmt();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 692;
				this.errorStmt();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 693;
				this.exitStmt();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 694;
				this.explicitCallStmt();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 695;
				this.filecopyStmt();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 696;
				this.forEachStmt();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 697;
				this.forNextStmt();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 698;
				this.getStmt();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 699;
				this.goSubStmt();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 700;
				this.goToStmt();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 701;
				this.ifThenElseStmt();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 702;
				this.implementsStmt();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 703;
				this.inputStmt();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 704;
				this.killStmt();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 705;
				this.letStmt();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 706;
				this.lineInputStmt();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 707;
				this.lineLabel();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 708;
				this.loadStmt();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 709;
				this.lockStmt();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 710;
				this.lsetStmt();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 711;
				this.macroIfThenElseStmt();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 712;
				this.midStmt();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 713;
				this.mkdirStmt();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 714;
				this.nameStmt();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 715;
				this.onErrorStmt();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 716;
				this.onGoToStmt();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 717;
				this.onGoSubStmt();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 718;
				this.openStmt();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 719;
				this.printStmt();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 720;
				this.putStmt();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 721;
				this.raiseEventStmt();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 722;
				this.randomizeStmt();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 723;
				this.redimStmt();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 724;
				this.resetStmt();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 725;
				this.resumeStmt();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 726;
				this.returnStmt();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 727;
				this.rmdirStmt();
				}
				break;

			case 50:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 728;
				this.rsetStmt();
				}
				break;

			case 51:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 729;
				this.savepictureStmt();
				}
				break;

			case 52:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 730;
				this.saveSettingStmt();
				}
				break;

			case 53:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 731;
				this.seekStmt();
				}
				break;

			case 54:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 732;
				this.selectCaseStmt();
				}
				break;

			case 55:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 733;
				this.sendkeysStmt();
				}
				break;

			case 56:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 734;
				this.setattrStmt();
				}
				break;

			case 57:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 735;
				this.setStmt();
				}
				break;

			case 58:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 736;
				this.stopStmt();
				}
				break;

			case 59:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 737;
				this.timeStmt();
				}
				break;

			case 60:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 738;
				this.unloadStmt();
				}
				break;

			case 61:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 739;
				this.unlockStmt();
				}
				break;

			case 62:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 740;
				this.variableStmt();
				}
				break;

			case 63:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 741;
				this.whileWendStmt();
				}
				break;

			case 64:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 742;
				this.widthStmt();
				}
				break;

			case 65:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 743;
				this.withStmt();
				}
				break;

			case 66:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 744;
				this.writeStmt();
				}
				break;

			case 67:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 745;
				this.implicitCallStmt_InBlock();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public appActivateStmt(): AppActivateStmtContext {
		let _localctx: AppActivateStmtContext = new AppActivateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, VisualBasic6Parser.RULE_appActivateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 748;
			this.match(VisualBasic6Parser.APPACTIVATE);
			this.state = 749;
			this.match(VisualBasic6Parser.WS);
			this.state = 750;
			this.valueStmt(0);
			this.state = 759;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 751;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 754;
				this.match(VisualBasic6Parser.COMMA);
				this.state = 756;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
				case 1:
					{
					this.state = 755;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 758;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public beepStmt(): BeepStmtContext {
		let _localctx: BeepStmtContext = new BeepStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, VisualBasic6Parser.RULE_beepStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 761;
			this.match(VisualBasic6Parser.BEEP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chDirStmt(): ChDirStmtContext {
		let _localctx: ChDirStmtContext = new ChDirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, VisualBasic6Parser.RULE_chDirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 763;
			this.match(VisualBasic6Parser.CHDIR);
			this.state = 764;
			this.match(VisualBasic6Parser.WS);
			this.state = 765;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public chDriveStmt(): ChDriveStmtContext {
		let _localctx: ChDriveStmtContext = new ChDriveStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, VisualBasic6Parser.RULE_chDriveStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(VisualBasic6Parser.CHDRIVE);
			this.state = 768;
			this.match(VisualBasic6Parser.WS);
			this.state = 769;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public closeStmt(): CloseStmtContext {
		let _localctx: CloseStmtContext = new CloseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, VisualBasic6Parser.RULE_closeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.match(VisualBasic6Parser.CLOSE);
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				this.state = 772;
				this.match(VisualBasic6Parser.WS);
				this.state = 773;
				this.valueStmt(0);
				this.state = 784;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 775;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 774;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 777;
						this.match(VisualBasic6Parser.COMMA);
						this.state = 779;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
						case 1:
							{
							this.state = 778;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 781;
						this.valueStmt(0);
						}
						}
					}
					this.state = 786;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 76, this._ctx);
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constStmt(): ConstStmtContext {
		let _localctx: ConstStmtContext = new ConstStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, VisualBasic6Parser.RULE_constStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 792;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 789;
				this.publicPrivateGlobalVisibility();
				this.state = 790;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 794;
			this.match(VisualBasic6Parser.CONST);
			this.state = 795;
			this.match(VisualBasic6Parser.WS);
			this.state = 796;
			this.constSubStmt();
			this.state = 807;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 798;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 797;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 800;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 802;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 801;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 804;
					this.constSubStmt();
					}
					}
				}
				this.state = 809;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 81, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constSubStmt(): ConstSubStmtContext {
		let _localctx: ConstSubStmtContext = new ConstSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, VisualBasic6Parser.RULE_constSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			this.ambiguousIdentifier();
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 811;
				this.typeHint();
				}
			}

			this.state = 816;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
			case 1:
				{
				this.state = 814;
				this.match(VisualBasic6Parser.WS);
				this.state = 815;
				this.asTypeClause();
				}
				break;
			}
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 818;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 821;
			this.match(VisualBasic6Parser.EQ);
			this.state = 823;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 85, this._ctx) ) {
			case 1:
				{
				this.state = 822;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 825;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dateStmt(): DateStmtContext {
		let _localctx: DateStmtContext = new DateStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, VisualBasic6Parser.RULE_dateStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 827;
			this.match(VisualBasic6Parser.DATE);
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 828;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 831;
			this.match(VisualBasic6Parser.EQ);
			this.state = 833;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				{
				this.state = 832;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 835;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declareStmt(): DeclareStmtContext {
		let _localctx: DeclareStmtContext = new DeclareStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, VisualBasic6Parser.RULE_declareStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 837;
				this.visibility();
				this.state = 838;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 842;
			this.match(VisualBasic6Parser.DECLARE);
			this.state = 843;
			this.match(VisualBasic6Parser.WS);
			this.state = 849;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.FUNCTION:
				{
				this.state = 844;
				this.match(VisualBasic6Parser.FUNCTION);
				this.state = 846;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
					{
					this.state = 845;
					this.typeHint();
					}
				}

				}
				break;
			case VisualBasic6Parser.SUB:
				{
				this.state = 848;
				this.match(VisualBasic6Parser.SUB);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 851;
			this.match(VisualBasic6Parser.WS);
			this.state = 852;
			this.ambiguousIdentifier();
			this.state = 854;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 853;
				this.typeHint();
				}
			}

			this.state = 856;
			this.match(VisualBasic6Parser.WS);
			this.state = 857;
			this.match(VisualBasic6Parser.LIB);
			this.state = 858;
			this.match(VisualBasic6Parser.WS);
			this.state = 859;
			this.match(VisualBasic6Parser.STRINGLITERAL);
			this.state = 864;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 860;
				this.match(VisualBasic6Parser.WS);
				this.state = 861;
				this.match(VisualBasic6Parser.ALIAS);
				this.state = 862;
				this.match(VisualBasic6Parser.WS);
				this.state = 863;
				this.match(VisualBasic6Parser.STRINGLITERAL);
				}
				break;
			}
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
			case 1:
				{
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 866;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 869;
				this.argList();
				}
				break;
			}
			this.state = 874;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 95, this._ctx) ) {
			case 1:
				{
				this.state = 872;
				this.match(VisualBasic6Parser.WS);
				this.state = 873;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deftypeStmt(): DeftypeStmtContext {
		let _localctx: DeftypeStmtContext = new DeftypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, VisualBasic6Parser.RULE_deftypeStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			_la = this._input.LA(1);
			if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (VisualBasic6Parser.DEFBOOL - 27)) | (1 << (VisualBasic6Parser.DEFBYTE - 27)) | (1 << (VisualBasic6Parser.DEFDATE - 27)) | (1 << (VisualBasic6Parser.DEFDBL - 27)) | (1 << (VisualBasic6Parser.DEFDEC - 27)) | (1 << (VisualBasic6Parser.DEFCUR - 27)) | (1 << (VisualBasic6Parser.DEFINT - 27)) | (1 << (VisualBasic6Parser.DEFLNG - 27)) | (1 << (VisualBasic6Parser.DEFOBJ - 27)) | (1 << (VisualBasic6Parser.DEFSNG - 27)) | (1 << (VisualBasic6Parser.DEFSTR - 27)) | (1 << (VisualBasic6Parser.DEFVAR - 27)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 877;
			this.match(VisualBasic6Parser.WS);
			this.state = 878;
			this.letterrange();
			this.state = 889;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 879;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 882;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 884;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 883;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 886;
					this.letterrange();
					}
					}
				}
				this.state = 891;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 98, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public deleteSettingStmt(): DeleteSettingStmtContext {
		let _localctx: DeleteSettingStmtContext = new DeleteSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, VisualBasic6Parser.RULE_deleteSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 892;
			this.match(VisualBasic6Parser.DELETESETTING);
			this.state = 893;
			this.match(VisualBasic6Parser.WS);
			this.state = 894;
			this.valueStmt(0);
			this.state = 896;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 895;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 898;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 900;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 899;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 902;
			this.valueStmt(0);
			this.state = 911;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 904;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 903;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 906;
				this.match(VisualBasic6Parser.COMMA);
				this.state = 908;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 102, this._ctx) ) {
				case 1:
					{
					this.state = 907;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 910;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public doLoopStmt(): DoLoopStmtContext {
		let _localctx: DoLoopStmtContext = new DoLoopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, VisualBasic6Parser.RULE_doLoopStmt);
		let _la: number;
		try {
			this.state = 966;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 112, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 913;
				this.match(VisualBasic6Parser.DO);
				this.state = 915;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 914;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 917;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				this.state = 925;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
				case 1:
					{
					this.state = 919;
					this.block();
					this.state = 921;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 920;
						this.match(VisualBasic6Parser.NEWLINE);
						}
						}
						this.state = 923;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === VisualBasic6Parser.NEWLINE);
					}
					break;
				}
				this.state = 927;
				this.match(VisualBasic6Parser.LOOP);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 928;
				this.match(VisualBasic6Parser.DO);
				this.state = 929;
				this.match(VisualBasic6Parser.WS);
				this.state = 930;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.UNTIL || _la === VisualBasic6Parser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 931;
				this.match(VisualBasic6Parser.WS);
				this.state = 932;
				this.valueStmt(0);
				this.state = 934;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 933;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 936;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				this.state = 944;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
				case 1:
					{
					this.state = 938;
					this.block();
					this.state = 940;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 939;
						this.match(VisualBasic6Parser.NEWLINE);
						}
						}
						this.state = 942;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === VisualBasic6Parser.NEWLINE);
					}
					break;
				}
				this.state = 946;
				this.match(VisualBasic6Parser.LOOP);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 948;
				this.match(VisualBasic6Parser.DO);
				this.state = 950;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 949;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 952;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				{
				this.state = 954;
				this.block();
				this.state = 956;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 955;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 958;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				this.state = 960;
				this.match(VisualBasic6Parser.LOOP);
				this.state = 961;
				this.match(VisualBasic6Parser.WS);
				this.state = 962;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.UNTIL || _la === VisualBasic6Parser.WHILE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 963;
				this.match(VisualBasic6Parser.WS);
				this.state = 964;
				this.valueStmt(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public endStmt(): EndStmtContext {
		let _localctx: EndStmtContext = new EndStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, VisualBasic6Parser.RULE_endStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.match(VisualBasic6Parser.END);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt(): EnumerationStmtContext {
		let _localctx: EnumerationStmtContext = new EnumerationStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, VisualBasic6Parser.RULE_enumerationStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 973;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 970;
				this.publicPrivateVisibility();
				this.state = 971;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 975;
			this.match(VisualBasic6Parser.ENUM);
			this.state = 976;
			this.match(VisualBasic6Parser.WS);
			this.state = 977;
			this.ambiguousIdentifier();
			this.state = 979;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 978;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 981;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)))) !== 0) || _la === VisualBasic6Parser.L_SQUARE_BRACKET || _la === VisualBasic6Parser.IDENTIFIER) {
				{
				{
				this.state = 983;
				this.enumerationStmt_Constant();
				}
				}
				this.state = 988;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 989;
			this.match(VisualBasic6Parser.END_ENUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext {
		let _localctx: EnumerationStmt_ConstantContext = new EnumerationStmt_ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, VisualBasic6Parser.RULE_enumerationStmt_Constant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 991;
			this.ambiguousIdentifier();
			this.state = 1000;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.EQ || _la === VisualBasic6Parser.WS) {
				{
				this.state = 993;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 992;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 995;
				this.match(VisualBasic6Parser.EQ);
				this.state = 997;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 117, this._ctx) ) {
				case 1:
					{
					this.state = 996;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 999;
				this.valueStmt(0);
				}
			}

			this.state = 1003;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1002;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1005;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eraseStmt(): EraseStmtContext {
		let _localctx: EraseStmtContext = new EraseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, VisualBasic6Parser.RULE_eraseStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1007;
			this.match(VisualBasic6Parser.ERASE);
			this.state = 1008;
			this.match(VisualBasic6Parser.WS);
			this.state = 1009;
			this.valueStmt(0);
			this.state = 1020;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1011;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1010;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1013;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 1015;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
					case 1:
						{
						this.state = 1014;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1017;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1022;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 122, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorStmt(): ErrorStmtContext {
		let _localctx: ErrorStmtContext = new ErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, VisualBasic6Parser.RULE_errorStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(VisualBasic6Parser.ERROR);
			this.state = 1024;
			this.match(VisualBasic6Parser.WS);
			this.state = 1025;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eventStmt(): EventStmtContext {
		let _localctx: EventStmtContext = new EventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, VisualBasic6Parser.RULE_eventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1027;
				this.visibility();
				this.state = 1028;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1032;
			this.match(VisualBasic6Parser.EVENT);
			this.state = 1033;
			this.match(VisualBasic6Parser.WS);
			this.state = 1034;
			this.ambiguousIdentifier();
			this.state = 1036;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1035;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1038;
			this.argList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exitStmt(): ExitStmtContext {
		let _localctx: ExitStmtContext = new ExitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, VisualBasic6Parser.RULE_exitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1040;
			_la = this._input.LA(1);
			if (!(((((_la - 61)) & ~0x1F) === 0 && ((1 << (_la - 61)) & ((1 << (VisualBasic6Parser.EXIT_DO - 61)) | (1 << (VisualBasic6Parser.EXIT_FOR - 61)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 61)) | (1 << (VisualBasic6Parser.EXIT_PROPERTY - 61)) | (1 << (VisualBasic6Parser.EXIT_SUB - 61)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public filecopyStmt(): FilecopyStmtContext {
		let _localctx: FilecopyStmtContext = new FilecopyStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, VisualBasic6Parser.RULE_filecopyStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1042;
			this.match(VisualBasic6Parser.FILECOPY);
			this.state = 1043;
			this.match(VisualBasic6Parser.WS);
			this.state = 1044;
			this.valueStmt(0);
			this.state = 1046;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1045;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1048;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1050;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 126, this._ctx) ) {
			case 1:
				{
				this.state = 1049;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1052;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forEachStmt(): ForEachStmtContext {
		let _localctx: ForEachStmtContext = new ForEachStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, VisualBasic6Parser.RULE_forEachStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1054;
			this.match(VisualBasic6Parser.FOR);
			this.state = 1055;
			this.match(VisualBasic6Parser.WS);
			this.state = 1056;
			this.match(VisualBasic6Parser.EACH);
			this.state = 1057;
			this.match(VisualBasic6Parser.WS);
			this.state = 1058;
			this.ambiguousIdentifier();
			this.state = 1060;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 1059;
				this.typeHint();
				}
			}

			this.state = 1062;
			this.match(VisualBasic6Parser.WS);
			this.state = 1063;
			this.match(VisualBasic6Parser.IN);
			this.state = 1064;
			this.match(VisualBasic6Parser.WS);
			this.state = 1065;
			this.valueStmt(0);
			this.state = 1067;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1066;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1069;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1077;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 130, this._ctx) ) {
			case 1:
				{
				this.state = 1071;
				this.block();
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1072;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1075;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			this.state = 1079;
			this.match(VisualBasic6Parser.NEXT);
			this.state = 1082;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 131, this._ctx) ) {
			case 1:
				{
				this.state = 1080;
				this.match(VisualBasic6Parser.WS);
				this.state = 1081;
				this.ambiguousIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public forNextStmt(): ForNextStmtContext {
		let _localctx: ForNextStmtContext = new ForNextStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, VisualBasic6Parser.RULE_forNextStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1084;
			this.match(VisualBasic6Parser.FOR);
			this.state = 1085;
			this.match(VisualBasic6Parser.WS);
			this.state = 1086;
			this.iCS_S_VariableOrProcedureCall();
			this.state = 1088;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 1087;
				this.typeHint();
				}
			}

			this.state = 1092;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 133, this._ctx) ) {
			case 1:
				{
				this.state = 1090;
				this.match(VisualBasic6Parser.WS);
				this.state = 1091;
				this.asTypeClause();
				}
				break;
			}
			this.state = 1095;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1094;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1097;
			this.match(VisualBasic6Parser.EQ);
			this.state = 1099;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 135, this._ctx) ) {
			case 1:
				{
				this.state = 1098;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1101;
			this.valueStmt(0);
			this.state = 1102;
			this.match(VisualBasic6Parser.WS);
			this.state = 1103;
			this.match(VisualBasic6Parser.TO);
			this.state = 1104;
			this.match(VisualBasic6Parser.WS);
			this.state = 1105;
			this.valueStmt(0);
			this.state = 1110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1106;
				this.match(VisualBasic6Parser.WS);
				this.state = 1107;
				this.match(VisualBasic6Parser.STEP);
				this.state = 1108;
				this.match(VisualBasic6Parser.WS);
				this.state = 1109;
				this.valueStmt(0);
				}
			}

			this.state = 1113;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1112;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1115;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1123;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1117;
				this.block();
				this.state = 1119;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1118;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1121;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			this.state = 1125;
			this.match(VisualBasic6Parser.NEXT);
			this.state = 1131;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 141, this._ctx) ) {
			case 1:
				{
				this.state = 1126;
				this.match(VisualBasic6Parser.WS);
				this.state = 1127;
				this.ambiguousIdentifier();
				this.state = 1129;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 140, this._ctx) ) {
				case 1:
					{
					this.state = 1128;
					this.typeHint();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionStmt(): FunctionStmtContext {
		let _localctx: FunctionStmtContext = new FunctionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, VisualBasic6Parser.RULE_functionStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1136;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1133;
				this.visibility();
				this.state = 1134;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.STATIC) {
				{
				this.state = 1138;
				this.match(VisualBasic6Parser.STATIC);
				this.state = 1139;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1142;
			this.match(VisualBasic6Parser.FUNCTION);
			this.state = 1143;
			this.match(VisualBasic6Parser.WS);
			this.state = 1144;
			this.ambiguousIdentifier();
			this.state = 1149;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				{
				this.state = 1146;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1145;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1148;
				this.argList();
				}
				break;
			}
			this.state = 1153;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1151;
				this.match(VisualBasic6Parser.WS);
				this.state = 1152;
				this.asTypeClause();
				}
			}

			this.state = 1156;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1155;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1166;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1160;
				this.block();
				this.state = 1162;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1161;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1164;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 1168;
			this.match(VisualBasic6Parser.END_FUNCTION);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getStmt(): GetStmtContext {
		let _localctx: GetStmtContext = new GetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, VisualBasic6Parser.RULE_getStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1170;
			this.match(VisualBasic6Parser.GET);
			this.state = 1171;
			this.match(VisualBasic6Parser.WS);
			this.state = 1172;
			this.valueStmt(0);
			this.state = 1174;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1173;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1176;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1178;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 151, this._ctx) ) {
			case 1:
				{
				this.state = 1177;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 152, this._ctx) ) {
			case 1:
				{
				this.state = 1180;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1183;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1186;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 154, this._ctx) ) {
			case 1:
				{
				this.state = 1187;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1190;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goSubStmt(): GoSubStmtContext {
		let _localctx: GoSubStmtContext = new GoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, VisualBasic6Parser.RULE_goSubStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1192;
			this.match(VisualBasic6Parser.GOSUB);
			this.state = 1193;
			this.match(VisualBasic6Parser.WS);
			this.state = 1194;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public goToStmt(): GoToStmtContext {
		let _localctx: GoToStmtContext = new GoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, VisualBasic6Parser.RULE_goToStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1196;
			this.match(VisualBasic6Parser.GOTO);
			this.state = 1197;
			this.match(VisualBasic6Parser.WS);
			this.state = 1198;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifThenElseStmt(): IfThenElseStmtContext {
		let _localctx: IfThenElseStmtContext = new IfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, VisualBasic6Parser.RULE_ifThenElseStmt);
		let _la: number;
		try {
			this.state = 1225;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 158, this._ctx) ) {
			case 1:
				_localctx = new InlineIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1200;
				this.match(VisualBasic6Parser.IF);
				this.state = 1201;
				this.match(VisualBasic6Parser.WS);
				this.state = 1202;
				this.ifConditionStmt();
				this.state = 1203;
				this.match(VisualBasic6Parser.WS);
				this.state = 1204;
				this.match(VisualBasic6Parser.THEN);
				this.state = 1205;
				this.match(VisualBasic6Parser.WS);
				this.state = 1206;
				this.blockStmt();
				this.state = 1211;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 155, this._ctx) ) {
				case 1:
					{
					this.state = 1207;
					this.match(VisualBasic6Parser.WS);
					this.state = 1208;
					this.match(VisualBasic6Parser.ELSE);
					this.state = 1209;
					this.match(VisualBasic6Parser.WS);
					this.state = 1210;
					this.blockStmt();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new BlockIfThenElseContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1213;
				this.ifBlockStmt();
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VisualBasic6Parser.ELSEIF) {
					{
					{
					this.state = 1214;
					this.ifElseIfBlockStmt();
					}
					}
					this.state = 1219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1221;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.ELSE) {
					{
					this.state = 1220;
					this.ifElseBlockStmt();
					}
				}

				this.state = 1223;
				this.match(VisualBasic6Parser.END_IF);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifBlockStmt(): IfBlockStmtContext {
		let _localctx: IfBlockStmtContext = new IfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, VisualBasic6Parser.RULE_ifBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1227;
			this.match(VisualBasic6Parser.IF);
			this.state = 1228;
			this.match(VisualBasic6Parser.WS);
			this.state = 1229;
			this.ifConditionStmt();
			this.state = 1230;
			this.match(VisualBasic6Parser.WS);
			this.state = 1231;
			this.match(VisualBasic6Parser.THEN);
			this.state = 1233;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1232;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1243;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 161, this._ctx) ) {
			case 1:
				{
				this.state = 1237;
				this.block();
				this.state = 1239;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1238;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1241;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifConditionStmt(): IfConditionStmtContext {
		let _localctx: IfConditionStmtContext = new IfConditionStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, VisualBasic6Parser.RULE_ifConditionStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1245;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext {
		let _localctx: IfElseIfBlockStmtContext = new IfElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, VisualBasic6Parser.RULE_ifElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this.match(VisualBasic6Parser.ELSEIF);
			this.state = 1248;
			this.match(VisualBasic6Parser.WS);
			this.state = 1249;
			this.ifConditionStmt();
			this.state = 1250;
			this.match(VisualBasic6Parser.WS);
			this.state = 1251;
			this.match(VisualBasic6Parser.THEN);
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1252;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1255;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1263;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 164, this._ctx) ) {
			case 1:
				{
				this.state = 1257;
				this.block();
				this.state = 1259;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1258;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1261;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifElseBlockStmt(): IfElseBlockStmtContext {
		let _localctx: IfElseBlockStmtContext = new IfElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, VisualBasic6Parser.RULE_ifElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1265;
			this.match(VisualBasic6Parser.ELSE);
			this.state = 1267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1266;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1269;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1277;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1271;
				this.block();
				this.state = 1273;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1272;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1275;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implementsStmt(): ImplementsStmtContext {
		let _localctx: ImplementsStmtContext = new ImplementsStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, VisualBasic6Parser.RULE_implementsStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.match(VisualBasic6Parser.IMPLEMENTS);
			this.state = 1280;
			this.match(VisualBasic6Parser.WS);
			this.state = 1281;
			this.ambiguousIdentifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public inputStmt(): InputStmtContext {
		let _localctx: InputStmtContext = new InputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, VisualBasic6Parser.RULE_inputStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(VisualBasic6Parser.INPUT);
			this.state = 1284;
			this.match(VisualBasic6Parser.WS);
			this.state = 1285;
			this.valueStmt(0);
			this.state = 1294;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 1287;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1286;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1289;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 1291;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 169, this._ctx) ) {
					case 1:
						{
						this.state = 1290;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1293;
					this.valueStmt(0);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 1296;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 170, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public killStmt(): KillStmtContext {
		let _localctx: KillStmtContext = new KillStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, VisualBasic6Parser.RULE_killStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1298;
			this.match(VisualBasic6Parser.KILL);
			this.state = 1299;
			this.match(VisualBasic6Parser.WS);
			this.state = 1300;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letStmt(): LetStmtContext {
		let _localctx: LetStmtContext = new LetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, VisualBasic6Parser.RULE_letStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1304;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 171, this._ctx) ) {
			case 1:
				{
				this.state = 1302;
				this.match(VisualBasic6Parser.LET);
				this.state = 1303;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1306;
			this.implicitCallStmt_InStmt();
			this.state = 1308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1307;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1310;
			_la = this._input.LA(1);
			if (!(((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (VisualBasic6Parser.EQ - 186)) | (1 << (VisualBasic6Parser.MINUS_EQ - 186)) | (1 << (VisualBasic6Parser.PLUS_EQ - 186)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 173, this._ctx) ) {
			case 1:
				{
				this.state = 1311;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1314;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineInputStmt(): LineInputStmtContext {
		let _localctx: LineInputStmtContext = new LineInputStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, VisualBasic6Parser.RULE_lineInputStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1316;
			this.match(VisualBasic6Parser.LINE_INPUT);
			this.state = 1317;
			this.match(VisualBasic6Parser.WS);
			this.state = 1318;
			this.valueStmt(0);
			this.state = 1320;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1319;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1322;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1324;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 175, this._ctx) ) {
			case 1:
				{
				this.state = 1323;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1326;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loadStmt(): LoadStmtContext {
		let _localctx: LoadStmtContext = new LoadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, VisualBasic6Parser.RULE_loadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1328;
			this.match(VisualBasic6Parser.LOAD);
			this.state = 1329;
			this.match(VisualBasic6Parser.WS);
			this.state = 1330;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lockStmt(): LockStmtContext {
		let _localctx: LockStmtContext = new LockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, VisualBasic6Parser.RULE_lockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1332;
			this.match(VisualBasic6Parser.LOCK);
			this.state = 1333;
			this.match(VisualBasic6Parser.WS);
			this.state = 1334;
			this.valueStmt(0);
			this.state = 1349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 179, this._ctx) ) {
			case 1:
				{
				this.state = 1336;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1335;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1338;
				this.match(VisualBasic6Parser.COMMA);
				this.state = 1340;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 177, this._ctx) ) {
				case 1:
					{
					this.state = 1339;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1342;
				this.valueStmt(0);
				this.state = 1347;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 178, this._ctx) ) {
				case 1:
					{
					this.state = 1343;
					this.match(VisualBasic6Parser.WS);
					this.state = 1344;
					this.match(VisualBasic6Parser.TO);
					this.state = 1345;
					this.match(VisualBasic6Parser.WS);
					this.state = 1346;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lsetStmt(): LsetStmtContext {
		let _localctx: LsetStmtContext = new LsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, VisualBasic6Parser.RULE_lsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1351;
			this.match(VisualBasic6Parser.LSET);
			this.state = 1352;
			this.match(VisualBasic6Parser.WS);
			this.state = 1353;
			this.implicitCallStmt_InStmt();
			this.state = 1355;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1354;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1357;
			this.match(VisualBasic6Parser.EQ);
			this.state = 1359;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 181, this._ctx) ) {
			case 1:
				{
				this.state = 1358;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1361;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext {
		let _localctx: MacroIfThenElseStmtContext = new MacroIfThenElseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, VisualBasic6Parser.RULE_macroIfThenElseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1363;
			this.macroIfBlockStmt();
			this.state = 1367;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VisualBasic6Parser.MACRO_ELSEIF) {
				{
				{
				this.state = 1364;
				this.macroElseIfBlockStmt();
				}
				}
				this.state = 1369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1371;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.MACRO_ELSE) {
				{
				this.state = 1370;
				this.macroElseBlockStmt();
				}
			}

			this.state = 1373;
			this.match(VisualBasic6Parser.MACRO_END_IF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		let _localctx: MacroIfBlockStmtContext = new MacroIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, VisualBasic6Parser.RULE_macroIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1375;
			this.match(VisualBasic6Parser.MACRO_IF);
			this.state = 1376;
			this.match(VisualBasic6Parser.WS);
			this.state = 1377;
			this.ifConditionStmt();
			this.state = 1378;
			this.match(VisualBasic6Parser.WS);
			this.state = 1379;
			this.match(VisualBasic6Parser.THEN);
			this.state = 1381;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1380;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1383;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1391;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OPTION_BASE - 96)) | (1 << (VisualBasic6Parser.OPTION_EXPLICIT - 96)) | (1 << (VisualBasic6Parser.OPTION_COMPARE - 96)) | (1 << (VisualBasic6Parser.OPTION_PRIVATE_MODULE - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)) | (1 << (VisualBasic6Parser.PROPERTY_GET - 96)) | (1 << (VisualBasic6Parser.PROPERTY_LET - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (VisualBasic6Parser.PROPERTY_SET - 128)) | (1 << (VisualBasic6Parser.PUBLIC - 128)) | (1 << (VisualBasic6Parser.PUT - 128)) | (1 << (VisualBasic6Parser.RANDOM - 128)) | (1 << (VisualBasic6Parser.RANDOMIZE - 128)) | (1 << (VisualBasic6Parser.RAISEEVENT - 128)) | (1 << (VisualBasic6Parser.READ - 128)) | (1 << (VisualBasic6Parser.REDIM - 128)) | (1 << (VisualBasic6Parser.REM - 128)) | (1 << (VisualBasic6Parser.RESET - 128)) | (1 << (VisualBasic6Parser.RESUME - 128)) | (1 << (VisualBasic6Parser.RETURN - 128)) | (1 << (VisualBasic6Parser.RMDIR - 128)) | (1 << (VisualBasic6Parser.RSET - 128)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 128)) | (1 << (VisualBasic6Parser.SAVESETTING - 128)) | (1 << (VisualBasic6Parser.SEEK - 128)) | (1 << (VisualBasic6Parser.SELECT - 128)) | (1 << (VisualBasic6Parser.SENDKEYS - 128)) | (1 << (VisualBasic6Parser.SET - 128)) | (1 << (VisualBasic6Parser.SETATTR - 128)) | (1 << (VisualBasic6Parser.SHARED - 128)) | (1 << (VisualBasic6Parser.SINGLE - 128)) | (1 << (VisualBasic6Parser.SPC - 128)) | (1 << (VisualBasic6Parser.STATIC - 128)) | (1 << (VisualBasic6Parser.STEP - 128)) | (1 << (VisualBasic6Parser.STOP - 128)) | (1 << (VisualBasic6Parser.STRING - 128)) | (1 << (VisualBasic6Parser.SUB - 128)) | (1 << (VisualBasic6Parser.TAB - 128)) | (1 << (VisualBasic6Parser.TEXT - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (VisualBasic6Parser.THEN - 160)) | (1 << (VisualBasic6Parser.TIME - 160)) | (1 << (VisualBasic6Parser.TO - 160)) | (1 << (VisualBasic6Parser.TRUE - 160)) | (1 << (VisualBasic6Parser.TYPE - 160)) | (1 << (VisualBasic6Parser.TYPEOF - 160)) | (1 << (VisualBasic6Parser.UNLOAD - 160)) | (1 << (VisualBasic6Parser.UNLOCK - 160)) | (1 << (VisualBasic6Parser.UNTIL - 160)) | (1 << (VisualBasic6Parser.VARIANT - 160)) | (1 << (VisualBasic6Parser.VERSION - 160)) | (1 << (VisualBasic6Parser.WEND - 160)) | (1 << (VisualBasic6Parser.WHILE - 160)) | (1 << (VisualBasic6Parser.WIDTH - 160)) | (1 << (VisualBasic6Parser.WITH - 160)) | (1 << (VisualBasic6Parser.WITHEVENTS - 160)) | (1 << (VisualBasic6Parser.WRITE - 160)) | (1 << (VisualBasic6Parser.XOR - 160)) | (1 << (VisualBasic6Parser.DOT - 160)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 160)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1385;
				this.moduleBody();
				this.state = 1387;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1386;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1389;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext {
		let _localctx: MacroElseIfBlockStmtContext = new MacroElseIfBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, VisualBasic6Parser.RULE_macroElseIfBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1393;
			this.match(VisualBasic6Parser.MACRO_ELSEIF);
			this.state = 1394;
			this.match(VisualBasic6Parser.WS);
			this.state = 1395;
			this.ifConditionStmt();
			this.state = 1396;
			this.match(VisualBasic6Parser.WS);
			this.state = 1397;
			this.match(VisualBasic6Parser.THEN);
			this.state = 1399;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1398;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OPTION_BASE - 96)) | (1 << (VisualBasic6Parser.OPTION_EXPLICIT - 96)) | (1 << (VisualBasic6Parser.OPTION_COMPARE - 96)) | (1 << (VisualBasic6Parser.OPTION_PRIVATE_MODULE - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)) | (1 << (VisualBasic6Parser.PROPERTY_GET - 96)) | (1 << (VisualBasic6Parser.PROPERTY_LET - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (VisualBasic6Parser.PROPERTY_SET - 128)) | (1 << (VisualBasic6Parser.PUBLIC - 128)) | (1 << (VisualBasic6Parser.PUT - 128)) | (1 << (VisualBasic6Parser.RANDOM - 128)) | (1 << (VisualBasic6Parser.RANDOMIZE - 128)) | (1 << (VisualBasic6Parser.RAISEEVENT - 128)) | (1 << (VisualBasic6Parser.READ - 128)) | (1 << (VisualBasic6Parser.REDIM - 128)) | (1 << (VisualBasic6Parser.REM - 128)) | (1 << (VisualBasic6Parser.RESET - 128)) | (1 << (VisualBasic6Parser.RESUME - 128)) | (1 << (VisualBasic6Parser.RETURN - 128)) | (1 << (VisualBasic6Parser.RMDIR - 128)) | (1 << (VisualBasic6Parser.RSET - 128)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 128)) | (1 << (VisualBasic6Parser.SAVESETTING - 128)) | (1 << (VisualBasic6Parser.SEEK - 128)) | (1 << (VisualBasic6Parser.SELECT - 128)) | (1 << (VisualBasic6Parser.SENDKEYS - 128)) | (1 << (VisualBasic6Parser.SET - 128)) | (1 << (VisualBasic6Parser.SETATTR - 128)) | (1 << (VisualBasic6Parser.SHARED - 128)) | (1 << (VisualBasic6Parser.SINGLE - 128)) | (1 << (VisualBasic6Parser.SPC - 128)) | (1 << (VisualBasic6Parser.STATIC - 128)) | (1 << (VisualBasic6Parser.STEP - 128)) | (1 << (VisualBasic6Parser.STOP - 128)) | (1 << (VisualBasic6Parser.STRING - 128)) | (1 << (VisualBasic6Parser.SUB - 128)) | (1 << (VisualBasic6Parser.TAB - 128)) | (1 << (VisualBasic6Parser.TEXT - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (VisualBasic6Parser.THEN - 160)) | (1 << (VisualBasic6Parser.TIME - 160)) | (1 << (VisualBasic6Parser.TO - 160)) | (1 << (VisualBasic6Parser.TRUE - 160)) | (1 << (VisualBasic6Parser.TYPE - 160)) | (1 << (VisualBasic6Parser.TYPEOF - 160)) | (1 << (VisualBasic6Parser.UNLOAD - 160)) | (1 << (VisualBasic6Parser.UNLOCK - 160)) | (1 << (VisualBasic6Parser.UNTIL - 160)) | (1 << (VisualBasic6Parser.VARIANT - 160)) | (1 << (VisualBasic6Parser.VERSION - 160)) | (1 << (VisualBasic6Parser.WEND - 160)) | (1 << (VisualBasic6Parser.WHILE - 160)) | (1 << (VisualBasic6Parser.WIDTH - 160)) | (1 << (VisualBasic6Parser.WITH - 160)) | (1 << (VisualBasic6Parser.WITHEVENTS - 160)) | (1 << (VisualBasic6Parser.WRITE - 160)) | (1 << (VisualBasic6Parser.XOR - 160)) | (1 << (VisualBasic6Parser.DOT - 160)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 160)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1403;
				this.moduleBody();
				this.state = 1405;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1404;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1407;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public macroElseBlockStmt(): MacroElseBlockStmtContext {
		let _localctx: MacroElseBlockStmtContext = new MacroElseBlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, VisualBasic6Parser.RULE_macroElseBlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1411;
			this.match(VisualBasic6Parser.MACRO_ELSE);
			this.state = 1413;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1412;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1423;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OPTION_BASE - 96)) | (1 << (VisualBasic6Parser.OPTION_EXPLICIT - 96)) | (1 << (VisualBasic6Parser.OPTION_COMPARE - 96)) | (1 << (VisualBasic6Parser.OPTION_PRIVATE_MODULE - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)) | (1 << (VisualBasic6Parser.PROPERTY_GET - 96)) | (1 << (VisualBasic6Parser.PROPERTY_LET - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (VisualBasic6Parser.PROPERTY_SET - 128)) | (1 << (VisualBasic6Parser.PUBLIC - 128)) | (1 << (VisualBasic6Parser.PUT - 128)) | (1 << (VisualBasic6Parser.RANDOM - 128)) | (1 << (VisualBasic6Parser.RANDOMIZE - 128)) | (1 << (VisualBasic6Parser.RAISEEVENT - 128)) | (1 << (VisualBasic6Parser.READ - 128)) | (1 << (VisualBasic6Parser.REDIM - 128)) | (1 << (VisualBasic6Parser.REM - 128)) | (1 << (VisualBasic6Parser.RESET - 128)) | (1 << (VisualBasic6Parser.RESUME - 128)) | (1 << (VisualBasic6Parser.RETURN - 128)) | (1 << (VisualBasic6Parser.RMDIR - 128)) | (1 << (VisualBasic6Parser.RSET - 128)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 128)) | (1 << (VisualBasic6Parser.SAVESETTING - 128)) | (1 << (VisualBasic6Parser.SEEK - 128)) | (1 << (VisualBasic6Parser.SELECT - 128)) | (1 << (VisualBasic6Parser.SENDKEYS - 128)) | (1 << (VisualBasic6Parser.SET - 128)) | (1 << (VisualBasic6Parser.SETATTR - 128)) | (1 << (VisualBasic6Parser.SHARED - 128)) | (1 << (VisualBasic6Parser.SINGLE - 128)) | (1 << (VisualBasic6Parser.SPC - 128)) | (1 << (VisualBasic6Parser.STATIC - 128)) | (1 << (VisualBasic6Parser.STEP - 128)) | (1 << (VisualBasic6Parser.STOP - 128)) | (1 << (VisualBasic6Parser.STRING - 128)) | (1 << (VisualBasic6Parser.SUB - 128)) | (1 << (VisualBasic6Parser.TAB - 128)) | (1 << (VisualBasic6Parser.TEXT - 128)))) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (VisualBasic6Parser.THEN - 160)) | (1 << (VisualBasic6Parser.TIME - 160)) | (1 << (VisualBasic6Parser.TO - 160)) | (1 << (VisualBasic6Parser.TRUE - 160)) | (1 << (VisualBasic6Parser.TYPE - 160)) | (1 << (VisualBasic6Parser.TYPEOF - 160)) | (1 << (VisualBasic6Parser.UNLOAD - 160)) | (1 << (VisualBasic6Parser.UNLOCK - 160)) | (1 << (VisualBasic6Parser.UNTIL - 160)) | (1 << (VisualBasic6Parser.VARIANT - 160)) | (1 << (VisualBasic6Parser.VERSION - 160)) | (1 << (VisualBasic6Parser.WEND - 160)) | (1 << (VisualBasic6Parser.WHILE - 160)) | (1 << (VisualBasic6Parser.WIDTH - 160)) | (1 << (VisualBasic6Parser.WITH - 160)) | (1 << (VisualBasic6Parser.WITHEVENTS - 160)) | (1 << (VisualBasic6Parser.WRITE - 160)) | (1 << (VisualBasic6Parser.XOR - 160)) | (1 << (VisualBasic6Parser.DOT - 160)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 160)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1417;
				this.moduleBody();
				this.state = 1419;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1418;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1421;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public midStmt(): MidStmtContext {
		let _localctx: MidStmtContext = new MidStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, VisualBasic6Parser.RULE_midStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1425;
			this.match(VisualBasic6Parser.MID);
			this.state = 1427;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1426;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1429;
			this.match(VisualBasic6Parser.LPAREN);
			this.state = 1431;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 194, this._ctx) ) {
			case 1:
				{
				this.state = 1430;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1433;
			this.argsCall();
			this.state = 1435;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1434;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1437;
			this.match(VisualBasic6Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public mkdirStmt(): MkdirStmtContext {
		let _localctx: MkdirStmtContext = new MkdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, VisualBasic6Parser.RULE_mkdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1439;
			this.match(VisualBasic6Parser.MKDIR);
			this.state = 1440;
			this.match(VisualBasic6Parser.WS);
			this.state = 1441;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nameStmt(): NameStmtContext {
		let _localctx: NameStmtContext = new NameStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, VisualBasic6Parser.RULE_nameStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1443;
			this.match(VisualBasic6Parser.NAME);
			this.state = 1444;
			this.match(VisualBasic6Parser.WS);
			this.state = 1445;
			this.valueStmt(0);
			this.state = 1446;
			this.match(VisualBasic6Parser.WS);
			this.state = 1447;
			this.match(VisualBasic6Parser.AS);
			this.state = 1448;
			this.match(VisualBasic6Parser.WS);
			this.state = 1449;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onErrorStmt(): OnErrorStmtContext {
		let _localctx: OnErrorStmtContext = new OnErrorStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, VisualBasic6Parser.RULE_onErrorStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1451;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.ON_ERROR || _la === VisualBasic6Parser.ON_LOCAL_ERROR)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1452;
			this.match(VisualBasic6Parser.WS);
			this.state = 1462;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.GOTO:
				{
				this.state = 1453;
				this.match(VisualBasic6Parser.GOTO);
				this.state = 1454;
				this.match(VisualBasic6Parser.WS);
				this.state = 1455;
				this.valueStmt(0);
				this.state = 1457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.COLON) {
					{
					this.state = 1456;
					this.match(VisualBasic6Parser.COLON);
					}
				}

				}
				break;
			case VisualBasic6Parser.RESUME:
				{
				this.state = 1459;
				this.match(VisualBasic6Parser.RESUME);
				this.state = 1460;
				this.match(VisualBasic6Parser.WS);
				this.state = 1461;
				this.match(VisualBasic6Parser.NEXT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onGoToStmt(): OnGoToStmtContext {
		let _localctx: OnGoToStmtContext = new OnGoToStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, VisualBasic6Parser.RULE_onGoToStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1464;
			this.match(VisualBasic6Parser.ON);
			this.state = 1465;
			this.match(VisualBasic6Parser.WS);
			this.state = 1466;
			this.valueStmt(0);
			this.state = 1467;
			this.match(VisualBasic6Parser.WS);
			this.state = 1468;
			this.match(VisualBasic6Parser.GOTO);
			this.state = 1469;
			this.match(VisualBasic6Parser.WS);
			this.state = 1470;
			this.valueStmt(0);
			this.state = 1481;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1471;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1474;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 1476;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 199, this._ctx) ) {
					case 1:
						{
						this.state = 1475;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1478;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1483;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 200, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onGoSubStmt(): OnGoSubStmtContext {
		let _localctx: OnGoSubStmtContext = new OnGoSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, VisualBasic6Parser.RULE_onGoSubStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1484;
			this.match(VisualBasic6Parser.ON);
			this.state = 1485;
			this.match(VisualBasic6Parser.WS);
			this.state = 1486;
			this.valueStmt(0);
			this.state = 1487;
			this.match(VisualBasic6Parser.WS);
			this.state = 1488;
			this.match(VisualBasic6Parser.GOSUB);
			this.state = 1489;
			this.match(VisualBasic6Parser.WS);
			this.state = 1490;
			this.valueStmt(0);
			this.state = 1501;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1492;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1491;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1494;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 1496;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 202, this._ctx) ) {
					case 1:
						{
						this.state = 1495;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1498;
					this.valueStmt(0);
					}
					}
				}
				this.state = 1503;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 203, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public openStmt(): OpenStmtContext {
		let _localctx: OpenStmtContext = new OpenStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, VisualBasic6Parser.RULE_openStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1504;
			this.match(VisualBasic6Parser.OPEN);
			this.state = 1505;
			this.match(VisualBasic6Parser.WS);
			this.state = 1506;
			this.valueStmt(0);
			this.state = 1507;
			this.match(VisualBasic6Parser.WS);
			this.state = 1508;
			this.match(VisualBasic6Parser.FOR);
			this.state = 1509;
			this.match(VisualBasic6Parser.WS);
			this.state = 1510;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.APPEND || _la === VisualBasic6Parser.BINARY || _la === VisualBasic6Parser.INPUT || _la === VisualBasic6Parser.OUTPUT || _la === VisualBasic6Parser.RANDOM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1515;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 204, this._ctx) ) {
			case 1:
				{
				this.state = 1511;
				this.match(VisualBasic6Parser.WS);
				this.state = 1512;
				this.match(VisualBasic6Parser.ACCESS);
				this.state = 1513;
				this.match(VisualBasic6Parser.WS);
				this.state = 1514;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.READ || _la === VisualBasic6Parser.READ_WRITE || _la === VisualBasic6Parser.WRITE)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 205, this._ctx) ) {
			case 1:
				{
				this.state = 1517;
				this.match(VisualBasic6Parser.WS);
				this.state = 1518;
				_la = this._input.LA(1);
				if (!(((((_la - 92)) & ~0x1F) === 0 && ((1 << (_la - 92)) & ((1 << (VisualBasic6Parser.LOCK_READ - 92)) | (1 << (VisualBasic6Parser.LOCK_WRITE - 92)) | (1 << (VisualBasic6Parser.LOCK_READ_WRITE - 92)))) !== 0) || _la === VisualBasic6Parser.SHARED)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			this.state = 1521;
			this.match(VisualBasic6Parser.WS);
			this.state = 1522;
			this.match(VisualBasic6Parser.AS);
			this.state = 1523;
			this.match(VisualBasic6Parser.WS);
			this.state = 1524;
			this.valueStmt(0);
			this.state = 1535;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 208, this._ctx) ) {
			case 1:
				{
				this.state = 1525;
				this.match(VisualBasic6Parser.WS);
				this.state = 1526;
				this.match(VisualBasic6Parser.LEN);
				this.state = 1528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1527;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1530;
				this.match(VisualBasic6Parser.EQ);
				this.state = 1532;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 207, this._ctx) ) {
				case 1:
					{
					this.state = 1531;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1534;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputList(): OutputListContext {
		let _localctx: OutputListContext = new OutputListContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, VisualBasic6Parser.RULE_outputList);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1570;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 218, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1537;
				this.outputList_Expression();
				this.state = 1550;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1539;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 1538;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 1541;
						_la = this._input.LA(1);
						if (!(_la === VisualBasic6Parser.COMMA || _la === VisualBasic6Parser.SEMICOLON)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1543;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 210, this._ctx) ) {
						case 1:
							{
							this.state = 1542;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 1546;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 211, this._ctx) ) {
						case 1:
							{
							this.state = 1545;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
					}
					this.state = 1552;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 212, this._ctx);
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1554;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 213, this._ctx) ) {
				case 1:
					{
					this.state = 1553;
					this.outputList_Expression();
					}
					break;
				}
				this.state = 1566;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 1557;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 1556;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 1559;
						_la = this._input.LA(1);
						if (!(_la === VisualBasic6Parser.COMMA || _la === VisualBasic6Parser.SEMICOLON)) {
						this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 1561;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 215, this._ctx) ) {
						case 1:
							{
							this.state = 1560;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 1564;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 216, this._ctx) ) {
						case 1:
							{
							this.state = 1563;
							this.outputList_Expression();
							}
							break;
						}
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1568;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 217, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public outputList_Expression(): OutputList_ExpressionContext {
		let _localctx: OutputList_ExpressionContext = new OutputList_ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, VisualBasic6Parser.RULE_outputList_Expression);
		let _la: number;
		try {
			this.state = 1589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 223, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1572;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.SPC || _la === VisualBasic6Parser.TAB)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 1586;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 222, this._ctx) ) {
				case 1:
					{
					this.state = 1574;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1573;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1576;
					this.match(VisualBasic6Parser.LPAREN);
					this.state = 1578;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 220, this._ctx) ) {
					case 1:
						{
						this.state = 1577;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1580;
					this.argsCall();
					this.state = 1582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1581;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1584;
					this.match(VisualBasic6Parser.RPAREN);
					}
					break;
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1588;
				this.valueStmt(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public printStmt(): PrintStmtContext {
		let _localctx: PrintStmtContext = new PrintStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, VisualBasic6Parser.RULE_printStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1591;
			this.match(VisualBasic6Parser.PRINT);
			this.state = 1592;
			this.match(VisualBasic6Parser.WS);
			this.state = 1593;
			this.valueStmt(0);
			this.state = 1595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1594;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1597;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1602;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 226, this._ctx) ) {
			case 1:
				{
				this.state = 1599;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 225, this._ctx) ) {
				case 1:
					{
					this.state = 1598;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1601;
				this.outputList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyGetStmt(): PropertyGetStmtContext {
		let _localctx: PropertyGetStmtContext = new PropertyGetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, VisualBasic6Parser.RULE_propertyGetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1604;
				this.visibility();
				this.state = 1605;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.STATIC) {
				{
				this.state = 1609;
				this.match(VisualBasic6Parser.STATIC);
				this.state = 1610;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1613;
			this.match(VisualBasic6Parser.PROPERTY_GET);
			this.state = 1614;
			this.match(VisualBasic6Parser.WS);
			this.state = 1615;
			this.ambiguousIdentifier();
			this.state = 1617;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 1616;
				this.typeHint();
				}
			}

			this.state = 1623;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 231, this._ctx) ) {
			case 1:
				{
				this.state = 1620;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1619;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1622;
				this.argList();
				}
				break;
			}
			this.state = 1627;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1625;
				this.match(VisualBasic6Parser.WS);
				this.state = 1626;
				this.asTypeClause();
				}
			}

			this.state = 1630;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1629;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1632;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1640;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1634;
				this.block();
				this.state = 1636;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1635;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1638;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 1642;
			this.match(VisualBasic6Parser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertySetStmt(): PropertySetStmtContext {
		let _localctx: PropertySetStmtContext = new PropertySetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, VisualBasic6Parser.RULE_propertySetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1644;
				this.visibility();
				this.state = 1645;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1651;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.STATIC) {
				{
				this.state = 1649;
				this.match(VisualBasic6Parser.STATIC);
				this.state = 1650;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1653;
			this.match(VisualBasic6Parser.PROPERTY_SET);
			this.state = 1654;
			this.match(VisualBasic6Parser.WS);
			this.state = 1655;
			this.ambiguousIdentifier();
			this.state = 1660;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.LPAREN || _la === VisualBasic6Parser.WS) {
				{
				this.state = 1657;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1656;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1659;
				this.argList();
				}
			}

			this.state = 1663;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1662;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1665;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1667;
				this.block();
				this.state = 1669;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1668;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1671;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 1675;
			this.match(VisualBasic6Parser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public propertyLetStmt(): PropertyLetStmtContext {
		let _localctx: PropertyLetStmtContext = new PropertyLetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, VisualBasic6Parser.RULE_propertyLetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1677;
				this.visibility();
				this.state = 1678;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1684;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.STATIC) {
				{
				this.state = 1682;
				this.match(VisualBasic6Parser.STATIC);
				this.state = 1683;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1686;
			this.match(VisualBasic6Parser.PROPERTY_LET);
			this.state = 1687;
			this.match(VisualBasic6Parser.WS);
			this.state = 1688;
			this.ambiguousIdentifier();
			this.state = 1693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.LPAREN || _la === VisualBasic6Parser.WS) {
				{
				this.state = 1690;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1689;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1692;
				this.argList();
				}
			}

			this.state = 1696;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1695;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1698;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1706;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 1700;
				this.block();
				this.state = 1702;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1701;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1704;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 1708;
			this.match(VisualBasic6Parser.END_PROPERTY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public putStmt(): PutStmtContext {
		let _localctx: PutStmtContext = new PutStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, VisualBasic6Parser.RULE_putStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1710;
			this.match(VisualBasic6Parser.PUT);
			this.state = 1711;
			this.match(VisualBasic6Parser.WS);
			this.state = 1712;
			this.valueStmt(0);
			this.state = 1714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1713;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1716;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1718;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 251, this._ctx) ) {
			case 1:
				{
				this.state = 1717;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1721;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 252, this._ctx) ) {
			case 1:
				{
				this.state = 1720;
				this.valueStmt(0);
				}
				break;
			}
			this.state = 1724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1723;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1726;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1728;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 254, this._ctx) ) {
			case 1:
				{
				this.state = 1727;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1730;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public raiseEventStmt(): RaiseEventStmtContext {
		let _localctx: RaiseEventStmtContext = new RaiseEventStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, VisualBasic6Parser.RULE_raiseEventStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1732;
			this.match(VisualBasic6Parser.RAISEEVENT);
			this.state = 1733;
			this.match(VisualBasic6Parser.WS);
			this.state = 1734;
			this.ambiguousIdentifier();
			this.state = 1749;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 259, this._ctx) ) {
			case 1:
				{
				this.state = 1736;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1735;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1738;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 1740;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 256, this._ctx) ) {
				case 1:
					{
					this.state = 1739;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1746;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.COMMA - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)) | (1 << (VisualBasic6Parser.LPAREN - 164)) | (1 << (VisualBasic6Parser.MINUS - 164)))) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & ((1 << (VisualBasic6Parser.PLUS - 200)) | (1 << (VisualBasic6Parser.SEMICOLON - 200)) | (1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 200)) | (1 << (VisualBasic6Parser.STRINGLITERAL - 200)) | (1 << (VisualBasic6Parser.DATELITERAL - 200)) | (1 << (VisualBasic6Parser.COLORLITERAL - 200)) | (1 << (VisualBasic6Parser.INTEGERLITERAL - 200)) | (1 << (VisualBasic6Parser.DOUBLELITERAL - 200)) | (1 << (VisualBasic6Parser.FILENUMBER - 200)) | (1 << (VisualBasic6Parser.OCTALLITERAL - 200)) | (1 << (VisualBasic6Parser.IDENTIFIER - 200)) | (1 << (VisualBasic6Parser.WS - 200)))) !== 0)) {
					{
					this.state = 1742;
					this.argsCall();
					this.state = 1744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1743;
						this.match(VisualBasic6Parser.WS);
						}
					}

					}
				}

				this.state = 1748;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public randomizeStmt(): RandomizeStmtContext {
		let _localctx: RandomizeStmtContext = new RandomizeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, VisualBasic6Parser.RULE_randomizeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1751;
			this.match(VisualBasic6Parser.RANDOMIZE);
			this.state = 1754;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 260, this._ctx) ) {
			case 1:
				{
				this.state = 1752;
				this.match(VisualBasic6Parser.WS);
				this.state = 1753;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redimStmt(): RedimStmtContext {
		let _localctx: RedimStmtContext = new RedimStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, VisualBasic6Parser.RULE_redimStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1756;
			this.match(VisualBasic6Parser.REDIM);
			this.state = 1757;
			this.match(VisualBasic6Parser.WS);
			this.state = 1760;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 261, this._ctx) ) {
			case 1:
				{
				this.state = 1758;
				this.match(VisualBasic6Parser.PRESERVE);
				this.state = 1759;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1762;
			this.redimSubStmt();
			this.state = 1773;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1764;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 1763;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 1766;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 1768;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 263, this._ctx) ) {
					case 1:
						{
						this.state = 1767;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 1770;
					this.redimSubStmt();
					}
					}
				}
				this.state = 1775;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 264, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public redimSubStmt(): RedimSubStmtContext {
		let _localctx: RedimSubStmtContext = new RedimSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, VisualBasic6Parser.RULE_redimSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1776;
			this.implicitCallStmt_InStmt();
			this.state = 1778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1777;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1780;
			this.match(VisualBasic6Parser.LPAREN);
			this.state = 1782;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 266, this._ctx) ) {
			case 1:
				{
				this.state = 1781;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1784;
			this.subscripts();
			this.state = 1786;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1785;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1788;
			this.match(VisualBasic6Parser.RPAREN);
			this.state = 1791;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 268, this._ctx) ) {
			case 1:
				{
				this.state = 1789;
				this.match(VisualBasic6Parser.WS);
				this.state = 1790;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resetStmt(): ResetStmtContext {
		let _localctx: ResetStmtContext = new ResetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, VisualBasic6Parser.RULE_resetStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1793;
			this.match(VisualBasic6Parser.RESET);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public resumeStmt(): ResumeStmtContext {
		let _localctx: ResumeStmtContext = new ResumeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, VisualBasic6Parser.RULE_resumeStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1795;
			this.match(VisualBasic6Parser.RESUME);
			this.state = 1801;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 270, this._ctx) ) {
			case 1:
				{
				this.state = 1796;
				this.match(VisualBasic6Parser.WS);
				this.state = 1799;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 269, this._ctx) ) {
				case 1:
					{
					this.state = 1797;
					this.match(VisualBasic6Parser.NEXT);
					}
					break;

				case 2:
					{
					this.state = 1798;
					this.ambiguousIdentifier();
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, VisualBasic6Parser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1803;
			this.match(VisualBasic6Parser.RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rmdirStmt(): RmdirStmtContext {
		let _localctx: RmdirStmtContext = new RmdirStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, VisualBasic6Parser.RULE_rmdirStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1805;
			this.match(VisualBasic6Parser.RMDIR);
			this.state = 1806;
			this.match(VisualBasic6Parser.WS);
			this.state = 1807;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rsetStmt(): RsetStmtContext {
		let _localctx: RsetStmtContext = new RsetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, VisualBasic6Parser.RULE_rsetStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1809;
			this.match(VisualBasic6Parser.RSET);
			this.state = 1810;
			this.match(VisualBasic6Parser.WS);
			this.state = 1811;
			this.implicitCallStmt_InStmt();
			this.state = 1813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1812;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1815;
			this.match(VisualBasic6Parser.EQ);
			this.state = 1817;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 272, this._ctx) ) {
			case 1:
				{
				this.state = 1816;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1819;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public savepictureStmt(): SavepictureStmtContext {
		let _localctx: SavepictureStmtContext = new SavepictureStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, VisualBasic6Parser.RULE_savepictureStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1821;
			this.match(VisualBasic6Parser.SAVEPICTURE);
			this.state = 1822;
			this.match(VisualBasic6Parser.WS);
			this.state = 1823;
			this.valueStmt(0);
			this.state = 1825;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1824;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1827;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1829;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 274, this._ctx) ) {
			case 1:
				{
				this.state = 1828;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1831;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public saveSettingStmt(): SaveSettingStmtContext {
		let _localctx: SaveSettingStmtContext = new SaveSettingStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, VisualBasic6Parser.RULE_saveSettingStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1833;
			this.match(VisualBasic6Parser.SAVESETTING);
			this.state = 1834;
			this.match(VisualBasic6Parser.WS);
			this.state = 1835;
			this.valueStmt(0);
			this.state = 1837;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1836;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1839;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1841;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 276, this._ctx) ) {
			case 1:
				{
				this.state = 1840;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1843;
			this.valueStmt(0);
			this.state = 1845;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1844;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1847;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1849;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 278, this._ctx) ) {
			case 1:
				{
				this.state = 1848;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1851;
			this.valueStmt(0);
			this.state = 1853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1852;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1855;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1857;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 280, this._ctx) ) {
			case 1:
				{
				this.state = 1856;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1859;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public seekStmt(): SeekStmtContext {
		let _localctx: SeekStmtContext = new SeekStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, VisualBasic6Parser.RULE_seekStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1861;
			this.match(VisualBasic6Parser.SEEK);
			this.state = 1862;
			this.match(VisualBasic6Parser.WS);
			this.state = 1863;
			this.valueStmt(0);
			this.state = 1865;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1864;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1867;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 282, this._ctx) ) {
			case 1:
				{
				this.state = 1868;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1871;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public selectCaseStmt(): SelectCaseStmtContext {
		let _localctx: SelectCaseStmtContext = new SelectCaseStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, VisualBasic6Parser.RULE_selectCaseStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1873;
			this.match(VisualBasic6Parser.SELECT);
			this.state = 1874;
			this.match(VisualBasic6Parser.WS);
			this.state = 1875;
			this.match(VisualBasic6Parser.CASE);
			this.state = 1876;
			this.match(VisualBasic6Parser.WS);
			this.state = 1877;
			this.valueStmt(0);
			this.state = 1879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1878;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 1881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 1886;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VisualBasic6Parser.CASE) {
				{
				{
				this.state = 1883;
				this.sC_Case();
				}
				}
				this.state = 1888;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1889;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1892;
			this.match(VisualBasic6Parser.END_SELECT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sC_Case(): SC_CaseContext {
		let _localctx: SC_CaseContext = new SC_CaseContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, VisualBasic6Parser.RULE_sC_Case);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1894;
			this.match(VisualBasic6Parser.CASE);
			this.state = 1895;
			this.match(VisualBasic6Parser.WS);
			this.state = 1896;
			this.sC_Cond();
			this.state = 1898;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 286, this._ctx) ) {
			case 1:
				{
				this.state = 1897;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1914;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 290, this._ctx) ) {
			case 1:
				{
				this.state = 1901;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.COLON) {
					{
					this.state = 1900;
					this.match(VisualBasic6Parser.COLON);
					}
				}

				this.state = 1906;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === VisualBasic6Parser.NEWLINE) {
					{
					{
					this.state = 1903;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1908;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;

			case 2:
				{
				this.state = 1910;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1909;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1912;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			this.state = 1922;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 292, this._ctx) ) {
			case 1:
				{
				this.state = 1916;
				this.block();
				this.state = 1918;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1917;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 1920;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sC_Cond(): SC_CondContext {
		let _localctx: SC_CondContext = new SC_CondContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, VisualBasic6Parser.RULE_sC_Cond);
		let _la: number;
		try {
			let _alt: number;
			this.state = 1939;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 296, this._ctx) ) {
			case 1:
				_localctx = new CaseCondElseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1924;
				this.match(VisualBasic6Parser.ELSE);
				}
				break;

			case 2:
				_localctx = new CaseCondExprContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1925;
				this.sC_CondExpr();
				this.state = 1936;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 1927;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 1926;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 1929;
						this.match(VisualBasic6Parser.COMMA);
						this.state = 1931;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 294, this._ctx) ) {
						case 1:
							{
							this.state = 1930;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 1933;
						this.sC_CondExpr();
						}
						}
					}
					this.state = 1938;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 295, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sC_CondExpr(): SC_CondExprContext {
		let _localctx: SC_CondExprContext = new SC_CondExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, VisualBasic6Parser.RULE_sC_CondExpr);
		let _la: number;
		try {
			this.state = 1958;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 299, this._ctx) ) {
			case 1:
				_localctx = new CaseCondExprIsContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1941;
				this.match(VisualBasic6Parser.IS);
				this.state = 1943;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1942;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1945;
				this.comparisonOperator();
				this.state = 1947;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 298, this._ctx) ) {
				case 1:
					{
					this.state = 1946;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1949;
				this.valueStmt(0);
				}
				break;

			case 2:
				_localctx = new CaseCondExprValueContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1951;
				this.valueStmt(0);
				}
				break;

			case 3:
				_localctx = new CaseCondExprToContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1952;
				this.valueStmt(0);
				this.state = 1953;
				this.match(VisualBasic6Parser.WS);
				this.state = 1954;
				this.match(VisualBasic6Parser.TO);
				this.state = 1955;
				this.match(VisualBasic6Parser.WS);
				this.state = 1956;
				this.valueStmt(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sendkeysStmt(): SendkeysStmtContext {
		let _localctx: SendkeysStmtContext = new SendkeysStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, VisualBasic6Parser.RULE_sendkeysStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1960;
			this.match(VisualBasic6Parser.SENDKEYS);
			this.state = 1961;
			this.match(VisualBasic6Parser.WS);
			this.state = 1962;
			this.valueStmt(0);
			this.state = 1971;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 302, this._ctx) ) {
			case 1:
				{
				this.state = 1964;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 1963;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 1966;
				this.match(VisualBasic6Parser.COMMA);
				this.state = 1968;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 301, this._ctx) ) {
				case 1:
					{
					this.state = 1967;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 1970;
				this.valueStmt(0);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setattrStmt(): SetattrStmtContext {
		let _localctx: SetattrStmtContext = new SetattrStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, VisualBasic6Parser.RULE_setattrStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1973;
			this.match(VisualBasic6Parser.SETATTR);
			this.state = 1974;
			this.match(VisualBasic6Parser.WS);
			this.state = 1975;
			this.valueStmt(0);
			this.state = 1977;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1976;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1979;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 1981;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 304, this._ctx) ) {
			case 1:
				{
				this.state = 1980;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1983;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setStmt(): SetStmtContext {
		let _localctx: SetStmtContext = new SetStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, VisualBasic6Parser.RULE_setStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1985;
			this.match(VisualBasic6Parser.SET);
			this.state = 1986;
			this.match(VisualBasic6Parser.WS);
			this.state = 1987;
			this.implicitCallStmt_InStmt();
			this.state = 1989;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 1988;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 1991;
			this.match(VisualBasic6Parser.EQ);
			this.state = 1993;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 306, this._ctx) ) {
			case 1:
				{
				this.state = 1992;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 1995;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stopStmt(): StopStmtContext {
		let _localctx: StopStmtContext = new StopStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, VisualBasic6Parser.RULE_stopStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1997;
			this.match(VisualBasic6Parser.STOP);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subStmt(): SubStmtContext {
		let _localctx: SubStmtContext = new SubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, VisualBasic6Parser.RULE_subStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 1999;
				this.visibility();
				this.state = 2000;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2006;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.STATIC) {
				{
				this.state = 2004;
				this.match(VisualBasic6Parser.STATIC);
				this.state = 2005;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2008;
			this.match(VisualBasic6Parser.SUB);
			this.state = 2009;
			this.match(VisualBasic6Parser.WS);
			this.state = 2010;
			this.ambiguousIdentifier();
			this.state = 2015;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.LPAREN || _la === VisualBasic6Parser.WS) {
				{
				this.state = 2012;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2011;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2014;
				this.argList();
				}
			}

			this.state = 2018;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2017;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 2020;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 2028;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 2022;
				this.block();
				this.state = 2024;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2023;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 2026;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 2030;
			this.match(VisualBasic6Parser.END_SUB);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public timeStmt(): TimeStmtContext {
		let _localctx: TimeStmtContext = new TimeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, VisualBasic6Parser.RULE_timeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2032;
			this.match(VisualBasic6Parser.TIME);
			this.state = 2034;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2033;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2036;
			this.match(VisualBasic6Parser.EQ);
			this.state = 2038;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 315, this._ctx) ) {
			case 1:
				{
				this.state = 2037;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2040;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStmt(): TypeStmtContext {
		let _localctx: TypeStmtContext = new TypeStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, VisualBasic6Parser.RULE_typeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2045;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC) {
				{
				this.state = 2042;
				this.visibility();
				this.state = 2043;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2047;
			this.match(VisualBasic6Parser.TYPE);
			this.state = 2048;
			this.match(VisualBasic6Parser.WS);
			this.state = 2049;
			this.ambiguousIdentifier();
			this.state = 2051;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2050;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 2053;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 2058;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)))) !== 0) || _la === VisualBasic6Parser.L_SQUARE_BRACKET || _la === VisualBasic6Parser.IDENTIFIER) {
				{
				{
				this.state = 2055;
				this.typeStmt_Element();
				}
				}
				this.state = 2060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2061;
			this.match(VisualBasic6Parser.END_TYPE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeStmt_Element(): TypeStmt_ElementContext {
		let _localctx: TypeStmt_ElementContext = new TypeStmt_ElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, VisualBasic6Parser.RULE_typeStmt_Element);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2063;
			this.ambiguousIdentifier();
			this.state = 2078;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 323, this._ctx) ) {
			case 1:
				{
				this.state = 2065;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2064;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2067;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2072;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 321, this._ctx) ) {
				case 1:
					{
					this.state = 2069;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 320, this._ctx) ) {
					case 1:
						{
						this.state = 2068;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 2071;
					this.subscripts();
					}
					break;
				}
				this.state = 2075;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2074;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2077;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			this.state = 2082;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2080;
				this.match(VisualBasic6Parser.WS);
				this.state = 2081;
				this.asTypeClause();
				}
			}

			this.state = 2085;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2084;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 2087;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeOfStmt(): TypeOfStmtContext {
		let _localctx: TypeOfStmtContext = new TypeOfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, VisualBasic6Parser.RULE_typeOfStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2089;
			this.match(VisualBasic6Parser.TYPEOF);
			this.state = 2090;
			this.match(VisualBasic6Parser.WS);
			this.state = 2091;
			this.valueStmt(0);
			this.state = 2096;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 326, this._ctx) ) {
			case 1:
				{
				this.state = 2092;
				this.match(VisualBasic6Parser.WS);
				this.state = 2093;
				this.match(VisualBasic6Parser.IS);
				this.state = 2094;
				this.match(VisualBasic6Parser.WS);
				this.state = 2095;
				this.type();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unloadStmt(): UnloadStmtContext {
		let _localctx: UnloadStmtContext = new UnloadStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, VisualBasic6Parser.RULE_unloadStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2098;
			this.match(VisualBasic6Parser.UNLOAD);
			this.state = 2099;
			this.match(VisualBasic6Parser.WS);
			this.state = 2100;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public unlockStmt(): UnlockStmtContext {
		let _localctx: UnlockStmtContext = new UnlockStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, VisualBasic6Parser.RULE_unlockStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2102;
			this.match(VisualBasic6Parser.UNLOCK);
			this.state = 2103;
			this.match(VisualBasic6Parser.WS);
			this.state = 2104;
			this.valueStmt(0);
			this.state = 2119;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 330, this._ctx) ) {
			case 1:
				{
				this.state = 2106;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2105;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2108;
				this.match(VisualBasic6Parser.COMMA);
				this.state = 2110;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 328, this._ctx) ) {
				case 1:
					{
					this.state = 2109;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2112;
				this.valueStmt(0);
				this.state = 2117;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 329, this._ctx) ) {
				case 1:
					{
					this.state = 2113;
					this.match(VisualBasic6Parser.WS);
					this.state = 2114;
					this.match(VisualBasic6Parser.TO);
					this.state = 2115;
					this.match(VisualBasic6Parser.WS);
					this.state = 2116;
					this.valueStmt(0);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public valueStmt(): ValueStmtContext;
	public valueStmt(_p: number): ValueStmtContext;
	// @RuleVersion(0)
	public valueStmt(_p?: number): ValueStmtContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueStmtContext = new ValueStmtContext(this._ctx, _parentState);
		let _prevctx: ValueStmtContext = _localctx;
		let _startState: number = 220;
		this.enterRecursionRule(_localctx, 220, VisualBasic6Parser.RULE_valueStmt, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2190;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 343, this._ctx) ) {
			case 1:
				{
				_localctx = new VsLiteralContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 2122;
				this.literal();
				}
				break;

			case 2:
				{
				_localctx = new VsStructContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2123;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2125;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 331, this._ctx) ) {
				case 1:
					{
					this.state = 2124;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2127;
				this.valueStmt(0);
				this.state = 2138;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2129;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2128;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2131;
						this.match(VisualBasic6Parser.COMMA);
						this.state = 2133;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 333, this._ctx) ) {
						case 1:
							{
							this.state = 2132;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2135;
						this.valueStmt(0);
						}
						}
					}
					this.state = 2140;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 334, this._ctx);
				}
				this.state = 2142;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2141;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2144;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;

			case 3:
				{
				_localctx = new VsNewContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2146;
				this.match(VisualBasic6Parser.NEW);
				this.state = 2147;
				this.match(VisualBasic6Parser.WS);
				this.state = 2148;
				this.valueStmt(29);
				}
				break;

			case 4:
				{
				_localctx = new VsTypeOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2149;
				this.typeOfStmt();
				}
				break;

			case 5:
				{
				_localctx = new VsAddressOfContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2150;
				this.match(VisualBasic6Parser.ADDRESSOF);
				this.state = 2151;
				this.match(VisualBasic6Parser.WS);
				this.state = 2152;
				this.valueStmt(27);
				}
				break;

			case 6:
				{
				_localctx = new VsAssignContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2153;
				this.implicitCallStmt_InStmt();
				this.state = 2155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2154;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2157;
				this.match(VisualBasic6Parser.ASSIGN);
				this.state = 2159;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 337, this._ctx) ) {
				case 1:
					{
					this.state = 2158;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2161;
				this.valueStmt(26);
				}
				break;

			case 7:
				{
				_localctx = new VsNegationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2163;
				this.match(VisualBasic6Parser.MINUS);
				this.state = 2165;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 338, this._ctx) ) {
				case 1:
					{
					this.state = 2164;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2167;
				this.valueStmt(24);
				}
				break;

			case 8:
				{
				_localctx = new VsPlusContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2168;
				this.match(VisualBasic6Parser.PLUS);
				this.state = 2170;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 339, this._ctx) ) {
				case 1:
					{
					this.state = 2169;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2172;
				this.valueStmt(23);
				}
				break;

			case 9:
				{
				_localctx = new VsNotContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2173;
				this.match(VisualBasic6Parser.NOT);
				this.state = 2186;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case VisualBasic6Parser.WS:
					{
					this.state = 2174;
					this.match(VisualBasic6Parser.WS);
					this.state = 2175;
					this.valueStmt(0);
					}
					break;
				case VisualBasic6Parser.LPAREN:
					{
					this.state = 2176;
					this.match(VisualBasic6Parser.LPAREN);
					this.state = 2178;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 340, this._ctx) ) {
					case 1:
						{
						this.state = 2177;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 2180;
					this.valueStmt(0);
					this.state = 2182;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2181;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2184;
					this.match(VisualBasic6Parser.RPAREN);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 10:
				{
				_localctx = new VsICSContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2188;
				this.implicitCallStmt_InStmt();
				}
				break;

			case 11:
				{
				_localctx = new VsMidContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 2189;
				this.midStmt();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 2366;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 381, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 2364;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 380, this._ctx) ) {
					case 1:
						{
						_localctx = new VsPowContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2192;
						if (!(this.precpred(this._ctx, 25))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 25)");
						}
						this.state = 2194;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2193;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2196;
						this.match(VisualBasic6Parser.POW);
						this.state = 2198;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 345, this._ctx) ) {
						case 1:
							{
							this.state = 2197;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2200;
						this.valueStmt(26);
						}
						break;

					case 2:
						{
						_localctx = new VsDivContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2201;
						if (!(this.precpred(this._ctx, 22))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 22)");
						}
						this.state = 2203;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2202;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2205;
						this.match(VisualBasic6Parser.DIV);
						this.state = 2207;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 347, this._ctx) ) {
						case 1:
							{
							this.state = 2206;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2209;
						this.valueStmt(23);
						}
						break;

					case 3:
						{
						_localctx = new VsMultContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2210;
						if (!(this.precpred(this._ctx, 21))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 21)");
						}
						this.state = 2212;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2211;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2214;
						this.match(VisualBasic6Parser.MULT);
						this.state = 2216;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 349, this._ctx) ) {
						case 1:
							{
							this.state = 2215;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2218;
						this.valueStmt(22);
						}
						break;

					case 4:
						{
						_localctx = new VsModContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2219;
						if (!(this.precpred(this._ctx, 20))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 20)");
						}
						this.state = 2221;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2220;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2223;
						this.match(VisualBasic6Parser.MOD);
						this.state = 2225;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 351, this._ctx) ) {
						case 1:
							{
							this.state = 2224;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2227;
						this.valueStmt(21);
						}
						break;

					case 5:
						{
						_localctx = new VsAddContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2228;
						if (!(this.precpred(this._ctx, 19))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 19)");
						}
						this.state = 2230;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2229;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2232;
						this.match(VisualBasic6Parser.PLUS);
						this.state = 2234;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 353, this._ctx) ) {
						case 1:
							{
							this.state = 2233;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2236;
						this.valueStmt(20);
						}
						break;

					case 6:
						{
						_localctx = new VsMinusContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2237;
						if (!(this.precpred(this._ctx, 18))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 18)");
						}
						this.state = 2239;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2238;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2241;
						this.match(VisualBasic6Parser.MINUS);
						this.state = 2243;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 355, this._ctx) ) {
						case 1:
							{
							this.state = 2242;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2245;
						this.valueStmt(19);
						}
						break;

					case 7:
						{
						_localctx = new VsAmpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2246;
						if (!(this.precpred(this._ctx, 17))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 17)");
						}
						this.state = 2248;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2247;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2250;
						this.match(VisualBasic6Parser.AMPERSAND);
						this.state = 2252;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 357, this._ctx) ) {
						case 1:
							{
							this.state = 2251;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2254;
						this.valueStmt(18);
						}
						break;

					case 8:
						{
						_localctx = new VsEqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2255;
						if (!(this.precpred(this._ctx, 16))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 16)");
						}
						this.state = 2257;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2256;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2259;
						this.match(VisualBasic6Parser.EQ);
						this.state = 2261;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 359, this._ctx) ) {
						case 1:
							{
							this.state = 2260;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2263;
						this.valueStmt(17);
						}
						break;

					case 9:
						{
						_localctx = new VsNeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2264;
						if (!(this.precpred(this._ctx, 15))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 15)");
						}
						this.state = 2266;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2265;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2268;
						this.match(VisualBasic6Parser.NEQ);
						this.state = 2270;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 361, this._ctx) ) {
						case 1:
							{
							this.state = 2269;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2272;
						this.valueStmt(16);
						}
						break;

					case 10:
						{
						_localctx = new VsLtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2273;
						if (!(this.precpred(this._ctx, 14))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 14)");
						}
						this.state = 2275;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2274;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2277;
						this.match(VisualBasic6Parser.LT);
						this.state = 2279;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 363, this._ctx) ) {
						case 1:
							{
							this.state = 2278;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2281;
						this.valueStmt(15);
						}
						break;

					case 11:
						{
						_localctx = new VsGtContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2282;
						if (!(this.precpred(this._ctx, 13))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 13)");
						}
						this.state = 2284;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2283;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2286;
						this.match(VisualBasic6Parser.GT);
						this.state = 2288;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 365, this._ctx) ) {
						case 1:
							{
							this.state = 2287;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2290;
						this.valueStmt(14);
						}
						break;

					case 12:
						{
						_localctx = new VsLeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2291;
						if (!(this.precpred(this._ctx, 12))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 12)");
						}
						this.state = 2293;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2292;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2295;
						this.match(VisualBasic6Parser.LEQ);
						this.state = 2297;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 367, this._ctx) ) {
						case 1:
							{
							this.state = 2296;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2299;
						this.valueStmt(13);
						}
						break;

					case 13:
						{
						_localctx = new VsGeqContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2300;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 2302;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2301;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2304;
						this.match(VisualBasic6Parser.GEQ);
						this.state = 2306;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 369, this._ctx) ) {
						case 1:
							{
							this.state = 2305;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2308;
						this.valueStmt(12);
						}
						break;

					case 14:
						{
						_localctx = new VsLikeContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2309;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 2310;
						this.match(VisualBasic6Parser.WS);
						this.state = 2311;
						this.match(VisualBasic6Parser.LIKE);
						this.state = 2312;
						this.match(VisualBasic6Parser.WS);
						this.state = 2313;
						this.valueStmt(11);
						}
						break;

					case 15:
						{
						_localctx = new VsIsContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2314;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 2315;
						this.match(VisualBasic6Parser.WS);
						this.state = 2316;
						this.match(VisualBasic6Parser.IS);
						this.state = 2317;
						this.match(VisualBasic6Parser.WS);
						this.state = 2318;
						this.valueStmt(10);
						}
						break;

					case 16:
						{
						_localctx = new VsAndContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2319;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 2321;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2320;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2323;
						this.match(VisualBasic6Parser.AND);
						this.state = 2325;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 371, this._ctx) ) {
						case 1:
							{
							this.state = 2324;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2327;
						this.valueStmt(8);
						}
						break;

					case 17:
						{
						_localctx = new VsOrContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2328;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 2330;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2329;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2332;
						this.match(VisualBasic6Parser.OR);
						this.state = 2334;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 373, this._ctx) ) {
						case 1:
							{
							this.state = 2333;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2336;
						this.valueStmt(7);
						}
						break;

					case 18:
						{
						_localctx = new VsXorContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2337;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 2339;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2338;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2341;
						this.match(VisualBasic6Parser.XOR);
						this.state = 2343;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 375, this._ctx) ) {
						case 1:
							{
							this.state = 2342;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2345;
						this.valueStmt(6);
						}
						break;

					case 19:
						{
						_localctx = new VsEqvContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2346;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 2348;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2347;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2350;
						this.match(VisualBasic6Parser.EQV);
						this.state = 2352;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 377, this._ctx) ) {
						case 1:
							{
							this.state = 2351;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2354;
						this.valueStmt(5);
						}
						break;

					case 20:
						{
						_localctx = new VsImpContext(new ValueStmtContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, VisualBasic6Parser.RULE_valueStmt);
						this.state = 2355;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 2357;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2356;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2359;
						this.match(VisualBasic6Parser.IMP);
						this.state = 2361;
						this._errHandler.sync(this);
						switch ( this.interpreter.adaptivePredict(this._input, 379, this._ctx) ) {
						case 1:
							{
							this.state = 2360;
							this.match(VisualBasic6Parser.WS);
							}
							break;
						}
						this.state = 2363;
						this.valueStmt(4);
						}
						break;
					}
					}
				}
				this.state = 2368;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 381, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableStmt(): VariableStmtContext {
		let _localctx: VariableStmtContext = new VariableStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, VisualBasic6Parser.RULE_variableStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2372;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.DIM:
				{
				this.state = 2369;
				this.match(VisualBasic6Parser.DIM);
				}
				break;
			case VisualBasic6Parser.STATIC:
				{
				this.state = 2370;
				this.match(VisualBasic6Parser.STATIC);
				}
				break;
			case VisualBasic6Parser.FRIEND:
			case VisualBasic6Parser.GLOBAL:
			case VisualBasic6Parser.PRIVATE:
			case VisualBasic6Parser.PUBLIC:
				{
				this.state = 2371;
				this.visibility();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 2374;
			this.match(VisualBasic6Parser.WS);
			this.state = 2377;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 383, this._ctx) ) {
			case 1:
				{
				this.state = 2375;
				this.match(VisualBasic6Parser.WITHEVENTS);
				this.state = 2376;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2379;
			this.variableListStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableListStmt(): VariableListStmtContext {
		let _localctx: VariableListStmtContext = new VariableListStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, VisualBasic6Parser.RULE_variableListStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2381;
			this.variableSubStmt();
			this.state = 2392;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 386, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2383;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2382;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2385;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 2387;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2386;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2389;
					this.variableSubStmt();
					}
					}
				}
				this.state = 2394;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 386, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variableSubStmt(): VariableSubStmtContext {
		let _localctx: VariableSubStmtContext = new VariableSubStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, VisualBasic6Parser.RULE_variableSubStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2395;
			this.ambiguousIdentifier();
			this.state = 2397;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 387, this._ctx) ) {
			case 1:
				{
				this.state = 2396;
				this.typeHint();
				}
				break;
			}
			this.state = 2416;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 393, this._ctx) ) {
			case 1:
				{
				this.state = 2400;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2399;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2402;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2404;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 389, this._ctx) ) {
				case 1:
					{
					this.state = 2403;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2410;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)) | (1 << (VisualBasic6Parser.LPAREN - 164)) | (1 << (VisualBasic6Parser.MINUS - 164)))) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & ((1 << (VisualBasic6Parser.PLUS - 200)) | (1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 200)) | (1 << (VisualBasic6Parser.STRINGLITERAL - 200)) | (1 << (VisualBasic6Parser.DATELITERAL - 200)) | (1 << (VisualBasic6Parser.COLORLITERAL - 200)) | (1 << (VisualBasic6Parser.INTEGERLITERAL - 200)) | (1 << (VisualBasic6Parser.DOUBLELITERAL - 200)) | (1 << (VisualBasic6Parser.FILENUMBER - 200)) | (1 << (VisualBasic6Parser.OCTALLITERAL - 200)) | (1 << (VisualBasic6Parser.IDENTIFIER - 200)) | (1 << (VisualBasic6Parser.WS - 200)))) !== 0)) {
					{
					this.state = 2406;
					this.subscripts();
					this.state = 2408;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2407;
						this.match(VisualBasic6Parser.WS);
						}
					}

					}
				}

				this.state = 2412;
				this.match(VisualBasic6Parser.RPAREN);
				this.state = 2414;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 392, this._ctx) ) {
				case 1:
					{
					this.state = 2413;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				}
				break;
			}
			this.state = 2420;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 394, this._ctx) ) {
			case 1:
				{
				this.state = 2418;
				this.match(VisualBasic6Parser.WS);
				this.state = 2419;
				this.asTypeClause();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileWendStmt(): WhileWendStmtContext {
		let _localctx: WhileWendStmtContext = new WhileWendStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, VisualBasic6Parser.RULE_whileWendStmt);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2422;
			this.match(VisualBasic6Parser.WHILE);
			this.state = 2423;
			this.match(VisualBasic6Parser.WS);
			this.state = 2424;
			this.valueStmt(0);
			this.state = 2426;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2425;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2428;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 395, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2433;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 396, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2430;
					this.block();
					}
					}
				}
				this.state = 2435;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 396, this._ctx);
			}
			this.state = 2439;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === VisualBasic6Parser.NEWLINE) {
				{
				{
				this.state = 2436;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 2441;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 2442;
			this.match(VisualBasic6Parser.WEND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public widthStmt(): WidthStmtContext {
		let _localctx: WidthStmtContext = new WidthStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, VisualBasic6Parser.RULE_widthStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2444;
			this.match(VisualBasic6Parser.WIDTH);
			this.state = 2445;
			this.match(VisualBasic6Parser.WS);
			this.state = 2446;
			this.valueStmt(0);
			this.state = 2448;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2447;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2450;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 2452;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 399, this._ctx) ) {
			case 1:
				{
				this.state = 2451;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2454;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withStmt(): WithStmtContext {
		let _localctx: WithStmtContext = new WithStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, VisualBasic6Parser.RULE_withStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2456;
			this.match(VisualBasic6Parser.WITH);
			this.state = 2457;
			this.match(VisualBasic6Parser.WS);
			this.state = 2460;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 400, this._ctx) ) {
			case 1:
				{
				this.state = 2458;
				this.match(VisualBasic6Parser.NEW);
				this.state = 2459;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2462;
			this.implicitCallStmt_InStmt();
			this.state = 2464;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 2463;
				this.match(VisualBasic6Parser.NEWLINE);
				}
				}
				this.state = 2466;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === VisualBasic6Parser.NEWLINE);
			this.state = 2474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)) | (1 << (VisualBasic6Parser.EXIT_DO - 32)) | (1 << (VisualBasic6Parser.EXIT_FOR - 32)) | (1 << (VisualBasic6Parser.EXIT_FUNCTION - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (VisualBasic6Parser.EXIT_PROPERTY - 64)) | (1 << (VisualBasic6Parser.EXIT_SUB - 64)) | (1 << (VisualBasic6Parser.FALSE - 64)) | (1 << (VisualBasic6Parser.FILECOPY - 64)) | (1 << (VisualBasic6Parser.FRIEND - 64)) | (1 << (VisualBasic6Parser.FOR - 64)) | (1 << (VisualBasic6Parser.FUNCTION - 64)) | (1 << (VisualBasic6Parser.GET - 64)) | (1 << (VisualBasic6Parser.GLOBAL - 64)) | (1 << (VisualBasic6Parser.GOSUB - 64)) | (1 << (VisualBasic6Parser.GOTO - 64)) | (1 << (VisualBasic6Parser.IF - 64)) | (1 << (VisualBasic6Parser.IMP - 64)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 64)) | (1 << (VisualBasic6Parser.IN - 64)) | (1 << (VisualBasic6Parser.INPUT - 64)) | (1 << (VisualBasic6Parser.IS - 64)) | (1 << (VisualBasic6Parser.INTEGER - 64)) | (1 << (VisualBasic6Parser.KILL - 64)) | (1 << (VisualBasic6Parser.LOAD - 64)) | (1 << (VisualBasic6Parser.LOCK - 64)) | (1 << (VisualBasic6Parser.LONG - 64)) | (1 << (VisualBasic6Parser.LOOP - 64)) | (1 << (VisualBasic6Parser.LEN - 64)) | (1 << (VisualBasic6Parser.LET - 64)) | (1 << (VisualBasic6Parser.LIB - 64)) | (1 << (VisualBasic6Parser.LIKE - 64)) | (1 << (VisualBasic6Parser.LINE_INPUT - 64)) | (1 << (VisualBasic6Parser.LSET - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (VisualBasic6Parser.MACRO_IF - 96)) | (1 << (VisualBasic6Parser.ME - 96)) | (1 << (VisualBasic6Parser.MID - 96)) | (1 << (VisualBasic6Parser.MKDIR - 96)) | (1 << (VisualBasic6Parser.MOD - 96)) | (1 << (VisualBasic6Parser.NAME - 96)) | (1 << (VisualBasic6Parser.NEXT - 96)) | (1 << (VisualBasic6Parser.NEW - 96)) | (1 << (VisualBasic6Parser.NOT - 96)) | (1 << (VisualBasic6Parser.NOTHING - 96)) | (1 << (VisualBasic6Parser.NULL - 96)) | (1 << (VisualBasic6Parser.OBJECT - 96)) | (1 << (VisualBasic6Parser.ON - 96)) | (1 << (VisualBasic6Parser.ON_ERROR - 96)) | (1 << (VisualBasic6Parser.ON_LOCAL_ERROR - 96)) | (1 << (VisualBasic6Parser.OPEN - 96)) | (1 << (VisualBasic6Parser.OPTIONAL - 96)) | (1 << (VisualBasic6Parser.OR - 96)) | (1 << (VisualBasic6Parser.OUTPUT - 96)) | (1 << (VisualBasic6Parser.PARAMARRAY - 96)) | (1 << (VisualBasic6Parser.PRESERVE - 96)) | (1 << (VisualBasic6Parser.PRINT - 96)) | (1 << (VisualBasic6Parser.PRIVATE - 96)))) !== 0) || ((((_la - 129)) & ~0x1F) === 0 && ((1 << (_la - 129)) & ((1 << (VisualBasic6Parser.PUBLIC - 129)) | (1 << (VisualBasic6Parser.PUT - 129)) | (1 << (VisualBasic6Parser.RANDOM - 129)) | (1 << (VisualBasic6Parser.RANDOMIZE - 129)) | (1 << (VisualBasic6Parser.RAISEEVENT - 129)) | (1 << (VisualBasic6Parser.READ - 129)) | (1 << (VisualBasic6Parser.REDIM - 129)) | (1 << (VisualBasic6Parser.REM - 129)) | (1 << (VisualBasic6Parser.RESET - 129)) | (1 << (VisualBasic6Parser.RESUME - 129)) | (1 << (VisualBasic6Parser.RETURN - 129)) | (1 << (VisualBasic6Parser.RMDIR - 129)) | (1 << (VisualBasic6Parser.RSET - 129)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 129)) | (1 << (VisualBasic6Parser.SAVESETTING - 129)) | (1 << (VisualBasic6Parser.SEEK - 129)) | (1 << (VisualBasic6Parser.SELECT - 129)) | (1 << (VisualBasic6Parser.SENDKEYS - 129)) | (1 << (VisualBasic6Parser.SET - 129)) | (1 << (VisualBasic6Parser.SETATTR - 129)) | (1 << (VisualBasic6Parser.SHARED - 129)) | (1 << (VisualBasic6Parser.SINGLE - 129)) | (1 << (VisualBasic6Parser.SPC - 129)) | (1 << (VisualBasic6Parser.STATIC - 129)) | (1 << (VisualBasic6Parser.STEP - 129)) | (1 << (VisualBasic6Parser.STOP - 129)) | (1 << (VisualBasic6Parser.STRING - 129)) | (1 << (VisualBasic6Parser.SUB - 129)) | (1 << (VisualBasic6Parser.TAB - 129)) | (1 << (VisualBasic6Parser.TEXT - 129)) | (1 << (VisualBasic6Parser.THEN - 129)))) !== 0) || ((((_la - 161)) & ~0x1F) === 0 && ((1 << (_la - 161)) & ((1 << (VisualBasic6Parser.TIME - 161)) | (1 << (VisualBasic6Parser.TO - 161)) | (1 << (VisualBasic6Parser.TRUE - 161)) | (1 << (VisualBasic6Parser.TYPE - 161)) | (1 << (VisualBasic6Parser.TYPEOF - 161)) | (1 << (VisualBasic6Parser.UNLOAD - 161)) | (1 << (VisualBasic6Parser.UNLOCK - 161)) | (1 << (VisualBasic6Parser.UNTIL - 161)) | (1 << (VisualBasic6Parser.VARIANT - 161)) | (1 << (VisualBasic6Parser.VERSION - 161)) | (1 << (VisualBasic6Parser.WEND - 161)) | (1 << (VisualBasic6Parser.WHILE - 161)) | (1 << (VisualBasic6Parser.WIDTH - 161)) | (1 << (VisualBasic6Parser.WITH - 161)) | (1 << (VisualBasic6Parser.WITHEVENTS - 161)) | (1 << (VisualBasic6Parser.WRITE - 161)) | (1 << (VisualBasic6Parser.XOR - 161)) | (1 << (VisualBasic6Parser.DOT - 161)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 161)))) !== 0) || ((((_la - 206)) & ~0x1F) === 0 && ((1 << (_la - 206)) & ((1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 206)) | (1 << (VisualBasic6Parser.IDENTIFIER - 206)) | (1 << (VisualBasic6Parser.WS - 206)))) !== 0)) {
				{
				this.state = 2468;
				this.block();
				this.state = 2470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 2469;
					this.match(VisualBasic6Parser.NEWLINE);
					}
					}
					this.state = 2472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === VisualBasic6Parser.NEWLINE);
				}
			}

			this.state = 2476;
			this.match(VisualBasic6Parser.END_WITH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public writeStmt(): WriteStmtContext {
		let _localctx: WriteStmtContext = new WriteStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, VisualBasic6Parser.RULE_writeStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2478;
			this.match(VisualBasic6Parser.WRITE);
			this.state = 2479;
			this.match(VisualBasic6Parser.WS);
			this.state = 2480;
			this.valueStmt(0);
			this.state = 2482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2481;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2484;
			this.match(VisualBasic6Parser.COMMA);
			this.state = 2489;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 406, this._ctx) ) {
			case 1:
				{
				this.state = 2486;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 405, this._ctx) ) {
				case 1:
					{
					this.state = 2485;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2488;
				this.outputList();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public explicitCallStmt(): ExplicitCallStmtContext {
		let _localctx: ExplicitCallStmtContext = new ExplicitCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, VisualBasic6Parser.RULE_explicitCallStmt);
		try {
			this.state = 2493;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 407, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2491;
				this.eCS_ProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2492;
				this.eCS_MemberProcedureCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eCS_ProcedureCall(): ECS_ProcedureCallContext {
		let _localctx: ECS_ProcedureCallContext = new ECS_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, VisualBasic6Parser.RULE_eCS_ProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2495;
			this.match(VisualBasic6Parser.CALL);
			this.state = 2496;
			this.match(VisualBasic6Parser.WS);
			this.state = 2497;
			this.ambiguousIdentifier();
			this.state = 2499;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 408, this._ctx) ) {
			case 1:
				{
				this.state = 2498;
				this.typeHint();
				}
				break;
			}
			this.state = 2514;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 412, this._ctx) ) {
			case 1:
				{
				this.state = 2502;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2501;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2504;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2506;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 410, this._ctx) ) {
				case 1:
					{
					this.state = 2505;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2508;
				this.argsCall();
				this.state = 2510;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2509;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2512;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext {
		let _localctx: ECS_MemberProcedureCallContext = new ECS_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, VisualBasic6Parser.RULE_eCS_MemberProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2516;
			this.match(VisualBasic6Parser.CALL);
			this.state = 2517;
			this.match(VisualBasic6Parser.WS);
			this.state = 2519;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 413, this._ctx) ) {
			case 1:
				{
				this.state = 2518;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2521;
			this.match(VisualBasic6Parser.DOT);
			this.state = 2523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2522;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2525;
			this.ambiguousIdentifier();
			this.state = 2527;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 415, this._ctx) ) {
			case 1:
				{
				this.state = 2526;
				this.typeHint();
				}
				break;
			}
			this.state = 2542;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 419, this._ctx) ) {
			case 1:
				{
				this.state = 2530;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2529;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2532;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2534;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 417, this._ctx) ) {
				case 1:
					{
					this.state = 2533;
					this.match(VisualBasic6Parser.WS);
					}
					break;
				}
				this.state = 2536;
				this.argsCall();
				this.state = 2538;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2537;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2540;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext {
		let _localctx: ImplicitCallStmt_InBlockContext = new ImplicitCallStmt_InBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, VisualBasic6Parser.RULE_implicitCallStmt_InBlock);
		try {
			this.state = 2546;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 420, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2544;
				this.iCS_B_ProcedureCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2545;
				this.iCS_B_MemberProcedureCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext {
		let _localctx: ICS_B_ProcedureCallContext = new ICS_B_ProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, VisualBasic6Parser.RULE_iCS_B_ProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2548;
			this.certainIdentifier();
			this.state = 2551;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 421, this._ctx) ) {
			case 1:
				{
				this.state = 2549;
				this.match(VisualBasic6Parser.WS);
				this.state = 2550;
				this.argsCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext {
		let _localctx: ICS_B_MemberProcedureCallContext = new ICS_B_MemberProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, VisualBasic6Parser.RULE_iCS_B_MemberProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2554;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 422, this._ctx) ) {
			case 1:
				{
				this.state = 2553;
				this.implicitCallStmt_InStmt();
				}
				break;
			}
			this.state = 2556;
			this.match(VisualBasic6Parser.DOT);
			this.state = 2557;
			this.ambiguousIdentifier();
			this.state = 2559;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 423, this._ctx) ) {
			case 1:
				{
				this.state = 2558;
				this.typeHint();
				}
				break;
			}
			this.state = 2563;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 424, this._ctx) ) {
			case 1:
				{
				this.state = 2561;
				this.match(VisualBasic6Parser.WS);
				this.state = 2562;
				this.argsCall();
				}
				break;
			}
			this.state = 2566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 425, this._ctx) ) {
			case 1:
				{
				this.state = 2565;
				this.dictionaryCallStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		let _localctx: ImplicitCallStmt_InStmtContext = new ImplicitCallStmt_InStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, VisualBasic6Parser.RULE_implicitCallStmt_InStmt);
		try {
			this.state = 2572;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 426, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2568;
				this.iCS_S_MembersCall();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2569;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 2570;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 2571;
				this.iCS_S_DictionaryCall();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		let _localctx: ICS_S_VariableOrProcedureCallContext = new ICS_S_VariableOrProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, VisualBasic6Parser.RULE_iCS_S_VariableOrProcedureCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2574;
			this.ambiguousIdentifier();
			this.state = 2576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 427, this._ctx) ) {
			case 1:
				{
				this.state = 2575;
				this.typeHint();
				}
				break;
			}
			this.state = 2579;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 428, this._ctx) ) {
			case 1:
				{
				this.state = 2578;
				this.dictionaryCallStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext {
		let _localctx: ICS_S_ProcedureOrArrayCallContext = new ICS_S_ProcedureOrArrayCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, VisualBasic6Parser.RULE_iCS_S_ProcedureOrArrayCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2584;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 429, this._ctx) ) {
			case 1:
				{
				this.state = 2581;
				this.ambiguousIdentifier();
				}
				break;

			case 2:
				{
				this.state = 2582;
				this.baseType();
				}
				break;

			case 3:
				{
				this.state = 2583;
				this.iCS_S_NestedProcedureCall();
				}
				break;
			}
			this.state = 2587;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 2586;
				this.typeHint();
				}
			}

			this.state = 2590;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2589;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2603;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2592;
					this.match(VisualBasic6Parser.LPAREN);
					this.state = 2594;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 432, this._ctx) ) {
					case 1:
						{
						this.state = 2593;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 2600;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.COMMA - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)) | (1 << (VisualBasic6Parser.LPAREN - 164)) | (1 << (VisualBasic6Parser.MINUS - 164)))) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & ((1 << (VisualBasic6Parser.PLUS - 200)) | (1 << (VisualBasic6Parser.SEMICOLON - 200)) | (1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 200)) | (1 << (VisualBasic6Parser.STRINGLITERAL - 200)) | (1 << (VisualBasic6Parser.DATELITERAL - 200)) | (1 << (VisualBasic6Parser.COLORLITERAL - 200)) | (1 << (VisualBasic6Parser.INTEGERLITERAL - 200)) | (1 << (VisualBasic6Parser.DOUBLELITERAL - 200)) | (1 << (VisualBasic6Parser.FILENUMBER - 200)) | (1 << (VisualBasic6Parser.OCTALLITERAL - 200)) | (1 << (VisualBasic6Parser.IDENTIFIER - 200)) | (1 << (VisualBasic6Parser.WS - 200)))) !== 0)) {
						{
						this.state = 2596;
						this.argsCall();
						this.state = 2598;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2597;
							this.match(VisualBasic6Parser.WS);
							}
						}

						}
					}

					this.state = 2602;
					this.match(VisualBasic6Parser.RPAREN);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2605;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 435, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2608;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 436, this._ctx) ) {
			case 1:
				{
				this.state = 2607;
				this.dictionaryCallStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_NestedProcedureCall(): ICS_S_NestedProcedureCallContext {
		let _localctx: ICS_S_NestedProcedureCallContext = new ICS_S_NestedProcedureCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, VisualBasic6Parser.RULE_iCS_S_NestedProcedureCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2610;
			this.ambiguousIdentifier();
			this.state = 2612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 2611;
				this.typeHint();
				}
			}

			this.state = 2615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2614;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2617;
			this.match(VisualBasic6Parser.LPAREN);
			this.state = 2619;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 439, this._ctx) ) {
			case 1:
				{
				this.state = 2618;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2625;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)) | (1 << (VisualBasic6Parser.COMMA - 164)) | (1 << (VisualBasic6Parser.DOT - 164)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 164)) | (1 << (VisualBasic6Parser.LPAREN - 164)) | (1 << (VisualBasic6Parser.MINUS - 164)))) !== 0) || ((((_la - 200)) & ~0x1F) === 0 && ((1 << (_la - 200)) & ((1 << (VisualBasic6Parser.PLUS - 200)) | (1 << (VisualBasic6Parser.SEMICOLON - 200)) | (1 << (VisualBasic6Parser.L_SQUARE_BRACKET - 200)) | (1 << (VisualBasic6Parser.STRINGLITERAL - 200)) | (1 << (VisualBasic6Parser.DATELITERAL - 200)) | (1 << (VisualBasic6Parser.COLORLITERAL - 200)) | (1 << (VisualBasic6Parser.INTEGERLITERAL - 200)) | (1 << (VisualBasic6Parser.DOUBLELITERAL - 200)) | (1 << (VisualBasic6Parser.FILENUMBER - 200)) | (1 << (VisualBasic6Parser.OCTALLITERAL - 200)) | (1 << (VisualBasic6Parser.IDENTIFIER - 200)) | (1 << (VisualBasic6Parser.WS - 200)))) !== 0)) {
				{
				this.state = 2621;
				this.argsCall();
				this.state = 2623;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2622;
					this.match(VisualBasic6Parser.WS);
					}
				}

				}
			}

			this.state = 2627;
			this.match(VisualBasic6Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_MembersCall(): ICS_S_MembersCallContext {
		let _localctx: ICS_S_MembersCallContext = new ICS_S_MembersCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, VisualBasic6Parser.RULE_iCS_S_MembersCall);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 442, this._ctx) ) {
			case 1:
				{
				this.state = 2629;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2630;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			this.state = 2634;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 2633;
					this.iCS_S_MemberCall();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 2636;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 443, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			this.state = 2639;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 444, this._ctx) ) {
			case 1:
				{
				this.state = 2638;
				this.dictionaryCallStmt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_MemberCall(): ICS_S_MemberCallContext {
		let _localctx: ICS_S_MemberCallContext = new ICS_S_MemberCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, VisualBasic6Parser.RULE_iCS_S_MemberCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2642;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2641;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2644;
			this.match(VisualBasic6Parser.DOT);
			this.state = 2647;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 446, this._ctx) ) {
			case 1:
				{
				this.state = 2645;
				this.iCS_S_VariableOrProcedureCall();
				}
				break;

			case 2:
				{
				this.state = 2646;
				this.iCS_S_ProcedureOrArrayCall();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext {
		let _localctx: ICS_S_DictionaryCallContext = new ICS_S_DictionaryCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, VisualBasic6Parser.RULE_iCS_S_DictionaryCall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2649;
			this.dictionaryCallStmt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argsCall(): ArgsCallContext {
		let _localctx: ArgsCallContext = new ArgsCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, VisualBasic6Parser.RULE_argsCall);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2663;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 450, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2652;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 447, this._ctx) ) {
					case 1:
						{
						this.state = 2651;
						this.argCall();
						}
						break;
					}
					this.state = 2655;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2654;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2657;
					_la = this._input.LA(1);
					if (!(_la === VisualBasic6Parser.COMMA || _la === VisualBasic6Parser.SEMICOLON)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2659;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 449, this._ctx) ) {
					case 1:
						{
						this.state = 2658;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					}
					}
				}
				this.state = 2665;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 450, this._ctx);
			}
			this.state = 2666;
			this.argCall();
			this.state = 2679;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 454, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2668;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2667;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2670;
					_la = this._input.LA(1);
					if (!(_la === VisualBasic6Parser.COMMA || _la === VisualBasic6Parser.SEMICOLON)) {
					this._errHandler.recoverInline(this);
					} else {
						if (this._input.LA(1) === Token.EOF) {
							this.matchedEOF = true;
						}

						this._errHandler.reportMatch(this);
						this.consume();
					}
					this.state = 2672;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 452, this._ctx) ) {
					case 1:
						{
						this.state = 2671;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 2675;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 453, this._ctx) ) {
					case 1:
						{
						this.state = 2674;
						this.argCall();
						}
						break;
					}
					}
					}
				}
				this.state = 2681;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 454, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argCall(): ArgCallContext {
		let _localctx: ArgCallContext = new ArgCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, VisualBasic6Parser.RULE_argCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2684;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 455, this._ctx) ) {
			case 1:
				{
				this.state = 2682;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.BYVAL || _la === VisualBasic6Parser.BYREF || _la === VisualBasic6Parser.PARAMARRAY)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2683;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2686;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		let _localctx: DictionaryCallStmtContext = new DictionaryCallStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, VisualBasic6Parser.RULE_dictionaryCallStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2688;
			this.match(VisualBasic6Parser.EXCLAMATIONMARK);
			this.state = 2689;
			this.ambiguousIdentifier();
			this.state = 2691;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 456, this._ctx) ) {
			case 1:
				{
				this.state = 2690;
				this.typeHint();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argList(): ArgListContext {
		let _localctx: ArgListContext = new ArgListContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, VisualBasic6Parser.RULE_argList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2693;
			this.match(VisualBasic6Parser.LPAREN);
			this.state = 2711;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 461, this._ctx) ) {
			case 1:
				{
				this.state = 2695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2694;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2697;
				this.arg();
				this.state = 2708;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 460, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 2699;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2698;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2701;
						this.match(VisualBasic6Parser.COMMA);
						this.state = 2703;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if (_la === VisualBasic6Parser.WS) {
							{
							this.state = 2702;
							this.match(VisualBasic6Parser.WS);
							}
						}

						this.state = 2705;
						this.arg();
						}
						}
					}
					this.state = 2710;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 460, this._ctx);
				}
				}
				break;
			}
			this.state = 2714;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2713;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2716;
			this.match(VisualBasic6Parser.RPAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, VisualBasic6Parser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2720;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 463, this._ctx) ) {
			case 1:
				{
				this.state = 2718;
				this.match(VisualBasic6Parser.OPTIONAL);
				this.state = 2719;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2724;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 464, this._ctx) ) {
			case 1:
				{
				this.state = 2722;
				_la = this._input.LA(1);
				if (!(_la === VisualBasic6Parser.BYVAL || _la === VisualBasic6Parser.BYREF)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 2723;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2728;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 465, this._ctx) ) {
			case 1:
				{
				this.state = 2726;
				this.match(VisualBasic6Parser.PARAMARRAY);
				this.state = 2727;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2730;
			this.ambiguousIdentifier();
			this.state = 2732;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0)) {
				{
				this.state = 2731;
				this.typeHint();
				}
			}

			this.state = 2742;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 469, this._ctx) ) {
			case 1:
				{
				this.state = 2735;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2734;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2737;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2739;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2738;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2741;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			this.state = 2746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 470, this._ctx) ) {
			case 1:
				{
				this.state = 2744;
				this.match(VisualBasic6Parser.WS);
				this.state = 2745;
				this.asTypeClause();
				}
				break;
			}
			this.state = 2752;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 472, this._ctx) ) {
			case 1:
				{
				this.state = 2749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2748;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2751;
				this.argDefaultValue();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public argDefaultValue(): ArgDefaultValueContext {
		let _localctx: ArgDefaultValueContext = new ArgDefaultValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, VisualBasic6Parser.RULE_argDefaultValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2754;
			this.match(VisualBasic6Parser.EQ);
			this.state = 2756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 473, this._ctx) ) {
			case 1:
				{
				this.state = 2755;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2758;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscripts(): SubscriptsContext {
		let _localctx: SubscriptsContext = new SubscriptsContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, VisualBasic6Parser.RULE_subscripts);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2760;
			this.subscript();
			this.state = 2771;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 476, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2762;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === VisualBasic6Parser.WS) {
						{
						this.state = 2761;
						this.match(VisualBasic6Parser.WS);
						}
					}

					this.state = 2764;
					this.match(VisualBasic6Parser.COMMA);
					this.state = 2766;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 475, this._ctx) ) {
					case 1:
						{
						this.state = 2765;
						this.match(VisualBasic6Parser.WS);
						}
						break;
					}
					this.state = 2768;
					this.subscript();
					}
					}
				}
				this.state = 2773;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 476, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public subscript(): SubscriptContext {
		let _localctx: SubscriptContext = new SubscriptContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, VisualBasic6Parser.RULE_subscript);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 477, this._ctx) ) {
			case 1:
				{
				this.state = 2774;
				this.valueStmt(0);
				this.state = 2775;
				this.match(VisualBasic6Parser.WS);
				this.state = 2776;
				this.match(VisualBasic6Parser.TO);
				this.state = 2777;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2781;
			this.valueStmt(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		let _localctx: AmbiguousIdentifierContext = new AmbiguousIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, VisualBasic6Parser.RULE_ambiguousIdentifier);
		let _la: number;
		try {
			let _alt: number;
			this.state = 2797;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.ACCESS:
			case VisualBasic6Parser.ADDRESSOF:
			case VisualBasic6Parser.ALIAS:
			case VisualBasic6Parser.AND:
			case VisualBasic6Parser.ATTRIBUTE:
			case VisualBasic6Parser.APPACTIVATE:
			case VisualBasic6Parser.APPEND:
			case VisualBasic6Parser.AS:
			case VisualBasic6Parser.BEEP:
			case VisualBasic6Parser.BEGIN:
			case VisualBasic6Parser.BINARY:
			case VisualBasic6Parser.BOOLEAN:
			case VisualBasic6Parser.BYVAL:
			case VisualBasic6Parser.BYREF:
			case VisualBasic6Parser.BYTE:
			case VisualBasic6Parser.CALL:
			case VisualBasic6Parser.CASE:
			case VisualBasic6Parser.CHDIR:
			case VisualBasic6Parser.CHDRIVE:
			case VisualBasic6Parser.CLASS:
			case VisualBasic6Parser.CLOSE:
			case VisualBasic6Parser.COLLECTION:
			case VisualBasic6Parser.CONST:
			case VisualBasic6Parser.DATE:
			case VisualBasic6Parser.DECLARE:
			case VisualBasic6Parser.DEFBOOL:
			case VisualBasic6Parser.DEFBYTE:
			case VisualBasic6Parser.DEFDATE:
			case VisualBasic6Parser.DEFDBL:
			case VisualBasic6Parser.DEFDEC:
			case VisualBasic6Parser.DEFCUR:
			case VisualBasic6Parser.DEFINT:
			case VisualBasic6Parser.DEFLNG:
			case VisualBasic6Parser.DEFOBJ:
			case VisualBasic6Parser.DEFSNG:
			case VisualBasic6Parser.DEFSTR:
			case VisualBasic6Parser.DEFVAR:
			case VisualBasic6Parser.DELETESETTING:
			case VisualBasic6Parser.DIM:
			case VisualBasic6Parser.DO:
			case VisualBasic6Parser.DOUBLE:
			case VisualBasic6Parser.EACH:
			case VisualBasic6Parser.ELSE:
			case VisualBasic6Parser.ELSEIF:
			case VisualBasic6Parser.END:
			case VisualBasic6Parser.ENUM:
			case VisualBasic6Parser.EQV:
			case VisualBasic6Parser.ERASE:
			case VisualBasic6Parser.ERROR:
			case VisualBasic6Parser.EVENT:
			case VisualBasic6Parser.FALSE:
			case VisualBasic6Parser.FILECOPY:
			case VisualBasic6Parser.FRIEND:
			case VisualBasic6Parser.FOR:
			case VisualBasic6Parser.FUNCTION:
			case VisualBasic6Parser.GET:
			case VisualBasic6Parser.GLOBAL:
			case VisualBasic6Parser.GOSUB:
			case VisualBasic6Parser.GOTO:
			case VisualBasic6Parser.IF:
			case VisualBasic6Parser.IMP:
			case VisualBasic6Parser.IMPLEMENTS:
			case VisualBasic6Parser.IN:
			case VisualBasic6Parser.INPUT:
			case VisualBasic6Parser.IS:
			case VisualBasic6Parser.INTEGER:
			case VisualBasic6Parser.KILL:
			case VisualBasic6Parser.LOAD:
			case VisualBasic6Parser.LOCK:
			case VisualBasic6Parser.LONG:
			case VisualBasic6Parser.LOOP:
			case VisualBasic6Parser.LEN:
			case VisualBasic6Parser.LET:
			case VisualBasic6Parser.LIB:
			case VisualBasic6Parser.LIKE:
			case VisualBasic6Parser.LSET:
			case VisualBasic6Parser.ME:
			case VisualBasic6Parser.MID:
			case VisualBasic6Parser.MKDIR:
			case VisualBasic6Parser.MOD:
			case VisualBasic6Parser.NAME:
			case VisualBasic6Parser.NEXT:
			case VisualBasic6Parser.NEW:
			case VisualBasic6Parser.NOT:
			case VisualBasic6Parser.NOTHING:
			case VisualBasic6Parser.NULL:
			case VisualBasic6Parser.OBJECT:
			case VisualBasic6Parser.ON:
			case VisualBasic6Parser.OPEN:
			case VisualBasic6Parser.OPTIONAL:
			case VisualBasic6Parser.OR:
			case VisualBasic6Parser.OUTPUT:
			case VisualBasic6Parser.PARAMARRAY:
			case VisualBasic6Parser.PRESERVE:
			case VisualBasic6Parser.PRINT:
			case VisualBasic6Parser.PRIVATE:
			case VisualBasic6Parser.PUBLIC:
			case VisualBasic6Parser.PUT:
			case VisualBasic6Parser.RANDOM:
			case VisualBasic6Parser.RANDOMIZE:
			case VisualBasic6Parser.RAISEEVENT:
			case VisualBasic6Parser.READ:
			case VisualBasic6Parser.REDIM:
			case VisualBasic6Parser.REM:
			case VisualBasic6Parser.RESET:
			case VisualBasic6Parser.RESUME:
			case VisualBasic6Parser.RETURN:
			case VisualBasic6Parser.RMDIR:
			case VisualBasic6Parser.RSET:
			case VisualBasic6Parser.SAVEPICTURE:
			case VisualBasic6Parser.SAVESETTING:
			case VisualBasic6Parser.SEEK:
			case VisualBasic6Parser.SELECT:
			case VisualBasic6Parser.SENDKEYS:
			case VisualBasic6Parser.SET:
			case VisualBasic6Parser.SETATTR:
			case VisualBasic6Parser.SHARED:
			case VisualBasic6Parser.SINGLE:
			case VisualBasic6Parser.SPC:
			case VisualBasic6Parser.STATIC:
			case VisualBasic6Parser.STEP:
			case VisualBasic6Parser.STOP:
			case VisualBasic6Parser.STRING:
			case VisualBasic6Parser.SUB:
			case VisualBasic6Parser.TAB:
			case VisualBasic6Parser.TEXT:
			case VisualBasic6Parser.THEN:
			case VisualBasic6Parser.TIME:
			case VisualBasic6Parser.TO:
			case VisualBasic6Parser.TRUE:
			case VisualBasic6Parser.TYPE:
			case VisualBasic6Parser.TYPEOF:
			case VisualBasic6Parser.UNLOAD:
			case VisualBasic6Parser.UNLOCK:
			case VisualBasic6Parser.UNTIL:
			case VisualBasic6Parser.VARIANT:
			case VisualBasic6Parser.VERSION:
			case VisualBasic6Parser.WEND:
			case VisualBasic6Parser.WHILE:
			case VisualBasic6Parser.WIDTH:
			case VisualBasic6Parser.WITH:
			case VisualBasic6Parser.WITHEVENTS:
			case VisualBasic6Parser.WRITE:
			case VisualBasic6Parser.XOR:
			case VisualBasic6Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2785;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2785;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case VisualBasic6Parser.IDENTIFIER:
							{
							this.state = 2783;
							this.match(VisualBasic6Parser.IDENTIFIER);
							}
							break;
						case VisualBasic6Parser.ACCESS:
						case VisualBasic6Parser.ADDRESSOF:
						case VisualBasic6Parser.ALIAS:
						case VisualBasic6Parser.AND:
						case VisualBasic6Parser.ATTRIBUTE:
						case VisualBasic6Parser.APPACTIVATE:
						case VisualBasic6Parser.APPEND:
						case VisualBasic6Parser.AS:
						case VisualBasic6Parser.BEEP:
						case VisualBasic6Parser.BEGIN:
						case VisualBasic6Parser.BINARY:
						case VisualBasic6Parser.BOOLEAN:
						case VisualBasic6Parser.BYVAL:
						case VisualBasic6Parser.BYREF:
						case VisualBasic6Parser.BYTE:
						case VisualBasic6Parser.CALL:
						case VisualBasic6Parser.CASE:
						case VisualBasic6Parser.CHDIR:
						case VisualBasic6Parser.CHDRIVE:
						case VisualBasic6Parser.CLASS:
						case VisualBasic6Parser.CLOSE:
						case VisualBasic6Parser.COLLECTION:
						case VisualBasic6Parser.CONST:
						case VisualBasic6Parser.DATE:
						case VisualBasic6Parser.DECLARE:
						case VisualBasic6Parser.DEFBOOL:
						case VisualBasic6Parser.DEFBYTE:
						case VisualBasic6Parser.DEFDATE:
						case VisualBasic6Parser.DEFDBL:
						case VisualBasic6Parser.DEFDEC:
						case VisualBasic6Parser.DEFCUR:
						case VisualBasic6Parser.DEFINT:
						case VisualBasic6Parser.DEFLNG:
						case VisualBasic6Parser.DEFOBJ:
						case VisualBasic6Parser.DEFSNG:
						case VisualBasic6Parser.DEFSTR:
						case VisualBasic6Parser.DEFVAR:
						case VisualBasic6Parser.DELETESETTING:
						case VisualBasic6Parser.DIM:
						case VisualBasic6Parser.DO:
						case VisualBasic6Parser.DOUBLE:
						case VisualBasic6Parser.EACH:
						case VisualBasic6Parser.ELSE:
						case VisualBasic6Parser.ELSEIF:
						case VisualBasic6Parser.END:
						case VisualBasic6Parser.ENUM:
						case VisualBasic6Parser.EQV:
						case VisualBasic6Parser.ERASE:
						case VisualBasic6Parser.ERROR:
						case VisualBasic6Parser.EVENT:
						case VisualBasic6Parser.FALSE:
						case VisualBasic6Parser.FILECOPY:
						case VisualBasic6Parser.FRIEND:
						case VisualBasic6Parser.FOR:
						case VisualBasic6Parser.FUNCTION:
						case VisualBasic6Parser.GET:
						case VisualBasic6Parser.GLOBAL:
						case VisualBasic6Parser.GOSUB:
						case VisualBasic6Parser.GOTO:
						case VisualBasic6Parser.IF:
						case VisualBasic6Parser.IMP:
						case VisualBasic6Parser.IMPLEMENTS:
						case VisualBasic6Parser.IN:
						case VisualBasic6Parser.INPUT:
						case VisualBasic6Parser.IS:
						case VisualBasic6Parser.INTEGER:
						case VisualBasic6Parser.KILL:
						case VisualBasic6Parser.LOAD:
						case VisualBasic6Parser.LOCK:
						case VisualBasic6Parser.LONG:
						case VisualBasic6Parser.LOOP:
						case VisualBasic6Parser.LEN:
						case VisualBasic6Parser.LET:
						case VisualBasic6Parser.LIB:
						case VisualBasic6Parser.LIKE:
						case VisualBasic6Parser.LSET:
						case VisualBasic6Parser.ME:
						case VisualBasic6Parser.MID:
						case VisualBasic6Parser.MKDIR:
						case VisualBasic6Parser.MOD:
						case VisualBasic6Parser.NAME:
						case VisualBasic6Parser.NEXT:
						case VisualBasic6Parser.NEW:
						case VisualBasic6Parser.NOT:
						case VisualBasic6Parser.NOTHING:
						case VisualBasic6Parser.NULL:
						case VisualBasic6Parser.OBJECT:
						case VisualBasic6Parser.ON:
						case VisualBasic6Parser.OPEN:
						case VisualBasic6Parser.OPTIONAL:
						case VisualBasic6Parser.OR:
						case VisualBasic6Parser.OUTPUT:
						case VisualBasic6Parser.PARAMARRAY:
						case VisualBasic6Parser.PRESERVE:
						case VisualBasic6Parser.PRINT:
						case VisualBasic6Parser.PRIVATE:
						case VisualBasic6Parser.PUBLIC:
						case VisualBasic6Parser.PUT:
						case VisualBasic6Parser.RANDOM:
						case VisualBasic6Parser.RANDOMIZE:
						case VisualBasic6Parser.RAISEEVENT:
						case VisualBasic6Parser.READ:
						case VisualBasic6Parser.REDIM:
						case VisualBasic6Parser.REM:
						case VisualBasic6Parser.RESET:
						case VisualBasic6Parser.RESUME:
						case VisualBasic6Parser.RETURN:
						case VisualBasic6Parser.RMDIR:
						case VisualBasic6Parser.RSET:
						case VisualBasic6Parser.SAVEPICTURE:
						case VisualBasic6Parser.SAVESETTING:
						case VisualBasic6Parser.SEEK:
						case VisualBasic6Parser.SELECT:
						case VisualBasic6Parser.SENDKEYS:
						case VisualBasic6Parser.SET:
						case VisualBasic6Parser.SETATTR:
						case VisualBasic6Parser.SHARED:
						case VisualBasic6Parser.SINGLE:
						case VisualBasic6Parser.SPC:
						case VisualBasic6Parser.STATIC:
						case VisualBasic6Parser.STEP:
						case VisualBasic6Parser.STOP:
						case VisualBasic6Parser.STRING:
						case VisualBasic6Parser.SUB:
						case VisualBasic6Parser.TAB:
						case VisualBasic6Parser.TEXT:
						case VisualBasic6Parser.THEN:
						case VisualBasic6Parser.TIME:
						case VisualBasic6Parser.TO:
						case VisualBasic6Parser.TRUE:
						case VisualBasic6Parser.TYPE:
						case VisualBasic6Parser.TYPEOF:
						case VisualBasic6Parser.UNLOAD:
						case VisualBasic6Parser.UNLOCK:
						case VisualBasic6Parser.UNTIL:
						case VisualBasic6Parser.VARIANT:
						case VisualBasic6Parser.VERSION:
						case VisualBasic6Parser.WEND:
						case VisualBasic6Parser.WHILE:
						case VisualBasic6Parser.WIDTH:
						case VisualBasic6Parser.WITH:
						case VisualBasic6Parser.WITHEVENTS:
						case VisualBasic6Parser.WRITE:
						case VisualBasic6Parser.XOR:
							{
							this.state = 2784;
							this.ambiguousKeyword();
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2787;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 479, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			case VisualBasic6Parser.L_SQUARE_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2789;
				this.match(VisualBasic6Parser.L_SQUARE_BRACKET);
				this.state = 2792;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 2792;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case VisualBasic6Parser.IDENTIFIER:
						{
						this.state = 2790;
						this.match(VisualBasic6Parser.IDENTIFIER);
						}
						break;
					case VisualBasic6Parser.ACCESS:
					case VisualBasic6Parser.ADDRESSOF:
					case VisualBasic6Parser.ALIAS:
					case VisualBasic6Parser.AND:
					case VisualBasic6Parser.ATTRIBUTE:
					case VisualBasic6Parser.APPACTIVATE:
					case VisualBasic6Parser.APPEND:
					case VisualBasic6Parser.AS:
					case VisualBasic6Parser.BEEP:
					case VisualBasic6Parser.BEGIN:
					case VisualBasic6Parser.BINARY:
					case VisualBasic6Parser.BOOLEAN:
					case VisualBasic6Parser.BYVAL:
					case VisualBasic6Parser.BYREF:
					case VisualBasic6Parser.BYTE:
					case VisualBasic6Parser.CALL:
					case VisualBasic6Parser.CASE:
					case VisualBasic6Parser.CHDIR:
					case VisualBasic6Parser.CHDRIVE:
					case VisualBasic6Parser.CLASS:
					case VisualBasic6Parser.CLOSE:
					case VisualBasic6Parser.COLLECTION:
					case VisualBasic6Parser.CONST:
					case VisualBasic6Parser.DATE:
					case VisualBasic6Parser.DECLARE:
					case VisualBasic6Parser.DEFBOOL:
					case VisualBasic6Parser.DEFBYTE:
					case VisualBasic6Parser.DEFDATE:
					case VisualBasic6Parser.DEFDBL:
					case VisualBasic6Parser.DEFDEC:
					case VisualBasic6Parser.DEFCUR:
					case VisualBasic6Parser.DEFINT:
					case VisualBasic6Parser.DEFLNG:
					case VisualBasic6Parser.DEFOBJ:
					case VisualBasic6Parser.DEFSNG:
					case VisualBasic6Parser.DEFSTR:
					case VisualBasic6Parser.DEFVAR:
					case VisualBasic6Parser.DELETESETTING:
					case VisualBasic6Parser.DIM:
					case VisualBasic6Parser.DO:
					case VisualBasic6Parser.DOUBLE:
					case VisualBasic6Parser.EACH:
					case VisualBasic6Parser.ELSE:
					case VisualBasic6Parser.ELSEIF:
					case VisualBasic6Parser.END:
					case VisualBasic6Parser.ENUM:
					case VisualBasic6Parser.EQV:
					case VisualBasic6Parser.ERASE:
					case VisualBasic6Parser.ERROR:
					case VisualBasic6Parser.EVENT:
					case VisualBasic6Parser.FALSE:
					case VisualBasic6Parser.FILECOPY:
					case VisualBasic6Parser.FRIEND:
					case VisualBasic6Parser.FOR:
					case VisualBasic6Parser.FUNCTION:
					case VisualBasic6Parser.GET:
					case VisualBasic6Parser.GLOBAL:
					case VisualBasic6Parser.GOSUB:
					case VisualBasic6Parser.GOTO:
					case VisualBasic6Parser.IF:
					case VisualBasic6Parser.IMP:
					case VisualBasic6Parser.IMPLEMENTS:
					case VisualBasic6Parser.IN:
					case VisualBasic6Parser.INPUT:
					case VisualBasic6Parser.IS:
					case VisualBasic6Parser.INTEGER:
					case VisualBasic6Parser.KILL:
					case VisualBasic6Parser.LOAD:
					case VisualBasic6Parser.LOCK:
					case VisualBasic6Parser.LONG:
					case VisualBasic6Parser.LOOP:
					case VisualBasic6Parser.LEN:
					case VisualBasic6Parser.LET:
					case VisualBasic6Parser.LIB:
					case VisualBasic6Parser.LIKE:
					case VisualBasic6Parser.LSET:
					case VisualBasic6Parser.ME:
					case VisualBasic6Parser.MID:
					case VisualBasic6Parser.MKDIR:
					case VisualBasic6Parser.MOD:
					case VisualBasic6Parser.NAME:
					case VisualBasic6Parser.NEXT:
					case VisualBasic6Parser.NEW:
					case VisualBasic6Parser.NOT:
					case VisualBasic6Parser.NOTHING:
					case VisualBasic6Parser.NULL:
					case VisualBasic6Parser.OBJECT:
					case VisualBasic6Parser.ON:
					case VisualBasic6Parser.OPEN:
					case VisualBasic6Parser.OPTIONAL:
					case VisualBasic6Parser.OR:
					case VisualBasic6Parser.OUTPUT:
					case VisualBasic6Parser.PARAMARRAY:
					case VisualBasic6Parser.PRESERVE:
					case VisualBasic6Parser.PRINT:
					case VisualBasic6Parser.PRIVATE:
					case VisualBasic6Parser.PUBLIC:
					case VisualBasic6Parser.PUT:
					case VisualBasic6Parser.RANDOM:
					case VisualBasic6Parser.RANDOMIZE:
					case VisualBasic6Parser.RAISEEVENT:
					case VisualBasic6Parser.READ:
					case VisualBasic6Parser.REDIM:
					case VisualBasic6Parser.REM:
					case VisualBasic6Parser.RESET:
					case VisualBasic6Parser.RESUME:
					case VisualBasic6Parser.RETURN:
					case VisualBasic6Parser.RMDIR:
					case VisualBasic6Parser.RSET:
					case VisualBasic6Parser.SAVEPICTURE:
					case VisualBasic6Parser.SAVESETTING:
					case VisualBasic6Parser.SEEK:
					case VisualBasic6Parser.SELECT:
					case VisualBasic6Parser.SENDKEYS:
					case VisualBasic6Parser.SET:
					case VisualBasic6Parser.SETATTR:
					case VisualBasic6Parser.SHARED:
					case VisualBasic6Parser.SINGLE:
					case VisualBasic6Parser.SPC:
					case VisualBasic6Parser.STATIC:
					case VisualBasic6Parser.STEP:
					case VisualBasic6Parser.STOP:
					case VisualBasic6Parser.STRING:
					case VisualBasic6Parser.SUB:
					case VisualBasic6Parser.TAB:
					case VisualBasic6Parser.TEXT:
					case VisualBasic6Parser.THEN:
					case VisualBasic6Parser.TIME:
					case VisualBasic6Parser.TO:
					case VisualBasic6Parser.TRUE:
					case VisualBasic6Parser.TYPE:
					case VisualBasic6Parser.TYPEOF:
					case VisualBasic6Parser.UNLOAD:
					case VisualBasic6Parser.UNLOCK:
					case VisualBasic6Parser.UNTIL:
					case VisualBasic6Parser.VARIANT:
					case VisualBasic6Parser.VERSION:
					case VisualBasic6Parser.WEND:
					case VisualBasic6Parser.WHILE:
					case VisualBasic6Parser.WIDTH:
					case VisualBasic6Parser.WITH:
					case VisualBasic6Parser.WITHEVENTS:
					case VisualBasic6Parser.WRITE:
					case VisualBasic6Parser.XOR:
						{
						this.state = 2791;
						this.ambiguousKeyword();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 2794;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)))) !== 0) || _la === VisualBasic6Parser.IDENTIFIER);
				this.state = 2796;
				this.match(VisualBasic6Parser.R_SQUARE_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public asTypeClause(): AsTypeClauseContext {
		let _localctx: AsTypeClauseContext = new AsTypeClauseContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, VisualBasic6Parser.RULE_asTypeClause);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2799;
			this.match(VisualBasic6Parser.AS);
			this.state = 2800;
			this.match(VisualBasic6Parser.WS);
			this.state = 2803;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 483, this._ctx) ) {
			case 1:
				{
				this.state = 2801;
				this.match(VisualBasic6Parser.NEW);
				this.state = 2802;
				this.match(VisualBasic6Parser.WS);
				}
				break;
			}
			this.state = 2805;
			this.type();
			this.state = 2808;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 484, this._ctx) ) {
			case 1:
				{
				this.state = 2806;
				this.match(VisualBasic6Parser.WS);
				this.state = 2807;
				this.fieldLength();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public baseType(): BaseTypeContext {
		let _localctx: BaseTypeContext = new BaseTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, VisualBasic6Parser.RULE_baseType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2810;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (VisualBasic6Parser.BOOLEAN - 13)) | (1 << (VisualBasic6Parser.BYTE - 13)) | (1 << (VisualBasic6Parser.COLLECTION - 13)) | (1 << (VisualBasic6Parser.DATE - 13)) | (1 << (VisualBasic6Parser.DOUBLE - 13)))) !== 0) || ((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & ((1 << (VisualBasic6Parser.INTEGER - 81)) | (1 << (VisualBasic6Parser.LONG - 81)) | (1 << (VisualBasic6Parser.OBJECT - 81)))) !== 0) || ((((_la - 151)) & ~0x1F) === 0 && ((1 << (_la - 151)) & ((1 << (VisualBasic6Parser.SINGLE - 151)) | (1 << (VisualBasic6Parser.STRING - 151)) | (1 << (VisualBasic6Parser.VARIANT - 151)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public certainIdentifier(): CertainIdentifierContext {
		let _localctx: CertainIdentifierContext = new CertainIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, VisualBasic6Parser.RULE_certainIdentifier);
		try {
			let _alt: number;
			this.state = 2827;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 2812;
				this.match(VisualBasic6Parser.IDENTIFIER);
				this.state = 2817;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 486, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						this.state = 2815;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case VisualBasic6Parser.ACCESS:
						case VisualBasic6Parser.ADDRESSOF:
						case VisualBasic6Parser.ALIAS:
						case VisualBasic6Parser.AND:
						case VisualBasic6Parser.ATTRIBUTE:
						case VisualBasic6Parser.APPACTIVATE:
						case VisualBasic6Parser.APPEND:
						case VisualBasic6Parser.AS:
						case VisualBasic6Parser.BEEP:
						case VisualBasic6Parser.BEGIN:
						case VisualBasic6Parser.BINARY:
						case VisualBasic6Parser.BOOLEAN:
						case VisualBasic6Parser.BYVAL:
						case VisualBasic6Parser.BYREF:
						case VisualBasic6Parser.BYTE:
						case VisualBasic6Parser.CALL:
						case VisualBasic6Parser.CASE:
						case VisualBasic6Parser.CHDIR:
						case VisualBasic6Parser.CHDRIVE:
						case VisualBasic6Parser.CLASS:
						case VisualBasic6Parser.CLOSE:
						case VisualBasic6Parser.COLLECTION:
						case VisualBasic6Parser.CONST:
						case VisualBasic6Parser.DATE:
						case VisualBasic6Parser.DECLARE:
						case VisualBasic6Parser.DEFBOOL:
						case VisualBasic6Parser.DEFBYTE:
						case VisualBasic6Parser.DEFDATE:
						case VisualBasic6Parser.DEFDBL:
						case VisualBasic6Parser.DEFDEC:
						case VisualBasic6Parser.DEFCUR:
						case VisualBasic6Parser.DEFINT:
						case VisualBasic6Parser.DEFLNG:
						case VisualBasic6Parser.DEFOBJ:
						case VisualBasic6Parser.DEFSNG:
						case VisualBasic6Parser.DEFSTR:
						case VisualBasic6Parser.DEFVAR:
						case VisualBasic6Parser.DELETESETTING:
						case VisualBasic6Parser.DIM:
						case VisualBasic6Parser.DO:
						case VisualBasic6Parser.DOUBLE:
						case VisualBasic6Parser.EACH:
						case VisualBasic6Parser.ELSE:
						case VisualBasic6Parser.ELSEIF:
						case VisualBasic6Parser.END:
						case VisualBasic6Parser.ENUM:
						case VisualBasic6Parser.EQV:
						case VisualBasic6Parser.ERASE:
						case VisualBasic6Parser.ERROR:
						case VisualBasic6Parser.EVENT:
						case VisualBasic6Parser.FALSE:
						case VisualBasic6Parser.FILECOPY:
						case VisualBasic6Parser.FRIEND:
						case VisualBasic6Parser.FOR:
						case VisualBasic6Parser.FUNCTION:
						case VisualBasic6Parser.GET:
						case VisualBasic6Parser.GLOBAL:
						case VisualBasic6Parser.GOSUB:
						case VisualBasic6Parser.GOTO:
						case VisualBasic6Parser.IF:
						case VisualBasic6Parser.IMP:
						case VisualBasic6Parser.IMPLEMENTS:
						case VisualBasic6Parser.IN:
						case VisualBasic6Parser.INPUT:
						case VisualBasic6Parser.IS:
						case VisualBasic6Parser.INTEGER:
						case VisualBasic6Parser.KILL:
						case VisualBasic6Parser.LOAD:
						case VisualBasic6Parser.LOCK:
						case VisualBasic6Parser.LONG:
						case VisualBasic6Parser.LOOP:
						case VisualBasic6Parser.LEN:
						case VisualBasic6Parser.LET:
						case VisualBasic6Parser.LIB:
						case VisualBasic6Parser.LIKE:
						case VisualBasic6Parser.LSET:
						case VisualBasic6Parser.ME:
						case VisualBasic6Parser.MID:
						case VisualBasic6Parser.MKDIR:
						case VisualBasic6Parser.MOD:
						case VisualBasic6Parser.NAME:
						case VisualBasic6Parser.NEXT:
						case VisualBasic6Parser.NEW:
						case VisualBasic6Parser.NOT:
						case VisualBasic6Parser.NOTHING:
						case VisualBasic6Parser.NULL:
						case VisualBasic6Parser.OBJECT:
						case VisualBasic6Parser.ON:
						case VisualBasic6Parser.OPEN:
						case VisualBasic6Parser.OPTIONAL:
						case VisualBasic6Parser.OR:
						case VisualBasic6Parser.OUTPUT:
						case VisualBasic6Parser.PARAMARRAY:
						case VisualBasic6Parser.PRESERVE:
						case VisualBasic6Parser.PRINT:
						case VisualBasic6Parser.PRIVATE:
						case VisualBasic6Parser.PUBLIC:
						case VisualBasic6Parser.PUT:
						case VisualBasic6Parser.RANDOM:
						case VisualBasic6Parser.RANDOMIZE:
						case VisualBasic6Parser.RAISEEVENT:
						case VisualBasic6Parser.READ:
						case VisualBasic6Parser.REDIM:
						case VisualBasic6Parser.REM:
						case VisualBasic6Parser.RESET:
						case VisualBasic6Parser.RESUME:
						case VisualBasic6Parser.RETURN:
						case VisualBasic6Parser.RMDIR:
						case VisualBasic6Parser.RSET:
						case VisualBasic6Parser.SAVEPICTURE:
						case VisualBasic6Parser.SAVESETTING:
						case VisualBasic6Parser.SEEK:
						case VisualBasic6Parser.SELECT:
						case VisualBasic6Parser.SENDKEYS:
						case VisualBasic6Parser.SET:
						case VisualBasic6Parser.SETATTR:
						case VisualBasic6Parser.SHARED:
						case VisualBasic6Parser.SINGLE:
						case VisualBasic6Parser.SPC:
						case VisualBasic6Parser.STATIC:
						case VisualBasic6Parser.STEP:
						case VisualBasic6Parser.STOP:
						case VisualBasic6Parser.STRING:
						case VisualBasic6Parser.SUB:
						case VisualBasic6Parser.TAB:
						case VisualBasic6Parser.TEXT:
						case VisualBasic6Parser.THEN:
						case VisualBasic6Parser.TIME:
						case VisualBasic6Parser.TO:
						case VisualBasic6Parser.TRUE:
						case VisualBasic6Parser.TYPE:
						case VisualBasic6Parser.TYPEOF:
						case VisualBasic6Parser.UNLOAD:
						case VisualBasic6Parser.UNLOCK:
						case VisualBasic6Parser.UNTIL:
						case VisualBasic6Parser.VARIANT:
						case VisualBasic6Parser.VERSION:
						case VisualBasic6Parser.WEND:
						case VisualBasic6Parser.WHILE:
						case VisualBasic6Parser.WIDTH:
						case VisualBasic6Parser.WITH:
						case VisualBasic6Parser.WITHEVENTS:
						case VisualBasic6Parser.WRITE:
						case VisualBasic6Parser.XOR:
							{
							this.state = 2813;
							this.ambiguousKeyword();
							}
							break;
						case VisualBasic6Parser.IDENTIFIER:
							{
							this.state = 2814;
							this.match(VisualBasic6Parser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
					}
					this.state = 2819;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 486, this._ctx);
				}
				}
				break;
			case VisualBasic6Parser.ACCESS:
			case VisualBasic6Parser.ADDRESSOF:
			case VisualBasic6Parser.ALIAS:
			case VisualBasic6Parser.AND:
			case VisualBasic6Parser.ATTRIBUTE:
			case VisualBasic6Parser.APPACTIVATE:
			case VisualBasic6Parser.APPEND:
			case VisualBasic6Parser.AS:
			case VisualBasic6Parser.BEEP:
			case VisualBasic6Parser.BEGIN:
			case VisualBasic6Parser.BINARY:
			case VisualBasic6Parser.BOOLEAN:
			case VisualBasic6Parser.BYVAL:
			case VisualBasic6Parser.BYREF:
			case VisualBasic6Parser.BYTE:
			case VisualBasic6Parser.CALL:
			case VisualBasic6Parser.CASE:
			case VisualBasic6Parser.CHDIR:
			case VisualBasic6Parser.CHDRIVE:
			case VisualBasic6Parser.CLASS:
			case VisualBasic6Parser.CLOSE:
			case VisualBasic6Parser.COLLECTION:
			case VisualBasic6Parser.CONST:
			case VisualBasic6Parser.DATE:
			case VisualBasic6Parser.DECLARE:
			case VisualBasic6Parser.DEFBOOL:
			case VisualBasic6Parser.DEFBYTE:
			case VisualBasic6Parser.DEFDATE:
			case VisualBasic6Parser.DEFDBL:
			case VisualBasic6Parser.DEFDEC:
			case VisualBasic6Parser.DEFCUR:
			case VisualBasic6Parser.DEFINT:
			case VisualBasic6Parser.DEFLNG:
			case VisualBasic6Parser.DEFOBJ:
			case VisualBasic6Parser.DEFSNG:
			case VisualBasic6Parser.DEFSTR:
			case VisualBasic6Parser.DEFVAR:
			case VisualBasic6Parser.DELETESETTING:
			case VisualBasic6Parser.DIM:
			case VisualBasic6Parser.DO:
			case VisualBasic6Parser.DOUBLE:
			case VisualBasic6Parser.EACH:
			case VisualBasic6Parser.ELSE:
			case VisualBasic6Parser.ELSEIF:
			case VisualBasic6Parser.END:
			case VisualBasic6Parser.ENUM:
			case VisualBasic6Parser.EQV:
			case VisualBasic6Parser.ERASE:
			case VisualBasic6Parser.ERROR:
			case VisualBasic6Parser.EVENT:
			case VisualBasic6Parser.FALSE:
			case VisualBasic6Parser.FILECOPY:
			case VisualBasic6Parser.FRIEND:
			case VisualBasic6Parser.FOR:
			case VisualBasic6Parser.FUNCTION:
			case VisualBasic6Parser.GET:
			case VisualBasic6Parser.GLOBAL:
			case VisualBasic6Parser.GOSUB:
			case VisualBasic6Parser.GOTO:
			case VisualBasic6Parser.IF:
			case VisualBasic6Parser.IMP:
			case VisualBasic6Parser.IMPLEMENTS:
			case VisualBasic6Parser.IN:
			case VisualBasic6Parser.INPUT:
			case VisualBasic6Parser.IS:
			case VisualBasic6Parser.INTEGER:
			case VisualBasic6Parser.KILL:
			case VisualBasic6Parser.LOAD:
			case VisualBasic6Parser.LOCK:
			case VisualBasic6Parser.LONG:
			case VisualBasic6Parser.LOOP:
			case VisualBasic6Parser.LEN:
			case VisualBasic6Parser.LET:
			case VisualBasic6Parser.LIB:
			case VisualBasic6Parser.LIKE:
			case VisualBasic6Parser.LSET:
			case VisualBasic6Parser.ME:
			case VisualBasic6Parser.MID:
			case VisualBasic6Parser.MKDIR:
			case VisualBasic6Parser.MOD:
			case VisualBasic6Parser.NAME:
			case VisualBasic6Parser.NEXT:
			case VisualBasic6Parser.NEW:
			case VisualBasic6Parser.NOT:
			case VisualBasic6Parser.NOTHING:
			case VisualBasic6Parser.NULL:
			case VisualBasic6Parser.OBJECT:
			case VisualBasic6Parser.ON:
			case VisualBasic6Parser.OPEN:
			case VisualBasic6Parser.OPTIONAL:
			case VisualBasic6Parser.OR:
			case VisualBasic6Parser.OUTPUT:
			case VisualBasic6Parser.PARAMARRAY:
			case VisualBasic6Parser.PRESERVE:
			case VisualBasic6Parser.PRINT:
			case VisualBasic6Parser.PRIVATE:
			case VisualBasic6Parser.PUBLIC:
			case VisualBasic6Parser.PUT:
			case VisualBasic6Parser.RANDOM:
			case VisualBasic6Parser.RANDOMIZE:
			case VisualBasic6Parser.RAISEEVENT:
			case VisualBasic6Parser.READ:
			case VisualBasic6Parser.REDIM:
			case VisualBasic6Parser.REM:
			case VisualBasic6Parser.RESET:
			case VisualBasic6Parser.RESUME:
			case VisualBasic6Parser.RETURN:
			case VisualBasic6Parser.RMDIR:
			case VisualBasic6Parser.RSET:
			case VisualBasic6Parser.SAVEPICTURE:
			case VisualBasic6Parser.SAVESETTING:
			case VisualBasic6Parser.SEEK:
			case VisualBasic6Parser.SELECT:
			case VisualBasic6Parser.SENDKEYS:
			case VisualBasic6Parser.SET:
			case VisualBasic6Parser.SETATTR:
			case VisualBasic6Parser.SHARED:
			case VisualBasic6Parser.SINGLE:
			case VisualBasic6Parser.SPC:
			case VisualBasic6Parser.STATIC:
			case VisualBasic6Parser.STEP:
			case VisualBasic6Parser.STOP:
			case VisualBasic6Parser.STRING:
			case VisualBasic6Parser.SUB:
			case VisualBasic6Parser.TAB:
			case VisualBasic6Parser.TEXT:
			case VisualBasic6Parser.THEN:
			case VisualBasic6Parser.TIME:
			case VisualBasic6Parser.TO:
			case VisualBasic6Parser.TRUE:
			case VisualBasic6Parser.TYPE:
			case VisualBasic6Parser.TYPEOF:
			case VisualBasic6Parser.UNLOAD:
			case VisualBasic6Parser.UNLOCK:
			case VisualBasic6Parser.UNTIL:
			case VisualBasic6Parser.VARIANT:
			case VisualBasic6Parser.VERSION:
			case VisualBasic6Parser.WEND:
			case VisualBasic6Parser.WHILE:
			case VisualBasic6Parser.WIDTH:
			case VisualBasic6Parser.WITH:
			case VisualBasic6Parser.WITHEVENTS:
			case VisualBasic6Parser.WRITE:
			case VisualBasic6Parser.XOR:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 2820;
				this.ambiguousKeyword();
				this.state = 2823;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						this.state = 2823;
						this._errHandler.sync(this);
						switch (this._input.LA(1)) {
						case VisualBasic6Parser.ACCESS:
						case VisualBasic6Parser.ADDRESSOF:
						case VisualBasic6Parser.ALIAS:
						case VisualBasic6Parser.AND:
						case VisualBasic6Parser.ATTRIBUTE:
						case VisualBasic6Parser.APPACTIVATE:
						case VisualBasic6Parser.APPEND:
						case VisualBasic6Parser.AS:
						case VisualBasic6Parser.BEEP:
						case VisualBasic6Parser.BEGIN:
						case VisualBasic6Parser.BINARY:
						case VisualBasic6Parser.BOOLEAN:
						case VisualBasic6Parser.BYVAL:
						case VisualBasic6Parser.BYREF:
						case VisualBasic6Parser.BYTE:
						case VisualBasic6Parser.CALL:
						case VisualBasic6Parser.CASE:
						case VisualBasic6Parser.CHDIR:
						case VisualBasic6Parser.CHDRIVE:
						case VisualBasic6Parser.CLASS:
						case VisualBasic6Parser.CLOSE:
						case VisualBasic6Parser.COLLECTION:
						case VisualBasic6Parser.CONST:
						case VisualBasic6Parser.DATE:
						case VisualBasic6Parser.DECLARE:
						case VisualBasic6Parser.DEFBOOL:
						case VisualBasic6Parser.DEFBYTE:
						case VisualBasic6Parser.DEFDATE:
						case VisualBasic6Parser.DEFDBL:
						case VisualBasic6Parser.DEFDEC:
						case VisualBasic6Parser.DEFCUR:
						case VisualBasic6Parser.DEFINT:
						case VisualBasic6Parser.DEFLNG:
						case VisualBasic6Parser.DEFOBJ:
						case VisualBasic6Parser.DEFSNG:
						case VisualBasic6Parser.DEFSTR:
						case VisualBasic6Parser.DEFVAR:
						case VisualBasic6Parser.DELETESETTING:
						case VisualBasic6Parser.DIM:
						case VisualBasic6Parser.DO:
						case VisualBasic6Parser.DOUBLE:
						case VisualBasic6Parser.EACH:
						case VisualBasic6Parser.ELSE:
						case VisualBasic6Parser.ELSEIF:
						case VisualBasic6Parser.END:
						case VisualBasic6Parser.ENUM:
						case VisualBasic6Parser.EQV:
						case VisualBasic6Parser.ERASE:
						case VisualBasic6Parser.ERROR:
						case VisualBasic6Parser.EVENT:
						case VisualBasic6Parser.FALSE:
						case VisualBasic6Parser.FILECOPY:
						case VisualBasic6Parser.FRIEND:
						case VisualBasic6Parser.FOR:
						case VisualBasic6Parser.FUNCTION:
						case VisualBasic6Parser.GET:
						case VisualBasic6Parser.GLOBAL:
						case VisualBasic6Parser.GOSUB:
						case VisualBasic6Parser.GOTO:
						case VisualBasic6Parser.IF:
						case VisualBasic6Parser.IMP:
						case VisualBasic6Parser.IMPLEMENTS:
						case VisualBasic6Parser.IN:
						case VisualBasic6Parser.INPUT:
						case VisualBasic6Parser.IS:
						case VisualBasic6Parser.INTEGER:
						case VisualBasic6Parser.KILL:
						case VisualBasic6Parser.LOAD:
						case VisualBasic6Parser.LOCK:
						case VisualBasic6Parser.LONG:
						case VisualBasic6Parser.LOOP:
						case VisualBasic6Parser.LEN:
						case VisualBasic6Parser.LET:
						case VisualBasic6Parser.LIB:
						case VisualBasic6Parser.LIKE:
						case VisualBasic6Parser.LSET:
						case VisualBasic6Parser.ME:
						case VisualBasic6Parser.MID:
						case VisualBasic6Parser.MKDIR:
						case VisualBasic6Parser.MOD:
						case VisualBasic6Parser.NAME:
						case VisualBasic6Parser.NEXT:
						case VisualBasic6Parser.NEW:
						case VisualBasic6Parser.NOT:
						case VisualBasic6Parser.NOTHING:
						case VisualBasic6Parser.NULL:
						case VisualBasic6Parser.OBJECT:
						case VisualBasic6Parser.ON:
						case VisualBasic6Parser.OPEN:
						case VisualBasic6Parser.OPTIONAL:
						case VisualBasic6Parser.OR:
						case VisualBasic6Parser.OUTPUT:
						case VisualBasic6Parser.PARAMARRAY:
						case VisualBasic6Parser.PRESERVE:
						case VisualBasic6Parser.PRINT:
						case VisualBasic6Parser.PRIVATE:
						case VisualBasic6Parser.PUBLIC:
						case VisualBasic6Parser.PUT:
						case VisualBasic6Parser.RANDOM:
						case VisualBasic6Parser.RANDOMIZE:
						case VisualBasic6Parser.RAISEEVENT:
						case VisualBasic6Parser.READ:
						case VisualBasic6Parser.REDIM:
						case VisualBasic6Parser.REM:
						case VisualBasic6Parser.RESET:
						case VisualBasic6Parser.RESUME:
						case VisualBasic6Parser.RETURN:
						case VisualBasic6Parser.RMDIR:
						case VisualBasic6Parser.RSET:
						case VisualBasic6Parser.SAVEPICTURE:
						case VisualBasic6Parser.SAVESETTING:
						case VisualBasic6Parser.SEEK:
						case VisualBasic6Parser.SELECT:
						case VisualBasic6Parser.SENDKEYS:
						case VisualBasic6Parser.SET:
						case VisualBasic6Parser.SETATTR:
						case VisualBasic6Parser.SHARED:
						case VisualBasic6Parser.SINGLE:
						case VisualBasic6Parser.SPC:
						case VisualBasic6Parser.STATIC:
						case VisualBasic6Parser.STEP:
						case VisualBasic6Parser.STOP:
						case VisualBasic6Parser.STRING:
						case VisualBasic6Parser.SUB:
						case VisualBasic6Parser.TAB:
						case VisualBasic6Parser.TEXT:
						case VisualBasic6Parser.THEN:
						case VisualBasic6Parser.TIME:
						case VisualBasic6Parser.TO:
						case VisualBasic6Parser.TRUE:
						case VisualBasic6Parser.TYPE:
						case VisualBasic6Parser.TYPEOF:
						case VisualBasic6Parser.UNLOAD:
						case VisualBasic6Parser.UNLOCK:
						case VisualBasic6Parser.UNTIL:
						case VisualBasic6Parser.VARIANT:
						case VisualBasic6Parser.VERSION:
						case VisualBasic6Parser.WEND:
						case VisualBasic6Parser.WHILE:
						case VisualBasic6Parser.WIDTH:
						case VisualBasic6Parser.WITH:
						case VisualBasic6Parser.WITHEVENTS:
						case VisualBasic6Parser.WRITE:
						case VisualBasic6Parser.XOR:
							{
							this.state = 2821;
							this.ambiguousKeyword();
							}
							break;
						case VisualBasic6Parser.IDENTIFIER:
							{
							this.state = 2822;
							this.match(VisualBasic6Parser.IDENTIFIER);
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 2825;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 488, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comparisonOperator(): ComparisonOperatorContext {
		let _localctx: ComparisonOperatorContext = new ComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, VisualBasic6Parser.RULE_comparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2829;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.IS || _la === VisualBasic6Parser.LIKE || ((((_la - 186)) & ~0x1F) === 0 && ((1 << (_la - 186)) & ((1 << (VisualBasic6Parser.EQ - 186)) | (1 << (VisualBasic6Parser.GEQ - 186)) | (1 << (VisualBasic6Parser.GT - 186)) | (1 << (VisualBasic6Parser.LEQ - 186)) | (1 << (VisualBasic6Parser.LT - 186)) | (1 << (VisualBasic6Parser.NEQ - 186)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public complexType(): ComplexTypeContext {
		let _localctx: ComplexTypeContext = new ComplexTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, VisualBasic6Parser.RULE_complexType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2831;
			this.ambiguousIdentifier();
			this.state = 2836;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 490, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 2832;
					this.match(VisualBasic6Parser.DOT);
					this.state = 2833;
					this.ambiguousIdentifier();
					}
					}
				}
				this.state = 2838;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 490, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldLength(): FieldLengthContext {
		let _localctx: FieldLengthContext = new FieldLengthContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, VisualBasic6Parser.RULE_fieldLength);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2839;
			this.match(VisualBasic6Parser.MULT);
			this.state = 2841;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === VisualBasic6Parser.WS) {
				{
				this.state = 2840;
				this.match(VisualBasic6Parser.WS);
				}
			}

			this.state = 2845;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case VisualBasic6Parser.INTEGERLITERAL:
				{
				this.state = 2843;
				this.match(VisualBasic6Parser.INTEGERLITERAL);
				}
				break;
			case VisualBasic6Parser.ACCESS:
			case VisualBasic6Parser.ADDRESSOF:
			case VisualBasic6Parser.ALIAS:
			case VisualBasic6Parser.AND:
			case VisualBasic6Parser.ATTRIBUTE:
			case VisualBasic6Parser.APPACTIVATE:
			case VisualBasic6Parser.APPEND:
			case VisualBasic6Parser.AS:
			case VisualBasic6Parser.BEEP:
			case VisualBasic6Parser.BEGIN:
			case VisualBasic6Parser.BINARY:
			case VisualBasic6Parser.BOOLEAN:
			case VisualBasic6Parser.BYVAL:
			case VisualBasic6Parser.BYREF:
			case VisualBasic6Parser.BYTE:
			case VisualBasic6Parser.CALL:
			case VisualBasic6Parser.CASE:
			case VisualBasic6Parser.CHDIR:
			case VisualBasic6Parser.CHDRIVE:
			case VisualBasic6Parser.CLASS:
			case VisualBasic6Parser.CLOSE:
			case VisualBasic6Parser.COLLECTION:
			case VisualBasic6Parser.CONST:
			case VisualBasic6Parser.DATE:
			case VisualBasic6Parser.DECLARE:
			case VisualBasic6Parser.DEFBOOL:
			case VisualBasic6Parser.DEFBYTE:
			case VisualBasic6Parser.DEFDATE:
			case VisualBasic6Parser.DEFDBL:
			case VisualBasic6Parser.DEFDEC:
			case VisualBasic6Parser.DEFCUR:
			case VisualBasic6Parser.DEFINT:
			case VisualBasic6Parser.DEFLNG:
			case VisualBasic6Parser.DEFOBJ:
			case VisualBasic6Parser.DEFSNG:
			case VisualBasic6Parser.DEFSTR:
			case VisualBasic6Parser.DEFVAR:
			case VisualBasic6Parser.DELETESETTING:
			case VisualBasic6Parser.DIM:
			case VisualBasic6Parser.DO:
			case VisualBasic6Parser.DOUBLE:
			case VisualBasic6Parser.EACH:
			case VisualBasic6Parser.ELSE:
			case VisualBasic6Parser.ELSEIF:
			case VisualBasic6Parser.END:
			case VisualBasic6Parser.ENUM:
			case VisualBasic6Parser.EQV:
			case VisualBasic6Parser.ERASE:
			case VisualBasic6Parser.ERROR:
			case VisualBasic6Parser.EVENT:
			case VisualBasic6Parser.FALSE:
			case VisualBasic6Parser.FILECOPY:
			case VisualBasic6Parser.FRIEND:
			case VisualBasic6Parser.FOR:
			case VisualBasic6Parser.FUNCTION:
			case VisualBasic6Parser.GET:
			case VisualBasic6Parser.GLOBAL:
			case VisualBasic6Parser.GOSUB:
			case VisualBasic6Parser.GOTO:
			case VisualBasic6Parser.IF:
			case VisualBasic6Parser.IMP:
			case VisualBasic6Parser.IMPLEMENTS:
			case VisualBasic6Parser.IN:
			case VisualBasic6Parser.INPUT:
			case VisualBasic6Parser.IS:
			case VisualBasic6Parser.INTEGER:
			case VisualBasic6Parser.KILL:
			case VisualBasic6Parser.LOAD:
			case VisualBasic6Parser.LOCK:
			case VisualBasic6Parser.LONG:
			case VisualBasic6Parser.LOOP:
			case VisualBasic6Parser.LEN:
			case VisualBasic6Parser.LET:
			case VisualBasic6Parser.LIB:
			case VisualBasic6Parser.LIKE:
			case VisualBasic6Parser.LSET:
			case VisualBasic6Parser.ME:
			case VisualBasic6Parser.MID:
			case VisualBasic6Parser.MKDIR:
			case VisualBasic6Parser.MOD:
			case VisualBasic6Parser.NAME:
			case VisualBasic6Parser.NEXT:
			case VisualBasic6Parser.NEW:
			case VisualBasic6Parser.NOT:
			case VisualBasic6Parser.NOTHING:
			case VisualBasic6Parser.NULL:
			case VisualBasic6Parser.OBJECT:
			case VisualBasic6Parser.ON:
			case VisualBasic6Parser.OPEN:
			case VisualBasic6Parser.OPTIONAL:
			case VisualBasic6Parser.OR:
			case VisualBasic6Parser.OUTPUT:
			case VisualBasic6Parser.PARAMARRAY:
			case VisualBasic6Parser.PRESERVE:
			case VisualBasic6Parser.PRINT:
			case VisualBasic6Parser.PRIVATE:
			case VisualBasic6Parser.PUBLIC:
			case VisualBasic6Parser.PUT:
			case VisualBasic6Parser.RANDOM:
			case VisualBasic6Parser.RANDOMIZE:
			case VisualBasic6Parser.RAISEEVENT:
			case VisualBasic6Parser.READ:
			case VisualBasic6Parser.REDIM:
			case VisualBasic6Parser.REM:
			case VisualBasic6Parser.RESET:
			case VisualBasic6Parser.RESUME:
			case VisualBasic6Parser.RETURN:
			case VisualBasic6Parser.RMDIR:
			case VisualBasic6Parser.RSET:
			case VisualBasic6Parser.SAVEPICTURE:
			case VisualBasic6Parser.SAVESETTING:
			case VisualBasic6Parser.SEEK:
			case VisualBasic6Parser.SELECT:
			case VisualBasic6Parser.SENDKEYS:
			case VisualBasic6Parser.SET:
			case VisualBasic6Parser.SETATTR:
			case VisualBasic6Parser.SHARED:
			case VisualBasic6Parser.SINGLE:
			case VisualBasic6Parser.SPC:
			case VisualBasic6Parser.STATIC:
			case VisualBasic6Parser.STEP:
			case VisualBasic6Parser.STOP:
			case VisualBasic6Parser.STRING:
			case VisualBasic6Parser.SUB:
			case VisualBasic6Parser.TAB:
			case VisualBasic6Parser.TEXT:
			case VisualBasic6Parser.THEN:
			case VisualBasic6Parser.TIME:
			case VisualBasic6Parser.TO:
			case VisualBasic6Parser.TRUE:
			case VisualBasic6Parser.TYPE:
			case VisualBasic6Parser.TYPEOF:
			case VisualBasic6Parser.UNLOAD:
			case VisualBasic6Parser.UNLOCK:
			case VisualBasic6Parser.UNTIL:
			case VisualBasic6Parser.VARIANT:
			case VisualBasic6Parser.VERSION:
			case VisualBasic6Parser.WEND:
			case VisualBasic6Parser.WHILE:
			case VisualBasic6Parser.WIDTH:
			case VisualBasic6Parser.WITH:
			case VisualBasic6Parser.WITHEVENTS:
			case VisualBasic6Parser.WRITE:
			case VisualBasic6Parser.XOR:
			case VisualBasic6Parser.L_SQUARE_BRACKET:
			case VisualBasic6Parser.IDENTIFIER:
				{
				this.state = 2844;
				this.ambiguousIdentifier();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public letterrange(): LetterrangeContext {
		let _localctx: LetterrangeContext = new LetterrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, VisualBasic6Parser.RULE_letterrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2847;
			this.certainIdentifier();
			this.state = 2856;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 495, this._ctx) ) {
			case 1:
				{
				this.state = 2849;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2848;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2851;
				this.match(VisualBasic6Parser.MINUS);
				this.state = 2853;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2852;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2855;
				this.certainIdentifier();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineLabel(): LineLabelContext {
		let _localctx: LineLabelContext = new LineLabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, VisualBasic6Parser.RULE_lineLabel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2858;
			this.ambiguousIdentifier();
			this.state = 2859;
			this.match(VisualBasic6Parser.COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, VisualBasic6Parser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2861;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.FALSE || _la === VisualBasic6Parser.NOTHING || _la === VisualBasic6Parser.NULL || _la === VisualBasic6Parser.TRUE || ((((_la - 208)) & ~0x1F) === 0 && ((1 << (_la - 208)) & ((1 << (VisualBasic6Parser.STRINGLITERAL - 208)) | (1 << (VisualBasic6Parser.DATELITERAL - 208)) | (1 << (VisualBasic6Parser.COLORLITERAL - 208)) | (1 << (VisualBasic6Parser.INTEGERLITERAL - 208)) | (1 << (VisualBasic6Parser.DOUBLELITERAL - 208)) | (1 << (VisualBasic6Parser.FILENUMBER - 208)) | (1 << (VisualBasic6Parser.OCTALLITERAL - 208)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public publicPrivateVisibility(): PublicPrivateVisibilityContext {
		let _localctx: PublicPrivateVisibilityContext = new PublicPrivateVisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, VisualBasic6Parser.RULE_publicPrivateVisibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2863;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public publicPrivateGlobalVisibility(): PublicPrivateGlobalVisibilityContext {
		let _localctx: PublicPrivateGlobalVisibilityContext = new PublicPrivateGlobalVisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, VisualBasic6Parser.RULE_publicPrivateGlobalVisibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2865;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, VisualBasic6Parser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2869;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 496, this._ctx) ) {
			case 1:
				{
				this.state = 2867;
				this.baseType();
				}
				break;

			case 2:
				{
				this.state = 2868;
				this.complexType();
				}
				break;
			}
			this.state = 2879;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 499, this._ctx) ) {
			case 1:
				{
				this.state = 2872;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2871;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2874;
				this.match(VisualBasic6Parser.LPAREN);
				this.state = 2876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === VisualBasic6Parser.WS) {
					{
					this.state = 2875;
					this.match(VisualBasic6Parser.WS);
					}
				}

				this.state = 2878;
				this.match(VisualBasic6Parser.RPAREN);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typeHint(): TypeHintContext {
		let _localctx: TypeHintContext = new TypeHintContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, VisualBasic6Parser.RULE_typeHint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2881;
			_la = this._input.LA(1);
			if (!(((((_la - 178)) & ~0x1F) === 0 && ((1 << (_la - 178)) & ((1 << (VisualBasic6Parser.AMPERSAND - 178)) | (1 << (VisualBasic6Parser.AT - 178)) | (1 << (VisualBasic6Parser.DOLLAR - 178)) | (1 << (VisualBasic6Parser.EXCLAMATIONMARK - 178)) | (1 << (VisualBasic6Parser.HASH - 178)) | (1 << (VisualBasic6Parser.PERCENT - 178)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visibility(): VisibilityContext {
		let _localctx: VisibilityContext = new VisibilityContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, VisualBasic6Parser.RULE_visibility);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2883;
			_la = this._input.LA(1);
			if (!(_la === VisualBasic6Parser.FRIEND || _la === VisualBasic6Parser.GLOBAL || _la === VisualBasic6Parser.PRIVATE || _la === VisualBasic6Parser.PUBLIC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ambiguousKeyword(): AmbiguousKeywordContext {
		let _localctx: AmbiguousKeywordContext = new AmbiguousKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, VisualBasic6Parser.RULE_ambiguousKeyword);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 2885;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << VisualBasic6Parser.ACCESS) | (1 << VisualBasic6Parser.ADDRESSOF) | (1 << VisualBasic6Parser.ALIAS) | (1 << VisualBasic6Parser.AND) | (1 << VisualBasic6Parser.ATTRIBUTE) | (1 << VisualBasic6Parser.APPACTIVATE) | (1 << VisualBasic6Parser.APPEND) | (1 << VisualBasic6Parser.AS) | (1 << VisualBasic6Parser.BEEP) | (1 << VisualBasic6Parser.BEGIN) | (1 << VisualBasic6Parser.BINARY) | (1 << VisualBasic6Parser.BOOLEAN) | (1 << VisualBasic6Parser.BYVAL) | (1 << VisualBasic6Parser.BYREF) | (1 << VisualBasic6Parser.BYTE) | (1 << VisualBasic6Parser.CALL) | (1 << VisualBasic6Parser.CASE) | (1 << VisualBasic6Parser.CHDIR) | (1 << VisualBasic6Parser.CHDRIVE) | (1 << VisualBasic6Parser.CLASS) | (1 << VisualBasic6Parser.CLOSE) | (1 << VisualBasic6Parser.COLLECTION) | (1 << VisualBasic6Parser.CONST) | (1 << VisualBasic6Parser.DATE) | (1 << VisualBasic6Parser.DECLARE) | (1 << VisualBasic6Parser.DEFBOOL) | (1 << VisualBasic6Parser.DEFBYTE) | (1 << VisualBasic6Parser.DEFDATE) | (1 << VisualBasic6Parser.DEFDBL) | (1 << VisualBasic6Parser.DEFDEC))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (VisualBasic6Parser.DEFCUR - 32)) | (1 << (VisualBasic6Parser.DEFINT - 32)) | (1 << (VisualBasic6Parser.DEFLNG - 32)) | (1 << (VisualBasic6Parser.DEFOBJ - 32)) | (1 << (VisualBasic6Parser.DEFSNG - 32)) | (1 << (VisualBasic6Parser.DEFSTR - 32)) | (1 << (VisualBasic6Parser.DEFVAR - 32)) | (1 << (VisualBasic6Parser.DELETESETTING - 32)) | (1 << (VisualBasic6Parser.DIM - 32)) | (1 << (VisualBasic6Parser.DO - 32)) | (1 << (VisualBasic6Parser.DOUBLE - 32)) | (1 << (VisualBasic6Parser.EACH - 32)) | (1 << (VisualBasic6Parser.ELSE - 32)) | (1 << (VisualBasic6Parser.ELSEIF - 32)) | (1 << (VisualBasic6Parser.END - 32)) | (1 << (VisualBasic6Parser.ENUM - 32)) | (1 << (VisualBasic6Parser.EQV - 32)) | (1 << (VisualBasic6Parser.ERASE - 32)) | (1 << (VisualBasic6Parser.ERROR - 32)) | (1 << (VisualBasic6Parser.EVENT - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (VisualBasic6Parser.FALSE - 66)) | (1 << (VisualBasic6Parser.FILECOPY - 66)) | (1 << (VisualBasic6Parser.FRIEND - 66)) | (1 << (VisualBasic6Parser.FOR - 66)) | (1 << (VisualBasic6Parser.FUNCTION - 66)) | (1 << (VisualBasic6Parser.GET - 66)) | (1 << (VisualBasic6Parser.GLOBAL - 66)) | (1 << (VisualBasic6Parser.GOSUB - 66)) | (1 << (VisualBasic6Parser.GOTO - 66)) | (1 << (VisualBasic6Parser.IF - 66)) | (1 << (VisualBasic6Parser.IMP - 66)) | (1 << (VisualBasic6Parser.IMPLEMENTS - 66)) | (1 << (VisualBasic6Parser.IN - 66)) | (1 << (VisualBasic6Parser.INPUT - 66)) | (1 << (VisualBasic6Parser.IS - 66)) | (1 << (VisualBasic6Parser.INTEGER - 66)) | (1 << (VisualBasic6Parser.KILL - 66)) | (1 << (VisualBasic6Parser.LOAD - 66)) | (1 << (VisualBasic6Parser.LOCK - 66)) | (1 << (VisualBasic6Parser.LONG - 66)) | (1 << (VisualBasic6Parser.LOOP - 66)) | (1 << (VisualBasic6Parser.LEN - 66)) | (1 << (VisualBasic6Parser.LET - 66)) | (1 << (VisualBasic6Parser.LIB - 66)) | (1 << (VisualBasic6Parser.LIKE - 66)) | (1 << (VisualBasic6Parser.LSET - 66)))) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & ((1 << (VisualBasic6Parser.ME - 100)) | (1 << (VisualBasic6Parser.MID - 100)) | (1 << (VisualBasic6Parser.MKDIR - 100)) | (1 << (VisualBasic6Parser.MOD - 100)) | (1 << (VisualBasic6Parser.NAME - 100)) | (1 << (VisualBasic6Parser.NEXT - 100)) | (1 << (VisualBasic6Parser.NEW - 100)) | (1 << (VisualBasic6Parser.NOT - 100)) | (1 << (VisualBasic6Parser.NOTHING - 100)) | (1 << (VisualBasic6Parser.NULL - 100)) | (1 << (VisualBasic6Parser.OBJECT - 100)) | (1 << (VisualBasic6Parser.ON - 100)) | (1 << (VisualBasic6Parser.OPEN - 100)) | (1 << (VisualBasic6Parser.OPTIONAL - 100)) | (1 << (VisualBasic6Parser.OR - 100)) | (1 << (VisualBasic6Parser.OUTPUT - 100)) | (1 << (VisualBasic6Parser.PARAMARRAY - 100)) | (1 << (VisualBasic6Parser.PRESERVE - 100)) | (1 << (VisualBasic6Parser.PRINT - 100)) | (1 << (VisualBasic6Parser.PRIVATE - 100)) | (1 << (VisualBasic6Parser.PUBLIC - 100)) | (1 << (VisualBasic6Parser.PUT - 100)) | (1 << (VisualBasic6Parser.RANDOM - 100)))) !== 0) || ((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & ((1 << (VisualBasic6Parser.RANDOMIZE - 132)) | (1 << (VisualBasic6Parser.RAISEEVENT - 132)) | (1 << (VisualBasic6Parser.READ - 132)) | (1 << (VisualBasic6Parser.REDIM - 132)) | (1 << (VisualBasic6Parser.REM - 132)) | (1 << (VisualBasic6Parser.RESET - 132)) | (1 << (VisualBasic6Parser.RESUME - 132)) | (1 << (VisualBasic6Parser.RETURN - 132)) | (1 << (VisualBasic6Parser.RMDIR - 132)) | (1 << (VisualBasic6Parser.RSET - 132)) | (1 << (VisualBasic6Parser.SAVEPICTURE - 132)) | (1 << (VisualBasic6Parser.SAVESETTING - 132)) | (1 << (VisualBasic6Parser.SEEK - 132)) | (1 << (VisualBasic6Parser.SELECT - 132)) | (1 << (VisualBasic6Parser.SENDKEYS - 132)) | (1 << (VisualBasic6Parser.SET - 132)) | (1 << (VisualBasic6Parser.SETATTR - 132)) | (1 << (VisualBasic6Parser.SHARED - 132)) | (1 << (VisualBasic6Parser.SINGLE - 132)) | (1 << (VisualBasic6Parser.SPC - 132)) | (1 << (VisualBasic6Parser.STATIC - 132)) | (1 << (VisualBasic6Parser.STEP - 132)) | (1 << (VisualBasic6Parser.STOP - 132)) | (1 << (VisualBasic6Parser.STRING - 132)) | (1 << (VisualBasic6Parser.SUB - 132)) | (1 << (VisualBasic6Parser.TAB - 132)) | (1 << (VisualBasic6Parser.TEXT - 132)) | (1 << (VisualBasic6Parser.THEN - 132)) | (1 << (VisualBasic6Parser.TIME - 132)) | (1 << (VisualBasic6Parser.TO - 132)) | (1 << (VisualBasic6Parser.TRUE - 132)))) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & ((1 << (VisualBasic6Parser.TYPE - 164)) | (1 << (VisualBasic6Parser.TYPEOF - 164)) | (1 << (VisualBasic6Parser.UNLOAD - 164)) | (1 << (VisualBasic6Parser.UNLOCK - 164)) | (1 << (VisualBasic6Parser.UNTIL - 164)) | (1 << (VisualBasic6Parser.VARIANT - 164)) | (1 << (VisualBasic6Parser.VERSION - 164)) | (1 << (VisualBasic6Parser.WEND - 164)) | (1 << (VisualBasic6Parser.WHILE - 164)) | (1 << (VisualBasic6Parser.WIDTH - 164)) | (1 << (VisualBasic6Parser.WITH - 164)) | (1 << (VisualBasic6Parser.WITHEVENTS - 164)) | (1 << (VisualBasic6Parser.WRITE - 164)) | (1 << (VisualBasic6Parser.XOR - 164)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 110:
			return this.valueStmt_sempred(_localctx as ValueStmtContext, predIndex);
		}
		return true;
	}
	private valueStmt_sempred(_localctx: ValueStmtContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 25);

		case 1:
			return this.precpred(this._ctx, 22);

		case 2:
			return this.precpred(this._ctx, 21);

		case 3:
			return this.precpred(this._ctx, 20);

		case 4:
			return this.precpred(this._ctx, 19);

		case 5:
			return this.precpred(this._ctx, 18);

		case 6:
			return this.precpred(this._ctx, 17);

		case 7:
			return this.precpred(this._ctx, 16);

		case 8:
			return this.precpred(this._ctx, 15);

		case 9:
			return this.precpred(this._ctx, 14);

		case 10:
			return this.precpred(this._ctx, 13);

		case 11:
			return this.precpred(this._ctx, 12);

		case 12:
			return this.precpred(this._ctx, 11);

		case 13:
			return this.precpred(this._ctx, 10);

		case 14:
			return this.precpred(this._ctx, 9);

		case 15:
			return this.precpred(this._ctx, 7);

		case 16:
			return this.precpred(this._ctx, 6);

		case 17:
			return this.precpred(this._ctx, 5);

		case 18:
			return this.precpred(this._ctx, 4);

		case 19:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 6;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\xDF\u0B4A\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x03\x02\x03\x02\x03\x02\x03\x03\x05\x03\u013D" +
		"\n\x03\x03\x03\x07\x03\u0140\n\x03\f\x03\x0E\x03\u0143\v\x03\x03\x03\x03" +
		"\x03\x06\x03\u0147\n\x03\r\x03\x0E\x03\u0148\x05\x03\u014B\n\x03\x03\x03" +
		"\x05\x03\u014E\n\x03\x03\x03\x07\x03\u0151\n\x03\f\x03\x0E\x03\u0154\v" +
		"\x03\x03\x03\x05\x03\u0157\n\x03\x03\x03\x07\x03\u015A\n\x03\f\x03\x0E" +
		"\x03\u015D\v\x03\x03\x03\x05\x03\u0160\n\x03\x03\x03\x07\x03\u0163\n\x03" +
		"\f\x03\x0E\x03\u0166\v\x03\x03\x03\x05\x03\u0169\n\x03\x03\x03\x07\x03" +
		"\u016C\n\x03\f\x03\x0E\x03\u016F\v\x03\x03\x03\x05\x03\u0172\n\x03\x03" +
		"\x03\x07\x03\u0175\n\x03\f\x03\x0E\x03\u0178\v\x03\x03\x03\x05\x03\u017B" +
		"\n\x03\x03\x03\x07\x03\u017E\n\x03\f\x03\x0E\x03\u0181\v\x03\x03\x03\x05" +
		"\x03\u0184\n\x03\x03\x04\x06\x04\u0187\n\x04\r\x04\x0E\x04\u0188\x03\x05" +
		"\x03\x05\x05\x05\u018D\n\x05\x03\x05\x03\x05\x05\x05\u0191\n\x05\x03\x05" +
		"\x03\x05\x03\x05\x05\x05\u0196\n\x05\x03\x05\x05\x05\u0199\n\x05\x03\x05" +
		"\x07\x05\u019C\n\x05\f\x05\x0E\x05\u019F\v\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u01AA\n\b\x03\t\x03\t\x06" +
		"\t\u01AE\n\t\r\t\x0E\t\u01AF\x03\t\x06\t\u01B3\n\t\r\t\x0E\t\u01B4\x03" +
		"\t\x03\t\x06\t\u01B9\n\t\r\t\x0E\t\u01BA\x03\n\x03\n\x05\n\u01BF\n\n\x03" +
		"\n\x03\n\x05\n\u01C3\n\n\x03\n\x03\n\x03\n\x03\v\x03\v\x06\v\u01CA\n\v" +
		"\r\v\x0E\v\u01CB\x06\v\u01CE\n\v\r\v\x0E\v\u01CF\x03\f\x03\f\x06\f\u01D4" +
		"\n\f\r\f\x0E\f\u01D5\x06\f\u01D8\n\f\r\f\x0E\f\u01D9\x03\r\x03\r\x03\r" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x05\r\u01E4\n\r\x03\x0E\x03\x0E\x06\x0E" +
		"\u01E8\n\x0E\r\x0E\x0E\x0E\u01E9\x03\x0E\x07\x0E\u01ED\n\x0E\f\x0E\x0E" +
		"\x0E\u01F0\v\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u01FE\n\x0F\x03\x10\x05" +
		"\x10\u0201\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10" +
		"\u0209\n\x10\x03\x10\x06\x10\u020C\n\x10\r\x10\x0E\x10\u020D\x03\x10\x06" +
		"\x10\u0211\n\x10\r\x10\x0E\x10\u0212\x03\x10\x03\x10\x07\x10\u0217\n\x10" +
		"\f\x10\x0E\x10\u021A\v\x10\x03\x11\x03\x11\x03\x11\x05\x11\u021F\n\x11" +
		"\x03\x12\x05\x12\u0222\n\x12\x03\x12\x03\x12\x05\x12\u0226\n\x12\x03\x12" +
		"\x03\x12\x05\x12\u022A\n\x12\x03\x12\x05\x12\u022D\n\x12\x03\x12\x03\x12" +
		"\x05\x12\u0231\n\x12\x03\x12\x06\x12\u0234\n\x12\r\x12\x0E\x12\u0235\x03" +
		"\x13\x03\x13\x05\x13\u023A\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x05\x13\u0241\n\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05" +
		"\x13\u0249\n\x13\x07\x13\u024B\n\x13\f\x13\x0E\x13\u024E\v\x13\x03\x14" +
		"\x05\x14\u0251\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03" +
		"\x14\x05\x14\u025A\n\x14\x03\x15\x05\x15\u025D\n\x15\x03\x15\x03\x15\x03" +
		"\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0265\n\x15\x03\x15\x03\x15\x05\x15" +
		"\u0269\n\x15\x03\x15\x06\x15\u026C\n\x15\r\x15\x0E\x15\u026D\x03\x15\x06" +
		"\x15\u0271\n\x15\r\x15\x0E\x15\u0272\x05\x15\u0275\n\x15\x03\x15\x03\x15" +
		"\x06\x15\u0279\n\x15\r\x15\x0E\x15\u027A\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u0287\n\x19\x03" +
		"\x19\x03\x19\x05\x19\u028B\n\x19\x03\x19\x03\x19\x05\x19\u028F\n\x19\x03" +
		"\x19\x03\x19\x05\x19\u0293\n\x19\x03\x19\x07\x19\u0296\n\x19\f\x19\x0E" +
		"\x19\u0299\v\x19\x03\x1A\x03\x1A\x06\x1A\u029D\n\x1A\r\x1A\x0E\x1A\u029E" +
		"\x03\x1A\x05\x1A\u02A2\n\x1A\x03\x1A\x07\x1A\u02A5\n\x1A\f\x1A\x0E\x1A" +
		"\u02A8\v\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03" +
		"\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u02ED\n\x1B\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u02F3\n\x1C\x03\x1C\x03\x1C\x05\x1C\u02F7" +
		"\n\x1C\x03\x1C\x05\x1C\u02FA\n\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x05 " +
		"\u030A\n \x03 \x03 \x05 \u030E\n \x03 \x07 \u0311\n \f \x0E \u0314\v " +
		"\x05 \u0316\n \x03!\x03!\x03!\x05!\u031B\n!\x03!\x03!\x03!\x03!\x05!\u0321" +
		"\n!\x03!\x03!\x05!\u0325\n!\x03!\x07!\u0328\n!\f!\x0E!\u032B\v!\x03\"" +
		"\x03\"\x05\"\u032F\n\"\x03\"\x03\"\x05\"\u0333\n\"\x03\"\x05\"\u0336\n" +
		"\"\x03\"\x03\"\x05\"\u033A\n\"\x03\"\x03\"\x03#\x03#\x05#\u0340\n#\x03" +
		"#\x03#\x05#\u0344\n#\x03#\x03#\x03$\x03$\x03$\x05$\u034B\n$\x03$\x03$" +
		"\x03$\x03$\x05$\u0351\n$\x03$\x05$\u0354\n$\x03$\x03$\x03$\x05$\u0359" +
		"\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0363\n$\x03$\x05$\u0366" +
		"\n$\x03$\x05$\u0369\n$\x03$\x03$\x05$\u036D\n$\x03%\x03%\x03%\x03%\x05" +
		"%\u0373\n%\x03%\x03%\x05%\u0377\n%\x03%\x07%\u037A\n%\f%\x0E%\u037D\v" +
		"%\x03&\x03&\x03&\x03&\x05&\u0383\n&\x03&\x03&\x05&\u0387\n&\x03&\x03&" +
		"\x05&\u038B\n&\x03&\x03&\x05&\u038F\n&\x03&\x05&\u0392\n&\x03\'\x03\'" +
		"\x06\'\u0396\n\'\r\'\x0E\'\u0397\x03\'\x03\'\x06\'\u039C\n\'\r\'\x0E\'" +
		"\u039D\x05\'\u03A0\n\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x06\'" +
		"\u03A9\n\'\r\'\x0E\'\u03AA\x03\'\x03\'\x06\'\u03AF\n\'\r\'\x0E\'\u03B0" +
		"\x05\'\u03B3\n\'\x03\'\x03\'\x03\'\x03\'\x06\'\u03B9\n\'\r\'\x0E\'\u03BA" +
		"\x03\'\x03\'\x06\'\u03BF\n\'\r\'\x0E\'\u03C0\x03\'\x03\'\x03\'\x03\'\x03" +
		"\'\x03\'\x05\'\u03C9\n\'\x03(\x03(\x03)\x03)\x03)\x05)\u03D0\n)\x03)\x03" +
		")\x03)\x03)\x06)\u03D6\n)\r)\x0E)\u03D7\x03)\x07)\u03DB\n)\f)\x0E)\u03DE" +
		"\v)\x03)\x03)\x03*\x03*\x05*\u03E4\n*\x03*\x03*\x05*\u03E8\n*\x03*\x05" +
		"*\u03EB\n*\x03*\x06*\u03EE\n*\r*\x0E*\u03EF\x03+\x03+\x03+\x03+\x05+\u03F6" +
		"\n+\x03+\x03+\x05+\u03FA\n+\x03+\x07+\u03FD\n+\f+\x0E+\u0400\v+\x03,\x03" +
		",\x03,\x03,\x03-\x03-\x03-\x05-\u0409\n-\x03-\x03-\x03-\x03-\x05-\u040F" +
		"\n-\x03-\x03-\x03.\x03.\x03/\x03/\x03/\x03/\x05/\u0419\n/\x03/\x03/\x05" +
		"/\u041D\n/\x03/\x03/\x030\x030\x030\x030\x030\x030\x050\u0427\n0\x030" +
		"\x030\x030\x030\x030\x060\u042E\n0\r0\x0E0\u042F\x030\x030\x060\u0434" +
		"\n0\r0\x0E0\u0435\x050\u0438\n0\x030\x030\x030\x050\u043D\n0\x031\x03" +
		"1\x031\x031\x051\u0443\n1\x031\x031\x051\u0447\n1\x031\x051\u044A\n1\x03" +
		"1\x031\x051\u044E\n1\x031\x031\x031\x031\x031\x031\x031\x031\x031\x05" +
		"1\u0459\n1\x031\x061\u045C\n1\r1\x0E1\u045D\x031\x031\x061\u0462\n1\r" +
		"1\x0E1\u0463\x051\u0466\n1\x031\x031\x031\x031\x051\u046C\n1\x051\u046E" +
		"\n1\x032\x032\x032\x052\u0473\n2\x032\x032\x052\u0477\n2\x032\x032\x03" +
		"2\x032\x052\u047D\n2\x032\x052\u0480\n2\x032\x032\x052\u0484\n2\x032\x06" +
		"2\u0487\n2\r2\x0E2\u0488\x032\x032\x062\u048D\n2\r2\x0E2\u048E\x052\u0491" +
		"\n2\x032\x032\x033\x033\x033\x033\x053\u0499\n3\x033\x033\x053\u049D\n" +
		"3\x033\x053\u04A0\n3\x033\x053\u04A3\n3\x033\x033\x053\u04A7\n3\x033\x03" +
		"3\x034\x034\x034\x034\x035\x035\x035\x035\x036\x036\x036\x036\x036\x03" +
		"6\x036\x036\x036\x036\x036\x056\u04BE\n6\x036\x036\x076\u04C2\n6\f6\x0E" +
		"6\u04C5\v6\x036\x056\u04C8\n6\x036\x036\x056\u04CC\n6\x037\x037\x037\x03" +
		"7\x037\x037\x067\u04D4\n7\r7\x0E7\u04D5\x037\x037\x067\u04DA\n7\r7\x0E" +
		"7\u04DB\x057\u04DE\n7\x038\x038\x039\x039\x039\x039\x039\x039\x069\u04E8" +
		"\n9\r9\x0E9\u04E9\x039\x039\x069\u04EE\n9\r9\x0E9\u04EF\x059\u04F2\n9" +
		"\x03:\x03:\x06:\u04F6\n:\r:\x0E:\u04F7\x03:\x03:\x06:\u04FC\n:\r:\x0E" +
		":\u04FD\x05:\u0500\n:\x03;\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x05<\u050A" +
		"\n<\x03<\x03<\x05<\u050E\n<\x03<\x06<\u0511\n<\r<\x0E<\u0512\x03=\x03" +
		"=\x03=\x03=\x03>\x03>\x05>\u051B\n>\x03>\x03>\x05>\u051F\n>\x03>\x03>" +
		"\x05>\u0523\n>\x03>\x03>\x03?\x03?\x03?\x03?\x05?\u052B\n?\x03?\x03?\x05" +
		"?\u052F\n?\x03?\x03?\x03@\x03@\x03@\x03@\x03A\x03A\x03A\x03A\x05A\u053B" +
		"\nA\x03A\x03A\x05A\u053F\nA\x03A\x03A\x03A\x03A\x03A\x05A\u0546\nA\x05" +
		"A\u0548\nA\x03B\x03B\x03B\x03B\x05B\u054E\nB\x03B\x03B\x05B\u0552\nB\x03" +
		"B\x03B\x03C\x03C\x07C\u0558\nC\fC\x0EC\u055B\vC\x03C\x05C\u055E\nC\x03" +
		"C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x06D\u0568\nD\rD\x0ED\u0569\x03D" +
		"\x03D\x06D\u056E\nD\rD\x0ED\u056F\x05D\u0572\nD\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x06E\u057A\nE\rE\x0EE\u057B\x03E\x03E\x06E\u0580\nE\rE\x0EE\u0581" +
		"\x05E\u0584\nE\x03F\x03F\x06F\u0588\nF\rF\x0EF\u0589\x03F\x03F\x06F\u058E" +
		"\nF\rF\x0EF\u058F\x05F\u0592\nF\x03G\x03G\x05G\u0596\nG\x03G\x03G\x05" +
		"G\u059A\nG\x03G\x03G\x05G\u059E\nG\x03G\x03G\x03H\x03H\x03H\x03H\x03I" +
		"\x03I\x03I\x03I\x03I\x03I\x03I\x03I\x03J\x03J\x03J\x03J\x03J\x03J\x05" +
		"J\u05B4\nJ\x03J\x03J\x03J\x05J\u05B9\nJ\x03K\x03K\x03K\x03K\x03K\x03K" +
		"\x03K\x03K\x05K\u05C3\nK\x03K\x03K\x05K\u05C7\nK\x03K\x07K\u05CA\nK\f" +
		"K\x0EK\u05CD\vK\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x03L\x05L\u05D7\nL" +
		"\x03L\x03L\x05L\u05DB\nL\x03L\x07L\u05DE\nL\fL\x0EL\u05E1\vL\x03M\x03" +
		"M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u05EE\nM\x03M\x03" +
		"M\x05M\u05F2\nM\x03M\x03M\x03M\x03M\x03M\x03M\x03M\x05M\u05FB\nM\x03M" +
		"\x03M\x05M\u05FF\nM\x03M\x05M\u0602\nM\x03N\x03N\x05N\u0606\nN\x03N\x03" +
		"N\x05N\u060A\nN\x03N\x05N\u060D\nN\x07N\u060F\nN\fN\x0EN\u0612\vN\x03" +
		"N\x05N\u0615\nN\x03N\x05N\u0618\nN\x03N\x03N\x05N\u061C\nN\x03N\x05N\u061F" +
		"\nN\x06N\u0621\nN\rN\x0EN\u0622\x05N\u0625\nN\x03O\x03O\x05O\u0629\nO" +
		"\x03O\x03O\x05O\u062D\nO\x03O\x03O\x05O\u0631\nO\x03O\x03O\x05O\u0635" +
		"\nO\x03O\x05O\u0638\nO\x03P\x03P\x03P\x03P\x05P\u063E\nP\x03P\x03P\x05" +
		"P\u0642\nP\x03P\x05P\u0645\nP\x03Q\x03Q\x03Q\x05Q\u064A\nQ\x03Q\x03Q\x05" +
		"Q\u064E\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u0654\nQ\x03Q\x05Q\u0657\nQ\x03Q\x05" +
		"Q\u065A\nQ\x03Q\x03Q\x05Q\u065E\nQ\x03Q\x06Q\u0661\nQ\rQ\x0EQ\u0662\x03" +
		"Q\x03Q\x06Q\u0667\nQ\rQ\x0EQ\u0668\x05Q\u066B\nQ\x03Q\x03Q\x03R\x03R\x03" +
		"R\x05R\u0672\nR\x03R\x03R\x05R\u0676\nR\x03R\x03R\x03R\x03R\x05R\u067C" +
		"\nR\x03R\x05R\u067F\nR\x03R\x06R\u0682\nR\rR\x0ER\u0683\x03R\x03R\x06" +
		"R\u0688\nR\rR\x0ER\u0689\x05R\u068C\nR\x03R\x03R\x03S\x03S\x03S\x05S\u0693" +
		"\nS\x03S\x03S\x05S\u0697\nS\x03S\x03S\x03S\x03S\x05S\u069D\nS\x03S\x05" +
		"S\u06A0\nS\x03S\x06S\u06A3\nS\rS\x0ES\u06A4\x03S\x03S\x06S\u06A9\nS\r" +
		"S\x0ES\u06AA\x05S\u06AD\nS\x03S\x03S\x03T\x03T\x03T\x03T\x05T\u06B5\n" +
		"T\x03T\x03T\x05T\u06B9\nT\x03T\x05T\u06BC\nT\x03T\x05T\u06BF\nT\x03T\x03" +
		"T\x05T\u06C3\nT\x03T\x03T\x03U\x03U\x03U\x03U\x05U\u06CB\nU\x03U\x03U" +
		"\x05U\u06CF\nU\x03U\x03U\x05U\u06D3\nU\x05U\u06D5\nU\x03U\x05U\u06D8\n" +
		"U\x03V\x03V\x03V\x05V\u06DD\nV\x03W\x03W\x03W\x03W\x05W\u06E3\nW\x03W" +
		"\x03W\x05W\u06E7\nW\x03W\x03W\x05W\u06EB\nW\x03W\x07W\u06EE\nW\fW\x0E" +
		"W\u06F1\vW\x03X\x03X\x05X\u06F5\nX\x03X\x03X\x05X\u06F9\nX\x03X\x03X\x05" +
		"X\u06FD\nX\x03X\x03X\x03X\x05X\u0702\nX\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z" +
		"\x05Z\u070A\nZ\x05Z\u070C\nZ\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03]\x03" +
		"]\x03]\x03]\x05]\u0718\n]\x03]\x03]\x05]\u071C\n]\x03]\x03]\x03^\x03^" +
		"\x03^\x03^\x05^\u0724\n^\x03^\x03^\x05^\u0728\n^\x03^\x03^\x03_\x03_\x03" +
		"_\x03_\x05_\u0730\n_\x03_\x03_\x05_\u0734\n_\x03_\x03_\x05_\u0738\n_\x03" +
		"_\x03_\x05_\u073C\n_\x03_\x03_\x05_\u0740\n_\x03_\x03_\x05_\u0744\n_\x03" +
		"_\x03_\x03`\x03`\x03`\x03`\x05`\u074C\n`\x03`\x03`\x05`\u0750\n`\x03`" +
		"\x03`\x03a\x03a\x03a\x03a\x03a\x03a\x06a\u075A\na\ra\x0Ea\u075B\x03a\x07" +
		"a\u075F\na\fa\x0Ea\u0762\va\x03a\x05a\u0765\na\x03a\x03a\x03b\x03b\x03" +
		"b\x03b\x05b\u076D\nb\x03b\x05b\u0770\nb\x03b\x07b\u0773\nb\fb\x0Eb\u0776" +
		"\vb\x03b\x06b\u0779\nb\rb\x0Eb\u077A\x05b\u077D\nb\x03b\x03b\x06b\u0781" +
		"\nb\rb\x0Eb\u0782\x05b\u0785\nb\x03c\x03c\x03c\x05c\u078A\nc\x03c\x03" +
		"c\x05c\u078E\nc\x03c\x07c\u0791\nc\fc\x0Ec\u0794\vc\x05c\u0796\nc\x03" +
		"d\x03d\x05d\u079A\nd\x03d\x03d\x05d\u079E\nd\x03d\x03d\x03d\x03d\x03d" +
		"\x03d\x03d\x03d\x03d\x05d\u07A9\nd\x03e\x03e\x03e\x03e\x05e\u07AF\ne\x03" +
		"e\x03e\x05e\u07B3\ne\x03e\x05e\u07B6\ne\x03f\x03f\x03f\x03f\x05f\u07BC" +
		"\nf\x03f\x03f\x05f\u07C0\nf\x03f\x03f\x03g\x03g\x03g\x03g\x05g\u07C8\n" +
		"g\x03g\x03g\x05g\u07CC\ng\x03g\x03g\x03h\x03h\x03i\x03i\x03i\x05i\u07D5" +
		"\ni\x03i\x03i\x05i\u07D9\ni\x03i\x03i\x03i\x03i\x05i\u07DF\ni\x03i\x05" +
		"i\u07E2\ni\x03i\x06i\u07E5\ni\ri\x0Ei\u07E6\x03i\x03i\x06i\u07EB\ni\r" +
		"i\x0Ei\u07EC\x05i\u07EF\ni\x03i\x03i\x03j\x03j\x05j\u07F5\nj\x03j\x03" +
		"j\x05j\u07F9\nj\x03j\x03j\x03k\x03k\x03k\x05k\u0800\nk\x03k\x03k\x03k" +
		"\x03k\x06k\u0806\nk\rk\x0Ek\u0807\x03k\x07k\u080B\nk\fk\x0Ek\u080E\vk" +
		"\x03k\x03k\x03l\x03l\x05l\u0814\nl\x03l\x03l\x05l\u0818\nl\x03l\x05l\u081B" +
		"\nl\x03l\x05l\u081E\nl\x03l\x05l\u0821\nl\x03l\x03l\x05l\u0825\nl\x03" +
		"l\x06l\u0828\nl\rl\x0El\u0829\x03m\x03m\x03m\x03m\x03m\x03m\x03m\x05m" +
		"\u0833\nm\x03n\x03n\x03n\x03n\x03o\x03o\x03o\x03o\x05o\u083D\no\x03o\x03" +
		"o\x05o\u0841\no\x03o\x03o\x03o\x03o\x03o\x05o\u0848\no\x05o\u084A\no\x03" +
		"p\x03p\x03p\x03p\x05p\u0850\np\x03p\x03p\x05p\u0854\np\x03p\x03p\x05p" +
		"\u0858\np\x03p\x07p\u085B\np\fp\x0Ep\u085E\vp\x03p\x05p\u0861\np\x03p" +
		"\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u086E\np\x03p" +
		"\x03p\x05p\u0872\np\x03p\x03p\x03p\x03p\x05p\u0878\np\x03p\x03p\x03p\x05" +
		"p\u087D\np\x03p\x03p\x03p\x03p\x03p\x03p\x05p\u0885\np\x03p\x03p\x05p" +
		"\u0889\np\x03p\x03p\x05p\u088D\np\x03p\x03p\x05p\u0891\np\x03p\x03p\x05" +
		"p\u0895\np\x03p\x03p\x05p\u0899\np\x03p\x03p\x03p\x05p\u089E\np\x03p\x03" +
		"p\x05p\u08A2\np\x03p\x03p\x03p\x05p\u08A7\np\x03p\x03p\x05p\u08AB\np\x03" +
		"p\x03p\x03p\x05p\u08B0\np\x03p\x03p\x05p\u08B4\np\x03p\x03p\x03p\x05p" +
		"\u08B9\np\x03p\x03p\x05p\u08BD\np\x03p\x03p\x03p\x05p\u08C2\np\x03p\x03" +
		"p\x05p\u08C6\np\x03p\x03p\x03p\x05p\u08CB\np\x03p\x03p\x05p\u08CF\np\x03" +
		"p\x03p\x03p\x05p\u08D4\np\x03p\x03p\x05p\u08D8\np\x03p\x03p\x03p\x05p" +
		"\u08DD\np\x03p\x03p";
	private static readonly _serializedATNSegment1: string =
		"\x05p\u08E1\np\x03p\x03p\x03p\x05p\u08E6\np\x03p\x03p\x05p\u08EA\np\x03" +
		"p\x03p\x03p\x05p\u08EF\np\x03p\x03p\x05p\u08F3\np\x03p\x03p\x03p\x05p" +
		"\u08F8\np\x03p\x03p\x05p\u08FC\np\x03p\x03p\x03p\x05p\u0901\np\x03p\x03" +
		"p\x05p\u0905\np\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03p\x03" +
		"p\x03p\x03p\x05p\u0914\np\x03p\x03p\x05p\u0918\np\x03p\x03p\x03p\x05p" +
		"\u091D\np\x03p\x03p\x05p\u0921\np\x03p\x03p\x03p\x05p\u0926\np\x03p\x03" +
		"p\x05p\u092A\np\x03p\x03p\x03p\x05p\u092F\np\x03p\x03p\x05p\u0933\np\x03" +
		"p\x03p\x03p\x05p\u0938\np\x03p\x03p\x05p\u093C\np\x03p\x07p\u093F\np\f" +
		"p\x0Ep\u0942\vp\x03q\x03q\x03q\x05q\u0947\nq\x03q\x03q\x03q\x05q\u094C" +
		"\nq\x03q\x03q\x03r\x03r\x05r\u0952\nr\x03r\x03r\x05r\u0956\nr\x03r\x07" +
		"r\u0959\nr\fr\x0Er\u095C\vr\x03s\x03s\x05s\u0960\ns\x03s\x05s\u0963\n" +
		"s\x03s\x03s\x05s\u0967\ns\x03s\x03s\x05s\u096B\ns\x05s\u096D\ns\x03s\x03" +
		"s\x05s\u0971\ns\x05s\u0973\ns\x03s\x03s\x05s\u0977\ns\x03t\x03t\x03t\x03" +
		"t\x06t\u097D\nt\rt\x0Et\u097E\x03t\x07t\u0982\nt\ft\x0Et\u0985\vt\x03" +
		"t\x07t\u0988\nt\ft\x0Et\u098B\vt\x03t\x03t\x03u\x03u\x03u\x03u\x05u\u0993" +
		"\nu\x03u\x03u\x05u\u0997\nu\x03u\x03u\x03v\x03v\x03v\x03v\x05v\u099F\n" +
		"v\x03v\x03v\x06v\u09A3\nv\rv\x0Ev\u09A4\x03v\x03v\x06v\u09A9\nv\rv\x0E" +
		"v\u09AA\x05v\u09AD\nv\x03v\x03v\x03w\x03w\x03w\x03w\x05w\u09B5\nw\x03" +
		"w\x03w\x05w\u09B9\nw\x03w\x05w\u09BC\nw\x03x\x03x\x05x\u09C0\nx\x03y\x03" +
		"y\x03y\x03y\x05y\u09C6\ny\x03y\x05y\u09C9\ny\x03y\x03y\x05y\u09CD\ny\x03" +
		"y\x03y\x05y\u09D1\ny\x03y\x03y\x05y\u09D5\ny\x03z\x03z\x03z\x05z\u09DA" +
		"\nz\x03z\x03z\x05z\u09DE\nz\x03z\x03z\x05z\u09E2\nz\x03z\x05z\u09E5\n" +
		"z\x03z\x03z\x05z\u09E9\nz\x03z\x03z\x05z\u09ED\nz\x03z\x03z\x05z\u09F1" +
		"\nz\x03{\x03{\x05{\u09F5\n{\x03|\x03|\x03|\x05|\u09FA\n|\x03}\x05}\u09FD" +
		"\n}\x03}\x03}\x03}\x05}\u0A02\n}\x03}\x03}\x05}\u0A06\n}\x03}\x05}\u0A09" +
		"\n}\x03~\x03~\x03~\x03~\x05~\u0A0F\n~\x03\x7F\x03\x7F\x05\x7F\u0A13\n" +
		"\x7F\x03\x7F\x05\x7F\u0A16\n\x7F\x03\x80\x03\x80\x03\x80\x05\x80\u0A1B" +
		"\n\x80\x03\x80\x05\x80\u0A1E\n\x80\x03\x80\x05\x80\u0A21\n\x80\x03\x80" +
		"\x03\x80\x05\x80\u0A25\n\x80\x03\x80\x03\x80\x05\x80\u0A29\n\x80\x05\x80" +
		"\u0A2B\n\x80\x03\x80\x06\x80\u0A2E\n\x80\r\x80\x0E\x80\u0A2F\x03\x80\x05" +
		"\x80\u0A33\n\x80\x03\x81\x03\x81\x05\x81\u0A37\n\x81\x03\x81\x05\x81\u0A3A" +
		"\n\x81\x03\x81\x03\x81\x05\x81\u0A3E\n\x81\x03\x81\x03\x81\x05\x81\u0A42" +
		"\n\x81\x05\x81\u0A44\n\x81\x03\x81\x03\x81\x03\x82\x03\x82\x05\x82\u0A4A" +
		"\n\x82\x03\x82\x06\x82\u0A4D\n\x82\r\x82\x0E\x82\u0A4E\x03\x82\x05\x82" +
		"\u0A52\n\x82\x03\x83\x05\x83\u0A55\n\x83\x03\x83\x03\x83\x03\x83\x05\x83" +
		"\u0A5A\n\x83\x03\x84\x03\x84\x03\x85\x05\x85\u0A5F\n\x85\x03\x85\x05\x85" +
		"\u0A62\n\x85\x03\x85\x03\x85\x05\x85\u0A66\n\x85\x07\x85\u0A68\n\x85\f" +
		"\x85\x0E\x85\u0A6B\v\x85\x03\x85\x03\x85\x05\x85\u0A6F\n\x85\x03\x85\x03" +
		"\x85\x05\x85\u0A73\n\x85\x03\x85\x05\x85\u0A76\n\x85\x07\x85\u0A78\n\x85" +
		"\f\x85\x0E\x85\u0A7B\v\x85\x03\x86\x03\x86\x05\x86\u0A7F\n\x86\x03\x86" +
		"\x03\x86\x03\x87\x03\x87\x03\x87\x05\x87\u0A86\n\x87\x03\x88\x03\x88\x05" +
		"\x88\u0A8A\n\x88\x03\x88\x03\x88\x05\x88\u0A8E\n\x88\x03\x88\x03\x88\x05" +
		"\x88\u0A92\n\x88\x03\x88\x07\x88\u0A95\n\x88\f\x88\x0E\x88\u0A98\v\x88" +
		"\x05\x88\u0A9A\n\x88\x03\x88\x05\x88\u0A9D\n\x88\x03\x88\x03\x88\x03\x89" +
		"\x03\x89\x05\x89\u0AA3\n\x89\x03\x89\x03\x89\x05\x89\u0AA7\n\x89\x03\x89" +
		"\x03\x89\x05\x89\u0AAB\n\x89\x03\x89\x03\x89\x05\x89\u0AAF\n\x89\x03\x89" +
		"\x05\x89\u0AB2\n\x89\x03\x89\x03\x89\x05\x89\u0AB6\n\x89\x03\x89\x05\x89" +
		"\u0AB9\n\x89\x03\x89\x03\x89\x05\x89\u0ABD\n\x89\x03\x89\x05\x89\u0AC0" +
		"\n\x89\x03\x89\x05\x89\u0AC3\n\x89\x03\x8A\x03\x8A\x05\x8A\u0AC7\n\x8A" +
		"\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x05\x8B\u0ACD\n\x8B\x03\x8B\x03\x8B\x05" +
		"\x8B\u0AD1\n\x8B\x03\x8B\x07\x8B\u0AD4\n\x8B\f\x8B\x0E\x8B\u0AD7\v\x8B" +
		"\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x03\x8C\x05\x8C\u0ADE\n\x8C\x03\x8C\x03" +
		"\x8C\x03\x8D\x03\x8D\x06\x8D\u0AE4\n\x8D\r\x8D\x0E\x8D\u0AE5\x03\x8D\x03" +
		"\x8D\x03\x8D\x06\x8D\u0AEB\n\x8D\r\x8D\x0E\x8D\u0AEC\x03\x8D\x05\x8D\u0AF0" +
		"\n\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x05\x8E\u0AF6\n\x8E\x03\x8E\x03" +
		"\x8E\x03\x8E\x05\x8E\u0AFB\n\x8E\x03\x8F\x03\x8F\x03\x90\x03\x90\x03\x90" +
		"\x07\x90\u0B02\n\x90\f\x90\x0E\x90\u0B05\v\x90\x03\x90\x03\x90\x03\x90" +
		"\x06\x90\u0B0A\n\x90\r\x90\x0E\x90\u0B0B\x05\x90\u0B0E\n\x90\x03\x91\x03" +
		"\x91\x03\x92\x03\x92\x03\x92\x07\x92\u0B15\n\x92\f\x92\x0E\x92\u0B18\v" +
		"\x92\x03\x93\x03\x93\x05\x93\u0B1C\n\x93\x03\x93\x03\x93\x05\x93\u0B20" +
		"\n\x93\x03\x94\x03\x94\x05\x94\u0B24\n\x94\x03\x94\x03\x94\x05\x94\u0B28" +
		"\n\x94\x03\x94\x05\x94\u0B2B\n\x94\x03\x95\x03\x95\x03\x95\x03\x96\x03" +
		"\x96\x03\x97\x03\x97\x03\x98\x03\x98\x03\x99\x03\x99\x05\x99\u0B38\n\x99" +
		"\x03\x99\x05\x99\u0B3B\n\x99\x03\x99\x03\x99\x05\x99\u0B3F\n\x99\x03\x99" +
		"\x05\x99\u0B42\n\x99\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9C\x03\x9C\x03" +
		"\x9C\x02\x02\x03\xDE\x9D\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 " +
		"\x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02" +
		"<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02" +
		"X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02" +
		"t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02" +
		"\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02" +
		"\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02" +
		"\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02" +
		"\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02" +
		"\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02" +
		"\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02" +
		"\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02" +
		"\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02" +
		"\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02" +
		"\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02" +
		"\u0130\x02\u0132\x02\u0134\x02\u0136\x02\x02\x17\x04\x02\x0E\x0E\xA1\xA1" +
		"\x03\x02\x1D(\x04\x02\xAA\xAA\xAE\xAE\x03\x02?C\x05\x02\xBC\xBC\xC6\xC6" +
		"\xCB\xCB\x03\x02rs\x07\x02\t\t\x0E\x0EQQ{{\x85\x85\x04\x02\x88\x89\xB2" +
		"\xB2\x04\x02^`\x98\x98\x04\x02\xB8\xB8\xCF\xCF\x04\x02\x9A\x9A\xA0\xA0" +
		"\x04\x02\x10\x11||\x03\x02\x10\x11\r\x02\x0F\x0F\x12\x12\x19\x19\x1B\x1B" +
		",,SSWWpp\x99\x99\x9E\x9E\xAB\xAB\t\x02RR\\\\\xBC\xBC\xBE\xBF\xC1\xC1\xC4" +
		"\xC4\xC8\xC8\x06\x02DDno\xA5\xA5\xD2\xD8\x04\x02\x7F\x7F\x83\x83\x05\x02" +
		"JJ\x7F\x7F\x83\x83\b\x02\xB4\xB4\xB6\xB6\xBA\xBA\xBD\xBD\xC0\xC0\xC9\xC9" +
		"\x06\x02FFJJ\x7F\x7F\x83\x83\r\x02\x03\f\x0E/88:>D\\aafqtuz\x7F\x83\x88" +
		"\x8A\xB3\x02\u0D13\x02\u0138\x03\x02\x02\x02\x04\u013C\x03\x02\x02\x02" +
		"\x06\u0186\x03\x02\x02\x02\b\u018A\x03\x02\x02\x02\n\u01A0\x03\x02\x02" +
		"\x02\f\u01A2\x03\x02\x02\x02\x0E\u01A4\x03\x02\x02\x02\x10\u01AB\x03\x02" +
		"\x02\x02\x12\u01BC\x03\x02\x02\x02\x14\u01CD\x03\x02\x02\x02\x16\u01D7" +
		"\x03\x02\x02\x02\x18\u01E3\x03\x02\x02\x02\x1A\u01E5\x03\x02\x02\x02\x1C" +
		"\u01FD\x03\x02\x02\x02\x1E\u0200\x03\x02\x02\x02 \u021E\x03\x02\x02\x02" +
		"\"\u0221\x03\x02\x02\x02$\u0239\x03\x02\x02\x02&\u0250\x03\x02\x02\x02" +
		"(\u025C\x03\x02\x02\x02*\u027C\x03\x02\x02\x02,\u027E\x03\x02\x02\x02" +
		".\u0280\x03\x02\x02\x020\u0282\x03\x02\x02\x022\u029A\x03\x02\x02\x02" +
		"4\u02EC\x03\x02\x02\x026\u02EE\x03\x02\x02\x028\u02FB\x03\x02\x02\x02" +
		":\u02FD\x03\x02\x02\x02<\u0301\x03\x02\x02\x02>\u0305\x03\x02\x02\x02" +
		"@\u031A\x03\x02\x02\x02B\u032C\x03\x02\x02\x02D\u033D\x03\x02\x02\x02" +
		"F\u034A\x03\x02\x02\x02H\u036E\x03\x02\x02\x02J\u037E\x03\x02\x02\x02" +
		"L\u03C8\x03\x02\x02\x02N\u03CA\x03\x02\x02\x02P\u03CF\x03\x02\x02\x02" +
		"R\u03E1\x03\x02\x02\x02T\u03F1\x03\x02\x02\x02V\u0401\x03\x02\x02\x02" +
		"X\u0408\x03\x02\x02\x02Z\u0412\x03\x02\x02\x02\\\u0414\x03\x02\x02\x02" +
		"^\u0420\x03\x02\x02\x02`\u043E\x03\x02\x02\x02b\u0472\x03\x02\x02\x02" +
		"d\u0494\x03\x02\x02\x02f\u04AA\x03\x02\x02\x02h\u04AE\x03\x02\x02\x02" +
		"j\u04CB\x03\x02\x02\x02l\u04CD\x03\x02\x02\x02n\u04DF\x03\x02\x02\x02" +
		"p\u04E1\x03\x02\x02\x02r\u04F3\x03\x02\x02\x02t\u0501\x03\x02\x02\x02" +
		"v\u0505\x03\x02\x02\x02x\u0514\x03\x02\x02\x02z\u051A\x03\x02\x02\x02" +
		"|\u0526\x03\x02\x02\x02~\u0532\x03\x02\x02\x02\x80\u0536\x03\x02\x02\x02" +
		"\x82\u0549\x03\x02\x02\x02\x84\u0555\x03\x02\x02\x02\x86\u0561\x03\x02" +
		"\x02\x02\x88\u0573\x03\x02\x02\x02\x8A\u0585\x03\x02\x02\x02\x8C\u0593" +
		"\x03\x02\x02\x02\x8E\u05A1\x03\x02\x02\x02\x90\u05A5\x03\x02\x02\x02\x92" +
		"\u05AD\x03\x02\x02\x02\x94\u05BA\x03\x02\x02\x02\x96\u05CE\x03\x02\x02" +
		"\x02\x98\u05E2\x03\x02\x02\x02\x9A\u0624\x03\x02\x02\x02\x9C\u0637\x03" +
		"\x02\x02\x02\x9E\u0639\x03\x02\x02\x02\xA0\u0649\x03\x02\x02\x02\xA2\u0671" +
		"\x03\x02\x02\x02\xA4\u0692\x03\x02\x02\x02\xA6\u06B0\x03\x02\x02\x02\xA8" +
		"\u06C6\x03\x02\x02\x02\xAA\u06D9\x03\x02\x02\x02\xAC\u06DE\x03\x02\x02" +
		"\x02\xAE\u06F2\x03\x02\x02\x02\xB0\u0703\x03\x02\x02\x02\xB2\u0705\x03" +
		"\x02\x02\x02\xB4\u070D\x03\x02\x02\x02\xB6\u070F\x03\x02\x02\x02\xB8\u0713" +
		"\x03\x02\x02\x02\xBA\u071F\x03\x02\x02\x02\xBC\u072B\x03\x02\x02\x02\xBE" +
		"\u0747\x03\x02\x02\x02\xC0\u0753\x03\x02\x02\x02\xC2\u0768\x03\x02\x02" +
		"\x02\xC4\u0795\x03\x02\x02\x02\xC6\u07A8\x03\x02\x02\x02\xC8\u07AA\x03" +
		"\x02\x02\x02\xCA\u07B7\x03\x02\x02\x02\xCC\u07C3\x03\x02\x02\x02\xCE\u07CF" +
		"\x03\x02\x02\x02\xD0\u07D4\x03\x02\x02\x02\xD2\u07F2\x03\x02\x02\x02\xD4" +
		"\u07FF\x03\x02\x02\x02\xD6\u0811\x03\x02\x02\x02\xD8\u082B\x03\x02\x02" +
		"\x02\xDA\u0834\x03\x02\x02\x02\xDC\u0838\x03\x02\x02\x02\xDE\u0890\x03" +
		"\x02\x02\x02\xE0\u0946\x03\x02\x02\x02\xE2\u094F\x03\x02\x02\x02\xE4\u095D" +
		"\x03\x02\x02\x02\xE6\u0978\x03\x02\x02\x02\xE8\u098E\x03\x02\x02\x02\xEA" +
		"\u099A\x03\x02\x02\x02\xEC\u09B0\x03\x02\x02\x02\xEE\u09BF\x03\x02\x02" +
		"\x02\xF0\u09C1\x03\x02\x02\x02\xF2\u09D6\x03\x02\x02\x02\xF4\u09F4\x03" +
		"\x02\x02\x02\xF6\u09F6\x03\x02\x02\x02\xF8\u09FC\x03\x02\x02\x02\xFA\u0A0E" +
		"\x03\x02\x02\x02\xFC\u0A10\x03\x02\x02\x02\xFE\u0A1A\x03\x02\x02\x02\u0100" +
		"\u0A34\x03\x02\x02\x02\u0102\u0A49\x03\x02\x02\x02\u0104\u0A54\x03\x02" +
		"\x02\x02\u0106\u0A5B\x03\x02\x02\x02\u0108\u0A69\x03\x02\x02\x02\u010A" +
		"\u0A7E\x03\x02\x02\x02\u010C\u0A82\x03\x02\x02\x02\u010E\u0A87\x03\x02" +
		"\x02\x02\u0110\u0AA2\x03\x02\x02\x02\u0112\u0AC4\x03\x02\x02\x02\u0114" +
		"\u0ACA\x03\x02\x02\x02\u0116\u0ADD\x03\x02\x02\x02\u0118\u0AEF\x03\x02" +
		"\x02\x02\u011A\u0AF1\x03\x02\x02\x02\u011C\u0AFC\x03\x02\x02\x02\u011E" +
		"\u0B0D\x03\x02\x02\x02\u0120\u0B0F\x03\x02\x02\x02\u0122\u0B11\x03\x02" +
		"\x02\x02\u0124\u0B19\x03\x02\x02\x02\u0126\u0B21\x03\x02\x02\x02\u0128" +
		"\u0B2C\x03\x02\x02\x02\u012A\u0B2F\x03\x02\x02\x02\u012C\u0B31\x03\x02" +
		"\x02\x02\u012E\u0B33\x03\x02\x02\x02\u0130\u0B37\x03\x02\x02\x02\u0132" +
		"\u0B43\x03\x02\x02\x02\u0134\u0B45\x03\x02\x02\x02\u0136\u0B47\x03\x02" +
		"\x02\x02\u0138\u0139\x05\x04\x03\x02\u0139\u013A\x07\x02\x02\x03\u013A" +
		"\x03\x03\x02\x02\x02\u013B\u013D\x07\xDF\x02\x02\u013C\u013B\x03\x02\x02" +
		"\x02\u013C\u013D\x03\x02\x02\x02\u013D\u0141\x03\x02\x02\x02\u013E\u0140" +
		"\x07\xDD\x02\x02\u013F\u013E\x03\x02\x02\x02\u0140\u0143\x03\x02\x02\x02" +
		"\u0141\u013F\x03\x02\x02\x02\u0141\u0142\x03\x02\x02\x02\u0142\u014A\x03" +
		"\x02\x02\x02\u0143\u0141\x03\x02\x02\x02\u0144\u0146\x05\x0E\b\x02\u0145" +
		"\u0147\x07\xDD\x02\x02\u0146\u0145\x03\x02\x02\x02\u0147\u0148\x03\x02" +
		"\x02\x02\u0148\u0146\x03\x02\x02\x02\u0148\u0149\x03\x02\x02\x02\u0149" +
		"\u014B\x03\x02\x02\x02\u014A\u0144\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014D\x03\x02\x02\x02\u014C\u014E\x05\x06\x04\x02\u014D" +
		"\u014C\x03\x02\x02\x02\u014D\u014E\x03\x02\x02\x02\u014E\u0152\x03\x02" +
		"\x02\x02\u014F\u0151\x07\xDD\x02\x02\u0150\u014F\x03\x02\x02\x02\u0151" +
		"\u0154\x03\x02\x02\x02\u0152\u0150\x03\x02\x02\x02\u0152\u0153\x03\x02" +
		"\x02\x02\u0153\u0156\x03\x02\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155" +
		"\u0157\x05\x1E\x10\x02\u0156\u0155\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\u015B\x03\x02\x02\x02\u0158\u015A\x07\xDD\x02\x02\u0159" +
		"\u0158\x03\x02\x02\x02\u015A\u015D\x03\x02\x02\x02\u015B\u0159\x03\x02" +
		"\x02\x02\u015B\u015C\x03\x02\x02\x02\u015C\u015F\x03\x02\x02\x02\u015D" +
		"\u015B\x03\x02\x02\x02\u015E\u0160\x05\x10\t\x02\u015F\u015E\x03\x02\x02" +
		"\x02\u015F\u0160\x03\x02\x02\x02\u0160\u0164\x03\x02\x02\x02\u0161\u0163" +
		"\x07\xDD\x02\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0166\x03\x02\x02\x02" +
		"\u0164\u0162\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0168\x03" +
		"\x02\x02\x02\u0166\u0164\x03\x02\x02\x02\u0167\u0169\x05\x14\v\x02\u0168" +
		"\u0167\x03\x02\x02\x02\u0168\u0169\x03\x02\x02\x02\u0169\u016D\x03\x02" +
		"\x02\x02\u016A\u016C\x07\xDD\x02\x02\u016B\u016A\x03\x02\x02\x02\u016C" +
		"\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02\x02\x02\u016D\u016E\x03\x02" +
		"\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u0170" +
		"\u0172\x05\x16\f\x02\u0171\u0170\x03\x02\x02\x02\u0171\u0172\x03\x02\x02" +
		"\x02\u0172\u0176\x03\x02\x02\x02\u0173\u0175\x07\xDD\x02\x02\u0174\u0173" +
		"\x03\x02\x02\x02\u0175\u0178\x03\x02\x02\x02\u0176\u0174\x03\x02\x02\x02" +
		"\u0176\u0177\x03\x02\x02\x02\u0177\u017A\x03\x02\x02\x02\u0178\u0176\x03" +
		"\x02\x02\x02\u0179\u017B\x05\x1A\x0E\x02\u017A\u0179\x03\x02\x02\x02\u017A" +
		"\u017B\x03\x02\x02\x02\u017B\u017F\x03\x02\x02\x02\u017C\u017E\x07\xDD" +
		"\x02\x02\u017D\u017C\x03\x02\x02\x02\u017E\u0181\x03\x02\x02\x02\u017F" +
		"\u017D\x03\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0183\x03\x02" +
		"\x02\x02\u0181\u017F\x03\x02\x02\x02\u0182\u0184\x07\xDF\x02\x02\u0183" +
		"\u0182\x03\x02\x02\x02\u0183\u0184\x03\x02\x02\x02\u0184\x05\x03\x02\x02" +
		"\x02\u0185\u0187\x05\b\x05\x02\u0186\u0185\x03\x02\x02\x02\u0187\u0188" +
		"\x03\x02\x02\x02\u0188\u0186\x03\x02\x02\x02\u0188\u0189\x03\x02\x02\x02" +
		"\u0189\x07\x03\x02\x02\x02\u018A\u018C\x07p\x02\x02\u018B\u018D\x07\xDF" +
		"\x02\x02\u018C\u018B\x03\x02\x02\x02\u018C\u018D\x03\x02\x02\x02\u018D" +
		"\u018E\x03\x02\x02\x02\u018E\u0190\x07\xBC\x02\x02\u018F\u0191\x07\xDF" +
		"\x02\x02\u0190\u018F\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02\u0191" +
		"\u0192\x03\x02\x02\x02\u0192\u0198\x05\n\x06\x02\u0193\u0195\x07\xCF\x02" +
		"\x02\u0194\u0196\x07\xDF\x02\x02\u0195\u0194\x03\x02\x02\x02\u0195\u0196" +
		"\x03\x02\x02\x02\u0196\u0197\x03\x02\x02\x02\u0197\u0199\x05\f\x07\x02" +
		"\u0198\u0193\x03\x02\x02\x02\u0198\u0199\x03\x02\x02\x02\u0199\u019D\x03" +
		"\x02\x02\x02\u019A\u019C\x07\xDD\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C" +
		"\u019F\x03\x02\x02\x02\u019D\u019B\x03\x02\x02\x02\u019D\u019E\x03\x02" +
		"\x02\x02\u019E\t\x03\x02\x02\x02\u019F\u019D\x03\x02\x02\x02\u01A0\u01A1" +
		"\x07\xD2\x02\x02\u01A1\v\x03\x02\x02\x02\u01A2\u01A3\x07\xD2\x02\x02\u01A3" +
		"\r\x03\x02\x02\x02\u01A4\u01A5\x07\xAC\x02\x02\u01A5\u01A6\x07\xDF\x02" +
		"\x02\u01A6\u01A9\x07\xD6\x02\x02\u01A7\u01A8\x07\xDF\x02\x02\u01A8\u01AA" +
		"\x07\x17\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA\x03\x02\x02\x02" +
		"\u01AA\x0F\x03\x02\x02\x02\u01AB\u01AD\x07\f\x02\x02\u01AC\u01AE\x07\xDD" +
		"\x02\x02\u01AD\u01AC\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF" +
		"\u01AD\x03\x02\x02\x02\u01AF\u01B0\x03\x02\x02\x02\u01B0\u01B2\x03\x02" +
		"\x02\x02\u01B1\u01B3\x05\x12\n\x02\u01B2\u01B1\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B2\x03\x02\x02\x02\u01B4\u01B5\x03\x02\x02\x02" +
		"\u01B5\u01B6\x03\x02\x02\x02\u01B6\u01B8\x078\x02\x02\u01B7\u01B9\x07" +
		"\xDD\x02\x02\u01B8\u01B7\x03\x02\x02\x02\u01B9\u01BA\x03\x02\x02\x02\u01BA" +
		"\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\x11\x03\x02\x02" +
		"\x02\u01BC\u01BE\x05\u0118\x8D\x02\u01BD\u01BF\x07\xDF\x02\x02\u01BE\u01BD" +
		"\x03\x02\x02\x02\u01BE\u01BF\x03\x02\x02\x02\u01BF\u01C0\x03\x02\x02\x02" +
		"\u01C0\u01C2\x07\xBC\x02\x02\u01C1\u01C3\x07\xDF\x02\x02\u01C2\u01C1\x03" +
		"\x02\x02\x02\u01C2\u01C3\x03\x02\x02\x02\u01C3\u01C4\x03\x02\x02\x02\u01C4" +
		"\u01C5\x05\u012A\x96\x02\u01C5\u01C6\x07\xDD\x02\x02\u01C6\x13\x03\x02" +
		"\x02\x02\u01C7\u01C9\x050\x19\x02\u01C8\u01CA\x07\xDD\x02\x02\u01C9\u01C8" +
		"\x03\x02\x02\x02\u01CA\u01CB\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02" +
		"\u01CB\u01CC\x03\x02\x02\x02\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01C7\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01CD\x03\x02\x02\x02\u01CF" +
		"\u01D0\x03\x02\x02\x02\u01D0\x15\x03\x02\x02\x02\u01D1\u01D3\x05\x18\r" +
		"\x02\u01D2\u01D4\x07\xDD\x02\x02\u01D3\u01D2\x03\x02\x02\x02\u01D4\u01D5" +
		"\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D5\u01D6\x03\x02\x02\x02" +
		"\u01D6\u01D8\x03\x02\x02\x02\u01D7\u01D1\x03\x02\x02\x02\u01D8\u01D9\x03" +
		"\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02\u01D9\u01DA\x03\x02\x02\x02\u01DA" +
		"\x17\x03\x02\x02\x02\u01DB\u01DC\x07v\x02\x02\u01DC\u01DD\x07\xDF\x02" +
		"\x02\u01DD\u01E4\x07\xD5\x02\x02\u01DE\u01DF\x07x\x02\x02\u01DF\u01E0" +
		"\x07\xDF\x02\x02\u01E0\u01E4\t\x02\x02\x02\u01E1\u01E4\x07w\x02\x02\u01E2" +
		"\u01E4\x07y\x02\x02\u01E3\u01DB\x03\x02\x02\x02\u01E3\u01DE\x03\x02\x02" +
		"\x02\u01E3\u01E1\x03\x02\x02\x02\u01E3\u01E2\x03\x02\x02\x02\u01E4\x19" +
		"\x03\x02\x02\x02\u01E5\u01EE\x05\x1C\x0F\x02\u01E6\u01E8\x07\xDD\x02\x02" +
		"\u01E7\u01E6\x03\x02\x02\x02\u01E8\u01E9\x03\x02\x02\x02\u01E9\u01E7\x03" +
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EB" +
		"\u01ED\x05\x1C\x0F\x02\u01EC\u01E7\x03\x02\x02\x02\u01ED\u01F0\x03\x02" +
		"\x02\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03\x02\x02\x02\u01EF" +
		"\x1B\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F1\u01FE\x05.\x18" +
		"\x02\u01F2\u01FE\x05\x18\r\x02\u01F3\u01FE\x05F$\x02\u01F4\u01FE\x05P" +
		")\x02\u01F5\u01FE\x05X-\x02\u01F6\u01FE\x05b2\x02\u01F7\u01FE\x05\x84" +
		"C\x02\u01F8\u01FE\x05\xA0Q\x02\u01F9\u01FE\x05\xA2R\x02\u01FA\u01FE\x05" +
		"\xA4S\x02\u01FB\u01FE\x05\xD0i\x02\u01FC\u01FE\x05\xD4k\x02\u01FD\u01F1" +
		"\x03\x02\x02\x02\u01FD\u01F2\x03\x02\x02\x02\u01FD\u01F3\x03\x02\x02\x02" +
		"\u01FD\u01F4\x03\x02\x02\x02\u01FD\u01F5\x03\x02\x02\x02\u01FD\u01F6\x03" +
		"\x02\x02\x02\u01FD\u01F7\x03\x02\x02\x02\u01FD\u01F8\x03\x02\x02\x02\u01FD" +
		"\u01F9\x03\x02\x02\x02\u01FD\u01FA\x03\x02\x02\x02\u01FD\u01FB\x03\x02" +
		"\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\x1D\x03\x02\x02\x02\u01FF\u0201" +
		"\x07\xDF\x02\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02" +
		"\u0201\u0202\x03\x02\x02\x02\u0202\u0203\x07\f\x02\x02\u0203\u0204\x07" +
		"\xDF\x02\x02\u0204\u0205\x05*\x16\x02\u0205\u0206\x07\xDF\x02\x02\u0206" +
		"\u0208\x05,\x17\x02\u0207\u0209\x07\xDF\x02\x02\u0208\u0207\x03\x02\x02" +
		"\x02\u0208\u0209\x03\x02\x02\x02\u0209\u020B\x03\x02\x02\x02\u020A\u020C" +
		"\x07\xDD\x02\x02\u020B\u020A\x03\x02\x02\x02\u020C\u020D\x03\x02\x02\x02" +
		"\u020D\u020B\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0210\x03" +
		"\x02\x02\x02\u020F\u0211\x05 \x11\x02\u0210\u020F\x03\x02\x02\x02\u0211" +
		"\u0212\x03\x02\x02\x02\u0212\u0210\x03\x02\x02\x02\u0212\u0213\x03\x02" +
		"\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0218\x078\x02\x02\u0215\u0217" +
		"\x07\xDD\x02\x02\u0216\u0215\x03\x02\x02\x02\u0217\u021A\x03\x02\x02\x02" +
		"\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219\x1F\x03" +
		"\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021F\x05\"\x12\x02\u021C" +
		"\u021F\x05(\x15\x02\u021D\u021F\x05\x1E\x10\x02\u021E\u021B\x03\x02\x02" +
		"\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021D\x03\x02\x02\x02\u021F!\x03" +
		"\x02\x02\x02\u0220\u0222\x07\xDF\x02\x02\u0221\u0220\x03\x02\x02\x02\u0221" +
		"\u0222\x03\x02\x02\x02\u0222\u0223\x03\x02\x02\x02\u0223\u0225\x05\xFA" +
		"~\x02\u0224\u0226\x07\xDF\x02\x02\u0225\u0224\x03\x02\x02\x02\u0225\u0226" +
		"\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02\u0227\u0229\x07\xBC\x02\x02" +
		"\u0228\u022A\x07\xDF\x02\x02\u0229\u0228\x03\x02\x02\x02\u0229\u022A\x03" +
		"\x02\x02\x02\u022A\u022C\x03\x02\x02\x02\u022B\u022D\x07\xBA\x02\x02\u022C" +
		"\u022B\x03\x02\x02\x02\u022C\u022D\x03\x02\x02\x02\u022D\u022E\x03\x02" +
		"\x02\x02\u022E\u0230\x05&\x14\x02\u022F\u0231\x07\xD9\x02\x02\u0230\u022F" +
		"\x03\x02\x02\x02\u0230\u0231\x03\x02\x02\x02\u0231\u0233\x03\x02\x02\x02" +
		"\u0232\u0234\x07\xDD\x02\x02\u0233\u0232\x03\x02\x02\x02\u0234\u0235\x03" +
		"\x02\x02\x02\u0235\u0233\x03\x02\x02\x02\u0235\u0236\x03\x02\x02\x02\u0236" +
		"#\x03\x02\x02\x02\u0237\u0238\x07p\x02\x02\u0238\u023A\x07\xBB\x02\x02" +
		"\u0239\u0237\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B\x03" +
		"\x02\x02\x02\u023B\u0240\x05\u0118\x8D\x02\u023C\u023D\x07\xC3\x02\x02" +
		"\u023D\u023E\x05\u012A\x96\x02\u023E\u023F\x07\xCE\x02\x02\u023F\u0241" +
		"\x03\x02\x02\x02\u0240\u023C\x03\x02\x02\x02\u0240\u0241\x03\x02\x02\x02" +
		"\u0241\u024C\x03\x02\x02\x02\u0242\u0243\x07\xBB\x02\x02\u0243\u0248\x05" +
		"\u0118\x8D\x02\u0244\u0245\x07\xC3\x02\x02\u0245\u0246\x05\u012A\x96\x02" +
		"\u0246\u0247\x07\xCE\x02\x02\u0247\u0249\x03\x02\x02\x02\u0248\u0244\x03" +
		"\x02\x02\x02\u0248\u0249\x03\x02\x02\x02\u0249\u024B\x03\x02\x02\x02\u024A" +
		"\u0242\x03\x02\x02\x02\u024B\u024E\x03\x02\x02\x02\u024C\u024A\x03\x02" +
		"\x02\x02\u024C\u024D\x03\x02\x02\x02\u024D%\x03\x02\x02\x02\u024E\u024C" +
		"\x03\x02\x02\x02\u024F\u0251\x07\xBA\x02\x02\u0250\u024F\x03\x02\x02\x02" +
		"\u0250\u0251\x03\x02\x02\x02\u0251\u0259\x03\x02\x02\x02\u0252\u025A\x05" +
		"\u012A\x96\x02\u0253\u0254\x07\xC2\x02\x02\u0254\u0255\x05\u0118\x8D\x02" +
		"\u0255\u0256\x07\xCD\x02\x02\u0256\u025A\x03\x02\x02\x02\u0257\u0258\x07" +
		"\xCC\x02\x02\u0258\u025A\x05\u0118\x8D\x02\u0259\u0252\x03\x02\x02\x02" +
		"\u0259\u0253\x03\x02\x02\x02\u0259\u0257\x03\x02\x02\x02\u025A\'\x03\x02" +
		"\x02\x02\u025B\u025D\x07\xDF\x02\x02\u025C\u025B\x03\x02\x02\x02\u025C";
	private static readonly _serializedATNSegment2: string =
		"\u025D\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E\u025F\x07\r\x02" +
		"\x02\u025F\u0260\x07\xDF\x02\x02\u0260\u0264\x05\u0118\x8D\x02\u0261\u0262" +
		"\x07\xC3\x02\x02\u0262\u0263\x07\xD5\x02\x02\u0263\u0265\x07\xCE\x02\x02" +
		"\u0264\u0261\x03\x02\x02\x02\u0264\u0265\x03\x02\x02\x02\u0265\u0268\x03" +
		"\x02\x02\x02\u0266\u0267\x07\xDF\x02\x02\u0267\u0269\x07\xDA\x02\x02\u0268" +
		"\u0266\x03\x02\x02\x02\u0268\u0269\x03\x02\x02\x02\u0269\u026B\x03\x02" +
		"\x02\x02\u026A\u026C\x07\xDD\x02\x02\u026B\u026A\x03\x02\x02\x02\u026C" +
		"\u026D\x03\x02\x02\x02\u026D\u026B\x03\x02\x02\x02\u026D\u026E\x03\x02" +
		"\x02\x02\u026E\u0274\x03\x02\x02\x02\u026F\u0271\x05 \x11\x02\u0270\u026F" +
		"\x03\x02\x02\x02\u0271\u0272\x03\x02\x02\x02\u0272\u0270\x03\x02\x02\x02" +
		"\u0272\u0273\x03\x02\x02\x02\u0273\u0275\x03\x02\x02\x02\u0274\u0270\x03" +
		"\x02\x02\x02\u0274\u0275\x03\x02\x02\x02\u0275\u0276\x03\x02\x02\x02\u0276" +
		"\u0278\x079\x02\x02\u0277\u0279\x07\xDD\x02\x02\u0278\u0277\x03\x02\x02" +
		"\x02\u0279\u027A\x03\x02\x02\x02\u027A\u0278\x03\x02\x02\x02\u027A\u027B" +
		"\x03\x02\x02\x02\u027B)\x03\x02\x02\x02\u027C\u027D\x05\u0122\x92\x02" +
		"\u027D+\x03\x02\x02\x02\u027E\u027F\x05\u0118\x8D\x02\u027F-\x03\x02\x02" +
		"\x02\u0280\u0281\x052\x1A\x02\u0281/\x03\x02\x02\x02\u0282\u0283\x07\x07" +
		"\x02\x02\u0283\u0284\x07\xDF\x02\x02\u0284\u0286\x05\xFA~\x02\u0285\u0287" +
		"\x07\xDF\x02\x02\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02" +
		"\u0287\u0288\x03\x02\x02\x02\u0288\u028A\x07\xBC\x02\x02\u0289\u028B\x07" +
		"\xDF\x02\x02\u028A\u0289\x03\x02\x02\x02\u028A\u028B\x03\x02\x02\x02\u028B" +
		"\u028C\x03\x02\x02\x02\u028C\u0297\x05\u012A\x96\x02\u028D\u028F\x07\xDF" +
		"\x02\x02\u028E\u028D\x03\x02\x02\x02\u028E\u028F\x03\x02\x02\x02\u028F" +
		"\u0290\x03\x02\x02\x02\u0290\u0292\x07\xB8\x02\x02\u0291\u0293\x07\xDF" +
		"\x02\x02\u0292\u0291\x03\x02\x02\x02\u0292\u0293\x03\x02\x02\x02\u0293" +
		"\u0294\x03\x02\x02\x02\u0294\u0296\x05\u012A\x96\x02\u0295\u028E\x03\x02" +
		"\x02\x02\u0296\u0299\x03\x02\x02\x02\u0297\u0295\x03\x02\x02\x02\u0297" +
		"\u0298\x03\x02\x02\x02\u02981\x03\x02\x02\x02\u0299\u0297\x03\x02\x02" +
		"\x02\u029A\u02A6\x054\x1B\x02\u029B\u029D\x07\xDD\x02\x02\u029C\u029B" +
		"\x03\x02\x02\x02\u029D\u029E\x03\x02\x02\x02\u029E\u029C\x03\x02\x02\x02" +
		"\u029E\u029F\x03\x02\x02\x02\u029F\u02A1\x03\x02\x02\x02\u02A0\u02A2\x07" +
		"\xDF\x02\x02\u02A1\u02A0\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02A3\x03\x02\x02\x02\u02A3\u02A5\x054\x1B\x02\u02A4\u029C\x03\x02\x02" +
		"\x02\u02A5\u02A8\x03\x02\x02\x02\u02A6\u02A4\x03\x02\x02\x02\u02A6\u02A7" +
		"\x03\x02\x02\x02\u02A73\x03\x02\x02\x02\u02A8\u02A6\x03\x02\x02\x02\u02A9" +
		"\u02ED\x056\x1C\x02\u02AA\u02ED\x050\x19\x02\u02AB\u02ED\x058\x1D\x02" +
		"\u02AC\u02ED\x05:\x1E\x02\u02AD\u02ED\x05<\x1F\x02\u02AE\u02ED\x05> \x02" +
		"\u02AF\u02ED\x05@!\x02\u02B0\u02ED\x05D#\x02\u02B1\u02ED\x05J&\x02\u02B2" +
		"\u02ED\x05H%\x02\u02B3\u02ED\x05L\'\x02\u02B4\u02ED\x05N(\x02\u02B5\u02ED" +
		"\x05T+\x02\u02B6\u02ED\x05V,\x02\u02B7\u02ED\x05Z.\x02\u02B8\u02ED\x05" +
		"\xEEx\x02\u02B9\u02ED\x05\\/\x02\u02BA\u02ED\x05^0\x02\u02BB\u02ED\x05" +
		"`1\x02\u02BC\u02ED\x05d3\x02\u02BD\u02ED\x05f4\x02\u02BE\u02ED\x05h5\x02" +
		"\u02BF\u02ED\x05j6\x02\u02C0\u02ED\x05t;\x02\u02C1\u02ED\x05v<\x02\u02C2" +
		"\u02ED\x05x=\x02\u02C3\u02ED\x05z>\x02\u02C4\u02ED\x05|?\x02\u02C5\u02ED" +
		"\x05\u0128\x95\x02\u02C6\u02ED\x05~@\x02\u02C7\u02ED\x05\x80A\x02\u02C8" +
		"\u02ED\x05\x82B\x02\u02C9\u02ED\x05\x84C\x02\u02CA\u02ED\x05\x8CG\x02" +
		"\u02CB\u02ED\x05\x8EH\x02\u02CC\u02ED\x05\x90I\x02\u02CD\u02ED\x05\x92" +
		"J\x02\u02CE\u02ED\x05\x94K\x02\u02CF\u02ED\x05\x96L\x02\u02D0\u02ED\x05" +
		"\x98M\x02\u02D1\u02ED\x05\x9EP\x02\u02D2\u02ED\x05\xA6T\x02\u02D3\u02ED" +
		"\x05\xA8U\x02\u02D4\u02ED\x05\xAAV\x02\u02D5\u02ED\x05\xACW\x02\u02D6" +
		"\u02ED\x05\xB0Y\x02\u02D7\u02ED\x05\xB2Z\x02\u02D8\u02ED\x05\xB4[\x02" +
		"\u02D9\u02ED\x05\xB6\\\x02\u02DA\u02ED\x05\xB8]\x02\u02DB\u02ED\x05\xBA" +
		"^\x02\u02DC\u02ED\x05\xBC_\x02\u02DD\u02ED\x05\xBE`\x02\u02DE\u02ED\x05" +
		"\xC0a\x02\u02DF\u02ED\x05\xC8e\x02\u02E0\u02ED\x05\xCAf\x02\u02E1\u02ED" +
		"\x05\xCCg\x02\u02E2\u02ED\x05\xCEh\x02\u02E3\u02ED\x05\xD2j\x02\u02E4" +
		"\u02ED\x05\xDAn\x02\u02E5\u02ED\x05\xDCo\x02\u02E6\u02ED\x05\xE0q\x02" +
		"\u02E7\u02ED\x05\xE6t\x02\u02E8\u02ED\x05\xE8u\x02\u02E9\u02ED\x05\xEA" +
		"v\x02\u02EA\u02ED\x05\xECw\x02\u02EB\u02ED\x05\xF4{\x02\u02EC\u02A9\x03" +
		"\x02\x02\x02\u02EC\u02AA\x03\x02\x02\x02\u02EC\u02AB\x03\x02\x02\x02\u02EC" +
		"\u02AC\x03\x02\x02\x02\u02EC\u02AD\x03\x02\x02\x02\u02EC\u02AE\x03\x02" +
		"\x02\x02\u02EC\u02AF\x03\x02\x02\x02\u02EC\u02B0\x03\x02\x02\x02\u02EC" +
		"\u02B1\x03\x02\x02\x02\u02EC\u02B2\x03\x02\x02\x02\u02EC\u02B3\x03\x02" +
		"\x02\x02\u02EC\u02B4\x03\x02\x02\x02\u02EC\u02B5\x03\x02\x02\x02\u02EC" +
		"\u02B6\x03\x02\x02\x02\u02EC\u02B7\x03\x02\x02\x02\u02EC\u02B8\x03\x02" +
		"\x02\x02\u02EC\u02B9\x03\x02\x02\x02\u02EC\u02BA\x03\x02\x02\x02\u02EC" +
		"\u02BB\x03\x02\x02\x02\u02EC\u02BC\x03\x02\x02\x02\u02EC\u02BD\x03\x02" +
		"\x02\x02\u02EC\u02BE\x03\x02\x02\x02\u02EC\u02BF\x03\x02\x02\x02\u02EC" +
		"\u02C0\x03\x02\x02\x02\u02EC\u02C1\x03\x02\x02\x02\u02EC\u02C2\x03\x02" +
		"\x02\x02\u02EC\u02C3\x03\x02\x02\x02\u02EC\u02C4\x03\x02\x02\x02\u02EC" +
		"\u02C5\x03\x02\x02\x02\u02EC\u02C6\x03\x02\x02\x02\u02EC\u02C7\x03\x02" +
		"\x02\x02\u02EC\u02C8\x03\x02\x02\x02\u02EC\u02C9\x03\x02\x02\x02\u02EC" +
		"\u02CA\x03\x02\x02\x02\u02EC\u02CB\x03\x02\x02\x02\u02EC\u02CC\x03\x02" +
		"\x02\x02\u02EC\u02CD\x03\x02\x02\x02\u02EC\u02CE\x03\x02\x02\x02\u02EC" +
		"\u02CF\x03\x02\x02\x02\u02EC\u02D0\x03\x02\x02\x02\u02EC\u02D1\x03\x02" +
		"\x02\x02\u02EC\u02D2\x03\x02\x02\x02\u02EC\u02D3\x03\x02\x02\x02\u02EC" +
		"\u02D4\x03\x02\x02\x02\u02EC\u02D5\x03\x02\x02\x02\u02EC\u02D6\x03\x02" +
		"\x02\x02\u02EC\u02D7\x03\x02\x02\x02\u02EC\u02D8\x03\x02\x02\x02\u02EC" +
		"\u02D9\x03\x02\x02\x02\u02EC\u02DA\x03\x02\x02\x02\u02EC\u02DB\x03\x02" +
		"\x02\x02\u02EC\u02DC\x03\x02\x02\x02\u02EC\u02DD\x03\x02\x02\x02\u02EC" +
		"\u02DE\x03\x02\x02\x02\u02EC\u02DF\x03\x02\x02\x02\u02EC\u02E0\x03\x02" +
		"\x02\x02\u02EC\u02E1\x03\x02\x02\x02\u02EC\u02E2\x03\x02\x02\x02\u02EC" +
		"\u02E3\x03\x02\x02\x02\u02EC\u02E4\x03\x02\x02\x02\u02EC\u02E5\x03\x02" +
		"\x02\x02\u02EC\u02E6\x03\x02\x02\x02\u02EC\u02E7\x03\x02\x02\x02\u02EC" +
		"\u02E8\x03\x02\x02\x02\u02EC\u02E9\x03\x02\x02\x02\u02EC\u02EA\x03\x02" +
		"\x02\x02\u02EC\u02EB\x03\x02\x02\x02\u02ED5\x03\x02\x02\x02\u02EE\u02EF" +
		"\x07\b\x02\x02\u02EF\u02F0\x07\xDF\x02\x02\u02F0\u02F9\x05\xDEp\x02\u02F1" +
		"\u02F3\x07\xDF\x02\x02\u02F2\u02F1\x03\x02\x02\x02\u02F2\u02F3\x03\x02" +
		"\x02\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x07\xB8\x02\x02\u02F5" +
		"\u02F7\x07\xDF\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F6\u02F7\x03\x02" +
		"\x02\x02\u02F7\u02F8\x03\x02\x02\x02\u02F8\u02FA\x05\xDEp\x02\u02F9\u02F2" +
		"\x03\x02\x02\x02\u02F9\u02FA\x03\x02\x02\x02\u02FA7\x03\x02\x02\x02\u02FB" +
		"\u02FC\x07\v\x02\x02\u02FC9\x03\x02\x02\x02\u02FD\u02FE\x07\x15\x02\x02" +
		"\u02FE\u02FF\x07\xDF\x02\x02\u02FF\u0300\x05\xDEp\x02\u0300;\x03\x02\x02" +
		"\x02\u0301\u0302\x07\x16\x02\x02\u0302\u0303\x07\xDF\x02\x02\u0303\u0304" +
		"\x05\xDEp\x02\u0304=\x03\x02\x02\x02\u0305\u0315\x07\x18\x02\x02\u0306" +
		"\u0307\x07\xDF\x02\x02\u0307\u0312\x05\xDEp\x02\u0308\u030A\x07\xDF\x02" +
		"\x02\u0309\u0308\x03\x02\x02\x02\u0309\u030A\x03\x02\x02\x02\u030A\u030B" +
		"\x03\x02\x02\x02\u030B\u030D\x07\xB8\x02\x02\u030C\u030E\x07\xDF\x02\x02" +
		"\u030D\u030C\x03\x02\x02\x02\u030D\u030E\x03\x02\x02\x02\u030E\u030F\x03" +
		"\x02\x02\x02\u030F\u0311\x05\xDEp\x02\u0310\u0309\x03\x02\x02\x02\u0311" +
		"\u0314\x03\x02\x02\x02\u0312\u0310\x03\x02\x02\x02\u0312\u0313\x03\x02" +
		"\x02\x02\u0313\u0316\x03\x02\x02\x02\u0314\u0312\x03\x02\x02\x02\u0315" +
		"\u0306\x03\x02\x02\x02\u0315\u0316\x03\x02\x02\x02\u0316?\x03\x02\x02" +
		"\x02\u0317\u0318\x05\u012E\x98\x02\u0318\u0319\x07\xDF\x02\x02\u0319\u031B" +
		"\x03\x02\x02\x02\u031A\u0317\x03\x02\x02\x02\u031A\u031B\x03\x02\x02\x02" +
		"\u031B\u031C\x03\x02\x02\x02\u031C\u031D\x07\x1A\x02\x02\u031D\u031E\x07" +
		"\xDF\x02\x02\u031E\u0329\x05B\"\x02\u031F\u0321\x07\xDF\x02\x02\u0320" +
		"\u031F\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u0322\x03\x02" +
		"\x02\x02\u0322\u0324\x07\xB8\x02\x02\u0323\u0325\x07\xDF\x02\x02\u0324" +
		"\u0323\x03\x02\x02\x02\u0324\u0325\x03\x02\x02\x02\u0325\u0326\x03\x02" +
		"\x02\x02\u0326\u0328\x05B\"\x02\u0327\u0320\x03\x02\x02\x02\u0328\u032B" +
		"\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A\x03\x02\x02\x02" +
		"\u032AA\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02\u032C\u032E\x05\u0118" +
		"\x8D\x02\u032D\u032F\x05\u0132\x9A\x02\u032E\u032D\x03\x02\x02\x02\u032E" +
		"\u032F\x03\x02\x02\x02\u032F\u0332\x03\x02\x02\x02\u0330\u0331\x07\xDF" +
		"\x02\x02\u0331\u0333\x05\u011A\x8E\x02\u0332\u0330\x03\x02\x02\x02\u0332" +
		"\u0333\x03\x02\x02\x02\u0333\u0335\x03\x02\x02\x02\u0334\u0336\x07\xDF" +
		"\x02\x02\u0335\u0334\x03\x02\x02\x02\u0335\u0336\x03\x02\x02\x02\u0336" +
		"\u0337\x03\x02\x02\x02\u0337\u0339\x07\xBC\x02\x02\u0338\u033A\x07\xDF" +
		"\x02\x02\u0339\u0338\x03\x02\x02\x02\u0339\u033A\x03\x02\x02\x02\u033A" +
		"\u033B\x03\x02\x02\x02\u033B\u033C\x05\xDEp\x02\u033CC\x03\x02\x02\x02" +
		"\u033D\u033F\x07\x1B\x02\x02\u033E\u0340\x07\xDF\x02\x02\u033F\u033E\x03" +
		"\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340\u0341\x03\x02\x02\x02\u0341" +
		"\u0343\x07\xBC\x02\x02\u0342\u0344\x07\xDF\x02\x02\u0343\u0342\x03\x02" +
		"\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0345\x03\x02\x02\x02\u0345" +
		"\u0346\x05\xDEp\x02\u0346E\x03\x02\x02\x02\u0347\u0348\x05\u0134\x9B\x02" +
		"\u0348\u0349\x07\xDF\x02\x02\u0349\u034B\x03\x02\x02\x02\u034A\u0347\x03" +
		"\x02\x02\x02\u034A\u034B\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C" +
		"\u034D\x07\x1C\x02\x02\u034D\u0353\x07\xDF\x02\x02\u034E\u0350\x07H\x02" +
		"\x02\u034F\u0351\x05\u0132\x9A\x02\u0350\u034F\x03\x02\x02\x02\u0350\u0351" +
		"\x03\x02\x02\x02\u0351\u0354\x03\x02\x02\x02\u0352\u0354\x07\x9F\x02\x02" +
		"\u0353\u034E\x03\x02\x02\x02\u0353\u0352\x03\x02\x02\x02\u0354\u0355\x03" +
		"\x02\x02\x02\u0355\u0356\x07\xDF\x02\x02\u0356\u0358\x05\u0118\x8D\x02" +
		"\u0357\u0359\x05\u0132\x9A\x02\u0358\u0357\x03\x02\x02\x02\u0358\u0359" +
		"\x03\x02\x02\x02\u0359\u035A\x03\x02\x02\x02\u035A\u035B\x07\xDF\x02\x02" +
		"\u035B\u035C\x07[\x02\x02\u035C\u035D\x07\xDF\x02\x02\u035D\u0362\x07" +
		"\xD2\x02\x02\u035E\u035F\x07\xDF\x02\x02\u035F\u0360\x07\x05\x02\x02\u0360" +
		"\u0361\x07\xDF\x02\x02\u0361\u0363\x07\xD2\x02\x02\u0362\u035E\x03\x02" +
		"\x02\x02\u0362\u0363\x03\x02\x02\x02\u0363\u0368\x03\x02\x02\x02\u0364" +
		"\u0366\x07\xDF\x02\x02\u0365\u0364\x03\x02\x02\x02\u0365\u0366\x03\x02" +
		"\x02\x02\u0366\u0367\x03\x02\x02\x02\u0367\u0369\x05\u010E\x88\x02\u0368" +
		"\u0365\x03\x02\x02\x02\u0368\u0369\x03\x02\x02\x02\u0369\u036C\x03\x02" +
		"\x02\x02\u036A\u036B\x07\xDF\x02\x02\u036B\u036D\x05\u011A\x8E\x02\u036C" +
		"\u036A\x03\x02\x02\x02\u036C\u036D\x03\x02\x02\x02\u036DG\x03\x02\x02" +
		"\x02\u036E\u036F\t\x03\x02\x02\u036F\u0370\x07\xDF\x02\x02\u0370\u037B" +
		"\x05\u0126\x94\x02\u0371\u0373\x07\xDF\x02\x02\u0372\u0371\x03\x02\x02" +
		"\x02\u0372\u0373\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0376" +
		"\x07\xB8\x02\x02\u0375\u0377\x07\xDF\x02\x02\u0376\u0375\x03\x02\x02\x02" +
		"\u0376\u0377\x03\x02\x02\x02\u0377\u0378\x03\x02\x02\x02\u0378\u037A\x05" +
		"\u0126\x94\x02\u0379\u0372\x03\x02\x02\x02\u037A\u037D\x03\x02\x02\x02" +
		"\u037B\u0379\x03\x02\x02\x02\u037B\u037C\x03\x02\x02\x02\u037CI\x03\x02" +
		"\x02\x02\u037D\u037B\x03\x02\x02\x02\u037E\u037F\x07)\x02\x02\u037F\u0380" +
		"\x07\xDF\x02\x02\u0380\u0382\x05\xDEp\x02\u0381\u0383\x07\xDF\x02\x02" +
		"\u0382\u0381\x03\x02\x02\x02\u0382\u0383\x03\x02\x02\x02\u0383\u0384\x03" +
		"\x02\x02\x02\u0384\u0386\x07\xB8\x02\x02\u0385\u0387\x07\xDF\x02\x02\u0386" +
		"\u0385\x03\x02\x02\x02\u0386\u0387\x03\x02\x02\x02\u0387\u0388\x03\x02" +
		"\x02\x02\u0388\u0391\x05\xDEp\x02\u0389\u038B\x07\xDF\x02\x02\u038A\u0389" +
		"\x03\x02\x02\x02\u038A\u038B\x03\x02\x02\x02\u038B\u038C\x03\x02\x02\x02" +
		"\u038C\u038E\x07\xB8\x02\x02\u038D\u038F\x07\xDF\x02\x02\u038E\u038D\x03" +
		"\x02\x02\x02\u038E\u038F\x03\x02\x02\x02\u038F\u0390\x03\x02\x02\x02\u0390" +
		"\u0392\x05\xDEp\x02\u0391\u038A\x03\x02\x02\x02\u0391\u0392\x03\x02\x02" +
		"\x02\u0392K\x03\x02\x02\x02\u0393\u0395\x07+\x02\x02\u0394\u0396\x07\xDD" +
		"\x02\x02\u0395\u0394\x03\x02\x02\x02\u0396\u0397\x03\x02\x02\x02\u0397" +
		"\u0395\x03\x02\x02\x02\u0397\u0398\x03\x02\x02\x02\u0398\u039F\x03\x02" +
		"\x02\x02\u0399\u039B\x052\x1A\x02\u039A\u039C\x07\xDD\x02\x02\u039B\u039A" +
		"\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039B\x03\x02\x02\x02" +
		"\u039D\u039E\x03\x02\x02\x02\u039E\u03A0\x03\x02\x02\x02\u039F\u0399\x03" +
		"\x02\x02\x02\u039F\u03A0\x03\x02\x02\x02\u03A0\u03A1\x03\x02\x02\x02\u03A1" +
		"\u03C9\x07X\x02\x02\u03A2\u03A3\x07+\x02\x02\u03A3\u03A4\x07\xDF\x02\x02" +
		"\u03A4\u03A5\t\x04\x02\x02\u03A5\u03A6\x07\xDF\x02\x02\u03A6\u03A8\x05" +
		"\xDEp\x02\u03A7\u03A9\x07\xDD\x02\x02\u03A8\u03A7\x03\x02\x02\x02\u03A9" +
		"\u03AA\x03\x02\x02\x02\u03AA\u03A8\x03\x02\x02\x02\u03AA\u03AB\x03\x02" +
		"\x02\x02\u03AB\u03B2\x03\x02\x02\x02\u03AC\u03AE\x052\x1A\x02\u03AD\u03AF" +
		"\x07\xDD\x02\x02\u03AE\u03AD\x03\x02\x02\x02\u03AF\u03B0\x03\x02\x02\x02" +
		"\u03B0\u03AE\x03\x02\x02\x02\u03B0\u03B1\x03\x02\x02\x02\u03B1\u03B3\x03" +
		"\x02\x02\x02\u03B2\u03AC\x03\x02\x02\x02\u03B2\u03B3\x03\x02\x02\x02\u03B3" +
		"\u03B4\x03\x02\x02\x02\u03B4\u03B5\x07X\x02\x02\u03B5\u03C9\x03\x02\x02" +
		"\x02\u03B6\u03B8\x07+\x02\x02\u03B7\u03B9\x07\xDD\x02\x02\u03B8\u03B7" +
		"\x03\x02\x02\x02\u03B9\u03BA\x03\x02\x02\x02\u03BA\u03B8\x03\x02\x02\x02" +
		"\u03BA\u03BB\x03\x02\x02\x02\u03BB\u03BC\x03\x02\x02\x02\u03BC\u03BE\x05" +
		"2\x1A\x02\u03BD\u03BF\x07\xDD\x02\x02\u03BE\u03BD\x03\x02\x02\x02\u03BF" +
		"\u03C0\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02" +
		"\x02\x02\u03C1\u03C2\x03\x02\x02\x02\u03C2\u03C3\x07X\x02\x02\u03C3\u03C4" +
		"\x07\xDF\x02\x02\u03C4\u03C5\t\x04\x02\x02\u03C5\u03C6\x07\xDF\x02\x02" +
		"\u03C6\u03C7\x05\xDEp\x02\u03C7\u03C9\x03\x02\x02\x02\u03C8\u0393\x03" +
		"\x02\x02\x02\u03C8\u03A2\x03\x02\x02\x02\u03C8\u03B6\x03\x02\x02\x02\u03C9" +
		"M\x03\x02\x02\x02\u03CA\u03CB\x078\x02\x02\u03CBO\x03\x02\x02\x02\u03CC" +
		"\u03CD\x05\u012C\x97\x02\u03CD\u03CE\x07\xDF\x02\x02\u03CE\u03D0\x03\x02" +
		"\x02\x02\u03CF\u03CC\x03\x02\x02\x02\u03CF\u03D0\x03\x02\x02\x02\u03D0" +
		"\u03D1\x03\x02\x02\x02\u03D1\u03D2\x07:\x02\x02\u03D2\u03D3\x07\xDF\x02" +
		"\x02\u03D3\u03D5\x05\u0118\x8D\x02\u03D4\u03D6\x07\xDD\x02\x02\u03D5\u03D4" +
		"\x03\x02\x02\x02\u03D6\u03D7\x03\x02\x02\x02\u03D7\u03D5\x03\x02\x02\x02" +
		"\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03DC\x03\x02\x02\x02\u03D9\u03DB\x05" +
		"R*\x02\u03DA\u03D9\x03\x02\x02\x02\u03DB\u03DE\x03\x02\x02\x02\u03DC\u03DA" +
		"\x03\x02\x02\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\u03DF\x03\x02\x02\x02" +
		"\u03DE\u03DC\x03\x02\x02\x02\u03DF\u03E0\x070\x02\x02\u03E0Q\x03\x02\x02" +
		"\x02\u03E1\u03EA\x05\u0118\x8D\x02\u03E2\u03E4\x07\xDF\x02\x02\u03E3\u03E2" +
		"\x03\x02\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x03\x02\x02\x02" +
		"\u03E5\u03E7\x07\xBC\x02\x02\u03E6\u03E8\x07\xDF\x02\x02\u03E7\u03E6\x03" +
		"\x02\x02\x02\u03E7\u03E8\x03\x02\x02\x02\u03E8\u03E9\x03\x02\x02\x02\u03E9" +
		"\u03EB\x05\xDEp\x02\u03EA\u03E3\x03\x02\x02\x02\u03EA\u03EB\x03\x02\x02" +
		"\x02\u03EB\u03ED\x03\x02\x02\x02\u03EC\u03EE\x07\xDD\x02\x02\u03ED\u03EC" +
		"\x03\x02\x02\x02\u03EE\u03EF\x03\x02\x02\x02\u03EF\u03ED\x03\x02\x02\x02" +
		"\u03EF\u03F0\x03\x02\x02\x02\u03F0S\x03\x02\x02\x02\u03F1\u03F2\x07<\x02" +
		"\x02\u03F2\u03F3\x07\xDF\x02\x02\u03F3\u03FE\x05\xDEp\x02\u03F4\u03F6" +
		"\x07\xDF\x02\x02\u03F5\u03F4\x03\x02\x02\x02\u03F5\u03F6\x03\x02\x02\x02" +
		"\u03F6\u03F7\x03\x02\x02\x02\u03F7\u03F9\x07\xB8\x02\x02\u03F8\u03FA\x07" +
		"\xDF\x02\x02\u03F9\u03F8\x03\x02\x02\x02\u03F9\u03FA\x03\x02\x02\x02\u03FA" +
		"\u03FB\x03\x02\x02\x02\u03FB\u03FD\x05\xDEp\x02\u03FC\u03F5\x03\x02\x02" +
		"\x02\u03FD\u0400\x03\x02\x02\x02\u03FE\u03FC\x03\x02\x02\x02\u03FE\u03FF" +
		"\x03\x02\x02\x02\u03FFU\x03\x02\x02\x02\u0400\u03FE\x03\x02\x02\x02\u0401" +
		"\u0402\x07=\x02\x02\u0402\u0403\x07\xDF\x02\x02\u0403\u0404\x05\xDEp\x02" +
		"\u0404W\x03\x02\x02\x02\u0405\u0406\x05\u0134\x9B\x02\u0406\u0407\x07" +
		"\xDF\x02\x02\u0407\u0409\x03\x02\x02\x02\u0408\u0405\x03\x02\x02\x02\u0408" +
		"\u0409\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\u040B\x07>\x02" +
		"\x02\u040B\u040C\x07\xDF\x02\x02\u040C\u040E\x05\u0118\x8D\x02\u040D\u040F" +
		"\x07\xDF\x02\x02\u040E\u040D\x03\x02\x02\x02\u040E\u040F\x03\x02\x02\x02" +
		"\u040F\u0410\x03\x02\x02\x02\u0410\u0411\x05\u010E\x88\x02\u0411Y\x03" +
		"\x02\x02\x02\u0412\u0413\t\x05\x02\x02\u0413[\x03\x02\x02\x02\u0414\u0415" +
		"\x07E\x02\x02\u0415\u0416\x07\xDF\x02\x02\u0416\u0418\x05\xDEp\x02\u0417" +
		"\u0419\x07\xDF\x02\x02\u0418\u0417\x03\x02\x02\x02\u0418\u0419\x03\x02" +
		"\x02\x02\u0419\u041A\x03\x02\x02\x02\u041A\u041C\x07\xB8\x02\x02\u041B" +
		"\u041D\x07\xDF\x02\x02\u041C\u041B\x03\x02\x02\x02\u041C\u041D\x03\x02" +
		"\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u041F\x05\xDEp\x02\u041F]\x03" +
		"\x02\x02\x02\u0420\u0421\x07G\x02\x02\u0421\u0422\x07\xDF\x02\x02\u0422" +
		"\u0423\x07-\x02\x02\u0423\u0424\x07\xDF\x02\x02\u0424\u0426\x05\u0118" +
		"\x8D\x02\u0425\u0427\x05\u0132\x9A\x02\u0426\u0425\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x07\xDF" +
		"\x02\x02\u0429\u042A\x07P\x02\x02\u042A\u042B\x07\xDF\x02\x02\u042B\u042D" +
		"\x05\xDEp\x02\u042C\u042E\x07\xDD\x02\x02\u042D\u042C\x03\x02\x02\x02" +
		"\u042E\u042F\x03\x02\x02\x02\u042F\u042D\x03\x02\x02\x02\u042F\u0430\x03" +
		"\x02\x02\x02\u0430\u0437\x03\x02\x02\x02\u0431\u0433\x052\x1A\x02\u0432" +
		"\u0434\x07\xDD\x02\x02\u0433\u0432\x03\x02\x02\x02\u0434\u0435\x03\x02" +
		"\x02\x02\u0435\u0433\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436" +
		"\u0438\x03\x02\x02\x02\u0437\u0431\x03\x02\x02\x02\u0437\u0438\x03\x02" +
		"\x02\x02\u0438\u0439\x03\x02\x02\x02\u0439\u043C\x07k\x02\x02\u043A\u043B" +
		"\x07\xDF\x02\x02\u043B\u043D\x05\u0118\x8D\x02\u043C\u043A\x03\x02\x02" +
		"\x02\u043C\u043D\x03\x02\x02\x02\u043D_\x03\x02\x02\x02\u043E\u043F\x07" +
		"G\x02\x02\u043F\u0440\x07\xDF\x02\x02\u0440\u0442\x05\xFC\x7F\x02\u0441" +
		"\u0443\x05\u0132\x9A\x02\u0442\u0441\x03\x02\x02\x02\u0442\u0443\x03\x02" +
		"\x02\x02\u0443\u0446\x03\x02\x02\x02\u0444\u0445\x07\xDF\x02\x02\u0445" +
		"\u0447\x05\u011A\x8E\x02\u0446\u0444\x03\x02\x02\x02\u0446\u0447\x03\x02" +
		"\x02\x02\u0447\u0449\x03\x02\x02\x02\u0448\u044A\x07\xDF\x02\x02\u0449" +
		"\u0448\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\u044B\x03\x02" +
		"\x02\x02\u044B\u044D\x07\xBC\x02\x02\u044C\u044E\x07\xDF\x02\x02\u044D" +
		"\u044C\x03\x02\x02\x02\u044D\u044E\x03\x02\x02\x02\u044E\u044F\x03\x02" +
		"\x02\x02\u044F\u0450\x05\xDEp\x02\u0450\u0451\x07\xDF\x02\x02\u0451\u0452" +
		"\x07\xA4\x02\x02\u0452\u0453\x07\xDF\x02\x02\u0453\u0458\x05\xDEp\x02" +
		"\u0454\u0455\x07\xDF\x02\x02\u0455\u0456\x07\x9C\x02\x02\u0456\u0457\x07" +
		"\xDF\x02\x02\u0457\u0459\x05\xDEp\x02\u0458\u0454\x03\x02\x02\x02\u0458" +
		"\u0459\x03\x02\x02\x02\u0459\u045B\x03\x02\x02\x02\u045A\u045C\x07\xDD" +
		"\x02\x02\u045B\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D" +
		"\u045B\x03\x02\x02\x02\u045D\u045E\x03\x02\x02\x02\u045E\u0465\x03\x02" +
		"\x02\x02\u045F\u0461\x052\x1A\x02\u0460\u0462\x07\xDD\x02\x02\u0461\u0460" +
		"\x03\x02\x02\x02\u0462\u0463\x03\x02\x02\x02\u0463\u0461\x03\x02\x02\x02" +
		"\u0463\u0464\x03\x02\x02\x02\u0464\u0466\x03\x02\x02\x02\u0465\u045F\x03" +
		"\x02\x02\x02\u0465\u0466\x03\x02\x02\x02\u0466\u0467\x03\x02\x02\x02\u0467" +
		"\u046D\x07k\x02\x02\u0468\u0469\x07\xDF\x02\x02\u0469\u046B\x05\u0118" +
		"\x8D\x02\u046A\u046C\x05\u0132\x9A\x02\u046B\u046A\x03\x02\x02\x02\u046B" +
		"\u046C\x03\x02\x02\x02\u046C\u046E\x03\x02\x02\x02\u046D\u0468\x03\x02" +
		"\x02\x02\u046D\u046E\x03\x02\x02\x02\u046Ea\x03\x02\x02\x02\u046F\u0470" +
		"\x05\u0134\x9B\x02\u0470\u0471\x07\xDF\x02\x02\u0471\u0473\x03\x02\x02" +
		"\x02\u0472\u046F\x03\x02\x02\x02\u0472\u0473\x03\x02\x02\x02\u0473\u0476" +
		"\x03\x02\x02\x02\u0474\u0475\x07\x9B\x02\x02\u0475\u0477\x07\xDF\x02\x02" +
		"\u0476\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02\x02\u0477\u0478\x03" +
		"\x02\x02\x02\u0478\u0479\x07H\x02\x02\u0479\u047A\x07\xDF\x02\x02\u047A" +
		"\u047F\x05\u0118\x8D\x02\u047B\u047D\x07\xDF\x02\x02\u047C\u047B\x03\x02" +
		"\x02\x02\u047C\u047D\x03\x02\x02\x02\u047D\u047E\x03\x02\x02\x02\u047E" +
		"\u0480\x05\u010E\x88\x02\u047F\u047C\x03\x02\x02\x02\u047F\u0480\x03\x02" +
		"\x02\x02\u0480\u0483\x03\x02\x02\x02\u0481\u0482\x07\xDF\x02\x02\u0482" +
		"\u0484\x05\u011A\x8E\x02\u0483\u0481\x03\x02\x02\x02\u0483\u0484\x03\x02" +
		"\x02\x02\u0484\u0486\x03\x02\x02\x02\u0485\u0487\x07\xDD\x02\x02\u0486" +
		"\u0485\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u0486\x03\x02" +
		"\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u0490\x03\x02\x02\x02\u048A" +
		"\u048C\x052\x1A\x02\u048B\u048D\x07\xDD\x02\x02\u048C\u048B\x03\x02\x02" +
		"\x02\u048D\u048E\x03\x02\x02\x02\u048E\u048C\x03\x02\x02\x02\u048E\u048F" +
		"\x03\x02\x02\x02\u048F\u0491\x03\x02\x02\x02\u0490\u048A\x03\x02\x02\x02" +
		"\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492\u0493\x07" +
		"1\x02\x02\u0493c\x03\x02\x02\x02\u0494\u0495\x07I\x02\x02\u0495\u0496" +
		"\x07\xDF\x02\x02\u0496\u0498\x05\xDEp\x02\u0497\u0499\x07\xDF\x02\x02" +
		"\u0498\u0497\x03\x02\x02\x02\u0498\u0499\x03\x02\x02\x02\u0499\u049A\x03" +
		"\x02\x02\x02\u049A\u049C\x07\xB8\x02\x02\u049B\u049D\x07\xDF\x02\x02\u049C" +
		"\u049B\x03\x02\x02\x02\u049C\u049D\x03\x02\x02\x02\u049D\u049F\x03\x02" +
		"\x02\x02\u049E\u04A0\x05\xDEp\x02\u049F\u049E\x03\x02\x02\x02\u049F\u04A0" +
		"\x03\x02\x02\x02\u04A0\u04A2\x03\x02\x02\x02\u04A1\u04A3\x07\xDF\x02\x02" +
		"\u04A2\u04A1\x03\x02\x02\x02\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A4\x03" +
		"\x02\x02\x02\u04A4\u04A6\x07\xB8\x02\x02\u04A5\u04A7\x07\xDF\x02\x02\u04A6" +
		"\u04A5\x03\x02\x02\x02\u04A6\u04A7\x03\x02\x02\x02\u04A7\u04A8\x03\x02" +
		"\x02\x02\u04A8\u04A9\x05\xDEp\x02\u04A9e\x03\x02\x02\x02\u04AA\u04AB\x07" +
		"K\x02\x02\u04AB\u04AC\x07\xDF\x02\x02\u04AC\u04AD\x05\xDEp\x02\u04ADg" +
		"\x03\x02\x02\x02\u04AE\u04AF\x07L\x02\x02\u04AF\u04B0\x07\xDF\x02\x02" +
		"\u04B0\u04B1\x05\xDEp\x02\u04B1i\x03\x02\x02\x02\u04B2\u04B3\x07M\x02" +
		"\x02\u04B3\u04B4\x07\xDF\x02\x02\u04B4\u04B5\x05n8\x02\u04B5\u04B6\x07" +
		"\xDF\x02\x02\u04B6\u04B7\x07\xA2\x02\x02\u04B7\u04B8\x07\xDF\x02\x02\u04B8" +
		"\u04BD\x054\x1B\x02\u04B9\u04BA\x07\xDF\x02\x02\u04BA\u04BB\x07.\x02\x02" +
		"\u04BB\u04BC\x07\xDF\x02\x02\u04BC\u04BE\x054\x1B\x02\u04BD\u04B9\x03" +
		"\x02\x02\x02\u04BD\u04BE\x03\x02\x02\x02\u04BE\u04CC\x03\x02\x02\x02\u04BF" +
		"\u04C3\x05l7\x02\u04C0\u04C2\x05p9\x02\u04C1\u04C0\x03\x02\x02\x02\u04C2" +
		"\u04C5\x03\x02\x02\x02\u04C3\u04C1\x03\x02\x02\x02\u04C3\u04C4\x03\x02" +
		"\x02\x02\u04C4\u04C7\x03\x02\x02\x02\u04C5\u04C3\x03\x02\x02\x02\u04C6" +
		"\u04C8\x05r:\x02\u04C7\u04C6\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02" +
		"\u04C8\u04C9\x03\x02\x02\x02\u04C9\u04CA\x072\x02\x02\u04CA\u04CC\x03" +
		"\x02\x02\x02\u04CB\u04B2\x03\x02\x02\x02\u04CB\u04BF\x03\x02\x02\x02\u04CC" +
		"k\x03\x02\x02\x02\u04CD\u04CE\x07M\x02\x02\u04CE\u04CF\x07\xDF\x02\x02" +
		"\u04CF\u04D0\x05n8\x02\u04D0\u04D1\x07\xDF\x02\x02\u04D1\u04D3\x07\xA2" +
		"\x02\x02\u04D2\u04D4\x07\xDD\x02\x02\u04D3\u04D2\x03\x02\x02\x02\u04D4" +
		"\u04D5\x03\x02\x02\x02\u04D5\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02" +
		"\x02\x02\u04D6\u04DD\x03\x02\x02\x02\u04D7\u04D9\x052\x1A\x02\u04D8\u04DA" +
		"\x07\xDD\x02\x02\u04D9\u04D8\x03\x02\x02\x02\u04DA\u04DB\x03\x02\x02\x02" +
		"\u04DB\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DE\x03" +
		"\x02\x02\x02\u04DD\u04D7\x03\x02\x02\x02\u04DD\u04DE\x03\x02\x02\x02\u04DE" +
		"m\x03\x02\x02\x02\u04DF\u04E0\x05\xDEp\x02\u04E0o\x03\x02\x02\x02\u04E1" +
		"\u04E2\x07/\x02\x02\u04E2\u04E3\x07\xDF\x02\x02\u04E3\u04E4\x05n8\x02" +
		"\u04E4\u04E5\x07\xDF\x02\x02\u04E5\u04E7\x07\xA2\x02\x02\u04E6\u04E8\x07" +
		"\xDD\x02\x02\u04E7\u04E6\x03\x02\x02\x02\u04E8\u04E9\x03\x02\x02\x02\u04E9" +
		"\u04E7\x03\x02\x02\x02\u04E9\u04EA\x03\x02\x02\x02\u04EA\u04F1\x03\x02" +
		"\x02\x02\u04EB\u04ED\x052\x1A\x02\u04EC\u04EE\x07\xDD\x02\x02\u04ED\u04EC" +
		"\x03\x02\x02\x02\u04EE\u04EF\x03\x02\x02\x02\u04EF\u04ED\x03\x02\x02\x02" +
		"\u04EF\u04F0\x03";
	private static readonly _serializedATNSegment3: string =
		"\x02\x02\x02\u04F0\u04F2\x03\x02\x02\x02\u04F1\u04EB\x03\x02\x02\x02\u04F1" +
		"\u04F2\x03\x02\x02\x02\u04F2q\x03\x02\x02\x02\u04F3\u04F5\x07.\x02\x02" +
		"\u04F4\u04F6\x07\xDD\x02\x02\u04F5\u04F4\x03\x02\x02\x02\u04F6\u04F7\x03" +
		"\x02\x02\x02\u04F7\u04F5\x03\x02\x02\x02\u04F7\u04F8\x03\x02\x02\x02\u04F8" +
		"\u04FF\x03\x02\x02\x02\u04F9\u04FB\x052\x1A\x02\u04FA\u04FC\x07\xDD\x02" +
		"\x02\u04FB\u04FA\x03\x02\x02\x02\u04FC\u04FD\x03\x02\x02\x02\u04FD\u04FB" +
		"\x03\x02\x02\x02\u04FD\u04FE\x03\x02\x02\x02\u04FE\u0500\x03\x02\x02\x02" +
		"\u04FF\u04F9\x03\x02\x02\x02\u04FF\u0500\x03\x02\x02\x02\u0500s\x03\x02" +
		"\x02\x02\u0501\u0502\x07O\x02\x02\u0502\u0503\x07\xDF\x02\x02\u0503\u0504" +
		"\x05\u0118\x8D\x02\u0504u\x03\x02\x02\x02\u0505\u0506\x07Q\x02\x02\u0506" +
		"\u0507\x07\xDF\x02\x02\u0507\u0510\x05\xDEp\x02\u0508\u050A\x07\xDF\x02" +
		"\x02\u0509\u0508\x03\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u050B" +
		"\x03\x02\x02\x02\u050B\u050D\x07\xB8\x02\x02\u050C\u050E\x07\xDF\x02\x02" +
		"\u050D\u050C\x03\x02\x02\x02\u050D\u050E\x03\x02\x02\x02\u050E\u050F\x03" +
		"\x02\x02\x02\u050F\u0511\x05\xDEp\x02\u0510\u0509\x03\x02\x02\x02\u0511" +
		"\u0512\x03\x02\x02\x02\u0512\u0510\x03\x02\x02\x02\u0512\u0513\x03\x02" +
		"\x02\x02\u0513w\x03\x02\x02\x02\u0514\u0515\x07T\x02\x02\u0515\u0516\x07" +
		"\xDF\x02\x02\u0516\u0517\x05\xDEp\x02\u0517y\x03\x02\x02\x02\u0518\u0519" +
		"\x07Z\x02\x02\u0519\u051B\x07\xDF\x02\x02\u051A\u0518\x03\x02\x02\x02" +
		"\u051A\u051B\x03\x02\x02\x02\u051B\u051C\x03\x02\x02\x02\u051C\u051E\x05" +
		"\xFA~\x02\u051D\u051F\x07\xDF\x02\x02\u051E\u051D\x03\x02\x02\x02\u051E" +
		"\u051F\x03\x02\x02\x02\u051F\u0520\x03\x02\x02\x02\u0520\u0522\t\x06\x02" +
		"\x02\u0521\u0523\x07\xDF\x02\x02\u0522\u0521\x03\x02\x02\x02\u0522\u0523" +
		"\x03\x02\x02\x02\u0523\u0524\x03\x02\x02\x02\u0524\u0525\x05\xDEp\x02" +
		"\u0525{\x03\x02\x02\x02\u0526\u0527\x07]\x02\x02\u0527\u0528\x07\xDF\x02" +
		"\x02\u0528\u052A\x05\xDEp\x02\u0529\u052B\x07\xDF\x02\x02\u052A\u0529" +
		"\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u052C\x03\x02\x02\x02" +
		"\u052C\u052E\x07\xB8\x02\x02\u052D\u052F\x07\xDF\x02\x02\u052E\u052D\x03" +
		"\x02\x02\x02\u052E\u052F\x03\x02\x02\x02\u052F\u0530\x03\x02\x02\x02\u0530" +
		"\u0531\x05\xDEp\x02\u0531}\x03\x02\x02\x02\u0532\u0533\x07U\x02\x02\u0533" +
		"\u0534\x07\xDF\x02\x02\u0534\u0535\x05\xDEp\x02\u0535\x7F\x03\x02\x02" +
		"\x02\u0536\u0537\x07V\x02\x02\u0537\u0538\x07\xDF\x02\x02\u0538\u0547" +
		"\x05\xDEp\x02\u0539\u053B\x07\xDF\x02\x02\u053A\u0539\x03\x02\x02\x02" +
		"\u053A\u053B\x03\x02\x02\x02\u053B\u053C\x03\x02\x02\x02\u053C\u053E\x07" +
		"\xB8\x02\x02\u053D\u053F\x07\xDF\x02\x02\u053E\u053D\x03\x02\x02\x02\u053E" +
		"\u053F\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0545\x05\xDE" +
		"p\x02\u0541\u0542\x07\xDF\x02\x02\u0542\u0543\x07\xA4\x02\x02\u0543\u0544" +
		"\x07\xDF\x02\x02\u0544\u0546\x05\xDEp\x02\u0545\u0541\x03\x02\x02\x02" +
		"\u0545\u0546\x03\x02\x02\x02\u0546\u0548\x03\x02\x02\x02\u0547\u053A\x03" +
		"\x02\x02\x02\u0547\u0548\x03\x02\x02\x02\u0548\x81\x03\x02\x02\x02\u0549" +
		"\u054A\x07a\x02\x02\u054A\u054B\x07\xDF\x02\x02\u054B\u054D\x05\xFA~\x02" +
		"\u054C\u054E\x07\xDF\x02\x02\u054D\u054C\x03\x02\x02\x02\u054D\u054E\x03" +
		"\x02\x02\x02\u054E\u054F\x03\x02\x02\x02\u054F\u0551\x07\xBC\x02\x02\u0550" +
		"\u0552\x07\xDF\x02\x02\u0551\u0550\x03\x02\x02\x02\u0551\u0552\x03\x02" +
		"\x02\x02\u0552\u0553\x03\x02\x02\x02\u0553\u0554\x05\xDEp\x02\u0554\x83" +
		"\x03\x02\x02\x02\u0555\u0559\x05\x86D\x02\u0556\u0558\x05\x88E\x02\u0557" +
		"\u0556\x03\x02\x02\x02\u0558\u055B\x03\x02\x02\x02\u0559\u0557\x03\x02" +
		"\x02\x02\u0559\u055A\x03\x02\x02\x02\u055A\u055D\x03\x02\x02\x02\u055B" +
		"\u0559\x03\x02\x02\x02\u055C\u055E\x05\x8AF\x02\u055D\u055C\x03\x02\x02" +
		"\x02\u055D\u055E\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u0560" +
		"\x07e\x02\x02\u0560\x85\x03\x02\x02\x02\u0561\u0562\x07b\x02\x02\u0562" +
		"\u0563\x07\xDF\x02\x02\u0563\u0564\x05n8\x02\u0564\u0565\x07\xDF\x02\x02" +
		"\u0565\u0567\x07\xA2\x02\x02\u0566\u0568\x07\xDD\x02\x02\u0567\u0566\x03" +
		"\x02\x02\x02\u0568\u0569\x03\x02\x02\x02\u0569\u0567\x03\x02\x02\x02\u0569" +
		"\u056A\x03\x02\x02\x02\u056A\u0571\x03\x02\x02\x02\u056B\u056D\x05\x1A" +
		"\x0E\x02\u056C\u056E\x07\xDD\x02\x02\u056D\u056C\x03\x02\x02\x02\u056E" +
		"\u056F\x03\x02\x02\x02\u056F\u056D\x03\x02\x02\x02\u056F\u0570\x03\x02" +
		"\x02\x02\u0570\u0572\x03\x02\x02\x02\u0571\u056B\x03\x02\x02\x02\u0571" +
		"\u0572\x03\x02\x02\x02\u0572\x87\x03\x02\x02\x02\u0573\u0574\x07c\x02" +
		"\x02\u0574\u0575\x07\xDF\x02\x02\u0575\u0576\x05n8\x02\u0576\u0577\x07" +
		"\xDF\x02\x02\u0577\u0579\x07\xA2\x02\x02\u0578\u057A\x07\xDD\x02\x02\u0579" +
		"\u0578\x03\x02\x02\x02\u057A\u057B\x03\x02\x02\x02\u057B\u0579\x03\x02" +
		"\x02\x02\u057B\u057C\x03\x02\x02\x02\u057C\u0583\x03\x02\x02\x02\u057D" +
		"\u057F\x05\x1A\x0E\x02\u057E\u0580\x07\xDD\x02\x02\u057F\u057E\x03\x02" +
		"\x02\x02\u0580\u0581\x03\x02\x02\x02\u0581\u057F\x03\x02\x02\x02\u0581" +
		"\u0582\x03\x02\x02\x02\u0582\u0584\x03\x02\x02\x02\u0583\u057D\x03\x02" +
		"\x02\x02\u0583\u0584\x03\x02\x02\x02\u0584\x89\x03\x02\x02\x02\u0585\u0587" +
		"\x07d\x02\x02\u0586\u0588\x07\xDD\x02\x02\u0587\u0586\x03\x02\x02\x02" +
		"\u0588\u0589\x03\x02\x02\x02\u0589\u0587\x03\x02\x02\x02\u0589\u058A\x03" +
		"\x02\x02\x02\u058A\u0591\x03\x02\x02\x02\u058B\u058D\x05\x1A\x0E\x02\u058C" +
		"\u058E\x07\xDD\x02\x02\u058D\u058C\x03\x02\x02\x02\u058E\u058F\x03\x02" +
		"\x02\x02\u058F\u058D\x03\x02\x02\x02\u058F\u0590\x03\x02\x02\x02\u0590" +
		"\u0592\x03\x02\x02\x02\u0591\u058B\x03\x02\x02\x02\u0591\u0592\x03\x02" +
		"\x02\x02\u0592\x8B\x03\x02\x02\x02\u0593\u0595\x07g\x02\x02\u0594\u0596" +
		"\x07\xDF\x02\x02\u0595\u0594\x03\x02\x02\x02\u0595\u0596\x03\x02\x02\x02" +
		"\u0596\u0597\x03\x02\x02\x02\u0597\u0599\x07\xC3\x02\x02\u0598\u059A\x07" +
		"\xDF\x02\x02\u0599\u0598\x03\x02\x02\x02\u0599\u059A\x03\x02\x02\x02\u059A" +
		"\u059B\x03\x02\x02\x02\u059B\u059D\x05\u0108\x85\x02\u059C\u059E\x07\xDF" +
		"\x02\x02\u059D\u059C\x03\x02\x02\x02\u059D\u059E\x03\x02\x02\x02\u059E" +
		"\u059F\x03\x02\x02\x02\u059F\u05A0\x07\xCE\x02\x02\u05A0\x8D\x03\x02\x02" +
		"\x02\u05A1\u05A2\x07h\x02\x02\u05A2\u05A3\x07\xDF\x02\x02\u05A3\u05A4" +
		"\x05\xDEp\x02\u05A4\x8F\x03\x02\x02\x02\u05A5\u05A6\x07j\x02\x02\u05A6" +
		"\u05A7\x07\xDF\x02\x02\u05A7\u05A8\x05\xDEp\x02\u05A8\u05A9\x07\xDF\x02" +
		"\x02\u05A9\u05AA\x07\n\x02\x02\u05AA\u05AB\x07\xDF\x02\x02\u05AB\u05AC" +
		"\x05\xDEp\x02\u05AC\x91\x03\x02\x02\x02\u05AD\u05AE\t\x07\x02\x02\u05AE" +
		"\u05B8\x07\xDF\x02\x02\u05AF\u05B0\x07L\x02\x02\u05B0\u05B1\x07\xDF\x02" +
		"\x02\u05B1\u05B3\x05\xDEp\x02\u05B2\u05B4\x07\xB7\x02\x02\u05B3\u05B2" +
		"\x03\x02\x02\x02\u05B3\u05B4\x03\x02\x02\x02\u05B4\u05B9\x03\x02\x02\x02" +
		"\u05B5\u05B6\x07\x8D\x02\x02\u05B6\u05B7\x07\xDF\x02\x02\u05B7\u05B9\x07" +
		"k\x02\x02\u05B8\u05AF\x03\x02\x02\x02\u05B8\u05B5\x03\x02\x02\x02\u05B9" +
		"\x93\x03\x02\x02\x02\u05BA\u05BB\x07q\x02\x02\u05BB\u05BC\x07\xDF\x02" +
		"\x02\u05BC\u05BD\x05\xDEp\x02\u05BD\u05BE\x07\xDF\x02\x02\u05BE\u05BF" +
		"\x07L\x02\x02\u05BF\u05C0\x07\xDF\x02\x02\u05C0\u05CB\x05\xDEp\x02\u05C1" +
		"\u05C3\x07\xDF\x02\x02\u05C2\u05C1\x03\x02\x02\x02\u05C2\u05C3\x03\x02" +
		"\x02\x02\u05C3\u05C4\x03\x02\x02\x02\u05C4\u05C6\x07\xB8\x02\x02\u05C5" +
		"\u05C7\x07\xDF\x02\x02\u05C6\u05C5\x03\x02\x02\x02\u05C6\u05C7\x03\x02" +
		"\x02\x02\u05C7\u05C8\x03\x02\x02\x02\u05C8\u05CA\x05\xDEp\x02\u05C9\u05C2" +
		"\x03\x02\x02\x02\u05CA\u05CD\x03\x02\x02\x02\u05CB\u05C9\x03\x02\x02\x02" +
		"\u05CB\u05CC\x03\x02\x02\x02\u05CC\x95\x03\x02\x02\x02\u05CD\u05CB\x03" +
		"\x02\x02\x02\u05CE\u05CF\x07q\x02\x02\u05CF\u05D0\x07\xDF\x02\x02\u05D0" +
		"\u05D1\x05\xDEp\x02\u05D1\u05D2\x07\xDF\x02\x02\u05D2\u05D3\x07K\x02\x02" +
		"\u05D3\u05D4\x07\xDF\x02\x02\u05D4\u05DF\x05\xDEp\x02\u05D5\u05D7\x07" +
		"\xDF\x02\x02\u05D6\u05D5\x03\x02\x02\x02\u05D6\u05D7\x03\x02\x02\x02\u05D7" +
		"\u05D8\x03\x02\x02\x02\u05D8\u05DA\x07\xB8\x02\x02\u05D9\u05DB\x07\xDF" +
		"\x02\x02\u05DA\u05D9\x03\x02\x02\x02\u05DA\u05DB\x03\x02\x02\x02\u05DB" +
		"\u05DC\x03\x02\x02\x02\u05DC\u05DE\x05\xDEp\x02\u05DD\u05D6\x03\x02\x02" +
		"\x02\u05DE\u05E1\x03\x02\x02\x02\u05DF\u05DD\x03\x02\x02\x02\u05DF\u05E0" +
		"\x03\x02\x02\x02\u05E0\x97\x03\x02\x02\x02\u05E1\u05DF\x03\x02\x02\x02" +
		"\u05E2\u05E3\x07t\x02\x02\u05E3\u05E4\x07\xDF\x02\x02\u05E4\u05E5\x05" +
		"\xDEp\x02\u05E5\u05E6\x07\xDF\x02\x02\u05E6\u05E7\x07G\x02\x02\u05E7\u05E8" +
		"\x07\xDF\x02\x02\u05E8\u05ED\t\b\x02\x02\u05E9\u05EA\x07\xDF\x02\x02\u05EA" +
		"\u05EB\x07\x03\x02\x02\u05EB\u05EC\x07\xDF\x02\x02\u05EC\u05EE\t\t\x02" +
		"\x02\u05ED\u05E9\x03\x02\x02\x02\u05ED\u05EE\x03\x02\x02\x02\u05EE\u05F1" +
		"\x03\x02\x02\x02\u05EF\u05F0\x07\xDF\x02\x02\u05F0\u05F2\t\n\x02\x02\u05F1" +
		"\u05EF\x03\x02\x02\x02\u05F1\u05F2\x03\x02\x02\x02\u05F2\u05F3\x03\x02" +
		"\x02\x02\u05F3\u05F4\x07\xDF\x02\x02\u05F4\u05F5\x07\n\x02\x02\u05F5\u05F6" +
		"\x07\xDF\x02\x02\u05F6\u0601\x05\xDEp\x02\u05F7\u05F8\x07\xDF\x02\x02" +
		"\u05F8\u05FA\x07Y\x02\x02\u05F9\u05FB\x07\xDF\x02\x02\u05FA\u05F9\x03" +
		"\x02\x02\x02\u05FA\u05FB\x03\x02\x02\x02\u05FB\u05FC\x03\x02\x02\x02\u05FC" +
		"\u05FE\x07\xBC\x02\x02\u05FD\u05FF\x07\xDF\x02\x02\u05FE\u05FD\x03\x02" +
		"\x02\x02\u05FE\u05FF\x03\x02\x02\x02\u05FF\u0600\x03\x02\x02\x02\u0600" +
		"\u0602\x05\xDEp\x02\u0601\u05F7\x03\x02\x02\x02\u0601\u0602\x03\x02\x02" +
		"\x02\u0602\x99\x03\x02\x02\x02\u0603\u0610\x05\x9CO\x02\u0604\u0606\x07" +
		"\xDF\x02\x02\u0605\u0604\x03\x02\x02\x02\u0605\u0606\x03\x02\x02\x02\u0606" +
		"\u0607\x03\x02\x02\x02\u0607\u0609\t\v\x02\x02\u0608\u060A\x07\xDF\x02" +
		"\x02\u0609\u0608\x03\x02\x02\x02\u0609\u060A\x03\x02\x02\x02\u060A\u060C" +
		"\x03\x02\x02\x02\u060B\u060D\x05\x9CO\x02\u060C\u060B\x03\x02\x02\x02" +
		"\u060C\u060D\x03\x02\x02\x02\u060D\u060F\x03\x02\x02\x02\u060E\u0605\x03" +
		"\x02\x02\x02\u060F\u0612\x03\x02\x02\x02\u0610\u060E\x03\x02\x02\x02\u0610" +
		"\u0611\x03\x02\x02\x02\u0611\u0625\x03\x02\x02\x02\u0612\u0610\x03\x02" +
		"\x02\x02\u0613\u0615\x05\x9CO\x02\u0614\u0613\x03\x02\x02\x02\u0614\u0615" +
		"\x03\x02\x02\x02\u0615\u0620\x03\x02\x02\x02\u0616\u0618\x07\xDF\x02\x02" +
		"\u0617\u0616\x03\x02\x02\x02\u0617\u0618\x03\x02\x02\x02\u0618\u0619\x03" +
		"\x02\x02\x02\u0619\u061B\t\v\x02\x02\u061A\u061C\x07\xDF\x02\x02\u061B" +
		"\u061A\x03\x02\x02\x02\u061B\u061C\x03\x02\x02\x02\u061C\u061E\x03\x02" +
		"\x02\x02\u061D\u061F\x05\x9CO\x02\u061E\u061D\x03\x02\x02\x02\u061E\u061F" +
		"\x03\x02\x02\x02\u061F\u0621\x03\x02\x02\x02\u0620\u0617\x03\x02\x02\x02" +
		"\u0621\u0622\x03\x02\x02\x02\u0622\u0620\x03\x02\x02\x02\u0622\u0623\x03" +
		"\x02\x02\x02\u0623\u0625\x03\x02\x02\x02\u0624\u0603\x03\x02\x02\x02\u0624" +
		"\u0614\x03\x02\x02\x02\u0625\x9B\x03\x02\x02\x02\u0626\u0634\t\f\x02\x02" +
		"\u0627\u0629\x07\xDF\x02\x02\u0628\u0627\x03\x02\x02\x02\u0628\u0629\x03" +
		"\x02\x02\x02\u0629\u062A\x03\x02\x02\x02\u062A\u062C\x07\xC3\x02\x02\u062B" +
		"\u062D\x07\xDF\x02\x02\u062C\u062B\x03\x02\x02\x02\u062C\u062D\x03\x02" +
		"\x02\x02\u062D\u062E\x03\x02\x02\x02\u062E\u0630\x05\u0108\x85\x02\u062F" +
		"\u0631\x07\xDF\x02\x02\u0630\u062F\x03\x02\x02\x02\u0630\u0631\x03\x02" +
		"\x02\x02\u0631\u0632\x03\x02\x02\x02\u0632\u0633\x07\xCE\x02\x02\u0633" +
		"\u0635\x03\x02\x02\x02\u0634\u0628\x03\x02\x02\x02\u0634\u0635\x03\x02" +
		"\x02\x02\u0635\u0638\x03\x02\x02\x02\u0636\u0638\x05\xDEp\x02\u0637\u0626" +
		"\x03\x02\x02\x02\u0637\u0636\x03\x02\x02\x02\u0638\x9D\x03\x02\x02\x02" +
		"\u0639\u063A\x07~\x02\x02\u063A\u063B\x07\xDF\x02\x02\u063B\u063D\x05" +
		"\xDEp\x02\u063C\u063E\x07\xDF\x02\x02\u063D\u063C\x03\x02\x02\x02\u063D" +
		"\u063E\x03\x02\x02\x02\u063E\u063F\x03\x02\x02\x02\u063F\u0644\x07\xB8" +
		"\x02\x02\u0640\u0642\x07\xDF\x02\x02\u0641\u0640\x03\x02\x02\x02\u0641" +
		"\u0642\x03\x02\x02\x02\u0642\u0643\x03\x02\x02\x02\u0643\u0645\x05\x9A" +
		"N\x02\u0644\u0641\x03\x02\x02\x02\u0644\u0645\x03\x02\x02\x02\u0645\x9F" +
		"\x03\x02\x02\x02\u0646\u0647\x05\u0134\x9B\x02\u0647\u0648\x07\xDF\x02" +
		"\x02\u0648\u064A\x03\x02\x02\x02\u0649\u0646\x03\x02\x02\x02\u0649\u064A" +
		"\x03\x02\x02\x02\u064A\u064D\x03\x02\x02\x02\u064B\u064C\x07\x9B\x02\x02" +
		"\u064C\u064E\x07\xDF\x02\x02\u064D\u064B\x03\x02\x02\x02\u064D\u064E\x03" +
		"\x02\x02\x02\u064E\u064F\x03\x02\x02\x02\u064F\u0650\x07\x80\x02\x02\u0650" +
		"\u0651\x07\xDF\x02\x02\u0651\u0653\x05\u0118\x8D\x02\u0652\u0654\x05\u0132" +
		"\x9A\x02\u0653\u0652\x03\x02\x02\x02\u0653\u0654\x03\x02\x02\x02\u0654" +
		"\u0659\x03\x02\x02\x02\u0655\u0657\x07\xDF\x02\x02\u0656\u0655\x03\x02" +
		"\x02\x02\u0656\u0657\x03\x02\x02\x02\u0657\u0658\x03\x02\x02\x02\u0658" +
		"\u065A\x05\u010E\x88\x02\u0659\u0656\x03\x02\x02\x02\u0659\u065A\x03\x02" +
		"\x02\x02\u065A\u065D\x03\x02\x02\x02\u065B\u065C\x07\xDF\x02\x02\u065C" +
		"\u065E\x05\u011A\x8E\x02\u065D\u065B\x03\x02\x02\x02\u065D\u065E\x03\x02" +
		"\x02\x02\u065E\u0660\x03\x02\x02\x02\u065F\u0661\x07\xDD\x02\x02\u0660" +
		"\u065F\x03\x02\x02\x02\u0661\u0662\x03\x02\x02\x02\u0662\u0660\x03\x02" +
		"\x02\x02\u0662\u0663\x03\x02\x02\x02\u0663\u066A\x03\x02\x02\x02\u0664" +
		"\u0666\x052\x1A\x02\u0665\u0667\x07\xDD\x02\x02\u0666\u0665\x03\x02\x02" +
		"\x02\u0667\u0668\x03\x02\x02\x02\u0668\u0666\x03\x02\x02\x02\u0668\u0669" +
		"\x03\x02\x02\x02\u0669\u066B\x03\x02\x02\x02\u066A\u0664\x03\x02\x02\x02" +
		"\u066A\u066B\x03\x02\x02\x02\u066B\u066C\x03\x02\x02\x02\u066C\u066D\x07" +
		"3\x02\x02\u066D\xA1\x03\x02\x02\x02\u066E\u066F\x05\u0134\x9B\x02\u066F" +
		"\u0670\x07\xDF\x02\x02\u0670\u0672\x03\x02\x02\x02\u0671\u066E\x03\x02" +
		"\x02\x02\u0671\u0672\x03\x02\x02\x02\u0672\u0675\x03\x02\x02\x02\u0673" +
		"\u0674\x07\x9B\x02\x02\u0674\u0676\x07\xDF\x02\x02\u0675\u0673\x03\x02" +
		"\x02\x02\u0675\u0676\x03\x02\x02\x02\u0676\u0677\x03\x02\x02\x02\u0677" +
		"\u0678\x07\x82\x02\x02\u0678\u0679\x07\xDF\x02\x02\u0679\u067E\x05\u0118" +
		"\x8D\x02\u067A\u067C\x07\xDF\x02\x02\u067B\u067A\x03\x02\x02\x02\u067B" +
		"\u067C\x03\x02\x02\x02\u067C\u067D\x03\x02\x02\x02\u067D\u067F\x05\u010E" +
		"\x88\x02\u067E\u067B\x03\x02\x02\x02\u067E\u067F\x03\x02\x02\x02\u067F" +
		"\u0681\x03\x02\x02\x02\u0680\u0682\x07\xDD\x02\x02\u0681\u0680\x03\x02" +
		"\x02\x02\u0682\u0683\x03\x02\x02\x02\u0683\u0681\x03\x02\x02\x02\u0683" +
		"\u0684\x03\x02\x02\x02\u0684\u068B\x03\x02\x02\x02\u0685\u0687\x052\x1A" +
		"\x02\u0686\u0688\x07\xDD\x02\x02\u0687\u0686\x03\x02\x02\x02\u0688\u0689" +
		"\x03\x02\x02\x02\u0689\u0687\x03\x02\x02\x02\u0689\u068A\x03\x02\x02\x02" +
		"\u068A\u068C\x03\x02\x02\x02\u068B\u0685\x03\x02\x02\x02\u068B\u068C\x03" +
		"\x02\x02\x02\u068C\u068D\x03\x02\x02\x02\u068D\u068E\x073\x02\x02\u068E" +
		"\xA3\x03\x02\x02\x02\u068F\u0690\x05\u0134\x9B\x02\u0690\u0691\x07\xDF" +
		"\x02\x02\u0691\u0693\x03\x02\x02\x02\u0692\u068F\x03\x02\x02\x02\u0692" +
		"\u0693\x03\x02\x02\x02\u0693\u0696\x03\x02\x02\x02\u0694\u0695\x07\x9B" +
		"\x02\x02\u0695\u0697\x07\xDF\x02\x02\u0696\u0694\x03\x02\x02\x02\u0696" +
		"\u0697\x03\x02\x02\x02\u0697\u0698\x03\x02\x02\x02\u0698\u0699\x07\x81" +
		"\x02\x02\u0699\u069A\x07\xDF\x02\x02\u069A\u069F\x05\u0118\x8D\x02\u069B" +
		"\u069D\x07\xDF\x02\x02\u069C\u069B\x03\x02\x02\x02\u069C\u069D\x03\x02" +
		"\x02\x02\u069D\u069E\x03\x02\x02\x02\u069E\u06A0\x05\u010E\x88\x02\u069F" +
		"\u069C\x03\x02\x02\x02\u069F\u06A0\x03\x02\x02\x02\u06A0\u06A2\x03\x02" +
		"\x02\x02\u06A1\u06A3\x07\xDD\x02\x02\u06A2\u06A1\x03\x02\x02\x02\u06A3" +
		"\u06A4\x03\x02\x02\x02\u06A4\u06A2\x03\x02\x02\x02\u06A4\u06A5\x03\x02" +
		"\x02\x02\u06A5\u06AC\x03\x02\x02\x02\u06A6\u06A8\x052\x1A\x02\u06A7\u06A9" +
		"\x07\xDD\x02\x02\u06A8\u06A7\x03\x02\x02\x02\u06A9\u06AA\x03\x02\x02\x02" +
		"\u06AA\u06A8\x03\x02\x02\x02\u06AA\u06AB\x03\x02\x02\x02\u06AB\u06AD\x03" +
		"\x02\x02\x02\u06AC\u06A6\x03\x02\x02\x02\u06AC\u06AD\x03\x02\x02\x02\u06AD" +
		"\u06AE\x03\x02\x02\x02\u06AE\u06AF\x073\x02\x02\u06AF\xA5\x03\x02\x02" +
		"\x02\u06B0\u06B1\x07\x84\x02\x02\u06B1\u06B2\x07\xDF\x02\x02\u06B2\u06B4" +
		"\x05\xDEp\x02\u06B3\u06B5\x07\xDF\x02\x02\u06B4\u06B3\x03\x02\x02\x02" +
		"\u06B4\u06B5\x03\x02\x02\x02\u06B5\u06B6\x03\x02\x02\x02\u06B6\u06B8\x07" +
		"\xB8\x02\x02\u06B7\u06B9\x07\xDF\x02\x02\u06B8\u06B7\x03\x02\x02\x02\u06B8" +
		"\u06B9\x03\x02\x02\x02\u06B9\u06BB\x03\x02\x02\x02\u06BA\u06BC\x05\xDE" +
		"p\x02\u06BB\u06BA\x03\x02\x02\x02\u06BB\u06BC\x03\x02\x02\x02\u06BC\u06BE" +
		"\x03\x02\x02\x02\u06BD\u06BF\x07\xDF\x02\x02\u06BE\u06BD\x03\x02\x02\x02" +
		"\u06BE\u06BF\x03\x02\x02\x02\u06BF\u06C0\x03\x02\x02\x02\u06C0\u06C2\x07" +
		"\xB8\x02\x02\u06C1\u06C3\x07\xDF\x02\x02\u06C2\u06C1\x03\x02\x02\x02\u06C2" +
		"\u06C3\x03\x02\x02\x02\u06C3\u06C4\x03\x02\x02\x02\u06C4\u06C5\x05\xDE" +
		"p\x02\u06C5\xA7\x03\x02\x02\x02\u06C6\u06C7\x07\x87\x02\x02\u06C7\u06C8" +
		"\x07\xDF\x02\x02\u06C8\u06D7\x05\u0118\x8D\x02\u06C9\u06CB\x07\xDF\x02" +
		"\x02\u06CA\u06C9\x03\x02\x02\x02\u06CA\u06CB\x03\x02\x02\x02\u06CB\u06CC" +
		"\x03\x02\x02\x02\u06CC\u06CE\x07\xC3\x02\x02\u06CD\u06CF\x07\xDF\x02\x02" +
		"\u06CE\u06CD\x03\x02\x02\x02\u06CE\u06CF\x03\x02\x02\x02\u06CF\u06D4\x03" +
		"\x02\x02\x02\u06D0\u06D2\x05\u0108\x85\x02\u06D1\u06D3\x07\xDF\x02\x02" +
		"\u06D2\u06D1\x03\x02\x02\x02\u06D2\u06D3\x03\x02\x02\x02\u06D3\u06D5\x03" +
		"\x02\x02\x02\u06D4\u06D0\x03\x02\x02\x02\u06D4\u06D5\x03\x02\x02\x02\u06D5" +
		"\u06D6\x03\x02\x02\x02\u06D6\u06D8\x07\xCE\x02\x02\u06D7\u06CA\x03\x02" +
		"\x02\x02\u06D7\u06D8\x03\x02\x02\x02\u06D8\xA9\x03\x02\x02\x02\u06D9\u06DC" +
		"\x07\x86\x02\x02\u06DA\u06DB\x07\xDF\x02\x02\u06DB\u06DD\x05\xDEp\x02" +
		"\u06DC\u06DA\x03\x02\x02\x02\u06DC\u06DD\x03\x02\x02\x02\u06DD\xAB\x03" +
		"\x02\x02\x02\u06DE\u06DF\x07\x8A\x02\x02\u06DF\u06E2\x07\xDF\x02\x02\u06E0" +
		"\u06E1\x07}\x02\x02\u06E1\u06E3\x07\xDF\x02\x02\u06E2\u06E0\x03\x02\x02" +
		"\x02\u06E2\u06E3\x03\x02\x02\x02\u06E3\u06E4\x03\x02\x02\x02\u06E4\u06EF" +
		"\x05\xAEX\x02\u06E5\u06E7\x07\xDF\x02\x02\u06E6\u06E5\x03\x02\x02\x02" +
		"\u06E6\u06E7\x03\x02\x02\x02\u06E7\u06E8\x03\x02\x02\x02\u06E8\u06EA\x07" +
		"\xB8\x02\x02\u06E9\u06EB\x07\xDF\x02\x02\u06EA\u06E9\x03\x02\x02\x02\u06EA" +
		"\u06EB\x03\x02\x02\x02\u06EB\u06EC\x03\x02\x02\x02\u06EC\u06EE\x05\xAE" +
		"X\x02\u06ED\u06E6\x03\x02\x02\x02\u06EE\u06F1\x03\x02\x02\x02\u06EF\u06ED" +
		"\x03\x02\x02\x02\u06EF\u06F0\x03\x02\x02\x02\u06F0\xAD\x03\x02\x02\x02" +
		"\u06F1\u06EF\x03\x02\x02\x02\u06F2\u06F4\x05\xFA~\x02\u06F3\u06F5\x07" +
		"\xDF\x02\x02\u06F4\u06F3\x03\x02\x02\x02\u06F4\u06F5\x03\x02\x02\x02\u06F5" +
		"\u06F6\x03\x02\x02\x02\u06F6\u06F8\x07\xC3\x02\x02\u06F7\u06F9\x07\xDF" +
		"\x02\x02\u06F8\u06F7\x03\x02\x02\x02\u06F8\u06F9\x03\x02\x02\x02\u06F9" +
		"\u06FA\x03\x02\x02\x02\u06FA\u06FC\x05\u0114\x8B\x02\u06FB\u06FD\x07\xDF" +
		"\x02\x02\u06FC\u06FB\x03\x02\x02\x02\u06FC\u06FD\x03\x02\x02\x02\u06FD" +
		"\u06FE\x03\x02\x02\x02\u06FE\u0701\x07\xCE\x02\x02\u06FF\u0700\x07\xDF" +
		"\x02\x02\u0700\u0702\x05\u011A\x8E\x02\u0701\u06FF\x03\x02\x02\x02\u0701" +
		"\u0702\x03\x02\x02\x02\u0702\xAF\x03\x02\x02\x02\u0703\u0704\x07\x8C\x02" +
		"\x02\u0704\xB1\x03\x02\x02\x02\u0705\u070B\x07\x8D\x02\x02\u0706\u0709" +
		"\x07\xDF\x02\x02\u0707\u070A\x07k\x02\x02\u0708\u070A\x05\u0118\x8D\x02" +
		"\u0709\u0707\x03\x02\x02\x02\u0709\u0708\x03\x02\x02\x02\u070A\u070C\x03" +
		"\x02\x02\x02\u070B\u0706\x03\x02\x02\x02\u070B\u070C\x03\x02\x02\x02\u070C" +
		"\xB3\x03\x02\x02\x02\u070D\u070E\x07\x8E\x02\x02\u070E\xB5\x03\x02\x02" +
		"\x02\u070F\u0710\x07\x8F\x02\x02\u0710\u0711\x07\xDF\x02\x02\u0711\u0712" +
		"\x05\xDEp\x02\u0712\xB7\x03\x02\x02\x02\u0713\u0714\x07\x90\x02\x02\u0714" +
		"\u0715\x07\xDF\x02\x02\u0715\u0717\x05\xFA~\x02\u0716\u0718\x07\xDF\x02" +
		"\x02\u0717\u0716\x03\x02\x02\x02\u0717\u0718\x03\x02\x02\x02\u0718\u0719" +
		"\x03\x02\x02\x02\u0719\u071B\x07\xBC\x02\x02\u071A\u071C\x07\xDF\x02\x02" +
		"\u071B\u071A\x03\x02\x02\x02\u071B\u071C\x03\x02\x02\x02\u071C\u071D\x03" +
		"\x02\x02\x02\u071D\u071E\x05\xDEp\x02\u071E\xB9\x03\x02\x02\x02\u071F" +
		"\u0720\x07\x91\x02\x02\u0720\u0721\x07\xDF\x02\x02\u0721\u0723\x05\xDE" +
		"p\x02\u0722\u0724\x07\xDF\x02\x02\u0723\u0722\x03\x02\x02\x02\u0723\u0724" +
		"\x03\x02\x02\x02\u0724\u0725\x03\x02\x02\x02\u0725\u0727\x07\xB8\x02\x02" +
		"\u0726\u0728\x07\xDF\x02\x02\u0727\u0726\x03\x02\x02\x02\u0727\u0728\x03" +
		"\x02\x02\x02\u0728\u0729\x03\x02\x02\x02\u0729\u072A\x05\xDEp\x02\u072A" +
		"\xBB\x03\x02\x02\x02\u072B\u072C\x07\x92\x02\x02\u072C\u072D\x07\xDF\x02" +
		"\x02\u072D\u072F\x05\xDEp\x02\u072E\u0730\x07\xDF\x02\x02\u072F\u072E" +
		"\x03\x02\x02\x02\u072F\u0730\x03\x02\x02\x02\u0730\u0731\x03\x02\x02\x02" +
		"\u0731\u0733\x07\xB8\x02\x02\u0732\u0734\x07\xDF\x02\x02\u0733\u0732\x03" +
		"\x02\x02\x02\u0733\u0734\x03\x02\x02\x02\u0734\u0735\x03\x02\x02\x02\u0735" +
		"\u0737\x05\xDEp\x02\u0736\u0738\x07\xDF\x02\x02\u0737\u0736\x03\x02\x02" +
		"\x02\u0737\u0738\x03\x02\x02\x02\u0738\u0739\x03\x02\x02\x02\u0739\u073B" +
		"\x07\xB8\x02\x02\u073A\u073C\x07\xDF\x02\x02\u073B\u073A\x03\x02\x02\x02" +
		"\u073B\u073C\x03\x02\x02\x02\u073C\u073D\x03\x02\x02\x02\u073D\u073F\x05" +
		"\xDEp\x02\u073E\u0740\x07\xDF\x02\x02\u073F\u073E\x03\x02\x02\x02\u073F" +
		"\u0740\x03\x02\x02\x02\u0740\u0741\x03\x02\x02\x02\u0741\u0743\x07\xB8" +
		"\x02\x02\u0742\u0744\x07\xDF\x02\x02\u0743\u0742\x03\x02\x02\x02\u0743" +
		"\u0744\x03\x02\x02\x02\u0744\u0745\x03\x02\x02\x02\u0745\u0746\x05\xDE" +
		"p\x02\u0746\xBD\x03\x02\x02\x02\u0747\u0748\x07\x93\x02\x02\u0748\u0749" +
		"\x07\xDF\x02\x02\u0749\u074B\x05\xDEp\x02\u074A\u074C\x07\xDF\x02\x02" +
		"\u074B\u074A\x03\x02\x02\x02\u074B\u074C\x03\x02\x02\x02\u074C\u074D\x03" +
		"\x02\x02\x02\u074D\u074F\x07\xB8\x02\x02\u074E\u0750\x07\xDF\x02\x02\u074F" +
		"\u074E\x03\x02\x02\x02\u074F\u0750\x03\x02\x02\x02\u0750\u0751\x03\x02" +
		"\x02\x02\u0751\u0752\x05\xDEp\x02\u0752\xBF\x03\x02\x02\x02\u0753\u0754" +
		"\x07\x94\x02\x02\u0754\u0755\x07\xDF\x02\x02\u0755\u0756\x07\x14\x02\x02" +
		"\u0756\u0757\x07\xDF\x02\x02\u0757\u0759\x05\xDEp\x02\u0758\u075A\x07" +
		"\xDD\x02\x02\u0759\u0758\x03\x02\x02\x02\u075A\u075B\x03\x02\x02\x02\u075B" +
		"\u0759\x03\x02\x02\x02\u075B\u075C\x03\x02\x02\x02\u075C\u0760\x03\x02" +
		"\x02\x02\u075D\u075F\x05\xC2b\x02\u075E\u075D\x03\x02\x02\x02\u075F\u0762" +
		"\x03\x02\x02\x02\u0760\u075E\x03\x02\x02\x02\u0760\u0761\x03\x02\x02\x02" +
		"\u0761\u0764\x03\x02\x02\x02\u0762\u0760\x03\x02\x02\x02\u0763\u0765\x07" +
		"\xDF\x02\x02\u0764\u0763\x03\x02\x02\x02\u0764\u0765\x03\x02\x02\x02\u0765" +
		"\u0766\x03\x02\x02\x02\u0766\u0767\x074\x02\x02\u0767\xC1\x03\x02\x02" +
		"\x02\u0768\u0769\x07\x14\x02\x02\u0769\u076A\x07\xDF\x02\x02\u076A\u076C" +
		"\x05\xC4c\x02\u076B\u076D\x07\xDF\x02\x02\u076C\u076B\x03\x02\x02\x02" +
		"\u076C\u076D\x03\x02\x02\x02\u076D\u077C\x03\x02\x02\x02\u076E\u0770\x07" +
		"\xB7\x02\x02\u076F\u076E\x03\x02\x02\x02\u076F\u0770\x03\x02\x02\x02\u0770" +
		"\u0774\x03\x02\x02\x02\u0771\u0773\x07\xDD\x02\x02\u0772\u0771\x03\x02" +
		"\x02\x02\u0773\u0776\x03\x02\x02\x02\u0774\u0772\x03\x02\x02\x02\u0774" +
		"\u0775\x03\x02\x02\x02\u0775\u077D\x03\x02\x02\x02\u0776\u0774\x03\x02" +
		"\x02\x02\u0777\u0779\x07\xDD\x02\x02\u0778\u0777\x03\x02\x02\x02\u0779" +
		"\u077A\x03\x02\x02\x02\u077A\u0778\x03\x02\x02\x02\u077A\u077B\x03\x02" +
		"\x02\x02\u077B\u077D\x03\x02\x02\x02\u077C\u076F\x03\x02\x02\x02\u077C" +
		"\u0778\x03\x02\x02\x02\u077D\u0784\x03\x02\x02\x02\u077E\u0780\x052\x1A" +
		"\x02\u077F\u0781\x07\xDD\x02\x02\u0780\u077F\x03\x02\x02\x02\u0781\u0782" +
		"\x03\x02\x02\x02\u0782\u0780\x03\x02\x02\x02\u0782\u0783\x03\x02\x02\x02" +
		"\u0783\u0785\x03\x02\x02\x02\u0784\u077E\x03\x02\x02\x02\u0784\u0785\x03" +
		"\x02\x02\x02\u0785\xC3\x03\x02\x02\x02\u0786\u0796\x07.\x02\x02\u0787" +
		"\u0792\x05\xC6d\x02\u0788\u078A\x07\xDF\x02\x02\u0789\u0788\x03\x02\x02" +
		"\x02\u0789\u078A\x03\x02\x02\x02\u078A\u078B\x03\x02\x02\x02\u078B\u078D" +
		"\x07\xB8\x02\x02\u078C\u078E\x07\xDF\x02\x02\u078D\u078C\x03\x02\x02\x02" +
		"\u078D\u078E\x03\x02\x02\x02\u078E\u078F\x03\x02\x02\x02\u078F\u0791\x05" +
		"\xC6d\x02\u0790\u0789\x03\x02\x02\x02\u0791\u0794\x03\x02\x02\x02\u0792" +
		"\u0790\x03\x02\x02\x02\u0792\u0793\x03\x02\x02\x02\u0793\u0796\x03\x02" +
		"\x02\x02\u0794\u0792\x03\x02\x02\x02\u0795\u0786\x03\x02\x02\x02\u0795" +
		"\u0787\x03\x02\x02\x02\u0796\xC5\x03\x02\x02\x02\u0797\u0799\x07R\x02" +
		"\x02\u0798\u079A\x07\xDF\x02\x02\u0799\u0798\x03\x02\x02\x02\u0799\u079A" +
		"\x03\x02\x02\x02\u079A\u079B\x03\x02\x02\x02\u079B\u079D\x05\u0120\x91" +
		"\x02\u079C\u079E\x07\xDF\x02\x02\u079D\u079C\x03\x02\x02\x02\u079D\u079E" +
		"\x03\x02\x02\x02\u079E\u079F\x03\x02\x02\x02\u079F\u07A0\x05\xDEp\x02" +
		"\u07A0\u07A9\x03\x02\x02\x02\u07A1\u07A9\x05\xDEp\x02\u07A2\u07A3\x05" +
		"\xDEp\x02\u07A3\u07A4\x07\xDF\x02\x02\u07A4\u07A5\x07\xA4\x02\x02\u07A5" +
		"\u07A6\x07\xDF\x02\x02\u07A6\u07A7\x05\xDEp\x02\u07A7\u07A9\x03\x02\x02" +
		"\x02\u07A8\u0797\x03\x02\x02\x02\u07A8\u07A1\x03\x02\x02";
	private static readonly _serializedATNSegment4: string =
		"\x02\u07A8\u07A2\x03\x02\x02\x02\u07A9\xC7\x03\x02\x02\x02\u07AA\u07AB" +
		"\x07\x95\x02\x02\u07AB\u07AC\x07\xDF\x02\x02\u07AC\u07B5\x05\xDEp\x02" +
		"\u07AD\u07AF\x07\xDF\x02\x02\u07AE\u07AD\x03\x02\x02\x02\u07AE\u07AF\x03" +
		"\x02\x02\x02\u07AF\u07B0\x03\x02\x02\x02\u07B0\u07B2\x07\xB8\x02\x02\u07B1" +
		"\u07B3\x07\xDF\x02\x02\u07B2\u07B1\x03\x02\x02\x02\u07B2\u07B3\x03\x02" +
		"\x02\x02\u07B3\u07B4\x03\x02\x02\x02\u07B4\u07B6\x05\xDEp\x02\u07B5\u07AE" +
		"\x03\x02\x02\x02\u07B5\u07B6\x03\x02\x02\x02\u07B6\xC9\x03\x02\x02\x02" +
		"\u07B7\u07B8\x07\x97\x02\x02\u07B8\u07B9\x07\xDF\x02\x02\u07B9\u07BB\x05" +
		"\xDEp\x02\u07BA\u07BC\x07\xDF\x02\x02\u07BB\u07BA\x03\x02\x02\x02\u07BB" +
		"\u07BC\x03\x02\x02\x02\u07BC\u07BD\x03\x02\x02\x02\u07BD\u07BF\x07\xB8" +
		"\x02\x02\u07BE\u07C0\x07\xDF\x02\x02\u07BF\u07BE\x03\x02\x02\x02\u07BF" +
		"\u07C0\x03\x02\x02\x02\u07C0\u07C1\x03\x02\x02\x02\u07C1\u07C2\x05\xDE" +
		"p\x02\u07C2\xCB\x03\x02\x02\x02\u07C3\u07C4\x07\x96\x02\x02\u07C4\u07C5" +
		"\x07\xDF\x02\x02\u07C5\u07C7\x05\xFA~\x02\u07C6\u07C8\x07\xDF\x02\x02" +
		"\u07C7\u07C6\x03\x02\x02\x02\u07C7\u07C8\x03\x02\x02\x02\u07C8\u07C9\x03" +
		"\x02\x02\x02\u07C9\u07CB\x07\xBC\x02\x02\u07CA\u07CC\x07\xDF\x02\x02\u07CB" +
		"\u07CA\x03\x02\x02\x02\u07CB\u07CC\x03\x02\x02\x02\u07CC\u07CD\x03\x02" +
		"\x02\x02\u07CD\u07CE\x05\xDEp\x02\u07CE\xCD\x03\x02\x02\x02\u07CF\u07D0" +
		"\x07\x9D\x02\x02\u07D0\xCF\x03\x02\x02\x02\u07D1\u07D2\x05\u0134\x9B\x02" +
		"\u07D2\u07D3\x07\xDF\x02\x02\u07D3\u07D5\x03\x02\x02\x02\u07D4\u07D1\x03" +
		"\x02\x02\x02\u07D4\u07D5\x03\x02\x02\x02\u07D5\u07D8\x03\x02\x02\x02\u07D6" +
		"\u07D7\x07\x9B\x02\x02\u07D7\u07D9\x07\xDF\x02\x02\u07D8\u07D6\x03\x02" +
		"\x02\x02\u07D8\u07D9\x03\x02\x02\x02\u07D9\u07DA\x03\x02\x02\x02\u07DA" +
		"\u07DB\x07\x9F\x02\x02\u07DB\u07DC\x07\xDF\x02\x02\u07DC\u07E1\x05\u0118" +
		"\x8D\x02\u07DD\u07DF\x07\xDF\x02\x02\u07DE\u07DD\x03\x02\x02\x02\u07DE" +
		"\u07DF\x03\x02\x02\x02\u07DF\u07E0\x03\x02\x02\x02\u07E0\u07E2\x05\u010E" +
		"\x88\x02\u07E1\u07DE\x03\x02\x02\x02\u07E1\u07E2\x03\x02\x02\x02\u07E2" +
		"\u07E4\x03\x02\x02\x02\u07E3\u07E5\x07\xDD\x02\x02\u07E4\u07E3\x03\x02" +
		"\x02\x02\u07E5\u07E6\x03\x02\x02\x02\u07E6\u07E4\x03\x02\x02\x02\u07E6" +
		"\u07E7\x03\x02\x02\x02\u07E7\u07EE\x03\x02\x02\x02\u07E8\u07EA\x052\x1A" +
		"\x02\u07E9\u07EB\x07\xDD\x02\x02\u07EA\u07E9\x03\x02\x02\x02\u07EB\u07EC" +
		"\x03\x02\x02\x02\u07EC\u07EA\x03\x02\x02\x02\u07EC\u07ED\x03\x02\x02\x02" +
		"\u07ED\u07EF\x03\x02\x02\x02\u07EE\u07E8\x03\x02\x02\x02\u07EE\u07EF\x03" +
		"\x02\x02\x02\u07EF\u07F0\x03\x02\x02\x02\u07F0\u07F1\x075\x02\x02\u07F1" +
		"\xD1\x03\x02\x02\x02\u07F2\u07F4\x07\xA3\x02\x02\u07F3\u07F5\x07\xDF\x02" +
		"\x02\u07F4\u07F3\x03\x02\x02\x02\u07F4\u07F5\x03\x02\x02\x02\u07F5\u07F6" +
		"\x03\x02\x02\x02\u07F6\u07F8\x07\xBC\x02\x02\u07F7\u07F9\x07\xDF\x02\x02" +
		"\u07F8\u07F7\x03\x02\x02\x02\u07F8\u07F9\x03\x02\x02\x02\u07F9\u07FA\x03" +
		"\x02\x02\x02\u07FA\u07FB\x05\xDEp\x02\u07FB\xD3\x03\x02\x02\x02\u07FC" +
		"\u07FD\x05\u0134\x9B\x02\u07FD\u07FE\x07\xDF\x02\x02\u07FE\u0800\x03\x02" +
		"\x02\x02\u07FF\u07FC\x03\x02\x02\x02\u07FF\u0800\x03\x02\x02\x02\u0800" +
		"\u0801\x03\x02\x02\x02\u0801\u0802\x07\xA6\x02\x02\u0802\u0803\x07\xDF" +
		"\x02\x02\u0803\u0805\x05\u0118\x8D\x02\u0804\u0806\x07\xDD\x02\x02\u0805" +
		"\u0804\x03\x02\x02\x02\u0806\u0807\x03\x02\x02\x02\u0807\u0805\x03\x02" +
		"\x02\x02\u0807\u0808\x03\x02\x02\x02\u0808\u080C\x03\x02\x02\x02\u0809" +
		"\u080B\x05\xD6l\x02\u080A\u0809\x03\x02\x02\x02\u080B\u080E\x03\x02\x02" +
		"\x02\u080C\u080A\x03\x02\x02\x02\u080C\u080D\x03\x02\x02\x02\u080D\u080F" +
		"\x03\x02\x02\x02\u080E\u080C\x03\x02\x02\x02\u080F\u0810\x076\x02\x02" +
		"\u0810\xD5\x03\x02\x02\x02\u0811\u0820\x05\u0118\x8D\x02\u0812\u0814\x07" +
		"\xDF\x02\x02\u0813\u0812\x03\x02\x02\x02\u0813\u0814\x03\x02\x02\x02\u0814" +
		"\u0815\x03\x02\x02\x02\u0815\u081A\x07\xC3\x02\x02\u0816\u0818\x07\xDF" +
		"\x02\x02\u0817\u0816\x03\x02\x02\x02\u0817\u0818\x03\x02\x02\x02\u0818" +
		"\u0819\x03\x02\x02\x02\u0819\u081B\x05\u0114\x8B\x02\u081A\u0817\x03\x02" +
		"\x02\x02\u081A\u081B\x03\x02\x02\x02\u081B\u081D\x03\x02\x02\x02\u081C" +
		"\u081E\x07\xDF\x02\x02\u081D\u081C\x03\x02\x02\x02\u081D\u081E\x03\x02" +
		"\x02\x02\u081E\u081F\x03\x02\x02\x02\u081F\u0821\x07\xCE\x02\x02\u0820" +
		"\u0813\x03\x02\x02\x02\u0820\u0821\x03\x02\x02\x02\u0821\u0824\x03\x02" +
		"\x02\x02\u0822\u0823\x07\xDF\x02\x02\u0823\u0825\x05\u011A\x8E\x02\u0824" +
		"\u0822\x03\x02\x02\x02\u0824\u0825\x03\x02\x02\x02\u0825\u0827\x03\x02" +
		"\x02\x02\u0826\u0828\x07\xDD\x02\x02\u0827\u0826\x03\x02\x02\x02\u0828" +
		"\u0829\x03\x02\x02\x02\u0829\u0827\x03\x02\x02\x02\u0829\u082A\x03\x02" +
		"\x02\x02\u082A\xD7\x03\x02\x02\x02\u082B\u082C\x07\xA7\x02\x02\u082C\u082D" +
		"\x07\xDF\x02\x02\u082D\u0832\x05\xDEp\x02\u082E\u082F\x07\xDF\x02\x02" +
		"\u082F\u0830\x07R\x02\x02\u0830\u0831\x07\xDF\x02\x02\u0831\u0833\x05" +
		"\u0130\x99\x02\u0832\u082E\x03\x02\x02\x02\u0832\u0833\x03\x02\x02\x02" +
		"\u0833\xD9\x03\x02\x02\x02\u0834\u0835\x07\xA8\x02\x02\u0835\u0836\x07" +
		"\xDF\x02\x02\u0836\u0837\x05\xDEp\x02\u0837\xDB\x03\x02\x02\x02\u0838" +
		"\u0839\x07\xA9\x02\x02\u0839\u083A\x07\xDF\x02\x02\u083A\u0849\x05\xDE" +
		"p\x02\u083B\u083D\x07\xDF\x02\x02\u083C\u083B\x03\x02\x02\x02\u083C\u083D" +
		"\x03\x02\x02\x02\u083D\u083E\x03\x02\x02\x02\u083E\u0840\x07\xB8\x02\x02" +
		"\u083F\u0841\x07\xDF\x02\x02\u0840\u083F\x03\x02\x02\x02\u0840\u0841\x03" +
		"\x02\x02\x02\u0841\u0842\x03\x02\x02\x02\u0842\u0847\x05\xDEp\x02\u0843" +
		"\u0844\x07\xDF\x02\x02\u0844\u0845\x07\xA4\x02\x02\u0845\u0846\x07\xDF" +
		"\x02\x02\u0846\u0848\x05\xDEp\x02\u0847\u0843\x03\x02\x02\x02\u0847\u0848" +
		"\x03\x02\x02\x02\u0848\u084A\x03\x02\x02\x02\u0849\u083C\x03\x02\x02\x02" +
		"\u0849\u084A\x03\x02\x02\x02\u084A\xDD\x03\x02\x02\x02\u084B\u084C\bp" +
		"\x01\x02\u084C\u0891\x05\u012A\x96\x02\u084D\u084F\x07\xC3\x02\x02\u084E" +
		"\u0850\x07\xDF\x02\x02\u084F\u084E\x03\x02\x02\x02\u084F\u0850\x03\x02" +
		"\x02\x02\u0850\u0851\x03\x02\x02\x02\u0851\u085C\x05\xDEp\x02\u0852\u0854" +
		"\x07\xDF\x02\x02\u0853\u0852\x03\x02\x02\x02\u0853\u0854\x03\x02\x02\x02" +
		"\u0854\u0855\x03\x02\x02\x02\u0855\u0857\x07\xB8\x02\x02\u0856\u0858\x07" +
		"\xDF\x02\x02\u0857\u0856\x03\x02\x02\x02\u0857\u0858\x03\x02\x02\x02\u0858" +
		"\u0859\x03\x02\x02\x02\u0859\u085B\x05\xDEp\x02\u085A\u0853\x03\x02\x02" +
		"\x02\u085B\u085E\x03\x02\x02\x02\u085C\u085A\x03\x02\x02\x02\u085C\u085D" +
		"\x03\x02\x02\x02\u085D\u0860\x03\x02\x02\x02\u085E\u085C\x03\x02\x02\x02" +
		"\u085F\u0861\x07\xDF\x02\x02\u0860\u085F\x03\x02\x02\x02\u0860\u0861\x03" +
		"\x02\x02\x02\u0861\u0862\x03\x02\x02\x02\u0862\u0863\x07\xCE\x02\x02\u0863" +
		"\u0891\x03\x02\x02\x02\u0864\u0865\x07l\x02\x02\u0865\u0866\x07\xDF\x02" +
		"\x02\u0866\u0891\x05\xDEp\x1F\u0867\u0891\x05\xD8m\x02\u0868\u0869\x07" +
		"\x04\x02\x02\u0869\u086A\x07\xDF\x02\x02\u086A\u0891\x05\xDEp\x1D\u086B" +
		"\u086D\x05\xFA~\x02\u086C\u086E\x07\xDF\x02\x02\u086D\u086C\x03\x02\x02" +
		"\x02\u086D\u086E\x03\x02\x02\x02\u086E\u086F\x03\x02\x02\x02\u086F\u0871" +
		"\x07\xB5\x02\x02\u0870\u0872\x07\xDF\x02\x02\u0871\u0870\x03\x02\x02\x02" +
		"\u0871\u0872\x03\x02\x02\x02\u0872\u0873\x03\x02\x02\x02\u0873\u0874\x05" +
		"\xDEp\x1C\u0874\u0891\x03\x02\x02\x02\u0875\u0877\x07\xC5\x02\x02\u0876" +
		"\u0878\x07\xDF\x02\x02\u0877\u0876\x03\x02\x02\x02\u0877\u0878\x03\x02" +
		"\x02\x02\u0878\u0879\x03\x02\x02\x02\u0879\u0891\x05\xDEp\x1A\u087A\u087C" +
		"\x07\xCA\x02\x02\u087B\u087D\x07\xDF\x02\x02\u087C\u087B\x03\x02\x02\x02" +
		"\u087C\u087D\x03\x02\x02\x02\u087D\u087E\x03\x02\x02\x02\u087E\u0891\x05" +
		"\xDEp\x19\u087F\u088C\x07m\x02\x02\u0880\u0881\x07\xDF\x02\x02\u0881\u088D" +
		"\x05\xDEp\x02\u0882\u0884\x07\xC3\x02\x02\u0883\u0885\x07\xDF\x02\x02" +
		"\u0884\u0883\x03\x02\x02\x02\u0884\u0885\x03\x02\x02\x02\u0885\u0886\x03" +
		"\x02\x02\x02\u0886\u0888\x05\xDEp\x02\u0887\u0889\x07\xDF\x02\x02\u0888" +
		"\u0887\x03\x02\x02\x02\u0888\u0889\x03\x02\x02\x02\u0889\u088A\x03\x02" +
		"\x02\x02\u088A\u088B\x07\xCE\x02\x02\u088B\u088D\x03\x02\x02\x02\u088C" +
		"\u0880\x03\x02\x02\x02\u088C\u0882\x03\x02\x02\x02\u088D\u0891\x03\x02" +
		"\x02\x02\u088E\u0891\x05\xFA~\x02\u088F\u0891\x05\x8CG\x02\u0890\u084B" +
		"\x03\x02\x02\x02\u0890\u084D\x03\x02\x02\x02\u0890\u0864\x03\x02\x02\x02" +
		"\u0890\u0867\x03\x02\x02\x02\u0890\u0868\x03\x02\x02\x02\u0890\u086B\x03" +
		"\x02\x02\x02\u0890\u0875\x03\x02\x02\x02\u0890\u087A\x03\x02\x02\x02\u0890" +
		"\u087F\x03\x02\x02\x02\u0890\u088E\x03\x02\x02\x02\u0890\u088F\x03\x02" +
		"\x02\x02\u0891\u0940\x03\x02\x02\x02\u0892\u0894\f\x1B\x02\x02\u0893\u0895" +
		"\x07\xDF\x02\x02\u0894\u0893\x03\x02\x02\x02\u0894\u0895\x03\x02\x02\x02" +
		"\u0895\u0896\x03\x02\x02\x02\u0896\u0898\x07\xCC\x02\x02\u0897\u0899\x07" +
		"\xDF\x02\x02\u0898\u0897\x03\x02\x02\x02\u0898\u0899\x03\x02\x02\x02\u0899" +
		"\u089A\x03\x02\x02\x02\u089A\u093F\x05\xDEp\x1C\u089B\u089D\f\x18\x02" +
		"\x02\u089C\u089E\x07\xDF\x02\x02\u089D\u089C\x03\x02\x02\x02\u089D\u089E" +
		"\x03\x02\x02\x02\u089E\u089F\x03\x02\x02\x02\u089F\u08A1\x07\xB9\x02\x02" +
		"\u08A0\u08A2\x07\xDF\x02\x02\u08A1\u08A0\x03\x02\x02\x02\u08A1\u08A2\x03" +
		"\x02\x02\x02\u08A2\u08A3\x03\x02\x02\x02\u08A3\u093F\x05\xDEp\x19\u08A4" +
		"\u08A6\f\x17\x02\x02\u08A5\u08A7\x07\xDF\x02\x02\u08A6\u08A5\x03\x02\x02" +
		"\x02\u08A6\u08A7\x03\x02\x02\x02\u08A7\u08A8\x03\x02\x02\x02\u08A8\u08AA" +
		"\x07\xC7\x02\x02\u08A9\u08AB\x07\xDF\x02\x02\u08AA\u08A9\x03\x02\x02\x02" +
		"\u08AA\u08AB\x03\x02\x02\x02\u08AB\u08AC\x03\x02\x02\x02\u08AC\u093F\x05" +
		"\xDEp\x18\u08AD\u08AF\f\x16\x02\x02\u08AE\u08B0\x07\xDF\x02\x02\u08AF" +
		"\u08AE\x03\x02\x02\x02\u08AF\u08B0\x03\x02\x02\x02\u08B0\u08B1\x03\x02" +
		"\x02\x02\u08B1\u08B3\x07i\x02\x02\u08B2\u08B4\x07\xDF\x02\x02\u08B3\u08B2" +
		"\x03\x02\x02\x02\u08B3\u08B4\x03\x02\x02\x02\u08B4\u08B5\x03\x02\x02\x02" +
		"\u08B5\u093F\x05\xDEp\x17\u08B6\u08B8\f\x15\x02\x02\u08B7\u08B9\x07\xDF" +
		"\x02\x02\u08B8\u08B7\x03\x02\x02\x02\u08B8\u08B9\x03\x02\x02\x02\u08B9" +
		"\u08BA\x03\x02\x02\x02\u08BA\u08BC\x07\xCA\x02\x02\u08BB\u08BD\x07\xDF" +
		"\x02\x02\u08BC\u08BB\x03\x02\x02\x02\u08BC\u08BD\x03\x02\x02\x02\u08BD" +
		"\u08BE\x03\x02\x02\x02\u08BE\u093F\x05\xDEp\x16\u08BF\u08C1\f\x14\x02" +
		"\x02\u08C0\u08C2\x07\xDF\x02\x02\u08C1\u08C0\x03\x02\x02\x02\u08C1\u08C2" +
		"\x03\x02\x02\x02\u08C2\u08C3\x03\x02\x02\x02\u08C3\u08C5\x07\xC5\x02\x02" +
		"\u08C4\u08C6\x07\xDF\x02\x02\u08C5\u08C4\x03\x02\x02\x02\u08C5\u08C6\x03" +
		"\x02\x02\x02\u08C6\u08C7\x03\x02\x02\x02\u08C7\u093F\x05\xDEp\x15\u08C8" +
		"\u08CA\f\x13\x02\x02\u08C9\u08CB\x07\xDF\x02\x02\u08CA\u08C9\x03\x02\x02" +
		"\x02\u08CA\u08CB\x03\x02\x02\x02\u08CB\u08CC\x03\x02\x02\x02\u08CC\u08CE" +
		"\x07\xB4\x02\x02\u08CD\u08CF\x07\xDF\x02\x02\u08CE\u08CD\x03\x02\x02\x02" +
		"\u08CE\u08CF\x03\x02\x02\x02\u08CF\u08D0\x03\x02\x02\x02\u08D0\u093F\x05" +
		"\xDEp\x14\u08D1\u08D3\f\x12\x02\x02\u08D2\u08D4\x07\xDF\x02\x02\u08D3" +
		"\u08D2\x03\x02\x02\x02\u08D3\u08D4\x03\x02\x02\x02\u08D4\u08D5\x03\x02" +
		"\x02\x02\u08D5\u08D7\x07\xBC\x02\x02\u08D6\u08D8\x07\xDF\x02\x02\u08D7" +
		"\u08D6\x03\x02\x02\x02\u08D7\u08D8\x03\x02\x02\x02\u08D8\u08D9\x03\x02" +
		"\x02\x02\u08D9\u093F\x05\xDEp\x13\u08DA\u08DC\f\x11\x02\x02\u08DB\u08DD" +
		"\x07\xDF\x02\x02\u08DC\u08DB\x03\x02\x02\x02\u08DC\u08DD\x03\x02\x02\x02" +
		"\u08DD\u08DE\x03\x02\x02\x02\u08DE\u08E0\x07\xC8\x02\x02\u08DF\u08E1\x07" +
		"\xDF\x02\x02\u08E0\u08DF\x03\x02\x02\x02\u08E0\u08E1\x03\x02\x02\x02\u08E1" +
		"\u08E2\x03\x02\x02\x02\u08E2\u093F\x05\xDEp\x12\u08E3\u08E5\f\x10\x02" +
		"\x02\u08E4\u08E6\x07\xDF\x02\x02\u08E5\u08E4\x03\x02\x02\x02\u08E5\u08E6" +
		"\x03\x02\x02\x02\u08E6\u08E7\x03\x02\x02\x02\u08E7\u08E9\x07\xC4\x02\x02" +
		"\u08E8\u08EA\x07\xDF\x02\x02\u08E9\u08E8\x03\x02\x02\x02\u08E9\u08EA\x03" +
		"\x02\x02\x02\u08EA\u08EB\x03\x02\x02\x02\u08EB\u093F\x05\xDEp\x11\u08EC" +
		"\u08EE\f\x0F\x02\x02\u08ED\u08EF\x07\xDF\x02\x02\u08EE\u08ED\x03\x02\x02" +
		"\x02\u08EE\u08EF\x03\x02\x02\x02\u08EF\u08F0\x03\x02\x02\x02\u08F0\u08F2" +
		"\x07\xBF\x02\x02\u08F1\u08F3\x07\xDF\x02\x02\u08F2\u08F1\x03\x02\x02\x02" +
		"\u08F2\u08F3\x03\x02\x02\x02\u08F3\u08F4\x03\x02\x02\x02\u08F4\u093F\x05" +
		"\xDEp\x10\u08F5\u08F7\f\x0E\x02\x02\u08F6\u08F8\x07\xDF\x02\x02\u08F7" +
		"\u08F6\x03\x02\x02\x02\u08F7\u08F8\x03\x02\x02\x02\u08F8\u08F9\x03\x02" +
		"\x02\x02\u08F9\u08FB\x07\xC1\x02\x02\u08FA\u08FC\x07\xDF\x02\x02\u08FB" +
		"\u08FA\x03\x02\x02\x02\u08FB\u08FC\x03\x02\x02\x02\u08FC\u08FD\x03\x02" +
		"\x02\x02\u08FD\u093F\x05\xDEp\x0F\u08FE\u0900\f\r\x02\x02\u08FF\u0901" +
		"\x07\xDF\x02\x02\u0900\u08FF\x03\x02\x02\x02\u0900\u0901\x03\x02\x02\x02" +
		"\u0901\u0902\x03\x02\x02\x02\u0902\u0904\x07\xBE\x02\x02\u0903\u0905\x07" +
		"\xDF\x02\x02\u0904\u0903\x03\x02\x02\x02\u0904\u0905\x03\x02\x02\x02\u0905" +
		"\u0906\x03\x02\x02\x02\u0906\u093F\x05\xDEp\x0E\u0907\u0908\f\f\x02\x02" +
		"\u0908\u0909\x07\xDF\x02\x02\u0909\u090A\x07\\\x02\x02\u090A\u090B\x07" +
		"\xDF\x02\x02\u090B\u093F\x05\xDEp\r\u090C\u090D\f\v\x02\x02\u090D\u090E" +
		"\x07\xDF\x02\x02\u090E\u090F\x07R\x02\x02\u090F\u0910\x07\xDF\x02\x02" +
		"\u0910\u093F\x05\xDEp\f\u0911\u0913\f\t\x02\x02\u0912\u0914\x07\xDF\x02" +
		"\x02\u0913\u0912\x03\x02\x02\x02\u0913\u0914\x03\x02\x02\x02\u0914\u0915" +
		"\x03\x02\x02\x02\u0915\u0917\x07\x06\x02\x02\u0916\u0918\x07\xDF\x02\x02" +
		"\u0917\u0916\x03\x02\x02\x02\u0917\u0918\x03\x02\x02\x02\u0918\u0919\x03" +
		"\x02\x02\x02\u0919\u093F\x05\xDEp\n\u091A\u091C\f\b\x02\x02\u091B\u091D" +
		"\x07\xDF\x02\x02\u091C\u091B\x03\x02\x02\x02\u091C\u091D\x03\x02\x02\x02" +
		"\u091D\u091E\x03\x02\x02\x02\u091E\u0920\x07z\x02\x02\u091F\u0921\x07" +
		"\xDF\x02\x02\u0920\u091F\x03\x02\x02\x02\u0920\u0921\x03\x02\x02\x02\u0921" +
		"\u0922\x03\x02\x02\x02\u0922\u093F\x05\xDEp\t\u0923\u0925\f\x07\x02\x02" +
		"\u0924\u0926\x07\xDF\x02\x02\u0925\u0924\x03\x02\x02\x02\u0925\u0926\x03" +
		"\x02\x02\x02\u0926\u0927\x03\x02\x02\x02\u0927\u0929\x07\xB3\x02\x02\u0928" +
		"\u092A\x07\xDF\x02\x02\u0929\u0928\x03\x02\x02\x02\u0929\u092A\x03\x02" +
		"\x02\x02\u092A\u092B\x03\x02\x02\x02\u092B\u093F\x05\xDEp\b\u092C\u092E" +
		"\f\x06\x02\x02\u092D\u092F\x07\xDF\x02\x02\u092E\u092D\x03\x02\x02\x02" +
		"\u092E\u092F\x03\x02\x02\x02\u092F\u0930\x03\x02\x02\x02\u0930\u0932\x07" +
		";\x02\x02\u0931\u0933\x07\xDF\x02\x02\u0932\u0931\x03\x02\x02\x02\u0932" +
		"\u0933\x03\x02\x02\x02\u0933\u0934\x03\x02\x02\x02\u0934\u093F\x05\xDE" +
		"p\x07\u0935\u0937\f\x05\x02\x02\u0936\u0938\x07\xDF\x02\x02\u0937\u0936" +
		"\x03\x02\x02\x02\u0937\u0938\x03\x02\x02\x02\u0938\u0939\x03\x02\x02\x02" +
		"\u0939\u093B\x07N\x02\x02\u093A\u093C\x07\xDF\x02\x02\u093B\u093A\x03" +
		"\x02\x02\x02\u093B\u093C\x03\x02\x02\x02\u093C\u093D\x03\x02\x02\x02\u093D" +
		"\u093F\x05\xDEp\x06\u093E\u0892\x03\x02\x02\x02\u093E\u089B\x03\x02\x02" +
		"\x02\u093E\u08A4\x03\x02\x02\x02\u093E\u08AD\x03\x02\x02\x02\u093E\u08B6" +
		"\x03\x02\x02\x02\u093E\u08BF\x03\x02\x02\x02\u093E\u08C8\x03\x02\x02\x02" +
		"\u093E\u08D1\x03\x02\x02\x02\u093E\u08DA\x03\x02\x02\x02\u093E\u08E3\x03" +
		"\x02\x02\x02\u093E\u08EC\x03\x02\x02\x02\u093E\u08F5\x03\x02\x02\x02\u093E" +
		"\u08FE\x03\x02\x02\x02\u093E\u0907\x03\x02\x02\x02\u093E\u090C\x03\x02" +
		"\x02\x02\u093E\u0911\x03\x02\x02\x02\u093E\u091A\x03\x02\x02\x02\u093E" +
		"\u0923\x03\x02\x02\x02\u093E\u092C\x03\x02\x02\x02\u093E\u0935\x03\x02" +
		"\x02\x02\u093F\u0942\x03\x02\x02\x02\u0940\u093E\x03\x02\x02\x02\u0940" +
		"\u0941\x03\x02\x02\x02\u0941\xDF\x03\x02\x02\x02\u0942\u0940\x03\x02\x02" +
		"\x02\u0943\u0947\x07*\x02\x02\u0944\u0947\x07\x9B\x02\x02\u0945\u0947" +
		"\x05\u0134\x9B\x02\u0946\u0943\x03\x02\x02\x02\u0946\u0944\x03\x02\x02" +
		"\x02\u0946\u0945\x03\x02\x02\x02\u0947\u0948\x03\x02\x02\x02\u0948\u094B" +
		"\x07\xDF\x02\x02\u0949\u094A\x07\xB1\x02\x02\u094A\u094C\x07\xDF\x02\x02" +
		"\u094B\u0949\x03\x02\x02\x02\u094B\u094C\x03\x02\x02\x02\u094C\u094D\x03" +
		"\x02\x02\x02\u094D\u094E\x05\xE2r\x02\u094E\xE1\x03\x02\x02\x02\u094F" +
		"\u095A\x05\xE4s\x02\u0950\u0952\x07\xDF\x02\x02\u0951\u0950\x03\x02\x02" +
		"\x02\u0951\u0952\x03\x02\x02\x02\u0952\u0953\x03\x02\x02\x02\u0953\u0955" +
		"\x07\xB8\x02\x02\u0954\u0956\x07\xDF\x02\x02\u0955\u0954\x03\x02\x02\x02" +
		"\u0955\u0956\x03\x02\x02\x02\u0956\u0957\x03\x02\x02\x02\u0957\u0959\x05" +
		"\xE4s\x02\u0958\u0951\x03\x02\x02\x02\u0959\u095C\x03\x02\x02\x02\u095A" +
		"\u0958\x03\x02\x02\x02\u095A\u095B\x03\x02\x02\x02\u095B\xE3\x03\x02\x02" +
		"\x02\u095C\u095A\x03\x02\x02\x02\u095D\u095F\x05\u0118\x8D\x02\u095E\u0960" +
		"\x05\u0132\x9A\x02\u095F\u095E\x03\x02\x02\x02\u095F\u0960\x03\x02\x02" +
		"\x02\u0960\u0972\x03\x02\x02\x02\u0961\u0963\x07\xDF\x02\x02\u0962\u0961" +
		"\x03\x02\x02\x02\u0962\u0963\x03\x02\x02\x02\u0963\u0964\x03\x02\x02\x02" +
		"\u0964\u0966\x07\xC3\x02\x02\u0965\u0967\x07\xDF\x02\x02\u0966\u0965\x03" +
		"\x02\x02\x02\u0966\u0967\x03\x02\x02\x02\u0967\u096C\x03\x02\x02\x02\u0968" +
		"\u096A\x05\u0114\x8B\x02\u0969\u096B\x07\xDF\x02\x02\u096A\u0969\x03\x02" +
		"\x02\x02\u096A\u096B\x03\x02\x02\x02\u096B\u096D\x03\x02\x02\x02\u096C" +
		"\u0968\x03\x02\x02\x02\u096C\u096D\x03\x02\x02\x02\u096D\u096E\x03\x02" +
		"\x02\x02\u096E\u0970\x07\xCE\x02\x02\u096F\u0971\x07\xDF\x02\x02\u0970" +
		"\u096F\x03\x02\x02\x02\u0970\u0971\x03\x02\x02\x02\u0971\u0973\x03\x02" +
		"\x02\x02\u0972\u0962\x03\x02\x02\x02\u0972\u0973\x03\x02\x02\x02\u0973" +
		"\u0976\x03\x02\x02\x02\u0974\u0975\x07\xDF\x02\x02\u0975\u0977\x05\u011A" +
		"\x8E\x02\u0976\u0974\x03\x02\x02\x02\u0976\u0977\x03\x02\x02\x02\u0977" +
		"\xE5\x03\x02\x02\x02\u0978\u0979\x07\xAE\x02\x02\u0979\u097A\x07\xDF\x02" +
		"\x02\u097A\u097C\x05\xDEp\x02\u097B\u097D\x07\xDD\x02\x02\u097C\u097B" +
		"\x03\x02\x02\x02\u097D\u097E\x03\x02\x02\x02\u097E\u097C\x03\x02\x02\x02" +
		"\u097E\u097F\x03\x02\x02\x02\u097F\u0983\x03\x02\x02\x02\u0980\u0982\x05" +
		"2\x1A\x02\u0981\u0980\x03\x02\x02\x02\u0982\u0985\x03\x02\x02\x02\u0983" +
		"\u0981\x03\x02\x02\x02\u0983\u0984\x03\x02\x02\x02\u0984\u0989\x03\x02" +
		"\x02\x02\u0985\u0983\x03\x02\x02\x02\u0986\u0988\x07\xDD\x02\x02\u0987" +
		"\u0986\x03\x02\x02\x02\u0988\u098B\x03\x02\x02\x02\u0989\u0987\x03\x02" +
		"\x02\x02\u0989\u098A\x03\x02\x02\x02\u098A\u098C\x03\x02\x02\x02\u098B" +
		"\u0989\x03\x02\x02\x02\u098C\u098D\x07\xAD\x02\x02\u098D\xE7\x03\x02\x02" +
		"\x02\u098E\u098F\x07\xAF\x02\x02\u098F\u0990\x07\xDF\x02\x02\u0990\u0992" +
		"\x05\xDEp\x02\u0991\u0993\x07\xDF\x02\x02\u0992\u0991\x03\x02\x02\x02" +
		"\u0992\u0993\x03\x02\x02\x02\u0993\u0994\x03\x02\x02\x02\u0994\u0996\x07" +
		"\xB8\x02\x02\u0995\u0997\x07\xDF\x02\x02\u0996\u0995\x03\x02\x02\x02\u0996" +
		"\u0997\x03\x02\x02\x02\u0997\u0998\x03\x02\x02\x02\u0998\u0999\x05\xDE" +
		"p\x02\u0999\xE9\x03\x02\x02\x02\u099A\u099B\x07\xB0\x02\x02\u099B\u099E" +
		"\x07\xDF\x02\x02\u099C\u099D\x07l\x02\x02\u099D\u099F\x07\xDF\x02\x02" +
		"\u099E\u099C\x03\x02\x02\x02\u099E\u099F\x03\x02\x02\x02\u099F\u09A0\x03" +
		"\x02\x02\x02\u09A0\u09A2\x05\xFA~\x02\u09A1\u09A3\x07\xDD\x02\x02\u09A2" +
		"\u09A1\x03\x02\x02\x02\u09A3\u09A4\x03\x02\x02\x02\u09A4\u09A2\x03\x02" +
		"\x02\x02\u09A4\u09A5\x03\x02\x02\x02\u09A5\u09AC\x03\x02\x02\x02\u09A6" +
		"\u09A8\x052\x1A\x02\u09A7\u09A9\x07\xDD\x02\x02\u09A8\u09A7\x03\x02\x02" +
		"\x02\u09A9\u09AA\x03\x02\x02\x02\u09AA\u09A8\x03\x02\x02\x02\u09AA\u09AB" +
		"\x03\x02\x02\x02\u09AB\u09AD\x03\x02\x02\x02\u09AC\u09A6\x03\x02\x02\x02" +
		"\u09AC\u09AD\x03\x02\x02\x02\u09AD\u09AE\x03\x02\x02\x02\u09AE\u09AF\x07" +
		"7\x02\x02\u09AF\xEB\x03\x02\x02\x02\u09B0\u09B1\x07\xB2\x02\x02\u09B1" +
		"\u09B2\x07\xDF\x02\x02\u09B2\u09B4\x05\xDEp\x02\u09B3\u09B5\x07\xDF\x02" +
		"\x02\u09B4\u09B3\x03\x02\x02\x02\u09B4\u09B5\x03\x02\x02\x02\u09B5\u09B6" +
		"\x03\x02\x02\x02\u09B6\u09BB\x07\xB8\x02\x02\u09B7\u09B9\x07\xDF\x02\x02" +
		"\u09B8\u09B7\x03\x02\x02\x02\u09B8\u09B9\x03\x02\x02\x02\u09B9\u09BA\x03" +
		"\x02\x02\x02\u09BA\u09BC\x05\x9AN\x02\u09BB\u09B8\x03\x02\x02\x02\u09BB" +
		"\u09BC\x03\x02\x02\x02\u09BC\xED\x03\x02\x02\x02\u09BD\u09C0\x05\xF0y" +
		"\x02\u09BE\u09C0\x05\xF2z\x02\u09BF\u09BD\x03\x02\x02\x02\u09BF\u09BE" +
		"\x03\x02\x02\x02\u09C0\xEF\x03\x02\x02\x02\u09C1\u09C2\x07\x13\x02\x02" +
		"\u09C2\u09C3\x07\xDF\x02\x02\u09C3\u09C5\x05\u0118\x8D\x02\u09C4\u09C6" +
		"\x05\u0132\x9A\x02\u09C5\u09C4\x03\x02\x02\x02\u09C5\u09C6\x03\x02\x02" +
		"\x02\u09C6\u09D4\x03\x02\x02\x02\u09C7\u09C9\x07\xDF\x02\x02\u09C8\u09C7" +
		"\x03\x02\x02\x02\u09C8\u09C9\x03\x02\x02\x02\u09C9\u09CA\x03\x02\x02\x02" +
		"\u09CA\u09CC\x07\xC3\x02\x02\u09CB\u09CD\x07\xDF\x02\x02\u09CC\u09CB\x03" +
		"\x02\x02\x02\u09CC\u09CD\x03\x02\x02\x02\u09CD\u09CE\x03\x02\x02\x02\u09CE" +
		"\u09D0\x05\u0108\x85\x02\u09CF\u09D1\x07\xDF\x02\x02\u09D0\u09CF\x03\x02" +
		"\x02\x02\u09D0\u09D1\x03\x02\x02\x02\u09D1\u09D2\x03\x02\x02\x02\u09D2" +
		"\u09D3\x07\xCE\x02\x02\u09D3\u09D5\x03\x02\x02\x02\u09D4\u09C8\x03\x02" +
		"\x02\x02\u09D4\u09D5\x03\x02\x02\x02\u09D5\xF1\x03\x02\x02\x02\u09D6\u09D7" +
		"\x07\x13\x02\x02\u09D7\u09D9\x07\xDF\x02\x02\u09D8\u09DA\x05\xFA~\x02" +
		"\u09D9\u09D8\x03\x02\x02\x02\u09D9\u09DA\x03\x02\x02\x02\u09DA\u09DB\x03" +
		"\x02\x02\x02\u09DB\u09DD\x07\xBB\x02\x02\u09DC\u09DE\x07\xDF\x02\x02\u09DD" +
		"\u09DC\x03\x02\x02\x02\u09DD\u09DE\x03\x02\x02\x02\u09DE\u09DF\x03\x02" +
		"\x02\x02\u09DF\u09E1\x05\u0118\x8D\x02\u09E0\u09E2\x05\u0132\x9A\x02\u09E1" +
		"\u09E0\x03\x02\x02\x02\u09E1\u09E2\x03\x02\x02\x02\u09E2\u09F0\x03\x02" +
		"\x02\x02\u09E3\u09E5\x07\xDF\x02\x02\u09E4\u09E3\x03\x02\x02\x02\u09E4" +
		"\u09E5\x03\x02\x02\x02\u09E5\u09E6\x03\x02\x02\x02\u09E6\u09E8\x07\xC3" +
		"\x02\x02\u09E7\u09E9\x07\xDF\x02\x02\u09E8\u09E7\x03\x02\x02\x02\u09E8" +
		"\u09E9\x03\x02\x02\x02\u09E9\u09EA\x03\x02\x02\x02\u09EA\u09EC\x05\u0108" +
		"\x85\x02\u09EB\u09ED\x07\xDF\x02\x02\u09EC\u09EB\x03\x02\x02\x02\u09EC" +
		"\u09ED\x03\x02\x02\x02\u09ED\u09EE\x03\x02\x02\x02\u09EE\u09EF\x07\xCE" +
		"\x02\x02\u09EF\u09F1\x03\x02\x02\x02\u09F0\u09E4\x03\x02\x02\x02\u09F0" +
		"\u09F1\x03\x02\x02\x02\u09F1\xF3\x03\x02\x02\x02\u09F2\u09F5\x05\xF6|" +
		"\x02\u09F3\u09F5\x05\xF8}\x02\u09F4\u09F2\x03\x02\x02\x02\u09F4\u09F3" +
		"\x03\x02\x02\x02\u09F5\xF5\x03\x02\x02\x02\u09F6\u09F9\x05\u011E\x90\x02" +
		"\u09F7\u09F8\x07\xDF\x02\x02\u09F8\u09FA\x05\u0108\x85\x02\u09F9\u09F7" +
		"\x03\x02\x02\x02\u09F9\u09FA\x03\x02\x02\x02\u09FA\xF7\x03\x02\x02\x02" +
		"\u09FB\u09FD\x05\xFA~\x02\u09FC\u09FB\x03\x02\x02\x02\u09FC\u09FD\x03" +
		"\x02\x02\x02\u09FD\u09FE\x03\x02\x02\x02\u09FE\u09FF\x07\xBB\x02\x02\u09FF" +
		"\u0A01\x05\u0118\x8D\x02\u0A00\u0A02\x05\u0132\x9A\x02\u0A01\u0A00\x03" +
		"\x02\x02\x02\u0A01\u0A02\x03\x02\x02\x02\u0A02\u0A05\x03\x02\x02\x02\u0A03" +
		"\u0A04\x07\xDF\x02\x02\u0A04\u0A06\x05\u0108\x85\x02\u0A05\u0A03\x03\x02" +
		"\x02\x02\u0A05\u0A06\x03\x02\x02\x02\u0A06\u0A08\x03\x02\x02\x02\u0A07" +
		"\u0A09\x05\u010C\x87\x02\u0A08\u0A07\x03\x02\x02\x02\u0A08\u0A09\x03\x02" +
		"\x02\x02\u0A09\xF9\x03\x02\x02\x02\u0A0A\u0A0F\x05\u0102\x82\x02\u0A0B" +
		"\u0A0F\x05\xFC\x7F\x02\u0A0C\u0A0F\x05\xFE\x80\x02\u0A0D\u0A0F\x05\u0106" +
		"\x84\x02\u0A0E\u0A0A\x03\x02\x02\x02\u0A0E\u0A0B\x03\x02\x02\x02\u0A0E" +
		"\u0A0C\x03\x02\x02\x02\u0A0E\u0A0D\x03\x02\x02\x02\u0A0F\xFB\x03\x02\x02" +
		"\x02\u0A10\u0A12\x05\u0118\x8D\x02\u0A11\u0A13\x05\u0132\x9A\x02\u0A12" +
		"\u0A11\x03\x02\x02\x02\u0A12\u0A13\x03\x02\x02\x02\u0A13\u0A15\x03\x02" +
		"\x02\x02\u0A14\u0A16\x05\u010C\x87\x02\u0A15\u0A14\x03\x02\x02\x02\u0A15" +
		"\u0A16\x03\x02\x02\x02\u0A16\xFD\x03\x02\x02\x02\u0A17\u0A1B\x05\u0118" +
		"\x8D\x02\u0A18\u0A1B\x05\u011C\x8F\x02\u0A19\u0A1B\x05\u0100\x81\x02\u0A1A" +
		"\u0A17\x03\x02\x02\x02\u0A1A\u0A18\x03\x02\x02\x02\u0A1A\u0A19\x03\x02" +
		"\x02\x02\u0A1B\u0A1D\x03\x02\x02\x02\u0A1C\u0A1E\x05\u0132\x9A\x02\u0A1D" +
		"\u0A1C\x03\x02\x02\x02\u0A1D\u0A1E\x03\x02\x02\x02\u0A1E\u0A20\x03\x02" +
		"\x02\x02\u0A1F\u0A21\x07\xDF\x02\x02\u0A20\u0A1F\x03\x02\x02\x02\u0A20" +
		"\u0A21\x03\x02\x02\x02\u0A21\u0A2D\x03\x02\x02\x02\u0A22\u0A24\x07\xC3" +
		"\x02\x02\u0A23\u0A25\x07\xDF\x02\x02\u0A24\u0A23\x03\x02\x02\x02\u0A24" +
		"\u0A25\x03\x02\x02\x02\u0A25\u0A2A\x03\x02\x02\x02\u0A26\u0A28\x05\u0108" +
		"\x85\x02\u0A27\u0A29\x07\xDF\x02\x02\u0A28\u0A27\x03\x02\x02\x02\u0A28" +
		"\u0A29\x03\x02\x02\x02\u0A29\u0A2B\x03\x02\x02\x02\u0A2A\u0A26\x03\x02" +
		"\x02\x02\u0A2A\u0A2B\x03\x02\x02\x02\u0A2B\u0A2C\x03\x02\x02\x02\u0A2C" +
		"\u0A2E\x07\xCE\x02\x02\u0A2D\u0A22\x03\x02\x02\x02\u0A2E\u0A2F\x03\x02" +
		"\x02\x02\u0A2F\u0A2D\x03\x02\x02\x02\u0A2F\u0A30\x03\x02\x02\x02\u0A30" +
		"\u0A32\x03\x02\x02\x02\u0A31\u0A33\x05\u010C\x87\x02\u0A32\u0A31\x03\x02" +
		"\x02\x02\u0A32\u0A33\x03\x02\x02\x02\u0A33\xFF\x03\x02\x02\x02\u0A34\u0A36" +
		"\x05\u0118\x8D\x02\u0A35\u0A37\x05\u0132\x9A\x02\u0A36\u0A35\x03\x02\x02" +
		"\x02\u0A36\u0A37\x03\x02\x02\x02\u0A37\u0A39\x03\x02\x02\x02\u0A38\u0A3A" +
		"\x07\xDF\x02\x02\u0A39\u0A38\x03\x02\x02\x02\u0A39\u0A3A\x03\x02\x02\x02" +
		"\u0A3A\u0A3B\x03\x02\x02\x02\u0A3B\u0A3D\x07\xC3\x02\x02\u0A3C\u0A3E\x07" +
		"\xDF\x02\x02\u0A3D\u0A3C\x03\x02\x02\x02\u0A3D\u0A3E\x03\x02\x02\x02\u0A3E";
	private static readonly _serializedATNSegment5: string =
		"\u0A43\x03\x02\x02\x02\u0A3F\u0A41\x05\u0108\x85\x02\u0A40\u0A42\x07\xDF" +
		"\x02\x02\u0A41\u0A40\x03\x02\x02\x02\u0A41\u0A42\x03\x02\x02\x02\u0A42" +
		"\u0A44\x03\x02\x02\x02\u0A43\u0A3F\x03\x02\x02\x02\u0A43\u0A44\x03\x02" +
		"\x02\x02\u0A44\u0A45\x03\x02\x02\x02\u0A45\u0A46\x07\xCE\x02\x02\u0A46" +
		"\u0101\x03\x02\x02\x02\u0A47\u0A4A\x05\xFC\x7F\x02\u0A48\u0A4A\x05\xFE" +
		"\x80\x02\u0A49\u0A47\x03\x02\x02\x02\u0A49\u0A48\x03\x02\x02\x02\u0A49" +
		"\u0A4A\x03\x02\x02\x02\u0A4A\u0A4C\x03\x02\x02\x02\u0A4B\u0A4D\x05\u0104" +
		"\x83\x02\u0A4C\u0A4B\x03\x02\x02\x02\u0A4D\u0A4E\x03\x02\x02\x02\u0A4E" +
		"\u0A4C\x03\x02\x02\x02\u0A4E\u0A4F\x03\x02\x02\x02\u0A4F\u0A51\x03\x02" +
		"\x02\x02\u0A50\u0A52\x05\u010C\x87\x02\u0A51\u0A50\x03\x02\x02\x02\u0A51" +
		"\u0A52\x03\x02\x02\x02\u0A52\u0103\x03\x02\x02\x02\u0A53\u0A55\x07\xDF" +
		"\x02\x02\u0A54\u0A53\x03\x02\x02\x02\u0A54\u0A55\x03\x02\x02\x02\u0A55" +
		"\u0A56\x03\x02\x02\x02\u0A56\u0A59\x07\xBB\x02\x02\u0A57\u0A5A\x05\xFC" +
		"\x7F\x02\u0A58\u0A5A\x05\xFE\x80\x02\u0A59\u0A57\x03\x02\x02\x02\u0A59" +
		"\u0A58\x03\x02\x02\x02\u0A5A\u0105\x03\x02\x02\x02\u0A5B\u0A5C\x05\u010C" +
		"\x87\x02\u0A5C\u0107\x03\x02\x02\x02\u0A5D\u0A5F\x05\u010A\x86\x02\u0A5E" +
		"\u0A5D\x03\x02\x02\x02\u0A5E\u0A5F\x03\x02\x02\x02\u0A5F\u0A61\x03\x02" +
		"\x02\x02\u0A60\u0A62\x07\xDF\x02\x02\u0A61\u0A60\x03\x02\x02\x02\u0A61" +
		"\u0A62\x03\x02\x02\x02\u0A62\u0A63\x03\x02\x02\x02\u0A63\u0A65\t\v\x02" +
		"\x02\u0A64\u0A66\x07\xDF\x02\x02\u0A65\u0A64\x03\x02\x02\x02\u0A65\u0A66" +
		"\x03\x02\x02\x02\u0A66\u0A68\x03\x02\x02\x02\u0A67\u0A5E\x03\x02\x02\x02" +
		"\u0A68\u0A6B\x03\x02\x02\x02\u0A69\u0A67\x03\x02\x02\x02\u0A69\u0A6A\x03" +
		"\x02\x02\x02\u0A6A\u0A6C\x03\x02\x02\x02\u0A6B\u0A69\x03\x02\x02\x02\u0A6C" +
		"\u0A79\x05\u010A\x86\x02\u0A6D\u0A6F\x07\xDF\x02\x02\u0A6E\u0A6D\x03\x02" +
		"\x02\x02\u0A6E\u0A6F\x03\x02\x02\x02\u0A6F\u0A70\x03\x02\x02\x02\u0A70" +
		"\u0A72\t\v\x02\x02\u0A71\u0A73\x07\xDF\x02\x02\u0A72\u0A71\x03\x02\x02" +
		"\x02\u0A72\u0A73\x03\x02\x02\x02\u0A73\u0A75\x03\x02\x02\x02\u0A74\u0A76" +
		"\x05\u010A\x86\x02\u0A75\u0A74\x03\x02\x02\x02\u0A75\u0A76\x03\x02\x02" +
		"\x02\u0A76\u0A78\x03\x02\x02\x02\u0A77\u0A6E\x03\x02\x02\x02\u0A78\u0A7B" +
		"\x03\x02\x02\x02\u0A79\u0A77\x03\x02\x02\x02\u0A79\u0A7A\x03\x02\x02\x02" +
		"\u0A7A\u0109\x03\x02\x02\x02\u0A7B\u0A79\x03\x02\x02\x02\u0A7C\u0A7D\t" +
		"\r\x02\x02\u0A7D\u0A7F\x07\xDF\x02\x02\u0A7E\u0A7C\x03\x02\x02\x02\u0A7E" +
		"\u0A7F\x03\x02\x02\x02\u0A7F\u0A80\x03\x02\x02\x02\u0A80\u0A81\x05\xDE" +
		"p\x02\u0A81\u010B\x03\x02\x02\x02\u0A82\u0A83\x07\xBD\x02\x02\u0A83\u0A85" +
		"\x05\u0118\x8D\x02\u0A84\u0A86\x05\u0132\x9A\x02\u0A85\u0A84\x03\x02\x02" +
		"\x02\u0A85\u0A86\x03\x02\x02\x02\u0A86\u010D\x03\x02\x02\x02\u0A87\u0A99" +
		"\x07\xC3\x02\x02\u0A88\u0A8A\x07\xDF\x02\x02\u0A89\u0A88\x03\x02\x02\x02" +
		"\u0A89\u0A8A\x03\x02\x02\x02\u0A8A\u0A8B\x03\x02\x02\x02\u0A8B\u0A96\x05" +
		"\u0110\x89\x02\u0A8C\u0A8E\x07\xDF\x02\x02\u0A8D\u0A8C\x03\x02\x02\x02" +
		"\u0A8D\u0A8E\x03\x02\x02\x02\u0A8E\u0A8F\x03\x02\x02\x02\u0A8F\u0A91\x07" +
		"\xB8\x02\x02\u0A90\u0A92\x07\xDF\x02\x02\u0A91\u0A90\x03\x02\x02\x02\u0A91" +
		"\u0A92\x03\x02\x02\x02\u0A92\u0A93\x03\x02\x02\x02\u0A93\u0A95\x05\u0110" +
		"\x89\x02\u0A94\u0A8D\x03\x02\x02\x02\u0A95\u0A98\x03\x02\x02\x02\u0A96" +
		"\u0A94\x03\x02\x02\x02\u0A96\u0A97\x03\x02\x02\x02\u0A97\u0A9A\x03\x02" +
		"\x02\x02\u0A98\u0A96\x03\x02\x02\x02\u0A99\u0A89\x03\x02\x02\x02\u0A99" +
		"\u0A9A\x03\x02\x02\x02\u0A9A\u0A9C\x03\x02\x02\x02\u0A9B\u0A9D\x07\xDF" +
		"\x02\x02\u0A9C\u0A9B\x03\x02\x02\x02\u0A9C\u0A9D\x03\x02\x02\x02\u0A9D" +
		"\u0A9E\x03\x02\x02\x02\u0A9E\u0A9F\x07\xCE\x02\x02\u0A9F\u010F\x03\x02" +
		"\x02\x02\u0AA0\u0AA1\x07u\x02\x02\u0AA1\u0AA3\x07\xDF\x02\x02\u0AA2\u0AA0" +
		"\x03\x02\x02\x02\u0AA2\u0AA3\x03\x02\x02\x02\u0AA3\u0AA6\x03\x02\x02\x02" +
		"\u0AA4\u0AA5\t\x0E\x02\x02\u0AA5\u0AA7\x07\xDF\x02\x02\u0AA6\u0AA4\x03" +
		"\x02\x02\x02\u0AA6\u0AA7\x03\x02\x02\x02\u0AA7\u0AAA\x03\x02\x02\x02\u0AA8" +
		"\u0AA9\x07|\x02\x02\u0AA9\u0AAB\x07\xDF\x02\x02\u0AAA\u0AA8\x03\x02\x02" +
		"\x02\u0AAA\u0AAB\x03\x02\x02\x02\u0AAB\u0AAC\x03\x02\x02\x02\u0AAC\u0AAE" +
		"\x05\u0118\x8D\x02\u0AAD\u0AAF\x05\u0132\x9A\x02\u0AAE\u0AAD\x03\x02\x02" +
		"\x02\u0AAE\u0AAF\x03\x02\x02\x02\u0AAF\u0AB8\x03\x02\x02\x02\u0AB0\u0AB2" +
		"\x07\xDF\x02\x02\u0AB1\u0AB0\x03\x02\x02\x02\u0AB1\u0AB2\x03\x02\x02\x02" +
		"\u0AB2\u0AB3\x03\x02\x02\x02\u0AB3\u0AB5\x07\xC3\x02\x02\u0AB4\u0AB6\x07" +
		"\xDF\x02\x02\u0AB5\u0AB4\x03\x02\x02\x02\u0AB5\u0AB6\x03\x02\x02\x02\u0AB6" +
		"\u0AB7\x03\x02\x02\x02\u0AB7\u0AB9\x07\xCE\x02\x02\u0AB8\u0AB1\x03\x02" +
		"\x02\x02\u0AB8\u0AB9\x03\x02\x02\x02\u0AB9\u0ABC\x03\x02\x02\x02\u0ABA" +
		"\u0ABB\x07\xDF\x02\x02\u0ABB\u0ABD\x05\u011A\x8E\x02\u0ABC\u0ABA\x03\x02" +
		"\x02\x02\u0ABC\u0ABD\x03\x02\x02\x02\u0ABD\u0AC2\x03\x02\x02\x02\u0ABE" +
		"\u0AC0\x07\xDF\x02\x02\u0ABF\u0ABE\x03\x02\x02\x02\u0ABF\u0AC0\x03\x02" +
		"\x02\x02\u0AC0\u0AC1\x03\x02\x02\x02\u0AC1\u0AC3\x05\u0112\x8A\x02\u0AC2" +
		"\u0ABF\x03\x02\x02\x02\u0AC2\u0AC3\x03\x02\x02\x02\u0AC3\u0111\x03\x02" +
		"\x02\x02\u0AC4\u0AC6\x07\xBC\x02\x02\u0AC5\u0AC7\x07\xDF\x02\x02\u0AC6" +
		"\u0AC5\x03\x02\x02\x02\u0AC6\u0AC7\x03\x02\x02\x02\u0AC7\u0AC8\x03\x02" +
		"\x02\x02\u0AC8\u0AC9\x05\xDEp\x02\u0AC9\u0113\x03\x02\x02\x02\u0ACA\u0AD5" +
		"\x05\u0116\x8C\x02\u0ACB\u0ACD\x07\xDF\x02\x02\u0ACC\u0ACB\x03\x02\x02" +
		"\x02\u0ACC\u0ACD\x03\x02\x02\x02\u0ACD\u0ACE\x03\x02\x02\x02\u0ACE\u0AD0" +
		"\x07\xB8\x02\x02\u0ACF\u0AD1\x07\xDF\x02\x02\u0AD0\u0ACF\x03\x02\x02\x02" +
		"\u0AD0\u0AD1\x03\x02\x02\x02\u0AD1\u0AD2\x03\x02\x02\x02\u0AD2\u0AD4\x05" +
		"\u0116\x8C\x02\u0AD3\u0ACC\x03\x02\x02\x02\u0AD4\u0AD7\x03\x02\x02\x02" +
		"\u0AD5\u0AD3\x03\x02\x02\x02\u0AD5\u0AD6\x03\x02\x02\x02\u0AD6\u0115\x03" +
		"\x02\x02\x02\u0AD7\u0AD5\x03\x02\x02\x02\u0AD8\u0AD9\x05\xDEp\x02\u0AD9" +
		"\u0ADA\x07\xDF\x02\x02\u0ADA\u0ADB\x07\xA4\x02\x02\u0ADB\u0ADC\x07\xDF" +
		"\x02\x02\u0ADC\u0ADE\x03\x02\x02\x02\u0ADD\u0AD8\x03\x02\x02\x02\u0ADD" +
		"\u0ADE\x03\x02\x02\x02\u0ADE\u0ADF\x03\x02\x02\x02\u0ADF\u0AE0\x05\xDE" +
		"p\x02\u0AE0\u0117\x03\x02\x02\x02\u0AE1\u0AE4\x07\xDB\x02\x02\u0AE2\u0AE4" +
		"\x05\u0136\x9C\x02\u0AE3\u0AE1\x03\x02\x02\x02\u0AE3\u0AE2\x03\x02\x02" +
		"\x02\u0AE4\u0AE5\x03\x02\x02\x02\u0AE5\u0AE3\x03\x02\x02\x02\u0AE5\u0AE6" +
		"\x03\x02\x02\x02\u0AE6\u0AF0\x03\x02\x02\x02\u0AE7\u0AEA\x07\xD0\x02\x02" +
		"\u0AE8\u0AEB\x07\xDB\x02\x02\u0AE9\u0AEB\x05\u0136\x9C\x02\u0AEA\u0AE8" +
		"\x03\x02\x02\x02\u0AEA\u0AE9\x03\x02\x02\x02\u0AEB\u0AEC\x03\x02\x02\x02" +
		"\u0AEC\u0AEA\x03\x02\x02\x02\u0AEC\u0AED\x03\x02\x02\x02\u0AED\u0AEE\x03" +
		"\x02\x02\x02\u0AEE\u0AF0\x07\xD1\x02\x02\u0AEF\u0AE3\x03\x02\x02\x02\u0AEF" +
		"\u0AE7\x03\x02\x02\x02\u0AF0\u0119\x03\x02\x02\x02\u0AF1\u0AF2\x07\n\x02" +
		"\x02\u0AF2\u0AF5\x07\xDF\x02\x02\u0AF3\u0AF4\x07l\x02\x02\u0AF4\u0AF6" +
		"\x07\xDF\x02\x02\u0AF5\u0AF3\x03\x02\x02\x02\u0AF5\u0AF6\x03\x02\x02\x02" +
		"\u0AF6\u0AF7\x03\x02\x02\x02\u0AF7\u0AFA\x05\u0130\x99\x02\u0AF8\u0AF9" +
		"\x07\xDF\x02\x02\u0AF9\u0AFB\x05\u0124\x93\x02\u0AFA\u0AF8\x03\x02\x02" +
		"\x02\u0AFA\u0AFB\x03\x02\x02\x02\u0AFB\u011B\x03\x02\x02\x02\u0AFC\u0AFD" +
		"\t\x0F\x02\x02\u0AFD\u011D\x03\x02\x02\x02\u0AFE\u0B03\x07\xDB\x02\x02" +
		"\u0AFF\u0B02\x05\u0136\x9C\x02\u0B00\u0B02\x07\xDB\x02\x02\u0B01\u0AFF" +
		"\x03\x02\x02\x02\u0B01\u0B00\x03\x02\x02\x02\u0B02\u0B05\x03\x02\x02\x02" +
		"\u0B03\u0B01\x03\x02\x02\x02\u0B03\u0B04\x03\x02\x02\x02\u0B04\u0B0E\x03" +
		"\x02\x02\x02\u0B05\u0B03\x03\x02\x02\x02\u0B06\u0B09\x05\u0136\x9C\x02" +
		"\u0B07\u0B0A\x05\u0136\x9C\x02\u0B08\u0B0A\x07\xDB\x02\x02\u0B09\u0B07" +
		"\x03\x02\x02\x02\u0B09\u0B08\x03\x02\x02\x02\u0B0A\u0B0B\x03\x02\x02\x02" +
		"\u0B0B\u0B09\x03\x02\x02\x02\u0B0B\u0B0C\x03\x02\x02\x02\u0B0C\u0B0E\x03" +
		"\x02\x02\x02\u0B0D\u0AFE\x03\x02\x02\x02\u0B0D\u0B06\x03\x02\x02\x02\u0B0E" +
		"\u011F\x03\x02\x02\x02\u0B0F\u0B10\t\x10\x02\x02\u0B10\u0121\x03\x02\x02" +
		"\x02\u0B11\u0B16\x05\u0118\x8D\x02\u0B12\u0B13\x07\xBB\x02\x02\u0B13\u0B15" +
		"\x05\u0118\x8D\x02\u0B14\u0B12\x03\x02\x02\x02\u0B15\u0B18\x03\x02\x02" +
		"\x02\u0B16\u0B14\x03\x02\x02\x02\u0B16\u0B17\x03\x02\x02\x02\u0B17\u0123" +
		"\x03\x02\x02\x02\u0B18\u0B16\x03\x02\x02\x02\u0B19\u0B1B\x07\xC7\x02\x02" +
		"\u0B1A\u0B1C\x07\xDF\x02\x02\u0B1B\u0B1A\x03\x02\x02\x02\u0B1B\u0B1C\x03" +
		"\x02\x02\x02\u0B1C\u0B1F\x03\x02\x02\x02\u0B1D\u0B20\x07\xD5\x02\x02\u0B1E" +
		"\u0B20\x05\u0118\x8D\x02\u0B1F\u0B1D\x03\x02\x02\x02\u0B1F\u0B1E\x03\x02" +
		"\x02\x02\u0B20\u0125\x03\x02\x02\x02\u0B21\u0B2A\x05\u011E\x90\x02\u0B22" +
		"\u0B24\x07\xDF\x02\x02\u0B23\u0B22\x03\x02\x02\x02\u0B23\u0B24\x03\x02" +
		"\x02\x02\u0B24\u0B25\x03\x02\x02\x02\u0B25\u0B27\x07\xC5\x02\x02\u0B26" +
		"\u0B28\x07\xDF\x02\x02\u0B27\u0B26\x03\x02\x02\x02\u0B27\u0B28\x03\x02" +
		"\x02\x02\u0B28\u0B29\x03\x02\x02\x02\u0B29\u0B2B\x05\u011E\x90\x02\u0B2A" +
		"\u0B23\x03\x02\x02\x02\u0B2A\u0B2B\x03\x02\x02\x02\u0B2B\u0127\x03\x02" +
		"\x02\x02\u0B2C\u0B2D\x05\u0118\x8D\x02\u0B2D\u0B2E\x07\xB7\x02\x02\u0B2E" +
		"\u0129\x03\x02\x02\x02\u0B2F\u0B30\t\x11\x02\x02\u0B30\u012B\x03\x02\x02" +
		"\x02\u0B31\u0B32\t\x12\x02\x02\u0B32\u012D\x03\x02\x02\x02\u0B33\u0B34" +
		"\t\x13\x02\x02\u0B34\u012F\x03\x02\x02\x02\u0B35\u0B38\x05\u011C\x8F\x02" +
		"\u0B36\u0B38\x05\u0122\x92\x02\u0B37\u0B35\x03\x02\x02\x02\u0B37\u0B36" +
		"\x03\x02\x02\x02\u0B38\u0B41\x03\x02\x02\x02\u0B39\u0B3B\x07\xDF\x02\x02" +
		"\u0B3A\u0B39\x03\x02\x02\x02\u0B3A\u0B3B\x03\x02\x02\x02\u0B3B\u0B3C\x03" +
		"\x02\x02\x02\u0B3C\u0B3E\x07\xC3\x02\x02\u0B3D\u0B3F\x07\xDF\x02\x02\u0B3E" +
		"\u0B3D\x03\x02\x02\x02\u0B3E\u0B3F\x03\x02\x02\x02\u0B3F\u0B40\x03\x02" +
		"\x02\x02\u0B40\u0B42\x07\xCE\x02\x02\u0B41\u0B3A\x03\x02\x02\x02\u0B41" +
		"\u0B42\x03\x02\x02\x02\u0B42\u0131\x03\x02\x02\x02\u0B43\u0B44\t\x14\x02" +
		"\x02\u0B44\u0133\x03\x02\x02\x02\u0B45\u0B46\t\x15\x02\x02\u0B46\u0135" +
		"\x03\x02\x02\x02\u0B47\u0B48\t\x16\x02\x02\u0B48\u0137\x03\x02\x02\x02" +
		"\u01F6\u013C\u0141\u0148\u014A\u014D\u0152\u0156\u015B\u015F\u0164\u0168" +
		"\u016D\u0171\u0176\u017A\u017F\u0183\u0188\u018C\u0190\u0195\u0198\u019D" +
		"\u01A9\u01AF\u01B4\u01BA\u01BE\u01C2\u01CB\u01CF\u01D5\u01D9\u01E3\u01E9" +
		"\u01EE\u01FD\u0200\u0208\u020D\u0212\u0218\u021E\u0221\u0225\u0229\u022C" +
		"\u0230\u0235\u0239\u0240\u0248\u024C\u0250\u0259\u025C\u0264\u0268\u026D" +
		"\u0272\u0274\u027A\u0286\u028A\u028E\u0292\u0297\u029E\u02A1\u02A6\u02EC" +
		"\u02F2\u02F6\u02F9\u0309\u030D\u0312\u0315\u031A\u0320\u0324\u0329\u032E" +
		"\u0332\u0335\u0339\u033F\u0343\u034A\u0350\u0353\u0358\u0362\u0365\u0368" +
		"\u036C\u0372\u0376\u037B\u0382\u0386\u038A\u038E\u0391\u0397\u039D\u039F" +
		"\u03AA\u03B0\u03B2\u03BA\u03C0\u03C8\u03CF\u03D7\u03DC\u03E3\u03E7\u03EA" +
		"\u03EF\u03F5\u03F9\u03FE\u0408\u040E\u0418\u041C\u0426\u042F\u0435\u0437" +
		"\u043C\u0442\u0446\u0449\u044D\u0458\u045D\u0463\u0465\u046B\u046D\u0472" +
		"\u0476\u047C\u047F\u0483\u0488\u048E\u0490\u0498\u049C\u049F\u04A2\u04A6" +
		"\u04BD\u04C3\u04C7\u04CB\u04D5\u04DB\u04DD\u04E9\u04EF\u04F1\u04F7\u04FD" +
		"\u04FF\u0509\u050D\u0512\u051A\u051E\u0522\u052A\u052E\u053A\u053E\u0545" +
		"\u0547\u054D\u0551\u0559\u055D\u0569\u056F\u0571\u057B\u0581\u0583\u0589" +
		"\u058F\u0591\u0595\u0599\u059D\u05B3\u05B8\u05C2\u05C6\u05CB\u05D6\u05DA" +
		"\u05DF\u05ED\u05F1\u05FA\u05FE\u0601\u0605\u0609\u060C\u0610\u0614\u0617" +
		"\u061B\u061E\u0622\u0624\u0628\u062C\u0630\u0634\u0637\u063D\u0641\u0644" +
		"\u0649\u064D\u0653\u0656\u0659\u065D\u0662\u0668\u066A\u0671\u0675\u067B" +
		"\u067E\u0683\u0689\u068B\u0692\u0696\u069C\u069F\u06A4\u06AA\u06AC\u06B4" +
		"\u06B8\u06BB\u06BE\u06C2\u06CA\u06CE\u06D2\u06D4\u06D7\u06DC\u06E2\u06E6" +
		"\u06EA\u06EF\u06F4\u06F8\u06FC\u0701\u0709\u070B\u0717\u071B\u0723\u0727" +
		"\u072F\u0733\u0737\u073B\u073F\u0743\u074B\u074F\u075B\u0760\u0764\u076C" +
		"\u076F\u0774\u077A\u077C\u0782\u0784\u0789\u078D\u0792\u0795\u0799\u079D" +
		"\u07A8\u07AE\u07B2\u07B5\u07BB\u07BF\u07C7\u07CB\u07D4\u07D8\u07DE\u07E1" +
		"\u07E6\u07EC\u07EE\u07F4\u07F8\u07FF\u0807\u080C\u0813\u0817\u081A\u081D" +
		"\u0820\u0824\u0829\u0832\u083C\u0840\u0847\u0849\u084F\u0853\u0857\u085C" +
		"\u0860\u086D\u0871\u0877\u087C\u0884\u0888\u088C\u0890\u0894\u0898\u089D" +
		"\u08A1\u08A6\u08AA\u08AF\u08B3\u08B8\u08BC\u08C1\u08C5\u08CA\u08CE\u08D3" +
		"\u08D7\u08DC\u08E0\u08E5\u08E9\u08EE\u08F2\u08F7\u08FB\u0900\u0904\u0913" +
		"\u0917\u091C\u0920\u0925\u0929\u092E\u0932\u0937\u093B\u093E\u0940\u0946" +
		"\u094B\u0951\u0955\u095A\u095F\u0962\u0966\u096A\u096C\u0970\u0972\u0976" +
		"\u097E\u0983\u0989\u0992\u0996\u099E\u09A4\u09AA\u09AC\u09B4\u09B8\u09BB" +
		"\u09BF\u09C5\u09C8\u09CC\u09D0\u09D4\u09D9\u09DD\u09E1\u09E4\u09E8\u09EC" +
		"\u09F0\u09F4\u09F9\u09FC\u0A01\u0A05\u0A08\u0A0E\u0A12\u0A15\u0A1A\u0A1D" +
		"\u0A20\u0A24\u0A28\u0A2A\u0A2F\u0A32\u0A36\u0A39\u0A3D\u0A41\u0A43\u0A49" +
		"\u0A4E\u0A51\u0A54\u0A59\u0A5E\u0A61\u0A65\u0A69\u0A6E\u0A72\u0A75\u0A79" +
		"\u0A7E\u0A85\u0A89\u0A8D\u0A91\u0A96\u0A99\u0A9C\u0AA2\u0AA6\u0AAA\u0AAE" +
		"\u0AB1\u0AB5\u0AB8\u0ABC\u0ABF\u0AC2\u0AC6\u0ACC\u0AD0\u0AD5\u0ADD\u0AE3" +
		"\u0AE5\u0AEA\u0AEC\u0AEF\u0AF5\u0AFA\u0B01\u0B03\u0B09\u0B0B\u0B0D\u0B16" +
		"\u0B1B\u0B1F\u0B23\u0B27\u0B2A\u0B37\u0B3A\u0B3E\u0B41";
	public static readonly _serializedATN: string = Utils.join(
		[
			VisualBasic6Parser._serializedATNSegment0,
			VisualBasic6Parser._serializedATNSegment1,
			VisualBasic6Parser._serializedATNSegment2,
			VisualBasic6Parser._serializedATNSegment3,
			VisualBasic6Parser._serializedATNSegment4,
			VisualBasic6Parser._serializedATNSegment5,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!VisualBasic6Parser.__ATN) {
			VisualBasic6Parser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(VisualBasic6Parser._serializedATN));
		}

		return VisualBasic6Parser.__ATN;
	}

}

export class StartRuleContext extends ParserRuleContext {
	public module(): ModuleContext {
		return this.getRuleContext(0, ModuleContext);
	}
	public EOF(): TerminalNode { return this.getToken(VisualBasic6Parser.EOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_startRule; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterStartRule) {
			listener.enterStartRule(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitStartRule) {
			listener.exitStartRule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitStartRule) {
			return visitor.visitStartRule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public moduleHeader(): ModuleHeaderContext | undefined {
		return this.tryGetRuleContext(0, ModuleHeaderContext);
	}
	public moduleReferences(): ModuleReferencesContext | undefined {
		return this.tryGetRuleContext(0, ModuleReferencesContext);
	}
	public controlProperties(): ControlPropertiesContext | undefined {
		return this.tryGetRuleContext(0, ControlPropertiesContext);
	}
	public moduleConfig(): ModuleConfigContext | undefined {
		return this.tryGetRuleContext(0, ModuleConfigContext);
	}
	public moduleAttributes(): ModuleAttributesContext | undefined {
		return this.tryGetRuleContext(0, ModuleAttributesContext);
	}
	public moduleOptions(): ModuleOptionsContext | undefined {
		return this.tryGetRuleContext(0, ModuleOptionsContext);
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_module; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferencesContext extends ParserRuleContext {
	public moduleReference(): ModuleReferenceContext[];
	public moduleReference(i: number): ModuleReferenceContext;
	public moduleReference(i?: number): ModuleReferenceContext | ModuleReferenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleReferenceContext);
		} else {
			return this.getRuleContext(i, ModuleReferenceContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleReferences; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleReferences) {
			listener.enterModuleReferences(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleReferences) {
			listener.exitModuleReferences(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleReferences) {
			return visitor.visitModuleReferences(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceContext extends ParserRuleContext {
	public OBJECT(): TerminalNode { return this.getToken(VisualBasic6Parser.OBJECT, 0); }
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public moduleReferenceValue(): ModuleReferenceValueContext {
		return this.getRuleContext(0, ModuleReferenceValueContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public SEMICOLON(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SEMICOLON, 0); }
	public moduleReferenceComponent(): ModuleReferenceComponentContext | undefined {
		return this.tryGetRuleContext(0, ModuleReferenceComponentContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleReference; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleReference) {
			listener.enterModuleReference(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleReference) {
			listener.exitModuleReference(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleReference) {
			return visitor.visitModuleReference(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceValueContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(VisualBasic6Parser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleReferenceValue; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleReferenceValue) {
			listener.enterModuleReferenceValue(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleReferenceValue) {
			listener.exitModuleReferenceValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleReferenceValue) {
			return visitor.visitModuleReferenceValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleReferenceComponentContext extends ParserRuleContext {
	public STRINGLITERAL(): TerminalNode { return this.getToken(VisualBasic6Parser.STRINGLITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleReferenceComponent; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleReferenceComponent) {
			listener.enterModuleReferenceComponent(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleReferenceComponent) {
			listener.exitModuleReferenceComponent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleReferenceComponent) {
			return visitor.visitModuleReferenceComponent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleHeaderContext extends ParserRuleContext {
	public VERSION(): TerminalNode { return this.getToken(VisualBasic6Parser.VERSION, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public DOUBLELITERAL(): TerminalNode { return this.getToken(VisualBasic6Parser.DOUBLELITERAL, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CLASS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleHeader; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleHeader) {
			listener.enterModuleHeader(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleHeader) {
			listener.exitModuleHeader(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleHeader) {
			return visitor.visitModuleHeader(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(VisualBasic6Parser.BEGIN, 0); }
	public END(): TerminalNode { return this.getToken(VisualBasic6Parser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public moduleConfigElement(): ModuleConfigElementContext[];
	public moduleConfigElement(i: number): ModuleConfigElementContext;
	public moduleConfigElement(i?: number): ModuleConfigElementContext | ModuleConfigElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleConfigElementContext);
		} else {
			return this.getRuleContext(i, ModuleConfigElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleConfig; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleConfig) {
			listener.enterModuleConfig(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleConfig) {
			listener.exitModuleConfig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleConfig) {
			return visitor.visitModuleConfig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleConfigElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	public NEWLINE(): TerminalNode { return this.getToken(VisualBasic6Parser.NEWLINE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleConfigElement; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleConfigElement) {
			listener.enterModuleConfigElement(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleConfigElement) {
			listener.exitModuleConfigElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleConfigElement) {
			return visitor.visitModuleConfigElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleAttributesContext extends ParserRuleContext {
	public attributeStmt(): AttributeStmtContext[];
	public attributeStmt(i: number): AttributeStmtContext;
	public attributeStmt(i?: number): AttributeStmtContext | AttributeStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AttributeStmtContext);
		} else {
			return this.getRuleContext(i, AttributeStmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleAttributes; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleAttributes) {
			listener.enterModuleAttributes(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleAttributes) {
			listener.exitModuleAttributes(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleAttributes) {
			return visitor.visitModuleAttributes(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleOptionsContext extends ParserRuleContext {
	public moduleOption(): ModuleOptionContext[];
	public moduleOption(i: number): ModuleOptionContext;
	public moduleOption(i?: number): ModuleOptionContext | ModuleOptionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleOptionContext);
		} else {
			return this.getRuleContext(i, ModuleOptionContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleOptions; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleOptions) {
			listener.enterModuleOptions(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleOptions) {
			listener.exitModuleOptions(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleOptions) {
			return visitor.visitModuleOptions(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleOptionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleOption; }
	public copyFrom(ctx: ModuleOptionContext): void {
		super.copyFrom(ctx);
	}
}
export class OptionBaseStmtContext extends ModuleOptionContext {
	public OPTION_BASE(): TerminalNode { return this.getToken(VisualBasic6Parser.OPTION_BASE, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public INTEGERLITERAL(): TerminalNode { return this.getToken(VisualBasic6Parser.INTEGERLITERAL, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOptionBaseStmt) {
			listener.enterOptionBaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOptionBaseStmt) {
			listener.exitOptionBaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOptionBaseStmt) {
			return visitor.visitOptionBaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionCompareStmtContext extends ModuleOptionContext {
	public OPTION_COMPARE(): TerminalNode { return this.getToken(VisualBasic6Parser.OPTION_COMPARE, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BINARY, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TEXT, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOptionCompareStmt) {
			listener.enterOptionCompareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOptionCompareStmt) {
			listener.exitOptionCompareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOptionCompareStmt) {
			return visitor.visitOptionCompareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionExplicitStmtContext extends ModuleOptionContext {
	public OPTION_EXPLICIT(): TerminalNode { return this.getToken(VisualBasic6Parser.OPTION_EXPLICIT, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOptionExplicitStmt) {
			listener.enterOptionExplicitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOptionExplicitStmt) {
			listener.exitOptionExplicitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOptionExplicitStmt) {
			return visitor.visitOptionExplicitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OptionPrivateModuleStmtContext extends ModuleOptionContext {
	public OPTION_PRIVATE_MODULE(): TerminalNode { return this.getToken(VisualBasic6Parser.OPTION_PRIVATE_MODULE, 0); }
	constructor(ctx: ModuleOptionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOptionPrivateModuleStmt) {
			listener.enterOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOptionPrivateModuleStmt) {
			listener.exitOptionPrivateModuleStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOptionPrivateModuleStmt) {
			return visitor.visitOptionPrivateModuleStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public moduleBodyElement(): ModuleBodyElementContext[];
	public moduleBodyElement(i: number): ModuleBodyElementContext;
	public moduleBodyElement(i?: number): ModuleBodyElementContext | ModuleBodyElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleBodyElementContext);
		} else {
			return this.getRuleContext(i, ModuleBodyElementContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleBody) {
			return visitor.visitModuleBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBodyElementContext extends ParserRuleContext {
	public moduleBlock(): ModuleBlockContext | undefined {
		return this.tryGetRuleContext(0, ModuleBlockContext);
	}
	public moduleOption(): ModuleOptionContext | undefined {
		return this.tryGetRuleContext(0, ModuleOptionContext);
	}
	public declareStmt(): DeclareStmtContext | undefined {
		return this.tryGetRuleContext(0, DeclareStmtContext);
	}
	public enumerationStmt(): EnumerationStmtContext | undefined {
		return this.tryGetRuleContext(0, EnumerationStmtContext);
	}
	public eventStmt(): EventStmtContext | undefined {
		return this.tryGetRuleContext(0, EventStmtContext);
	}
	public functionStmt(): FunctionStmtContext | undefined {
		return this.tryGetRuleContext(0, FunctionStmtContext);
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroIfThenElseStmtContext);
	}
	public propertyGetStmt(): PropertyGetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyGetStmtContext);
	}
	public propertySetStmt(): PropertySetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertySetStmtContext);
	}
	public propertyLetStmt(): PropertyLetStmtContext | undefined {
		return this.tryGetRuleContext(0, PropertyLetStmtContext);
	}
	public subStmt(): SubStmtContext | undefined {
		return this.tryGetRuleContext(0, SubStmtContext);
	}
	public typeStmt(): TypeStmtContext | undefined {
		return this.tryGetRuleContext(0, TypeStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleBodyElement; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleBodyElement) {
			listener.enterModuleBodyElement(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleBodyElement) {
			listener.exitModuleBodyElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleBodyElement) {
			return visitor.visitModuleBodyElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ControlPropertiesContext extends ParserRuleContext {
	public BEGIN(): TerminalNode { return this.getToken(VisualBasic6Parser.BEGIN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public cp_ControlType(): Cp_ControlTypeContext {
		return this.getRuleContext(0, Cp_ControlTypeContext);
	}
	public cp_ControlIdentifier(): Cp_ControlIdentifierContext {
		return this.getRuleContext(0, Cp_ControlIdentifierContext);
	}
	public END(): TerminalNode { return this.getToken(VisualBasic6Parser.END, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public cp_Properties(): Cp_PropertiesContext[];
	public cp_Properties(i: number): Cp_PropertiesContext;
	public cp_Properties(i?: number): Cp_PropertiesContext | Cp_PropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cp_PropertiesContext);
		} else {
			return this.getRuleContext(i, Cp_PropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_controlProperties; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterControlProperties) {
			listener.enterControlProperties(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitControlProperties) {
			listener.exitControlProperties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitControlProperties) {
			return visitor.visitControlProperties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertiesContext extends ParserRuleContext {
	public cp_SingleProperty(): Cp_SinglePropertyContext | undefined {
		return this.tryGetRuleContext(0, Cp_SinglePropertyContext);
	}
	public cp_NestedProperty(): Cp_NestedPropertyContext | undefined {
		return this.tryGetRuleContext(0, Cp_NestedPropertyContext);
	}
	public controlProperties(): ControlPropertiesContext | undefined {
		return this.tryGetRuleContext(0, ControlPropertiesContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_Properties; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_Properties) {
			listener.enterCp_Properties(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_Properties) {
			listener.exitCp_Properties(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_Properties) {
			return visitor.visitCp_Properties(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_SinglePropertyContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public cp_PropertyValue(): Cp_PropertyValueContext {
		return this.getRuleContext(0, Cp_PropertyValueContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOLLAR, 0); }
	public FRX_OFFSET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FRX_OFFSET, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_SingleProperty; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_SingleProperty) {
			listener.enterCp_SingleProperty(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_SingleProperty) {
			listener.exitCp_SingleProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_SingleProperty) {
			return visitor.visitCp_SingleProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertyNameContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OBJECT, 0); }
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.DOT);
		} else {
			return this.getToken(VisualBasic6Parser.DOT, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.LPAREN);
		} else {
			return this.getToken(VisualBasic6Parser.LPAREN, i);
		}
	}
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.RPAREN);
		} else {
			return this.getToken(VisualBasic6Parser.RPAREN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_PropertyName; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_PropertyName) {
			listener.enterCp_PropertyName(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_PropertyName) {
			listener.exitCp_PropertyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_PropertyName) {
			return visitor.visitCp_PropertyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_PropertyValueContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public POW(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.POW, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOLLAR, 0); }
	public LBRACE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LBRACE, 0); }
	public RBRACE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RBRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_PropertyValue; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_PropertyValue) {
			listener.enterCp_PropertyValue(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_PropertyValue) {
			listener.exitCp_PropertyValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_PropertyValue) {
			return visitor.visitCp_PropertyValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_NestedPropertyContext extends ParserRuleContext {
	public BEGINPROPERTY(): TerminalNode { return this.getToken(VisualBasic6Parser.BEGINPROPERTY, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public ENDPROPERTY(): TerminalNode { return this.getToken(VisualBasic6Parser.ENDPROPERTY, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INTEGERLITERAL, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public GUID(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GUID, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public cp_Properties(): Cp_PropertiesContext[];
	public cp_Properties(i: number): Cp_PropertiesContext;
	public cp_Properties(i?: number): Cp_PropertiesContext | Cp_PropertiesContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Cp_PropertiesContext);
		} else {
			return this.getRuleContext(i, Cp_PropertiesContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_NestedProperty; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_NestedProperty) {
			listener.enterCp_NestedProperty(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_NestedProperty) {
			listener.exitCp_NestedProperty(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_NestedProperty) {
			return visitor.visitCp_NestedProperty(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_ControlTypeContext extends ParserRuleContext {
	public complexType(): ComplexTypeContext {
		return this.getRuleContext(0, ComplexTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_ControlType; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_ControlType) {
			listener.enterCp_ControlType(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_ControlType) {
			listener.exitCp_ControlType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_ControlType) {
			return visitor.visitCp_ControlType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Cp_ControlIdentifierContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_cp_ControlIdentifier; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCp_ControlIdentifier) {
			listener.enterCp_ControlIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCp_ControlIdentifier) {
			listener.exitCp_ControlIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCp_ControlIdentifier) {
			return visitor.visitCp_ControlIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ModuleBlockContext extends ParserRuleContext {
	public block(): BlockContext {
		return this.getRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_moduleBlock; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterModuleBlock) {
			listener.enterModuleBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitModuleBlock) {
			listener.exitModuleBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitModuleBlock) {
			return visitor.visitModuleBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AttributeStmtContext extends ParserRuleContext {
	public ATTRIBUTE(): TerminalNode { return this.getToken(VisualBasic6Parser.ATTRIBUTE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_attributeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterAttributeStmt) {
			listener.enterAttributeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitAttributeStmt) {
			listener.exitAttributeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitAttributeStmt) {
			return visitor.visitAttributeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_block; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterBlock) {
			listener.enterBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitBlock) {
			listener.exitBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitBlock) {
			return visitor.visitBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BlockStmtContext extends ParserRuleContext {
	public appActivateStmt(): AppActivateStmtContext | undefined {
		return this.tryGetRuleContext(0, AppActivateStmtContext);
	}
	public attributeStmt(): AttributeStmtContext | undefined {
		return this.tryGetRuleContext(0, AttributeStmtContext);
	}
	public beepStmt(): BeepStmtContext | undefined {
		return this.tryGetRuleContext(0, BeepStmtContext);
	}
	public chDirStmt(): ChDirStmtContext | undefined {
		return this.tryGetRuleContext(0, ChDirStmtContext);
	}
	public chDriveStmt(): ChDriveStmtContext | undefined {
		return this.tryGetRuleContext(0, ChDriveStmtContext);
	}
	public closeStmt(): CloseStmtContext | undefined {
		return this.tryGetRuleContext(0, CloseStmtContext);
	}
	public constStmt(): ConstStmtContext | undefined {
		return this.tryGetRuleContext(0, ConstStmtContext);
	}
	public dateStmt(): DateStmtContext | undefined {
		return this.tryGetRuleContext(0, DateStmtContext);
	}
	public deleteSettingStmt(): DeleteSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, DeleteSettingStmtContext);
	}
	public deftypeStmt(): DeftypeStmtContext | undefined {
		return this.tryGetRuleContext(0, DeftypeStmtContext);
	}
	public doLoopStmt(): DoLoopStmtContext | undefined {
		return this.tryGetRuleContext(0, DoLoopStmtContext);
	}
	public endStmt(): EndStmtContext | undefined {
		return this.tryGetRuleContext(0, EndStmtContext);
	}
	public eraseStmt(): EraseStmtContext | undefined {
		return this.tryGetRuleContext(0, EraseStmtContext);
	}
	public errorStmt(): ErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, ErrorStmtContext);
	}
	public exitStmt(): ExitStmtContext | undefined {
		return this.tryGetRuleContext(0, ExitStmtContext);
	}
	public explicitCallStmt(): ExplicitCallStmtContext | undefined {
		return this.tryGetRuleContext(0, ExplicitCallStmtContext);
	}
	public filecopyStmt(): FilecopyStmtContext | undefined {
		return this.tryGetRuleContext(0, FilecopyStmtContext);
	}
	public forEachStmt(): ForEachStmtContext | undefined {
		return this.tryGetRuleContext(0, ForEachStmtContext);
	}
	public forNextStmt(): ForNextStmtContext | undefined {
		return this.tryGetRuleContext(0, ForNextStmtContext);
	}
	public getStmt(): GetStmtContext | undefined {
		return this.tryGetRuleContext(0, GetStmtContext);
	}
	public goSubStmt(): GoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, GoSubStmtContext);
	}
	public goToStmt(): GoToStmtContext | undefined {
		return this.tryGetRuleContext(0, GoToStmtContext);
	}
	public ifThenElseStmt(): IfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, IfThenElseStmtContext);
	}
	public implementsStmt(): ImplementsStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplementsStmtContext);
	}
	public inputStmt(): InputStmtContext | undefined {
		return this.tryGetRuleContext(0, InputStmtContext);
	}
	public killStmt(): KillStmtContext | undefined {
		return this.tryGetRuleContext(0, KillStmtContext);
	}
	public letStmt(): LetStmtContext | undefined {
		return this.tryGetRuleContext(0, LetStmtContext);
	}
	public lineInputStmt(): LineInputStmtContext | undefined {
		return this.tryGetRuleContext(0, LineInputStmtContext);
	}
	public lineLabel(): LineLabelContext | undefined {
		return this.tryGetRuleContext(0, LineLabelContext);
	}
	public loadStmt(): LoadStmtContext | undefined {
		return this.tryGetRuleContext(0, LoadStmtContext);
	}
	public lockStmt(): LockStmtContext | undefined {
		return this.tryGetRuleContext(0, LockStmtContext);
	}
	public lsetStmt(): LsetStmtContext | undefined {
		return this.tryGetRuleContext(0, LsetStmtContext);
	}
	public macroIfThenElseStmt(): MacroIfThenElseStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroIfThenElseStmtContext);
	}
	public midStmt(): MidStmtContext | undefined {
		return this.tryGetRuleContext(0, MidStmtContext);
	}
	public mkdirStmt(): MkdirStmtContext | undefined {
		return this.tryGetRuleContext(0, MkdirStmtContext);
	}
	public nameStmt(): NameStmtContext | undefined {
		return this.tryGetRuleContext(0, NameStmtContext);
	}
	public onErrorStmt(): OnErrorStmtContext | undefined {
		return this.tryGetRuleContext(0, OnErrorStmtContext);
	}
	public onGoToStmt(): OnGoToStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoToStmtContext);
	}
	public onGoSubStmt(): OnGoSubStmtContext | undefined {
		return this.tryGetRuleContext(0, OnGoSubStmtContext);
	}
	public openStmt(): OpenStmtContext | undefined {
		return this.tryGetRuleContext(0, OpenStmtContext);
	}
	public printStmt(): PrintStmtContext | undefined {
		return this.tryGetRuleContext(0, PrintStmtContext);
	}
	public putStmt(): PutStmtContext | undefined {
		return this.tryGetRuleContext(0, PutStmtContext);
	}
	public raiseEventStmt(): RaiseEventStmtContext | undefined {
		return this.tryGetRuleContext(0, RaiseEventStmtContext);
	}
	public randomizeStmt(): RandomizeStmtContext | undefined {
		return this.tryGetRuleContext(0, RandomizeStmtContext);
	}
	public redimStmt(): RedimStmtContext | undefined {
		return this.tryGetRuleContext(0, RedimStmtContext);
	}
	public resetStmt(): ResetStmtContext | undefined {
		return this.tryGetRuleContext(0, ResetStmtContext);
	}
	public resumeStmt(): ResumeStmtContext | undefined {
		return this.tryGetRuleContext(0, ResumeStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public rmdirStmt(): RmdirStmtContext | undefined {
		return this.tryGetRuleContext(0, RmdirStmtContext);
	}
	public rsetStmt(): RsetStmtContext | undefined {
		return this.tryGetRuleContext(0, RsetStmtContext);
	}
	public savepictureStmt(): SavepictureStmtContext | undefined {
		return this.tryGetRuleContext(0, SavepictureStmtContext);
	}
	public saveSettingStmt(): SaveSettingStmtContext | undefined {
		return this.tryGetRuleContext(0, SaveSettingStmtContext);
	}
	public seekStmt(): SeekStmtContext | undefined {
		return this.tryGetRuleContext(0, SeekStmtContext);
	}
	public selectCaseStmt(): SelectCaseStmtContext | undefined {
		return this.tryGetRuleContext(0, SelectCaseStmtContext);
	}
	public sendkeysStmt(): SendkeysStmtContext | undefined {
		return this.tryGetRuleContext(0, SendkeysStmtContext);
	}
	public setattrStmt(): SetattrStmtContext | undefined {
		return this.tryGetRuleContext(0, SetattrStmtContext);
	}
	public setStmt(): SetStmtContext | undefined {
		return this.tryGetRuleContext(0, SetStmtContext);
	}
	public stopStmt(): StopStmtContext | undefined {
		return this.tryGetRuleContext(0, StopStmtContext);
	}
	public timeStmt(): TimeStmtContext | undefined {
		return this.tryGetRuleContext(0, TimeStmtContext);
	}
	public unloadStmt(): UnloadStmtContext | undefined {
		return this.tryGetRuleContext(0, UnloadStmtContext);
	}
	public unlockStmt(): UnlockStmtContext | undefined {
		return this.tryGetRuleContext(0, UnlockStmtContext);
	}
	public variableStmt(): VariableStmtContext | undefined {
		return this.tryGetRuleContext(0, VariableStmtContext);
	}
	public whileWendStmt(): WhileWendStmtContext | undefined {
		return this.tryGetRuleContext(0, WhileWendStmtContext);
	}
	public widthStmt(): WidthStmtContext | undefined {
		return this.tryGetRuleContext(0, WidthStmtContext);
	}
	public withStmt(): WithStmtContext | undefined {
		return this.tryGetRuleContext(0, WithStmtContext);
	}
	public writeStmt(): WriteStmtContext | undefined {
		return this.tryGetRuleContext(0, WriteStmtContext);
	}
	public implicitCallStmt_InBlock(): ImplicitCallStmt_InBlockContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InBlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_blockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterBlockStmt) {
			listener.enterBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitBlockStmt) {
			listener.exitBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitBlockStmt) {
			return visitor.visitBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AppActivateStmtContext extends ParserRuleContext {
	public APPACTIVATE(): TerminalNode { return this.getToken(VisualBasic6Parser.APPACTIVATE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_appActivateStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterAppActivateStmt) {
			listener.enterAppActivateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitAppActivateStmt) {
			listener.exitAppActivateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitAppActivateStmt) {
			return visitor.visitAppActivateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BeepStmtContext extends ParserRuleContext {
	public BEEP(): TerminalNode { return this.getToken(VisualBasic6Parser.BEEP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_beepStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterBeepStmt) {
			listener.enterBeepStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitBeepStmt) {
			listener.exitBeepStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitBeepStmt) {
			return visitor.visitBeepStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChDirStmtContext extends ParserRuleContext {
	public CHDIR(): TerminalNode { return this.getToken(VisualBasic6Parser.CHDIR, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_chDirStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterChDirStmt) {
			listener.enterChDirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitChDirStmt) {
			listener.exitChDirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitChDirStmt) {
			return visitor.visitChDirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChDriveStmtContext extends ParserRuleContext {
	public CHDRIVE(): TerminalNode { return this.getToken(VisualBasic6Parser.CHDRIVE, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_chDriveStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterChDriveStmt) {
			listener.enterChDriveStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitChDriveStmt) {
			listener.exitChDriveStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitChDriveStmt) {
			return visitor.visitChDriveStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CloseStmtContext extends ParserRuleContext {
	public CLOSE(): TerminalNode { return this.getToken(VisualBasic6Parser.CLOSE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_closeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCloseStmt) {
			listener.enterCloseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCloseStmt) {
			listener.exitCloseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCloseStmt) {
			return visitor.visitCloseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstStmtContext extends ParserRuleContext {
	public CONST(): TerminalNode { return this.getToken(VisualBasic6Parser.CONST, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public constSubStmt(): ConstSubStmtContext[];
	public constSubStmt(i: number): ConstSubStmtContext;
	public constSubStmt(i?: number): ConstSubStmtContext | ConstSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstSubStmtContext);
		} else {
			return this.getRuleContext(i, ConstSubStmtContext);
		}
	}
	public publicPrivateGlobalVisibility(): PublicPrivateGlobalVisibilityContext | undefined {
		return this.tryGetRuleContext(0, PublicPrivateGlobalVisibilityContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_constStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterConstStmt) {
			listener.enterConstStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitConstStmt) {
			listener.exitConstStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitConstStmt) {
			return visitor.visitConstStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConstSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_constSubStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterConstSubStmt) {
			listener.enterConstSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitConstSubStmt) {
			listener.exitConstSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitConstSubStmt) {
			return visitor.visitConstSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DateStmtContext extends ParserRuleContext {
	public DATE(): TerminalNode { return this.getToken(VisualBasic6Parser.DATE, 0); }
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_dateStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDateStmt) {
			listener.enterDateStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDateStmt) {
			listener.exitDateStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDateStmt) {
			return visitor.visitDateStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclareStmtContext extends ParserRuleContext {
	public DECLARE(): TerminalNode { return this.getToken(VisualBasic6Parser.DECLARE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LIB(): TerminalNode { return this.getToken(VisualBasic6Parser.LIB, 0); }
	public STRINGLITERAL(): TerminalNode[];
	public STRINGLITERAL(i: number): TerminalNode;
	public STRINGLITERAL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.STRINGLITERAL);
		} else {
			return this.getToken(VisualBasic6Parser.STRINGLITERAL, i);
		}
	}
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FUNCTION, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public typeHint(): TypeHintContext[];
	public typeHint(i: number): TypeHintContext;
	public typeHint(i?: number): TypeHintContext | TypeHintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeHintContext);
		} else {
			return this.getRuleContext(i, TypeHintContext);
		}
	}
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ALIAS, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_declareStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDeclareStmt) {
			listener.enterDeclareStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDeclareStmt) {
			listener.exitDeclareStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDeclareStmt) {
			return visitor.visitDeclareStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeftypeStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public letterrange(): LetterrangeContext[];
	public letterrange(i: number): LetterrangeContext;
	public letterrange(i?: number): LetterrangeContext | LetterrangeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LetterrangeContext);
		} else {
			return this.getRuleContext(i, LetterrangeContext);
		}
	}
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFBYTE, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFLNG, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFCUR, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFSNG, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDBL, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDEC, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDATE, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFSTR, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFOBJ, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFVAR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_deftypeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDeftypeStmt) {
			listener.enterDeftypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDeftypeStmt) {
			listener.exitDeftypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDeftypeStmt) {
			return visitor.visitDeftypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeleteSettingStmtContext extends ParserRuleContext {
	public DELETESETTING(): TerminalNode { return this.getToken(VisualBasic6Parser.DELETESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_deleteSettingStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDeleteSettingStmt) {
			listener.enterDeleteSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDeleteSettingStmt) {
			listener.exitDeleteSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDeleteSettingStmt) {
			return visitor.visitDeleteSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DoLoopStmtContext extends ParserRuleContext {
	public DO(): TerminalNode { return this.getToken(VisualBasic6Parser.DO, 0); }
	public LOOP(): TerminalNode { return this.getToken(VisualBasic6Parser.LOOP, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WHILE, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.UNTIL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_doLoopStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDoLoopStmt) {
			listener.enterDoLoopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDoLoopStmt) {
			listener.exitDoLoopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDoLoopStmt) {
			return visitor.visitDoLoopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndStmtContext extends ParserRuleContext {
	public END(): TerminalNode { return this.getToken(VisualBasic6Parser.END, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_endStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterEndStmt) {
			listener.enterEndStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitEndStmt) {
			listener.exitEndStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitEndStmt) {
			return visitor.visitEndStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmtContext extends ParserRuleContext {
	public ENUM(): TerminalNode { return this.getToken(VisualBasic6Parser.ENUM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_ENUM(): TerminalNode { return this.getToken(VisualBasic6Parser.END_ENUM, 0); }
	public publicPrivateVisibility(): PublicPrivateVisibilityContext | undefined {
		return this.tryGetRuleContext(0, PublicPrivateVisibilityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public enumerationStmt_Constant(): EnumerationStmt_ConstantContext[];
	public enumerationStmt_Constant(i: number): EnumerationStmt_ConstantContext;
	public enumerationStmt_Constant(i?: number): EnumerationStmt_ConstantContext | EnumerationStmt_ConstantContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationStmt_ConstantContext);
		} else {
			return this.getRuleContext(i, EnumerationStmt_ConstantContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_enumerationStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterEnumerationStmt) {
			listener.enterEnumerationStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitEnumerationStmt) {
			listener.exitEnumerationStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitEnumerationStmt) {
			return visitor.visitEnumerationStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EnumerationStmt_ConstantContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_enumerationStmt_Constant; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterEnumerationStmt_Constant) {
			listener.enterEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitEnumerationStmt_Constant) {
			listener.exitEnumerationStmt_Constant(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitEnumerationStmt_Constant) {
			return visitor.visitEnumerationStmt_Constant(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EraseStmtContext extends ParserRuleContext {
	public ERASE(): TerminalNode { return this.getToken(VisualBasic6Parser.ERASE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_eraseStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterEraseStmt) {
			listener.enterEraseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitEraseStmt) {
			listener.exitEraseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitEraseStmt) {
			return visitor.visitEraseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ErrorStmtContext extends ParserRuleContext {
	public ERROR(): TerminalNode { return this.getToken(VisualBasic6Parser.ERROR, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_errorStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterErrorStmt) {
			listener.enterErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitErrorStmt) {
			listener.exitErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitErrorStmt) {
			return visitor.visitErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EventStmtContext extends ParserRuleContext {
	public EVENT(): TerminalNode { return this.getToken(VisualBasic6Parser.EVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public argList(): ArgListContext {
		return this.getRuleContext(0, ArgListContext);
	}
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_eventStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterEventStmt) {
			listener.enterEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitEventStmt) {
			listener.exitEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitEventStmt) {
			return visitor.visitEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExitStmtContext extends ParserRuleContext {
	public EXIT_DO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXIT_DO, 0); }
	public EXIT_FOR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXIT_FOR, 0); }
	public EXIT_FUNCTION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXIT_FUNCTION, 0); }
	public EXIT_PROPERTY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXIT_PROPERTY, 0); }
	public EXIT_SUB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXIT_SUB, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_exitStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterExitStmt) {
			listener.enterExitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitExitStmt) {
			listener.exitExitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitExitStmt) {
			return visitor.visitExitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FilecopyStmtContext extends ParserRuleContext {
	public FILECOPY(): TerminalNode { return this.getToken(VisualBasic6Parser.FILECOPY, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_filecopyStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterFilecopyStmt) {
			listener.enterFilecopyStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitFilecopyStmt) {
			listener.exitFilecopyStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitFilecopyStmt) {
			return visitor.visitFilecopyStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForEachStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(VisualBasic6Parser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public EACH(): TerminalNode { return this.getToken(VisualBasic6Parser.EACH, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public IN(): TerminalNode { return this.getToken(VisualBasic6Parser.IN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public NEXT(): TerminalNode { return this.getToken(VisualBasic6Parser.NEXT, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_forEachStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterForEachStmt) {
			listener.enterForEachStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitForEachStmt) {
			listener.exitForEachStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitForEachStmt) {
			return visitor.visitForEachStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ForNextStmtContext extends ParserRuleContext {
	public FOR(): TerminalNode { return this.getToken(VisualBasic6Parser.FOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext {
		return this.getRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(VisualBasic6Parser.TO, 0); }
	public NEXT(): TerminalNode { return this.getToken(VisualBasic6Parser.NEXT, 0); }
	public typeHint(): TypeHintContext[];
	public typeHint(i: number): TypeHintContext;
	public typeHint(i?: number): TypeHintContext | TypeHintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeHintContext);
		} else {
			return this.getRuleContext(i, TypeHintContext);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public STEP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STEP, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_forNextStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterForNextStmt) {
			listener.enterForNextStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitForNextStmt) {
			listener.exitForNextStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitForNextStmt) {
			return visitor.visitForNextStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionStmtContext extends ParserRuleContext {
	public FUNCTION(): TerminalNode { return this.getToken(VisualBasic6Parser.FUNCTION, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_FUNCTION(): TerminalNode { return this.getToken(VisualBasic6Parser.END_FUNCTION, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_functionStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterFunctionStmt) {
			listener.enterFunctionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitFunctionStmt) {
			listener.exitFunctionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitFunctionStmt) {
			return visitor.visitFunctionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetStmtContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(VisualBasic6Parser.GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_getStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterGetStmt) {
			listener.enterGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitGetStmt) {
			listener.exitGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitGetStmt) {
			return visitor.visitGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoSubStmtContext extends ParserRuleContext {
	public GOSUB(): TerminalNode { return this.getToken(VisualBasic6Parser.GOSUB, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_goSubStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterGoSubStmt) {
			listener.enterGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitGoSubStmt) {
			listener.exitGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitGoSubStmt) {
			return visitor.visitGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GoToStmtContext extends ParserRuleContext {
	public GOTO(): TerminalNode { return this.getToken(VisualBasic6Parser.GOTO, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_goToStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterGoToStmt) {
			listener.enterGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitGoToStmt) {
			listener.exitGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitGoToStmt) {
			return visitor.visitGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfThenElseStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ifThenElseStmt; }
	public copyFrom(ctx: IfThenElseStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class InlineIfThenElseContext extends IfThenElseStmtContext {
	public IF(): TerminalNode { return this.getToken(VisualBasic6Parser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(VisualBasic6Parser.THEN, 0); }
	public blockStmt(): BlockStmtContext[];
	public blockStmt(i: number): BlockStmtContext;
	public blockStmt(i?: number): BlockStmtContext | BlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockStmtContext);
		} else {
			return this.getRuleContext(i, BlockStmtContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ELSE, 0); }
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterInlineIfThenElse) {
			listener.enterInlineIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitInlineIfThenElse) {
			listener.exitInlineIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitInlineIfThenElse) {
			return visitor.visitInlineIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class BlockIfThenElseContext extends IfThenElseStmtContext {
	public ifBlockStmt(): IfBlockStmtContext {
		return this.getRuleContext(0, IfBlockStmtContext);
	}
	public END_IF(): TerminalNode { return this.getToken(VisualBasic6Parser.END_IF, 0); }
	public ifElseIfBlockStmt(): IfElseIfBlockStmtContext[];
	public ifElseIfBlockStmt(i: number): IfElseIfBlockStmtContext;
	public ifElseIfBlockStmt(i?: number): IfElseIfBlockStmtContext | IfElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IfElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, IfElseIfBlockStmtContext);
		}
	}
	public ifElseBlockStmt(): IfElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, IfElseBlockStmtContext);
	}
	constructor(ctx: IfThenElseStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterBlockIfThenElse) {
			listener.enterBlockIfThenElse(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitBlockIfThenElse) {
			listener.exitBlockIfThenElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitBlockIfThenElse) {
			return visitor.visitBlockIfThenElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfBlockStmtContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(VisualBasic6Parser.IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(VisualBasic6Parser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ifBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterIfBlockStmt) {
			listener.enterIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitIfBlockStmt) {
			listener.exitIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitIfBlockStmt) {
			return visitor.visitIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfConditionStmtContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ifConditionStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterIfConditionStmt) {
			listener.enterIfConditionStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitIfConditionStmt) {
			listener.exitIfConditionStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitIfConditionStmt) {
			return visitor.visitIfConditionStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseIfBlockStmtContext extends ParserRuleContext {
	public ELSEIF(): TerminalNode { return this.getToken(VisualBasic6Parser.ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(VisualBasic6Parser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ifElseIfBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterIfElseIfBlockStmt) {
			listener.enterIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitIfElseIfBlockStmt) {
			listener.exitIfElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitIfElseIfBlockStmt) {
			return visitor.visitIfElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfElseBlockStmtContext extends ParserRuleContext {
	public ELSE(): TerminalNode { return this.getToken(VisualBasic6Parser.ELSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ifElseBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterIfElseBlockStmt) {
			listener.enterIfElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitIfElseBlockStmt) {
			listener.exitIfElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitIfElseBlockStmt) {
			return visitor.visitIfElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplementsStmtContext extends ParserRuleContext {
	public IMPLEMENTS(): TerminalNode { return this.getToken(VisualBasic6Parser.IMPLEMENTS, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_implementsStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterImplementsStmt) {
			listener.enterImplementsStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitImplementsStmt) {
			listener.exitImplementsStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitImplementsStmt) {
			return visitor.visitImplementsStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InputStmtContext extends ParserRuleContext {
	public INPUT(): TerminalNode { return this.getToken(VisualBasic6Parser.INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_inputStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterInputStmt) {
			listener.enterInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitInputStmt) {
			listener.exitInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitInputStmt) {
			return visitor.visitInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KillStmtContext extends ParserRuleContext {
	public KILL(): TerminalNode { return this.getToken(VisualBasic6Parser.KILL, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_killStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterKillStmt) {
			listener.enterKillStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitKillStmt) {
			listener.exitKillStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitKillStmt) {
			return visitor.visitKillStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EQ, 0); }
	public PLUS_EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PLUS_EQ, 0); }
	public MINUS_EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.MINUS_EQ, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_letStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLetStmt) {
			listener.enterLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLetStmt) {
			listener.exitLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLetStmt) {
			return visitor.visitLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineInputStmtContext extends ParserRuleContext {
	public LINE_INPUT(): TerminalNode { return this.getToken(VisualBasic6Parser.LINE_INPUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_lineInputStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLineInputStmt) {
			listener.enterLineInputStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLineInputStmt) {
			listener.exitLineInputStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLineInputStmt) {
			return visitor.visitLineInputStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoadStmtContext extends ParserRuleContext {
	public LOAD(): TerminalNode { return this.getToken(VisualBasic6Parser.LOAD, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_loadStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLoadStmt) {
			listener.enterLoadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLoadStmt) {
			listener.exitLoadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLoadStmt) {
			return visitor.visitLoadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LockStmtContext extends ParserRuleContext {
	public LOCK(): TerminalNode { return this.getToken(VisualBasic6Parser.LOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COMMA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_lockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLockStmt) {
			listener.enterLockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLockStmt) {
			listener.exitLockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLockStmt) {
			return visitor.visitLockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LsetStmtContext extends ParserRuleContext {
	public LSET(): TerminalNode { return this.getToken(VisualBasic6Parser.LSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_lsetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLsetStmt) {
			listener.enterLsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLsetStmt) {
			listener.exitLsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLsetStmt) {
			return visitor.visitLsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfThenElseStmtContext extends ParserRuleContext {
	public macroIfBlockStmt(): MacroIfBlockStmtContext {
		return this.getRuleContext(0, MacroIfBlockStmtContext);
	}
	public MACRO_END_IF(): TerminalNode { return this.getToken(VisualBasic6Parser.MACRO_END_IF, 0); }
	public macroElseIfBlockStmt(): MacroElseIfBlockStmtContext[];
	public macroElseIfBlockStmt(i: number): MacroElseIfBlockStmtContext;
	public macroElseIfBlockStmt(i?: number): MacroElseIfBlockStmtContext | MacroElseIfBlockStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MacroElseIfBlockStmtContext);
		} else {
			return this.getRuleContext(i, MacroElseIfBlockStmtContext);
		}
	}
	public macroElseBlockStmt(): MacroElseBlockStmtContext | undefined {
		return this.tryGetRuleContext(0, MacroElseBlockStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_macroIfThenElseStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMacroIfThenElseStmt) {
			listener.enterMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMacroIfThenElseStmt) {
			listener.exitMacroIfThenElseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMacroIfThenElseStmt) {
			return visitor.visitMacroIfThenElseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroIfBlockStmtContext extends ParserRuleContext {
	public MACRO_IF(): TerminalNode { return this.getToken(VisualBasic6Parser.MACRO_IF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(VisualBasic6Parser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_macroIfBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMacroIfBlockStmt) {
			listener.enterMacroIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMacroIfBlockStmt) {
			listener.exitMacroIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMacroIfBlockStmt) {
			return visitor.visitMacroIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseIfBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSEIF(): TerminalNode { return this.getToken(VisualBasic6Parser.MACRO_ELSEIF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ifConditionStmt(): IfConditionStmtContext {
		return this.getRuleContext(0, IfConditionStmtContext);
	}
	public THEN(): TerminalNode { return this.getToken(VisualBasic6Parser.THEN, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_macroElseIfBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMacroElseIfBlockStmt) {
			listener.enterMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMacroElseIfBlockStmt) {
			listener.exitMacroElseIfBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMacroElseIfBlockStmt) {
			return visitor.visitMacroElseIfBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MacroElseBlockStmtContext extends ParserRuleContext {
	public MACRO_ELSE(): TerminalNode { return this.getToken(VisualBasic6Parser.MACRO_ELSE, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public moduleBody(): ModuleBodyContext | undefined {
		return this.tryGetRuleContext(0, ModuleBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_macroElseBlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMacroElseBlockStmt) {
			listener.enterMacroElseBlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMacroElseBlockStmt) {
			listener.exitMacroElseBlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMacroElseBlockStmt) {
			return visitor.visitMacroElseBlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MidStmtContext extends ParserRuleContext {
	public MID(): TerminalNode { return this.getToken(VisualBasic6Parser.MID, 0); }
	public LPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.LPAREN, 0); }
	public argsCall(): ArgsCallContext {
		return this.getRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_midStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMidStmt) {
			listener.enterMidStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMidStmt) {
			listener.exitMidStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMidStmt) {
			return visitor.visitMidStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MkdirStmtContext extends ParserRuleContext {
	public MKDIR(): TerminalNode { return this.getToken(VisualBasic6Parser.MKDIR, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_mkdirStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterMkdirStmt) {
			listener.enterMkdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitMkdirStmt) {
			listener.exitMkdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitMkdirStmt) {
			return visitor.visitMkdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NameStmtContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(VisualBasic6Parser.NAME, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AS(): TerminalNode { return this.getToken(VisualBasic6Parser.AS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_nameStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterNameStmt) {
			listener.enterNameStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitNameStmt) {
			listener.exitNameStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitNameStmt) {
			return visitor.visitNameStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnErrorStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ON_ERROR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ON_ERROR, 0); }
	public ON_LOCAL_ERROR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ON_LOCAL_ERROR, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GOTO, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RESUME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEXT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_onErrorStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOnErrorStmt) {
			listener.enterOnErrorStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOnErrorStmt) {
			listener.exitOnErrorStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOnErrorStmt) {
			return visitor.visitOnErrorStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoToStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(VisualBasic6Parser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOTO(): TerminalNode { return this.getToken(VisualBasic6Parser.GOTO, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_onGoToStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOnGoToStmt) {
			listener.enterOnGoToStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOnGoToStmt) {
			listener.exitOnGoToStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOnGoToStmt) {
			return visitor.visitOnGoToStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OnGoSubStmtContext extends ParserRuleContext {
	public ON(): TerminalNode { return this.getToken(VisualBasic6Parser.ON, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GOSUB(): TerminalNode { return this.getToken(VisualBasic6Parser.GOSUB, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_onGoSubStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOnGoSubStmt) {
			listener.enterOnGoSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOnGoSubStmt) {
			listener.exitOnGoSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOnGoSubStmt) {
			return visitor.visitOnGoSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OpenStmtContext extends ParserRuleContext {
	public OPEN(): TerminalNode { return this.getToken(VisualBasic6Parser.OPEN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public FOR(): TerminalNode { return this.getToken(VisualBasic6Parser.FOR, 0); }
	public AS(): TerminalNode { return this.getToken(VisualBasic6Parser.AS, 0); }
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.APPEND, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BINARY, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OUTPUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RANDOM, 0); }
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ACCESS, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LEN, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EQ, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.READ, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WRITE, 0); }
	public READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.READ_WRITE, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SHARED, 0); }
	public LOCK_READ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOCK_READ, 0); }
	public LOCK_WRITE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOCK_WRITE, 0); }
	public LOCK_READ_WRITE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOCK_READ_WRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_openStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOpenStmt) {
			listener.enterOpenStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOpenStmt) {
			listener.exitOpenStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOpenStmt) {
			return visitor.visitOpenStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputListContext extends ParserRuleContext {
	public outputList_Expression(): OutputList_ExpressionContext[];
	public outputList_Expression(i: number): OutputList_ExpressionContext;
	public outputList_Expression(i?: number): OutputList_ExpressionContext | OutputList_ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OutputList_ExpressionContext);
		} else {
			return this.getRuleContext(i, OutputList_ExpressionContext);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.SEMICOLON);
		} else {
			return this.getToken(VisualBasic6Parser.SEMICOLON, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_outputList; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOutputList) {
			listener.enterOutputList(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOutputList) {
			listener.exitOutputList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOutputList) {
			return visitor.visitOutputList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutputList_ExpressionContext extends ParserRuleContext {
	public SPC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SPC, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TAB, 0); }
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_outputList_Expression; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterOutputList_Expression) {
			listener.enterOutputList_Expression(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitOutputList_Expression) {
			listener.exitOutputList_Expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitOutputList_Expression) {
			return visitor.visitOutputList_Expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PrintStmtContext extends ParserRuleContext {
	public PRINT(): TerminalNode { return this.getToken(VisualBasic6Parser.PRINT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_printStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPrintStmt) {
			listener.enterPrintStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPrintStmt) {
			listener.exitPrintStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPrintStmt) {
			return visitor.visitPrintStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyGetStmtContext extends ParserRuleContext {
	public PROPERTY_GET(): TerminalNode { return this.getToken(VisualBasic6Parser.PROPERTY_GET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(VisualBasic6Parser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_propertyGetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPropertyGetStmt) {
			listener.enterPropertyGetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPropertyGetStmt) {
			listener.exitPropertyGetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPropertyGetStmt) {
			return visitor.visitPropertyGetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertySetStmtContext extends ParserRuleContext {
	public PROPERTY_SET(): TerminalNode { return this.getToken(VisualBasic6Parser.PROPERTY_SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(VisualBasic6Parser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_propertySetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPropertySetStmt) {
			listener.enterPropertySetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPropertySetStmt) {
			listener.exitPropertySetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPropertySetStmt) {
			return visitor.visitPropertySetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PropertyLetStmtContext extends ParserRuleContext {
	public PROPERTY_LET(): TerminalNode { return this.getToken(VisualBasic6Parser.PROPERTY_LET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_PROPERTY(): TerminalNode { return this.getToken(VisualBasic6Parser.END_PROPERTY, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_propertyLetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPropertyLetStmt) {
			listener.enterPropertyLetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPropertyLetStmt) {
			listener.exitPropertyLetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPropertyLetStmt) {
			return visitor.visitPropertyLetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PutStmtContext extends ParserRuleContext {
	public PUT(): TerminalNode { return this.getToken(VisualBasic6Parser.PUT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_putStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPutStmt) {
			listener.enterPutStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPutStmt) {
			listener.exitPutStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPutStmt) {
			return visitor.visitPutStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RaiseEventStmtContext extends ParserRuleContext {
	public RAISEEVENT(): TerminalNode { return this.getToken(VisualBasic6Parser.RAISEEVENT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_raiseEventStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRaiseEventStmt) {
			listener.enterRaiseEventStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRaiseEventStmt) {
			listener.exitRaiseEventStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRaiseEventStmt) {
			return visitor.visitRaiseEventStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RandomizeStmtContext extends ParserRuleContext {
	public RANDOMIZE(): TerminalNode { return this.getToken(VisualBasic6Parser.RANDOMIZE, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_randomizeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRandomizeStmt) {
			listener.enterRandomizeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRandomizeStmt) {
			listener.exitRandomizeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRandomizeStmt) {
			return visitor.visitRandomizeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimStmtContext extends ParserRuleContext {
	public REDIM(): TerminalNode { return this.getToken(VisualBasic6Parser.REDIM, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public redimSubStmt(): RedimSubStmtContext[];
	public redimSubStmt(i: number): RedimSubStmtContext;
	public redimSubStmt(i?: number): RedimSubStmtContext | RedimSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RedimSubStmtContext);
		} else {
			return this.getRuleContext(i, RedimSubStmtContext);
		}
	}
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRESERVE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_redimStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRedimStmt) {
			listener.enterRedimStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRedimStmt) {
			listener.exitRedimStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRedimStmt) {
			return visitor.visitRedimStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RedimSubStmtContext extends ParserRuleContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.LPAREN, 0); }
	public subscripts(): SubscriptsContext {
		return this.getRuleContext(0, SubscriptsContext);
	}
	public RPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_redimSubStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRedimSubStmt) {
			listener.enterRedimSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRedimSubStmt) {
			listener.exitRedimSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRedimSubStmt) {
			return visitor.visitRedimSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResetStmtContext extends ParserRuleContext {
	public RESET(): TerminalNode { return this.getToken(VisualBasic6Parser.RESET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_resetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterResetStmt) {
			listener.enterResetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitResetStmt) {
			listener.exitResetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitResetStmt) {
			return visitor.visitResetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ResumeStmtContext extends ParserRuleContext {
	public RESUME(): TerminalNode { return this.getToken(VisualBasic6Parser.RESUME, 0); }
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEXT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_resumeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterResumeStmt) {
			listener.enterResumeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitResumeStmt) {
			listener.exitResumeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitResumeStmt) {
			return visitor.visitResumeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(VisualBasic6Parser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RmdirStmtContext extends ParserRuleContext {
	public RMDIR(): TerminalNode { return this.getToken(VisualBasic6Parser.RMDIR, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_rmdirStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRmdirStmt) {
			listener.enterRmdirStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRmdirStmt) {
			listener.exitRmdirStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRmdirStmt) {
			return visitor.visitRmdirStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RsetStmtContext extends ParserRuleContext {
	public RSET(): TerminalNode { return this.getToken(VisualBasic6Parser.RSET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_rsetStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterRsetStmt) {
			listener.enterRsetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitRsetStmt) {
			listener.exitRsetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitRsetStmt) {
			return visitor.visitRsetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SavepictureStmtContext extends ParserRuleContext {
	public SAVEPICTURE(): TerminalNode { return this.getToken(VisualBasic6Parser.SAVEPICTURE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_savepictureStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSavepictureStmt) {
			listener.enterSavepictureStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSavepictureStmt) {
			listener.exitSavepictureStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSavepictureStmt) {
			return visitor.visitSavepictureStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SaveSettingStmtContext extends ParserRuleContext {
	public SAVESETTING(): TerminalNode { return this.getToken(VisualBasic6Parser.SAVESETTING, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_saveSettingStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSaveSettingStmt) {
			listener.enterSaveSettingStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSaveSettingStmt) {
			listener.exitSaveSettingStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSaveSettingStmt) {
			return visitor.visitSaveSettingStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SeekStmtContext extends ParserRuleContext {
	public SEEK(): TerminalNode { return this.getToken(VisualBasic6Parser.SEEK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_seekStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSeekStmt) {
			listener.enterSeekStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSeekStmt) {
			listener.exitSeekStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSeekStmt) {
			return visitor.visitSeekStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SelectCaseStmtContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(VisualBasic6Parser.SELECT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public CASE(): TerminalNode { return this.getToken(VisualBasic6Parser.CASE, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public END_SELECT(): TerminalNode { return this.getToken(VisualBasic6Parser.END_SELECT, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public sC_Case(): SC_CaseContext[];
	public sC_Case(i: number): SC_CaseContext;
	public sC_Case(i?: number): SC_CaseContext | SC_CaseContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_CaseContext);
		} else {
			return this.getRuleContext(i, SC_CaseContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_selectCaseStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSelectCaseStmt) {
			listener.enterSelectCaseStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSelectCaseStmt) {
			listener.exitSelectCaseStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSelectCaseStmt) {
			return visitor.visitSelectCaseStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CaseContext extends ParserRuleContext {
	public CASE(): TerminalNode { return this.getToken(VisualBasic6Parser.CASE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public sC_Cond(): SC_CondContext {
		return this.getRuleContext(0, SC_CondContext);
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COLON, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_sC_Case; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSC_Case) {
			listener.enterSC_Case(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSC_Case) {
			listener.exitSC_Case(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSC_Case) {
			return visitor.visitSC_Case(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CondContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_sC_Cond; }
	public copyFrom(ctx: SC_CondContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondElseContext extends SC_CondContext {
	public ELSE(): TerminalNode { return this.getToken(VisualBasic6Parser.ELSE, 0); }
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCaseCondElse) {
			listener.enterCaseCondElse(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCaseCondElse) {
			listener.exitCaseCondElse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCaseCondElse) {
			return visitor.visitCaseCondElse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprContext extends SC_CondContext {
	public sC_CondExpr(): SC_CondExprContext[];
	public sC_CondExpr(i: number): SC_CondExprContext;
	public sC_CondExpr(i?: number): SC_CondExprContext | SC_CondExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SC_CondExprContext);
		} else {
			return this.getRuleContext(i, SC_CondExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: SC_CondContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCaseCondExpr) {
			listener.enterCaseCondExpr(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCaseCondExpr) {
			listener.exitCaseCondExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCaseCondExpr) {
			return visitor.visitCaseCondExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SC_CondExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_sC_CondExpr; }
	public copyFrom(ctx: SC_CondExprContext): void {
		super.copyFrom(ctx);
	}
}
export class CaseCondExprIsContext extends SC_CondExprContext {
	public IS(): TerminalNode { return this.getToken(VisualBasic6Parser.IS, 0); }
	public comparisonOperator(): ComparisonOperatorContext {
		return this.getRuleContext(0, ComparisonOperatorContext);
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCaseCondExprIs) {
			listener.enterCaseCondExprIs(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCaseCondExprIs) {
			listener.exitCaseCondExprIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCaseCondExprIs) {
			return visitor.visitCaseCondExprIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprValueContext extends SC_CondExprContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCaseCondExprValue) {
			listener.enterCaseCondExprValue(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCaseCondExprValue) {
			listener.exitCaseCondExprValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCaseCondExprValue) {
			return visitor.visitCaseCondExprValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseCondExprToContext extends SC_CondExprContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(VisualBasic6Parser.TO, 0); }
	constructor(ctx: SC_CondExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCaseCondExprTo) {
			listener.enterCaseCondExprTo(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCaseCondExprTo) {
			listener.exitCaseCondExprTo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCaseCondExprTo) {
			return visitor.visitCaseCondExprTo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SendkeysStmtContext extends ParserRuleContext {
	public SENDKEYS(): TerminalNode { return this.getToken(VisualBasic6Parser.SENDKEYS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_sendkeysStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSendkeysStmt) {
			listener.enterSendkeysStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSendkeysStmt) {
			listener.exitSendkeysStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSendkeysStmt) {
			return visitor.visitSendkeysStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetattrStmtContext extends ParserRuleContext {
	public SETATTR(): TerminalNode { return this.getToken(VisualBasic6Parser.SETATTR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_setattrStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSetattrStmt) {
			listener.enterSetattrStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSetattrStmt) {
			listener.exitSetattrStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSetattrStmt) {
			return visitor.visitSetattrStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SetStmtContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(VisualBasic6Parser.SET, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_setStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSetStmt) {
			listener.enterSetStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSetStmt) {
			listener.exitSetStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSetStmt) {
			return visitor.visitSetStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StopStmtContext extends ParserRuleContext {
	public STOP(): TerminalNode { return this.getToken(VisualBasic6Parser.STOP, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_stopStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterStopStmt) {
			listener.enterStopStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitStopStmt) {
			listener.exitStopStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitStopStmt) {
			return visitor.visitStopStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubStmtContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(VisualBasic6Parser.SUB, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_SUB(): TerminalNode { return this.getToken(VisualBasic6Parser.END_SUB, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public argList(): ArgListContext | undefined {
		return this.tryGetRuleContext(0, ArgListContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_subStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSubStmt) {
			listener.enterSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSubStmt) {
			listener.exitSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSubStmt) {
			return visitor.visitSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TimeStmtContext extends ParserRuleContext {
	public TIME(): TerminalNode { return this.getToken(VisualBasic6Parser.TIME, 0); }
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_timeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterTimeStmt) {
			listener.enterTimeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitTimeStmt) {
			listener.exitTimeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitTimeStmt) {
			return visitor.visitTimeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmtContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(VisualBasic6Parser.TYPE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public END_TYPE(): TerminalNode { return this.getToken(VisualBasic6Parser.END_TYPE, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public typeStmt_Element(): TypeStmt_ElementContext[];
	public typeStmt_Element(i: number): TypeStmt_ElementContext;
	public typeStmt_Element(i?: number): TypeStmt_ElementContext | TypeStmt_ElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeStmt_ElementContext);
		} else {
			return this.getRuleContext(i, TypeStmt_ElementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_typeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterTypeStmt) {
			listener.enterTypeStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitTypeStmt) {
			listener.exitTypeStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitTypeStmt) {
			return visitor.visitTypeStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeStmt_ElementContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_typeStmt_Element; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterTypeStmt_Element) {
			listener.enterTypeStmt_Element(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitTypeStmt_Element) {
			listener.exitTypeStmt_Element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitTypeStmt_Element) {
			return visitor.visitTypeStmt_Element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeOfStmtContext extends ParserRuleContext {
	public TYPEOF(): TerminalNode { return this.getToken(VisualBasic6Parser.TYPEOF, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IS, 0); }
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_typeOfStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterTypeOfStmt) {
			listener.enterTypeOfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitTypeOfStmt) {
			listener.exitTypeOfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitTypeOfStmt) {
			return visitor.visitTypeOfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnloadStmtContext extends ParserRuleContext {
	public UNLOAD(): TerminalNode { return this.getToken(VisualBasic6Parser.UNLOAD, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_unloadStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterUnloadStmt) {
			listener.enterUnloadStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitUnloadStmt) {
			listener.exitUnloadStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitUnloadStmt) {
			return visitor.visitUnloadStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UnlockStmtContext extends ParserRuleContext {
	public UNLOCK(): TerminalNode { return this.getToken(VisualBasic6Parser.UNLOCK, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COMMA, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_unlockStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterUnlockStmt) {
			listener.enterUnlockStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitUnlockStmt) {
			listener.exitUnlockStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitUnlockStmt) {
			return visitor.visitUnlockStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueStmtContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_valueStmt; }
	public copyFrom(ctx: ValueStmtContext): void {
		super.copyFrom(ctx);
	}
}
export class VsLiteralContext extends ValueStmtContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsLiteral) {
			listener.enterVsLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsLiteral) {
			listener.exitVsLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsLiteral) {
			return visitor.visitVsLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsStructContext extends ValueStmtContext {
	public LPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.LPAREN, 0); }
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public RPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsStruct) {
			listener.enterVsStruct(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsStruct) {
			listener.exitVsStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsStruct) {
			return visitor.visitVsStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNewContext extends ValueStmtContext {
	public NEW(): TerminalNode { return this.getToken(VisualBasic6Parser.NEW, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsNew) {
			listener.enterVsNew(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsNew) {
			listener.exitVsNew(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsNew) {
			return visitor.visitVsNew(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsTypeOfContext extends ValueStmtContext {
	public typeOfStmt(): TypeOfStmtContext {
		return this.getRuleContext(0, TypeOfStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsTypeOf) {
			listener.enterVsTypeOf(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsTypeOf) {
			listener.exitVsTypeOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsTypeOf) {
			return visitor.visitVsTypeOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddressOfContext extends ValueStmtContext {
	public ADDRESSOF(): TerminalNode { return this.getToken(VisualBasic6Parser.ADDRESSOF, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsAddressOf) {
			listener.enterVsAddressOf(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsAddressOf) {
			listener.exitVsAddressOf(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsAddressOf) {
			return visitor.visitVsAddressOf(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAssignContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(VisualBasic6Parser.ASSIGN, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsAssign) {
			listener.enterVsAssign(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsAssign) {
			listener.exitVsAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsAssign) {
			return visitor.visitVsAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPowContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public POW(): TerminalNode { return this.getToken(VisualBasic6Parser.POW, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsPow) {
			listener.enterVsPow(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsPow) {
			listener.exitVsPow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsPow) {
			return visitor.visitVsPow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNegationContext extends ValueStmtContext {
	public MINUS(): TerminalNode { return this.getToken(VisualBasic6Parser.MINUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsNegation) {
			listener.enterVsNegation(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsNegation) {
			listener.exitVsNegation(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsNegation) {
			return visitor.visitVsNegation(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsPlusContext extends ValueStmtContext {
	public PLUS(): TerminalNode { return this.getToken(VisualBasic6Parser.PLUS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsPlus) {
			listener.enterVsPlus(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsPlus) {
			listener.exitVsPlus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsPlus) {
			return visitor.visitVsPlus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsDivContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public DIV(): TerminalNode { return this.getToken(VisualBasic6Parser.DIV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsDiv) {
			listener.enterVsDiv(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsDiv) {
			listener.exitVsDiv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsDiv) {
			return visitor.visitVsDiv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMultContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MULT(): TerminalNode { return this.getToken(VisualBasic6Parser.MULT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsMult) {
			listener.enterVsMult(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsMult) {
			listener.exitVsMult(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsMult) {
			return visitor.visitVsMult(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsModContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MOD(): TerminalNode { return this.getToken(VisualBasic6Parser.MOD, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsMod) {
			listener.enterVsMod(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsMod) {
			listener.exitVsMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsMod) {
			return visitor.visitVsMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAddContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public PLUS(): TerminalNode { return this.getToken(VisualBasic6Parser.PLUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsAdd) {
			listener.enterVsAdd(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsAdd) {
			listener.exitVsAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsAdd) {
			return visitor.visitVsAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMinusContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public MINUS(): TerminalNode { return this.getToken(VisualBasic6Parser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsMinus) {
			listener.enterVsMinus(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsMinus) {
			listener.exitVsMinus(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsMinus) {
			return visitor.visitVsMinus(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAmpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AMPERSAND(): TerminalNode { return this.getToken(VisualBasic6Parser.AMPERSAND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsAmp) {
			listener.enterVsAmp(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsAmp) {
			listener.exitVsAmp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsAmp) {
			return visitor.visitVsAmp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsEq) {
			listener.enterVsEq(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsEq) {
			listener.exitVsEq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsEq) {
			return visitor.visitVsEq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public NEQ(): TerminalNode { return this.getToken(VisualBasic6Parser.NEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsNeq) {
			listener.enterVsNeq(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsNeq) {
			listener.exitVsNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsNeq) {
			return visitor.visitVsNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LT(): TerminalNode { return this.getToken(VisualBasic6Parser.LT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsLt) {
			listener.enterVsLt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsLt) {
			listener.exitVsLt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsLt) {
			return visitor.visitVsLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGtContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GT(): TerminalNode { return this.getToken(VisualBasic6Parser.GT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsGt) {
			listener.enterVsGt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsGt) {
			listener.exitVsGt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsGt) {
			return visitor.visitVsGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public LEQ(): TerminalNode { return this.getToken(VisualBasic6Parser.LEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsLeq) {
			listener.enterVsLeq(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsLeq) {
			listener.exitVsLeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsLeq) {
			return visitor.visitVsLeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsGeqContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public GEQ(): TerminalNode { return this.getToken(VisualBasic6Parser.GEQ, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsGeq) {
			listener.enterVsGeq(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsGeq) {
			listener.exitVsGeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsGeq) {
			return visitor.visitVsGeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsLikeContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public LIKE(): TerminalNode { return this.getToken(VisualBasic6Parser.LIKE, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsLike) {
			listener.enterVsLike(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsLike) {
			listener.exitVsLike(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsLike) {
			return visitor.visitVsLike(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsIsContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public IS(): TerminalNode { return this.getToken(VisualBasic6Parser.IS, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsIs) {
			listener.enterVsIs(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsIs) {
			listener.exitVsIs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsIs) {
			return visitor.visitVsIs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsNotContext extends ValueStmtContext {
	public NOT(): TerminalNode { return this.getToken(VisualBasic6Parser.NOT, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext | undefined {
		return this.tryGetRuleContext(0, ValueStmtContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsNot) {
			listener.enterVsNot(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsNot) {
			listener.exitVsNot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsNot) {
			return visitor.visitVsNot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsAndContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(VisualBasic6Parser.AND, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsAnd) {
			listener.enterVsAnd(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsAnd) {
			listener.exitVsAnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsAnd) {
			return visitor.visitVsAnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsOrContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(VisualBasic6Parser.OR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsOr) {
			listener.enterVsOr(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsOr) {
			listener.exitVsOr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsOr) {
			return visitor.visitVsOr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsXorContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public XOR(): TerminalNode { return this.getToken(VisualBasic6Parser.XOR, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsXor) {
			listener.enterVsXor(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsXor) {
			listener.exitVsXor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsXor) {
			return visitor.visitVsXor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsEqvContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public EQV(): TerminalNode { return this.getToken(VisualBasic6Parser.EQV, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsEqv) {
			listener.enterVsEqv(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsEqv) {
			listener.exitVsEqv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsEqv) {
			return visitor.visitVsEqv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsImpContext extends ValueStmtContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public IMP(): TerminalNode { return this.getToken(VisualBasic6Parser.IMP, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsImp) {
			listener.enterVsImp(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsImp) {
			listener.exitVsImp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsImp) {
			return visitor.visitVsImp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsICSContext extends ValueStmtContext {
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsICS) {
			listener.enterVsICS(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsICS) {
			listener.exitVsICS(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsICS) {
			return visitor.visitVsICS(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VsMidContext extends ValueStmtContext {
	public midStmt(): MidStmtContext {
		return this.getRuleContext(0, MidStmtContext);
	}
	constructor(ctx: ValueStmtContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVsMid) {
			listener.enterVsMid(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVsMid) {
			listener.exitVsMid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVsMid) {
			return visitor.visitVsMid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableStmtContext extends ParserRuleContext {
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public variableListStmt(): VariableListStmtContext {
		return this.getRuleContext(0, VariableListStmtContext);
	}
	public DIM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DIM, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public visibility(): VisibilityContext | undefined {
		return this.tryGetRuleContext(0, VisibilityContext);
	}
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WITHEVENTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_variableStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVariableStmt) {
			listener.enterVariableStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVariableStmt) {
			listener.exitVariableStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVariableStmt) {
			return visitor.visitVariableStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableListStmtContext extends ParserRuleContext {
	public variableSubStmt(): VariableSubStmtContext[];
	public variableSubStmt(i: number): VariableSubStmtContext;
	public variableSubStmt(i?: number): VariableSubStmtContext | VariableSubStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableSubStmtContext);
		} else {
			return this.getRuleContext(i, VariableSubStmtContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_variableListStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVariableListStmt) {
			listener.enterVariableListStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVariableListStmt) {
			listener.exitVariableListStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVariableListStmt) {
			return visitor.visitVariableListStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VariableSubStmtContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public subscripts(): SubscriptsContext | undefined {
		return this.tryGetRuleContext(0, SubscriptsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_variableSubStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVariableSubStmt) {
			listener.enterVariableSubStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVariableSubStmt) {
			listener.exitVariableSubStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVariableSubStmt) {
			return visitor.visitVariableSubStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhileWendStmtContext extends ParserRuleContext {
	public WHILE(): TerminalNode { return this.getToken(VisualBasic6Parser.WHILE, 0); }
	public WS(): TerminalNode { return this.getToken(VisualBasic6Parser.WS, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WEND(): TerminalNode { return this.getToken(VisualBasic6Parser.WEND, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext[];
	public block(i: number): BlockContext;
	public block(i?: number): BlockContext | BlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BlockContext);
		} else {
			return this.getRuleContext(i, BlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_whileWendStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterWhileWendStmt) {
			listener.enterWhileWendStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitWhileWendStmt) {
			listener.exitWhileWendStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitWhileWendStmt) {
			return visitor.visitWhileWendStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WidthStmtContext extends ParserRuleContext {
	public WIDTH(): TerminalNode { return this.getToken(VisualBasic6Parser.WIDTH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_widthStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterWidthStmt) {
			listener.enterWidthStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitWidthStmt) {
			listener.exitWidthStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitWidthStmt) {
			return visitor.visitWidthStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WithStmtContext extends ParserRuleContext {
	public WITH(): TerminalNode { return this.getToken(VisualBasic6Parser.WITH, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext {
		return this.getRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public END_WITH(): TerminalNode { return this.getToken(VisualBasic6Parser.END_WITH, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEW, 0); }
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.NEWLINE);
		} else {
			return this.getToken(VisualBasic6Parser.NEWLINE, i);
		}
	}
	public block(): BlockContext | undefined {
		return this.tryGetRuleContext(0, BlockContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_withStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterWithStmt) {
			listener.enterWithStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitWithStmt) {
			listener.exitWithStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitWithStmt) {
			return visitor.visitWithStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WriteStmtContext extends ParserRuleContext {
	public WRITE(): TerminalNode { return this.getToken(VisualBasic6Parser.WRITE, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public COMMA(): TerminalNode { return this.getToken(VisualBasic6Parser.COMMA, 0); }
	public outputList(): OutputListContext | undefined {
		return this.tryGetRuleContext(0, OutputListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_writeStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterWriteStmt) {
			listener.enterWriteStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitWriteStmt) {
			listener.exitWriteStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitWriteStmt) {
			return visitor.visitWriteStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExplicitCallStmtContext extends ParserRuleContext {
	public eCS_ProcedureCall(): ECS_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_ProcedureCallContext);
	}
	public eCS_MemberProcedureCall(): ECS_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ECS_MemberProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_explicitCallStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterExplicitCallStmt) {
			listener.enterExplicitCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitExplicitCallStmt) {
			listener.exitExplicitCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitExplicitCallStmt) {
			return visitor.visitExplicitCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_ProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(VisualBasic6Parser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_eCS_ProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterECS_ProcedureCall) {
			listener.enterECS_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitECS_ProcedureCall) {
			listener.exitECS_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitECS_ProcedureCall) {
			return visitor.visitECS_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ECS_MemberProcedureCallContext extends ParserRuleContext {
	public CALL(): TerminalNode { return this.getToken(VisualBasic6Parser.CALL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(VisualBasic6Parser.DOT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_eCS_MemberProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterECS_MemberProcedureCall) {
			listener.enterECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitECS_MemberProcedureCall) {
			listener.exitECS_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitECS_MemberProcedureCall) {
			return visitor.visitECS_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InBlockContext extends ParserRuleContext {
	public iCS_B_ProcedureCall(): ICS_B_ProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_ProcedureCallContext);
	}
	public iCS_B_MemberProcedureCall(): ICS_B_MemberProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_B_MemberProcedureCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_implicitCallStmt_InBlock; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterImplicitCallStmt_InBlock) {
			listener.enterImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitImplicitCallStmt_InBlock) {
			listener.exitImplicitCallStmt_InBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InBlock) {
			return visitor.visitImplicitCallStmt_InBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_ProcedureCallContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext {
		return this.getRuleContext(0, CertainIdentifierContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_B_ProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_B_ProcedureCall) {
			listener.enterICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_B_ProcedureCall) {
			listener.exitICS_B_ProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_B_ProcedureCall) {
			return visitor.visitICS_B_ProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_B_MemberProcedureCallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VisualBasic6Parser.DOT, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public implicitCallStmt_InStmt(): ImplicitCallStmt_InStmtContext | undefined {
		return this.tryGetRuleContext(0, ImplicitCallStmt_InStmtContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_B_MemberProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_B_MemberProcedureCall) {
			listener.enterICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_B_MemberProcedureCall) {
			listener.exitICS_B_MemberProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_B_MemberProcedureCall) {
			return visitor.visitICS_B_MemberProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ImplicitCallStmt_InStmtContext extends ParserRuleContext {
	public iCS_S_MembersCall(): ICS_S_MembersCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_MembersCallContext);
	}
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_DictionaryCall(): ICS_S_DictionaryCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_DictionaryCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_implicitCallStmt_InStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterImplicitCallStmt_InStmt) {
			listener.enterImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitImplicitCallStmt_InStmt) {
			listener.exitImplicitCallStmt_InStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitImplicitCallStmt_InStmt) {
			return visitor.visitImplicitCallStmt_InStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_VariableOrProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_VariableOrProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_VariableOrProcedureCall) {
			listener.enterICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_VariableOrProcedureCall) {
			listener.exitICS_S_VariableOrProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_VariableOrProcedureCall) {
			return visitor.visitICS_S_VariableOrProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_ProcedureOrArrayCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public iCS_S_NestedProcedureCall(): ICS_S_NestedProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_NestedProcedureCallContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public LPAREN(): TerminalNode[];
	public LPAREN(i: number): TerminalNode;
	public LPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.LPAREN);
		} else {
			return this.getToken(VisualBasic6Parser.LPAREN, i);
		}
	}
	public RPAREN(): TerminalNode[];
	public RPAREN(i: number): TerminalNode;
	public RPAREN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.RPAREN);
		} else {
			return this.getToken(VisualBasic6Parser.RPAREN, i);
		}
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	public argsCall(): ArgsCallContext[];
	public argsCall(i: number): ArgsCallContext;
	public argsCall(i?: number): ArgsCallContext | ArgsCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgsCallContext);
		} else {
			return this.getRuleContext(i, ArgsCallContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_ProcedureOrArrayCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_ProcedureOrArrayCall) {
			listener.enterICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_ProcedureOrArrayCall) {
			listener.exitICS_S_ProcedureOrArrayCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_ProcedureOrArrayCall) {
			return visitor.visitICS_S_ProcedureOrArrayCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_NestedProcedureCallContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public LPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.RPAREN, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public argsCall(): ArgsCallContext | undefined {
		return this.tryGetRuleContext(0, ArgsCallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_NestedProcedureCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_NestedProcedureCall) {
			listener.enterICS_S_NestedProcedureCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_NestedProcedureCall) {
			listener.exitICS_S_NestedProcedureCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_NestedProcedureCall) {
			return visitor.visitICS_S_NestedProcedureCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MembersCallContext extends ParserRuleContext {
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public iCS_S_MemberCall(): ICS_S_MemberCallContext[];
	public iCS_S_MemberCall(i: number): ICS_S_MemberCallContext;
	public iCS_S_MemberCall(i?: number): ICS_S_MemberCallContext | ICS_S_MemberCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ICS_S_MemberCallContext);
		} else {
			return this.getRuleContext(i, ICS_S_MemberCallContext);
		}
	}
	public dictionaryCallStmt(): DictionaryCallStmtContext | undefined {
		return this.tryGetRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_MembersCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_MembersCall) {
			listener.enterICS_S_MembersCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_MembersCall) {
			listener.exitICS_S_MembersCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_MembersCall) {
			return visitor.visitICS_S_MembersCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_MemberCallContext extends ParserRuleContext {
	public DOT(): TerminalNode { return this.getToken(VisualBasic6Parser.DOT, 0); }
	public iCS_S_VariableOrProcedureCall(): ICS_S_VariableOrProcedureCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_VariableOrProcedureCallContext);
	}
	public iCS_S_ProcedureOrArrayCall(): ICS_S_ProcedureOrArrayCallContext | undefined {
		return this.tryGetRuleContext(0, ICS_S_ProcedureOrArrayCallContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_MemberCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_MemberCall) {
			listener.enterICS_S_MemberCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_MemberCall) {
			listener.exitICS_S_MemberCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_MemberCall) {
			return visitor.visitICS_S_MemberCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ICS_S_DictionaryCallContext extends ParserRuleContext {
	public dictionaryCallStmt(): DictionaryCallStmtContext {
		return this.getRuleContext(0, DictionaryCallStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_iCS_S_DictionaryCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterICS_S_DictionaryCall) {
			listener.enterICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitICS_S_DictionaryCall) {
			listener.exitICS_S_DictionaryCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitICS_S_DictionaryCall) {
			return visitor.visitICS_S_DictionaryCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgsCallContext extends ParserRuleContext {
	public argCall(): ArgCallContext[];
	public argCall(i: number): ArgCallContext;
	public argCall(i?: number): ArgCallContext | ArgCallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgCallContext);
		} else {
			return this.getRuleContext(i, ArgCallContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	public SEMICOLON(): TerminalNode[];
	public SEMICOLON(i: number): TerminalNode;
	public SEMICOLON(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.SEMICOLON);
		} else {
			return this.getToken(VisualBasic6Parser.SEMICOLON, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_argsCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterArgsCall) {
			listener.enterArgsCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitArgsCall) {
			listener.exitArgsCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitArgsCall) {
			return visitor.visitArgsCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgCallContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYREF, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PARAMARRAY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_argCall; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterArgCall) {
			listener.enterArgCall(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitArgCall) {
			listener.exitArgCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitArgCall) {
			return visitor.visitArgCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DictionaryCallStmtContext extends ParserRuleContext {
	public EXCLAMATIONMARK(): TerminalNode { return this.getToken(VisualBasic6Parser.EXCLAMATIONMARK, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_dictionaryCallStmt; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterDictionaryCallStmt) {
			listener.enterDictionaryCallStmt(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitDictionaryCallStmt) {
			listener.exitDictionaryCallStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitDictionaryCallStmt) {
			return visitor.visitDictionaryCallStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgListContext extends ParserRuleContext {
	public LPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode { return this.getToken(VisualBasic6Parser.RPAREN, 0); }
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_argList; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterArgList) {
			listener.enterArgList(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitArgList) {
			listener.exitArgList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitArgList) {
			return visitor.visitArgList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OPTIONAL, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PARAMARRAY, 0); }
	public typeHint(): TypeHintContext | undefined {
		return this.tryGetRuleContext(0, TypeHintContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public asTypeClause(): AsTypeClauseContext | undefined {
		return this.tryGetRuleContext(0, AsTypeClauseContext);
	}
	public argDefaultValue(): ArgDefaultValueContext | undefined {
		return this.tryGetRuleContext(0, ArgDefaultValueContext);
	}
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYREF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_arg; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterArg) {
			listener.enterArg(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitArg) {
			listener.exitArg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitArg) {
			return visitor.visitArg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ArgDefaultValueContext extends ParserRuleContext {
	public EQ(): TerminalNode { return this.getToken(VisualBasic6Parser.EQ, 0); }
	public valueStmt(): ValueStmtContext {
		return this.getRuleContext(0, ValueStmtContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_argDefaultValue; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterArgDefaultValue) {
			listener.enterArgDefaultValue(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitArgDefaultValue) {
			listener.exitArgDefaultValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitArgDefaultValue) {
			return visitor.visitArgDefaultValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptsContext extends ParserRuleContext {
	public subscript(): SubscriptContext[];
	public subscript(i: number): SubscriptContext;
	public subscript(i?: number): SubscriptContext | SubscriptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SubscriptContext);
		} else {
			return this.getRuleContext(i, SubscriptContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.COMMA);
		} else {
			return this.getToken(VisualBasic6Parser.COMMA, i);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_subscripts; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSubscripts) {
			listener.enterSubscripts(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSubscripts) {
			listener.exitSubscripts(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSubscripts) {
			return visitor.visitSubscripts(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SubscriptContext extends ParserRuleContext {
	public valueStmt(): ValueStmtContext[];
	public valueStmt(i: number): ValueStmtContext;
	public valueStmt(i?: number): ValueStmtContext | ValueStmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueStmtContext);
		} else {
			return this.getRuleContext(i, ValueStmtContext);
		}
	}
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public TO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_subscript; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterSubscript) {
			listener.enterSubscript(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitSubscript) {
			listener.exitSubscript(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitSubscript) {
			return visitor.visitSubscript(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.IDENTIFIER);
		} else {
			return this.getToken(VisualBasic6Parser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	public L_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.L_SQUARE_BRACKET, 0); }
	public R_SQUARE_BRACKET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.R_SQUARE_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ambiguousIdentifier; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterAmbiguousIdentifier) {
			listener.enterAmbiguousIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitAmbiguousIdentifier) {
			listener.exitAmbiguousIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitAmbiguousIdentifier) {
			return visitor.visitAmbiguousIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AsTypeClauseContext extends ParserRuleContext {
	public AS(): TerminalNode { return this.getToken(VisualBasic6Parser.AS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public NEW(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEW, 0); }
	public fieldLength(): FieldLengthContext | undefined {
		return this.tryGetRuleContext(0, FieldLengthContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_asTypeClause; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterAsTypeClause) {
			listener.enterAsTypeClause(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitAsTypeClause) {
			listener.exitAsTypeClause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitAsTypeClause) {
			return visitor.visitAsTypeClause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BaseTypeContext extends ParserRuleContext {
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BOOLEAN, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYTE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COLLECTION, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DATE, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOUBLE, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INTEGER, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LONG, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OBJECT, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SINGLE, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STRING, 0); }
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.VARIANT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_baseType; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterBaseType) {
			listener.enterBaseType(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitBaseType) {
			listener.exitBaseType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitBaseType) {
			return visitor.visitBaseType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CertainIdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.IDENTIFIER);
		} else {
			return this.getToken(VisualBasic6Parser.IDENTIFIER, i);
		}
	}
	public ambiguousKeyword(): AmbiguousKeywordContext[];
	public ambiguousKeyword(i: number): AmbiguousKeywordContext;
	public ambiguousKeyword(i?: number): AmbiguousKeywordContext | AmbiguousKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousKeywordContext);
		} else {
			return this.getRuleContext(i, AmbiguousKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_certainIdentifier; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterCertainIdentifier) {
			listener.enterCertainIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitCertainIdentifier) {
			listener.exitCertainIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitCertainIdentifier) {
			return visitor.visitCertainIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComparisonOperatorContext extends ParserRuleContext {
	public LT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LT, 0); }
	public LEQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LEQ, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GT, 0); }
	public GEQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GEQ, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EQ, 0); }
	public NEQ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEQ, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IS, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LIKE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_comparisonOperator; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterComparisonOperator) {
			listener.enterComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitComparisonOperator) {
			listener.exitComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitComparisonOperator) {
			return visitor.visitComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ComplexTypeContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext[];
	public ambiguousIdentifier(i: number): AmbiguousIdentifierContext;
	public ambiguousIdentifier(i?: number): AmbiguousIdentifierContext | AmbiguousIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AmbiguousIdentifierContext);
		} else {
			return this.getRuleContext(i, AmbiguousIdentifierContext);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.DOT);
		} else {
			return this.getToken(VisualBasic6Parser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_complexType; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterComplexType) {
			listener.enterComplexType(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitComplexType) {
			listener.exitComplexType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitComplexType) {
			return visitor.visitComplexType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldLengthContext extends ParserRuleContext {
	public MULT(): TerminalNode { return this.getToken(VisualBasic6Parser.MULT, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INTEGERLITERAL, 0); }
	public ambiguousIdentifier(): AmbiguousIdentifierContext | undefined {
		return this.tryGetRuleContext(0, AmbiguousIdentifierContext);
	}
	public WS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_fieldLength; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterFieldLength) {
			listener.enterFieldLength(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitFieldLength) {
			listener.exitFieldLength(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitFieldLength) {
			return visitor.visitFieldLength(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LetterrangeContext extends ParserRuleContext {
	public certainIdentifier(): CertainIdentifierContext[];
	public certainIdentifier(i: number): CertainIdentifierContext;
	public certainIdentifier(i?: number): CertainIdentifierContext | CertainIdentifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CertainIdentifierContext);
		} else {
			return this.getRuleContext(i, CertainIdentifierContext);
		}
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.MINUS, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_letterrange; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLetterrange) {
			listener.enterLetterrange(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLetterrange) {
			listener.exitLetterrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLetterrange) {
			return visitor.visitLetterrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineLabelContext extends ParserRuleContext {
	public ambiguousIdentifier(): AmbiguousIdentifierContext {
		return this.getRuleContext(0, AmbiguousIdentifierContext);
	}
	public COLON(): TerminalNode { return this.getToken(VisualBasic6Parser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_lineLabel; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLineLabel) {
			listener.enterLineLabel(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLineLabel) {
			listener.exitLineLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLineLabel) {
			return visitor.visitLineLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public COLORLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COLORLITERAL, 0); }
	public DATELITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DATELITERAL, 0); }
	public DOUBLELITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOUBLELITERAL, 0); }
	public FILENUMBER(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FILENUMBER, 0); }
	public INTEGERLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INTEGERLITERAL, 0); }
	public OCTALLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OCTALLITERAL, 0); }
	public STRINGLITERAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STRINGLITERAL, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TRUE, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FALSE, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NULL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_literal; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicPrivateVisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PUBLIC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_publicPrivateVisibility; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPublicPrivateVisibility) {
			listener.enterPublicPrivateVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPublicPrivateVisibility) {
			listener.exitPublicPrivateVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPublicPrivateVisibility) {
			return visitor.visitPublicPrivateVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PublicPrivateGlobalVisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PUBLIC, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_publicPrivateGlobalVisibility; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterPublicPrivateGlobalVisibility) {
			listener.enterPublicPrivateGlobalVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitPublicPrivateGlobalVisibility) {
			listener.exitPublicPrivateGlobalVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitPublicPrivateGlobalVisibility) {
			return visitor.visitPublicPrivateGlobalVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	public baseType(): BaseTypeContext | undefined {
		return this.tryGetRuleContext(0, BaseTypeContext);
	}
	public complexType(): ComplexTypeContext | undefined {
		return this.tryGetRuleContext(0, ComplexTypeContext);
	}
	public LPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LPAREN, 0); }
	public RPAREN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RPAREN, 0); }
	public WS(): TerminalNode[];
	public WS(i: number): TerminalNode;
	public WS(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(VisualBasic6Parser.WS);
		} else {
			return this.getToken(VisualBasic6Parser.WS, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_type; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeHintContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.AMPERSAND, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.AT, 0); }
	public DOLLAR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOLLAR, 0); }
	public EXCLAMATIONMARK(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EXCLAMATIONMARK, 0); }
	public HASH(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.HASH, 0); }
	public PERCENT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PERCENT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_typeHint; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterTypeHint) {
			listener.enterTypeHint(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitTypeHint) {
			listener.exitTypeHint(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitTypeHint) {
			return visitor.visitTypeHint(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisibilityContext extends ParserRuleContext {
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PUBLIC, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FRIEND, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GLOBAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_visibility; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterVisibility) {
			listener.enterVisibility(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitVisibility) {
			listener.exitVisibility(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitVisibility) {
			return visitor.visitVisibility(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AmbiguousKeywordContext extends ParserRuleContext {
	public ACCESS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ACCESS, 0); }
	public ADDRESSOF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ADDRESSOF, 0); }
	public ALIAS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ALIAS, 0); }
	public AND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.AND, 0); }
	public ATTRIBUTE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ATTRIBUTE, 0); }
	public APPACTIVATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.APPACTIVATE, 0); }
	public APPEND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.APPEND, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.AS, 0); }
	public BEEP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BEEP, 0); }
	public BEGIN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BEGIN, 0); }
	public BINARY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BINARY, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BOOLEAN, 0); }
	public BYVAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYVAL, 0); }
	public BYREF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYREF, 0); }
	public BYTE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.BYTE, 0); }
	public CALL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CALL, 0); }
	public CASE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CASE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CLASS, 0); }
	public CLOSE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CLOSE, 0); }
	public CHDIR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CHDIR, 0); }
	public CHDRIVE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CHDRIVE, 0); }
	public COLLECTION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.COLLECTION, 0); }
	public CONST(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.CONST, 0); }
	public DATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DATE, 0); }
	public DECLARE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DECLARE, 0); }
	public DEFBOOL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFBOOL, 0); }
	public DEFBYTE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFBYTE, 0); }
	public DEFCUR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFCUR, 0); }
	public DEFDBL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDBL, 0); }
	public DEFDATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDATE, 0); }
	public DEFDEC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFDEC, 0); }
	public DEFINT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFINT, 0); }
	public DEFLNG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFLNG, 0); }
	public DEFOBJ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFOBJ, 0); }
	public DEFSNG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFSNG, 0); }
	public DEFSTR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFSTR, 0); }
	public DEFVAR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DEFVAR, 0); }
	public DELETESETTING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DELETESETTING, 0); }
	public DIM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DIM, 0); }
	public DO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DO, 0); }
	public DOUBLE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.DOUBLE, 0); }
	public EACH(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EACH, 0); }
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ELSE, 0); }
	public ELSEIF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ELSEIF, 0); }
	public END(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.END, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ENUM, 0); }
	public EQV(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EQV, 0); }
	public ERASE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ERASE, 0); }
	public ERROR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ERROR, 0); }
	public EVENT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.EVENT, 0); }
	public FALSE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FALSE, 0); }
	public FILECOPY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FILECOPY, 0); }
	public FRIEND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FRIEND, 0); }
	public FOR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FOR, 0); }
	public FUNCTION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.FUNCTION, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GET, 0); }
	public GLOBAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GLOBAL, 0); }
	public GOSUB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GOSUB, 0); }
	public GOTO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.GOTO, 0); }
	public IF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IF, 0); }
	public IMP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IMP, 0); }
	public IMPLEMENTS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IMPLEMENTS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IN, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INPUT, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.IS, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.INTEGER, 0); }
	public KILL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.KILL, 0); }
	public LOAD(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOAD, 0); }
	public LOCK(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOCK, 0); }
	public LONG(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LONG, 0); }
	public LOOP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LOOP, 0); }
	public LEN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LEN, 0); }
	public LET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LET, 0); }
	public LIB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LIB, 0); }
	public LIKE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LIKE, 0); }
	public LSET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.LSET, 0); }
	public ME(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ME, 0); }
	public MID(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.MID, 0); }
	public MKDIR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.MKDIR, 0); }
	public MOD(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.MOD, 0); }
	public NAME(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NAME, 0); }
	public NEXT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEXT, 0); }
	public NEW(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NEW, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NOT, 0); }
	public NOTHING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NOTHING, 0); }
	public NULL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.NULL, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OBJECT, 0); }
	public ON(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.ON, 0); }
	public OPEN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OPEN, 0); }
	public OPTIONAL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OPTIONAL, 0); }
	public OR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OR, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.OUTPUT, 0); }
	public PARAMARRAY(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PARAMARRAY, 0); }
	public PRESERVE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRESERVE, 0); }
	public PRINT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRINT, 0); }
	public PRIVATE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PRIVATE, 0); }
	public PUBLIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PUBLIC, 0); }
	public PUT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.PUT, 0); }
	public RANDOM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RANDOM, 0); }
	public RANDOMIZE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RANDOMIZE, 0); }
	public RAISEEVENT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RAISEEVENT, 0); }
	public READ(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.READ, 0); }
	public REDIM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.REDIM, 0); }
	public REM(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.REM, 0); }
	public RESET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RESET, 0); }
	public RESUME(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RESUME, 0); }
	public RETURN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RETURN, 0); }
	public RMDIR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RMDIR, 0); }
	public RSET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.RSET, 0); }
	public SAVEPICTURE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SAVEPICTURE, 0); }
	public SAVESETTING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SAVESETTING, 0); }
	public SEEK(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SEEK, 0); }
	public SELECT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SELECT, 0); }
	public SENDKEYS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SENDKEYS, 0); }
	public SET(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SET, 0); }
	public SETATTR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SETATTR, 0); }
	public SHARED(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SHARED, 0); }
	public SINGLE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SINGLE, 0); }
	public SPC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SPC, 0); }
	public STATIC(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STATIC, 0); }
	public STEP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STEP, 0); }
	public STOP(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STOP, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.STRING, 0); }
	public SUB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.SUB, 0); }
	public TAB(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TAB, 0); }
	public TEXT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TEXT, 0); }
	public THEN(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.THEN, 0); }
	public TIME(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TIME, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TO, 0); }
	public TRUE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TRUE, 0); }
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TYPE, 0); }
	public TYPEOF(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.TYPEOF, 0); }
	public UNLOAD(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.UNLOAD, 0); }
	public UNLOCK(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.UNLOCK, 0); }
	public UNTIL(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.UNTIL, 0); }
	public VARIANT(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.VARIANT, 0); }
	public VERSION(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.VERSION, 0); }
	public WEND(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WEND, 0); }
	public WHILE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WHILE, 0); }
	public WIDTH(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WIDTH, 0); }
	public WITH(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WITH, 0); }
	public WITHEVENTS(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WITHEVENTS, 0); }
	public WRITE(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.WRITE, 0); }
	public XOR(): TerminalNode | undefined { return this.tryGetToken(VisualBasic6Parser.XOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return VisualBasic6Parser.RULE_ambiguousKeyword; }
	// @Override
	public enterRule(listener: VisualBasic6Listener): void {
		if (listener.enterAmbiguousKeyword) {
			listener.enterAmbiguousKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: VisualBasic6Listener): void {
		if (listener.exitAmbiguousKeyword) {
			listener.exitAmbiguousKeyword(this);
		}
	}
	// @Override
	public accept<Result>(visitor: VisualBasic6Visitor<Result>): Result {
		if (visitor.visitAmbiguousKeyword) {
			return visitor.visitAmbiguousKeyword(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


