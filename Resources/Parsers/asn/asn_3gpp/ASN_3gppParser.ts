// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/asn/asn_3gpp/ASN_3gpp.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { ASN_3gppListener } from "./ASN_3gppListener";

export class ASN_3gppParser extends Parser {
	public static readonly NEED_LITERAL = 1;
	public static readonly COND_LITERAL = 2;
	public static readonly INVALID_TAG = 3;
	public static readonly A_ROND = 4;
	public static readonly STAR = 5;
	public static readonly ASSIGN_OP = 6;
	public static readonly BOOLEAN_LITERAL = 7;
	public static readonly TRUE_LITERAL = 8;
	public static readonly FALSE_LITERAL = 9;
	public static readonly DOT = 10;
	public static readonly DOUBLE_DOT = 11;
	public static readonly ELLIPSIS = 12;
	public static readonly APOSTROPHE = 13;
	public static readonly AMPERSAND = 14;
	public static readonly LESS_THAN = 15;
	public static readonly GREATER_THAN = 16;
	public static readonly LESS_THAN_SLASH = 17;
	public static readonly SLASH_GREATER_THAN = 18;
	public static readonly TRUE_SMALL_LITERAL = 19;
	public static readonly FALSE_SMALL_LITERAL = 20;
	public static readonly INTEGER_LITERAL = 21;
	public static readonly L_BRACE = 22;
	public static readonly R_BRACE = 23;
	public static readonly COMMA = 24;
	public static readonly L_PARAN = 25;
	public static readonly R_PARAN = 26;
	public static readonly MINUS = 27;
	public static readonly ENUMERATED_LITERAL = 28;
	public static readonly REAL_LITERAL = 29;
	public static readonly PLUS_INFINITY_LITERAL = 30;
	public static readonly MINUS_INFINITY_LITERAL = 31;
	public static readonly BIT_LITERAL = 32;
	public static readonly STRING_LITERAL = 33;
	public static readonly CONTAINING_LITERAL = 34;
	public static readonly OCTET_LITERAL = 35;
	public static readonly NULL_LITERAL = 36;
	public static readonly SEQUENCE_LITERAL = 37;
	public static readonly OPTIONAL_LITERAL = 38;
	public static readonly DEFAULT_LITERAL = 39;
	public static readonly COMPONENTS_LITERAL = 40;
	public static readonly OF_LITERAL = 41;
	public static readonly SET_LITERAL = 42;
	public static readonly EXCLAM = 43;
	public static readonly ALL_LITERAL = 44;
	public static readonly EXCEPT_LITERAL = 45;
	public static readonly POWER = 46;
	public static readonly PIPE = 47;
	public static readonly UNION_LITERAL = 48;
	public static readonly INTERSECTION_LITERAL = 49;
	public static readonly INCLUDES_LITERAL = 50;
	public static readonly MIN_LITERAL = 51;
	public static readonly MAX_LITERAL = 52;
	public static readonly SIZE_LITERAL = 53;
	public static readonly FROM_LITERAL = 54;
	public static readonly WITH_LITERAL = 55;
	public static readonly COMPONENT_LITERAL = 56;
	public static readonly PRESENT_LITERAL = 57;
	public static readonly ABSENT_LITERAL = 58;
	public static readonly PATTERN_LITERAL = 59;
	public static readonly TYPE_IDENTIFIER_LITERAL = 60;
	public static readonly ABSTRACT_SYNTAX_LITERAL = 61;
	public static readonly CLASS_LITERAL = 62;
	public static readonly UNIQUE_LITERAL = 63;
	public static readonly SYNTAX_LITERAL = 64;
	public static readonly L_BRACKET = 65;
	public static readonly R_BRACKET = 66;
	public static readonly INSTANCE_LITERAL = 67;
	public static readonly SEMI_COLON = 68;
	public static readonly IMPORTS_LITERAL = 69;
	public static readonly EXPORTS_LITERAL = 70;
	public static readonly EXTENSIBILITY_LITERAL = 71;
	public static readonly IMPLIED_LITERAL = 72;
	public static readonly EXPLICIT_LITERAL = 73;
	public static readonly TAGS_LITERAL = 74;
	public static readonly IMPLICIT_LITERAL = 75;
	public static readonly AUTOMATIC_LITERAL = 76;
	public static readonly DEFINITIONS_LITERAL = 77;
	public static readonly BEGIN_LITERAL = 78;
	public static readonly END_LITERAL = 79;
	public static readonly DOUBLE_L_BRACKET = 80;
	public static readonly DOUBLE_R_BRACKET = 81;
	public static readonly COLON = 82;
	public static readonly CHOICE_LITERAL = 83;
	public static readonly UNIVERSAL_LITERAL = 84;
	public static readonly APPLICATION_LITERAL = 85;
	public static readonly PRIVATE_LITERAL = 86;
	public static readonly EMBEDDED_LITERAL = 87;
	public static readonly PDV_LITERAL = 88;
	public static readonly EXTERNAL_LITERAL = 89;
	public static readonly OBJECT_LITERAL = 90;
	public static readonly IDENTIFIER_LITERAL = 91;
	public static readonly RELATIVE_OID_LITERAL = 92;
	public static readonly CHARACTER_LITERAL = 93;
	public static readonly CONSTRAINED_LITERAL = 94;
	public static readonly BY_LITERAL = 95;
	public static readonly A_ROND_DOT = 96;
	public static readonly ENCODED_LITERAL = 97;
	public static readonly COMMENT = 98;
	public static readonly UNRESTRICTEDCHARACTERSTRINGTYPE = 99;
	public static readonly EXTENSTIONENDMARKER = 100;
	public static readonly NUMBER = 101;
	public static readonly WS = 102;
	public static readonly LINE_COMMENT = 103;
	public static readonly BSTRING = 104;
	public static readonly HSTRING = 105;
	public static readonly CSTRING = 106;
	public static readonly IDENTIFIER = 107;
	public static readonly RULE_modules = 0;
	public static readonly RULE_moduleDefinition = 1;
	public static readonly RULE_tagDefault = 2;
	public static readonly RULE_extensionDefault = 3;
	public static readonly RULE_moduleBody = 4;
	public static readonly RULE_exports = 5;
	public static readonly RULE_symbolsExported = 6;
	public static readonly RULE_imports = 7;
	public static readonly RULE_symbolsImported = 8;
	public static readonly RULE_symbolsFromModuleList = 9;
	public static readonly RULE_symbolsFromModule = 10;
	public static readonly RULE_globalModuleReference = 11;
	public static readonly RULE_assignedIdentifier = 12;
	public static readonly RULE_symbolList = 13;
	public static readonly RULE_symbol = 14;
	public static readonly RULE_assignmentList = 15;
	public static readonly RULE_assignment = 16;
	public static readonly RULE_sequenceType = 17;
	public static readonly RULE_extensionAndException = 18;
	public static readonly RULE_optionalExtensionMarker = 19;
	public static readonly RULE_componentTypeLists = 20;
	public static readonly RULE_rootComponentTypeList = 21;
	public static readonly RULE_componentTypeList = 22;
	public static readonly RULE_componentType = 23;
	public static readonly RULE_tag = 24;
	public static readonly RULE_needTag = 25;
	public static readonly RULE_condTag = 26;
	public static readonly RULE_extensionAdditions = 27;
	public static readonly RULE_extensionAdditionList = 28;
	public static readonly RULE_extensionAddition = 29;
	public static readonly RULE_extensionAdditionGroup = 30;
	public static readonly RULE_versionNumber = 31;
	public static readonly RULE_sequenceOfType = 32;
	public static readonly RULE_sizeConstraint = 33;
	public static readonly RULE_parameterizedAssignment = 34;
	public static readonly RULE_parameterList = 35;
	public static readonly RULE_parameter = 36;
	public static readonly RULE_paramGovernor = 37;
	public static readonly RULE_governor = 38;
	public static readonly RULE_objectClassAssignment = 39;
	public static readonly RULE_objectClass = 40;
	public static readonly RULE_definedObjectClass = 41;
	public static readonly RULE_usefulObjectClassReference = 42;
	public static readonly RULE_externalObjectClassReference = 43;
	public static readonly RULE_objectClassDefn = 44;
	public static readonly RULE_withSyntaxSpec = 45;
	public static readonly RULE_syntaxList = 46;
	public static readonly RULE_tokenOrGroupSpec = 47;
	public static readonly RULE_optionalGroup = 48;
	public static readonly RULE_requiredToken = 49;
	public static readonly RULE_literal = 50;
	public static readonly RULE_primitiveFieldName = 51;
	public static readonly RULE_fieldSpec = 52;
	public static readonly RULE_typeFieldSpec = 53;
	public static readonly RULE_typeOptionalitySpec = 54;
	public static readonly RULE_fixedTypeValueFieldSpec = 55;
	public static readonly RULE_valueOptionalitySpec = 56;
	public static readonly RULE_variableTypeValueFieldSpec = 57;
	public static readonly RULE_fixedTypeValueSetFieldSpec = 58;
	public static readonly RULE_valueSetOptionalitySpec = 59;
	public static readonly RULE_object = 60;
	public static readonly RULE_parameterizedObject = 61;
	public static readonly RULE_definedObject = 62;
	public static readonly RULE_objectSet = 63;
	public static readonly RULE_objectSetSpec = 64;
	public static readonly RULE_fieldName = 65;
	public static readonly RULE_valueSet = 66;
	public static readonly RULE_elementSetSpecs = 67;
	public static readonly RULE_rootElementSetSpec = 68;
	public static readonly RULE_additionalElementSetSpec = 69;
	public static readonly RULE_elementSetSpec = 70;
	public static readonly RULE_unions = 71;
	public static readonly RULE_exclusions = 72;
	public static readonly RULE_intersections = 73;
	public static readonly RULE_unionMark = 74;
	public static readonly RULE_intersectionMark = 75;
	public static readonly RULE_elements = 76;
	public static readonly RULE_objectSetElements = 77;
	public static readonly RULE_intersectionElements = 78;
	public static readonly RULE_subtypeElements = 79;
	public static readonly RULE_variableTypeValueSetFieldSpec = 80;
	public static readonly RULE_objectFieldSpec = 81;
	public static readonly RULE_objectOptionalitySpec = 82;
	public static readonly RULE_objectSetFieldSpec = 83;
	public static readonly RULE_objectSetOptionalitySpec = 84;
	public static readonly RULE_typeAssignment = 85;
	public static readonly RULE_valueAssignment = 86;
	public static readonly RULE_asnType = 87;
	public static readonly RULE_builtinType = 88;
	public static readonly RULE_objectClassFieldType = 89;
	public static readonly RULE_setType = 90;
	public static readonly RULE_setOfType = 91;
	public static readonly RULE_referencedType = 92;
	public static readonly RULE_definedType = 93;
	public static readonly RULE_constraint = 94;
	public static readonly RULE_constraintSpec = 95;
	public static readonly RULE_userDefinedConstraint = 96;
	public static readonly RULE_generalConstraint = 97;
	public static readonly RULE_userDefinedConstraintParameter = 98;
	public static readonly RULE_tableConstraint = 99;
	public static readonly RULE_simpleTableConstraint = 100;
	public static readonly RULE_contentsConstraint = 101;
	public static readonly RULE_componentPresenceLists = 102;
	public static readonly RULE_componentPresenceList = 103;
	public static readonly RULE_componentPresence = 104;
	public static readonly RULE_subtypeConstraint = 105;
	public static readonly RULE_value = 106;
	public static readonly RULE_builtinValue = 107;
	public static readonly RULE_objectIdentifierValue = 108;
	public static readonly RULE_objIdComponentsList = 109;
	public static readonly RULE_objIdComponents = 110;
	public static readonly RULE_integerValue = 111;
	public static readonly RULE_choiceValue = 112;
	public static readonly RULE_enumeratedValue = 113;
	public static readonly RULE_signedNumber = 114;
	public static readonly RULE_choiceType = 115;
	public static readonly RULE_alternativeTypeLists = 116;
	public static readonly RULE_extensionAdditionAlternatives = 117;
	public static readonly RULE_extensionAdditionAlternativesList = 118;
	public static readonly RULE_extensionAdditionAlternative = 119;
	public static readonly RULE_extensionAdditionAlternativesGroup = 120;
	public static readonly RULE_rootAlternativeTypeList = 121;
	public static readonly RULE_alternativeTypeList = 122;
	public static readonly RULE_namedType = 123;
	public static readonly RULE_enumeratedType = 124;
	public static readonly RULE_enumerations = 125;
	public static readonly RULE_rootEnumeration = 126;
	public static readonly RULE_enumeration = 127;
	public static readonly RULE_enumerationItem = 128;
	public static readonly RULE_namedNumber = 129;
	public static readonly RULE_definedValue = 130;
	public static readonly RULE_parameterizedValue = 131;
	public static readonly RULE_simpleDefinedValue = 132;
	public static readonly RULE_actualParameterList = 133;
	public static readonly RULE_actualParameter = 134;
	public static readonly RULE_exceptionSpec = 135;
	public static readonly RULE_exceptionIdentification = 136;
	public static readonly RULE_additionalEnumeration = 137;
	public static readonly RULE_integerType = 138;
	public static readonly RULE_namedNumberList = 139;
	public static readonly RULE_objectidentifiertype = 140;
	public static readonly RULE_componentRelationConstraint = 141;
	public static readonly RULE_atNotation = 142;
	public static readonly RULE_level = 143;
	public static readonly RULE_componentIdList = 144;
	public static readonly RULE_octetStringType = 145;
	public static readonly RULE_bitStringType = 146;
	public static readonly RULE_namedBitList = 147;
	public static readonly RULE_namedBit = 148;
	public static readonly RULE_booleanValue = 149;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"modules", "moduleDefinition", "tagDefault", "extensionDefault", "moduleBody", 
		"exports", "symbolsExported", "imports", "symbolsImported", "symbolsFromModuleList", 
		"symbolsFromModule", "globalModuleReference", "assignedIdentifier", "symbolList", 
		"symbol", "assignmentList", "assignment", "sequenceType", "extensionAndException", 
		"optionalExtensionMarker", "componentTypeLists", "rootComponentTypeList", 
		"componentTypeList", "componentType", "tag", "needTag", "condTag", "extensionAdditions", 
		"extensionAdditionList", "extensionAddition", "extensionAdditionGroup", 
		"versionNumber", "sequenceOfType", "sizeConstraint", "parameterizedAssignment", 
		"parameterList", "parameter", "paramGovernor", "governor", "objectClassAssignment", 
		"objectClass", "definedObjectClass", "usefulObjectClassReference", "externalObjectClassReference", 
		"objectClassDefn", "withSyntaxSpec", "syntaxList", "tokenOrGroupSpec", 
		"optionalGroup", "requiredToken", "literal", "primitiveFieldName", "fieldSpec", 
		"typeFieldSpec", "typeOptionalitySpec", "fixedTypeValueFieldSpec", "valueOptionalitySpec", 
		"variableTypeValueFieldSpec", "fixedTypeValueSetFieldSpec", "valueSetOptionalitySpec", 
		"object", "parameterizedObject", "definedObject", "objectSet", "objectSetSpec", 
		"fieldName", "valueSet", "elementSetSpecs", "rootElementSetSpec", "additionalElementSetSpec", 
		"elementSetSpec", "unions", "exclusions", "intersections", "unionMark", 
		"intersectionMark", "elements", "objectSetElements", "intersectionElements", 
		"subtypeElements", "variableTypeValueSetFieldSpec", "objectFieldSpec", 
		"objectOptionalitySpec", "objectSetFieldSpec", "objectSetOptionalitySpec", 
		"typeAssignment", "valueAssignment", "asnType", "builtinType", "objectClassFieldType", 
		"setType", "setOfType", "referencedType", "definedType", "constraint", 
		"constraintSpec", "userDefinedConstraint", "generalConstraint", "userDefinedConstraintParameter", 
		"tableConstraint", "simpleTableConstraint", "contentsConstraint", "componentPresenceLists", 
		"componentPresenceList", "componentPresence", "subtypeConstraint", "value", 
		"builtinValue", "objectIdentifierValue", "objIdComponentsList", "objIdComponents", 
		"integerValue", "choiceValue", "enumeratedValue", "signedNumber", "choiceType", 
		"alternativeTypeLists", "extensionAdditionAlternatives", "extensionAdditionAlternativesList", 
		"extensionAdditionAlternative", "extensionAdditionAlternativesGroup", 
		"rootAlternativeTypeList", "alternativeTypeList", "namedType", "enumeratedType", 
		"enumerations", "rootEnumeration", "enumeration", "enumerationItem", "namedNumber", 
		"definedValue", "parameterizedValue", "simpleDefinedValue", "actualParameterList", 
		"actualParameter", "exceptionSpec", "exceptionIdentification", "additionalEnumeration", 
		"integerType", "namedNumberList", "objectidentifiertype", "componentRelationConstraint", 
		"atNotation", "level", "componentIdList", "octetStringType", "bitStringType", 
		"namedBitList", "namedBit", "booleanValue",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'@'", "'*'", "'::='", "'BOOLEAN'", 
		"'TRUE'", "'FALSE'", "'.'", "'..'", "'...'", "'''", "'&'", "'<'", "'>'", 
		"'</'", "'/>'", "'true'", "'false'", "'INTEGER'", "'{'", "'}'", "','", 
		"'('", "')'", "'-'", "'ENUMERATED'", "'REAL'", "'PLUS-INFINITY'", "'MINUS-INFINITY'", 
		"'BIT'", "'STRING'", "'CONTAINING'", "'OCTET'", "'NULL'", "'SEQUENCE'", 
		"'OPTIONAL'", "'DEFAULT'", "'COMPONENTS'", "'OF'", "'SET'", "'!'", "'ALL'", 
		"'EXCEPT'", "'^'", "'|'", "'UNION'", "'INTERSECTION'", "'INCLUDES'", "'MIN'", 
		"'MAX'", "'SIZE'", "'FROM'", "'WITH'", "'COMPONENT'", "'PRESENT'", "'ABSENT'", 
		"'PATTERN'", "'TYPE-Identifier'", "'ABSTRACT-SYNTAX'", "'CLASS'", "'UNIQUE'", 
		"'SYNTAX'", "'['", "']'", "'INSTANCE'", "';'", "'IMPORTS'", "'EXPORTS'", 
		"'EXTENSIBILITY'", "'IMPLIED'", "'EXPLICIT'", "'TAGS'", "'IMPLICIT'", 
		"'AUTOMATIC'", "'DEFINITIONS'", "'BEGIN'", "'END'", "'[['", "']]'", "':'", 
		"'CHOICE'", "'UNIVERSAL'", "'APPLICATION'", "'PRIVATE'", "'EMBEDDED'", 
		"'PDV'", "'EXTERNAL'", "'OBJECT'", "'IDENTIFIER'", "'RELATIVE-OID'", "'CHARACTER'", 
		"'CONSTRAINED'", "'BY'", "'@.'", "'ENCODED'", "'--'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NEED_LITERAL", "COND_LITERAL", "INVALID_TAG", "A_ROND", "STAR", 
		"ASSIGN_OP", "BOOLEAN_LITERAL", "TRUE_LITERAL", "FALSE_LITERAL", "DOT", 
		"DOUBLE_DOT", "ELLIPSIS", "APOSTROPHE", "AMPERSAND", "LESS_THAN", "GREATER_THAN", 
		"LESS_THAN_SLASH", "SLASH_GREATER_THAN", "TRUE_SMALL_LITERAL", "FALSE_SMALL_LITERAL", 
		"INTEGER_LITERAL", "L_BRACE", "R_BRACE", "COMMA", "L_PARAN", "R_PARAN", 
		"MINUS", "ENUMERATED_LITERAL", "REAL_LITERAL", "PLUS_INFINITY_LITERAL", 
		"MINUS_INFINITY_LITERAL", "BIT_LITERAL", "STRING_LITERAL", "CONTAINING_LITERAL", 
		"OCTET_LITERAL", "NULL_LITERAL", "SEQUENCE_LITERAL", "OPTIONAL_LITERAL", 
		"DEFAULT_LITERAL", "COMPONENTS_LITERAL", "OF_LITERAL", "SET_LITERAL", 
		"EXCLAM", "ALL_LITERAL", "EXCEPT_LITERAL", "POWER", "PIPE", "UNION_LITERAL", 
		"INTERSECTION_LITERAL", "INCLUDES_LITERAL", "MIN_LITERAL", "MAX_LITERAL", 
		"SIZE_LITERAL", "FROM_LITERAL", "WITH_LITERAL", "COMPONENT_LITERAL", "PRESENT_LITERAL", 
		"ABSENT_LITERAL", "PATTERN_LITERAL", "TYPE_IDENTIFIER_LITERAL", "ABSTRACT_SYNTAX_LITERAL", 
		"CLASS_LITERAL", "UNIQUE_LITERAL", "SYNTAX_LITERAL", "L_BRACKET", "R_BRACKET", 
		"INSTANCE_LITERAL", "SEMI_COLON", "IMPORTS_LITERAL", "EXPORTS_LITERAL", 
		"EXTENSIBILITY_LITERAL", "IMPLIED_LITERAL", "EXPLICIT_LITERAL", "TAGS_LITERAL", 
		"IMPLICIT_LITERAL", "AUTOMATIC_LITERAL", "DEFINITIONS_LITERAL", "BEGIN_LITERAL", 
		"END_LITERAL", "DOUBLE_L_BRACKET", "DOUBLE_R_BRACKET", "COLON", "CHOICE_LITERAL", 
		"UNIVERSAL_LITERAL", "APPLICATION_LITERAL", "PRIVATE_LITERAL", "EMBEDDED_LITERAL", 
		"PDV_LITERAL", "EXTERNAL_LITERAL", "OBJECT_LITERAL", "IDENTIFIER_LITERAL", 
		"RELATIVE_OID_LITERAL", "CHARACTER_LITERAL", "CONSTRAINED_LITERAL", "BY_LITERAL", 
		"A_ROND_DOT", "ENCODED_LITERAL", "COMMENT", "UNRESTRICTEDCHARACTERSTRINGTYPE", 
		"EXTENSTIONENDMARKER", "NUMBER", "WS", "LINE_COMMENT", "BSTRING", "HSTRING", 
		"CSTRING", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ASN_3gppParser._LITERAL_NAMES, ASN_3gppParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ASN_3gppParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ASN_3gpp.g4"; }

	// @Override
	public get ruleNames(): string[] { return ASN_3gppParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ASN_3gppParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ASN_3gppParser._ATN, this);
	}
	// @RuleVersion(0)
	public modules(): ModulesContext {
		let _localctx: ModulesContext = new ModulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ASN_3gppParser.RULE_modules);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 300;
				this.moduleDefinition();
				}
				}
				this.state = 303;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.IDENTIFIER);
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
	public moduleDefinition(): ModuleDefinitionContext {
		let _localctx: ModuleDefinitionContext = new ModuleDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ASN_3gppParser.RULE_moduleDefinition);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 305;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 317;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 306;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 313;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASN_3gppParser.IDENTIFIER) {
					{
					{
					this.state = 307;
					this.match(ASN_3gppParser.IDENTIFIER);
					this.state = 308;
					this.match(ASN_3gppParser.L_PARAN);
					this.state = 309;
					this.match(ASN_3gppParser.NUMBER);
					this.state = 310;
					this.match(ASN_3gppParser.R_PARAN);
					}
					}
					this.state = 315;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 316;
				this.match(ASN_3gppParser.R_BRACE);
				}
			}

			this.state = 319;
			this.match(ASN_3gppParser.DEFINITIONS_LITERAL);
			this.state = 320;
			this.tagDefault();
			this.state = 321;
			this.extensionDefault();
			this.state = 322;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 323;
			this.match(ASN_3gppParser.BEGIN_LITERAL);
			this.state = 324;
			this.moduleBody();
			this.state = 325;
			this.match(ASN_3gppParser.END_LITERAL);
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
	public tagDefault(): TagDefaultContext {
		let _localctx: TagDefaultContext = new TagDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ASN_3gppParser.RULE_tagDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 73)))) !== 0)) {
				{
				this.state = 327;
				_la = this._input.LA(1);
				if (!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & ((1 << (ASN_3gppParser.EXPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.IMPLICIT_LITERAL - 73)) | (1 << (ASN_3gppParser.AUTOMATIC_LITERAL - 73)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 328;
				this.match(ASN_3gppParser.TAGS_LITERAL);
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
	public extensionDefault(): ExtensionDefaultContext {
		let _localctx: ExtensionDefaultContext = new ExtensionDefaultContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ASN_3gppParser.RULE_extensionDefault);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 333;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXTENSIBILITY_LITERAL) {
				{
				this.state = 331;
				this.match(ASN_3gppParser.EXTENSIBILITY_LITERAL);
				this.state = 332;
				this.match(ASN_3gppParser.IMPLIED_LITERAL);
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
	public moduleBody(): ModuleBodyContext {
		let _localctx: ModuleBodyContext = new ModuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ASN_3gppParser.RULE_moduleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 339;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IMPORTS_LITERAL || _la === ASN_3gppParser.EXPORTS_LITERAL || _la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 335;
				this.exports();
				this.state = 336;
				this.imports();
				this.state = 337;
				this.assignmentList();
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
	public exports(): ExportsContext {
		let _localctx: ExportsContext = new ExportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ASN_3gppParser.RULE_exports);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(ASN_3gppParser.EXPORTS_LITERAL);
				this.state = 342;
				this.symbolsExported();
				this.state = 343;
				this.match(ASN_3gppParser.SEMI_COLON);
				}
				break;

			case 2:
				{
				this.state = 345;
				this.match(ASN_3gppParser.EXPORTS_LITERAL);
				this.state = 346;
				this.match(ASN_3gppParser.ALL_LITERAL);
				this.state = 347;
				this.match(ASN_3gppParser.SEMI_COLON);
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
	public symbolsExported(): SymbolsExportedContext {
		let _localctx: SymbolsExportedContext = new SymbolsExportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ASN_3gppParser.RULE_symbolsExported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 350;
				this.symbolList();
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
	public imports(): ImportsContext {
		let _localctx: ImportsContext = new ImportsContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ASN_3gppParser.RULE_imports);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 357;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IMPORTS_LITERAL) {
				{
				this.state = 353;
				this.match(ASN_3gppParser.IMPORTS_LITERAL);
				this.state = 354;
				this.symbolsImported();
				this.state = 355;
				this.match(ASN_3gppParser.SEMI_COLON);
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
	public symbolsImported(): SymbolsImportedContext {
		let _localctx: SymbolsImportedContext = new SymbolsImportedContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ASN_3gppParser.RULE_symbolsImported);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.IDENTIFIER) {
				{
				this.state = 359;
				this.symbolsFromModuleList();
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
	public symbolsFromModuleList(): SymbolsFromModuleListContext {
		let _localctx: SymbolsFromModuleListContext = new SymbolsFromModuleListContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ASN_3gppParser.RULE_symbolsFromModuleList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 362;
			this.symbolsFromModule();
			}
			this.state = 366;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 363;
				this.symbolsFromModule();
				}
				}
				this.state = 368;
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
	public symbolsFromModule(): SymbolsFromModuleContext {
		let _localctx: SymbolsFromModuleContext = new SymbolsFromModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ASN_3gppParser.RULE_symbolsFromModule);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 369;
			this.symbolList();
			this.state = 370;
			this.match(ASN_3gppParser.FROM_LITERAL);
			this.state = 371;
			this.globalModuleReference();
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
	public globalModuleReference(): GlobalModuleReferenceContext {
		let _localctx: GlobalModuleReferenceContext = new GlobalModuleReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ASN_3gppParser.RULE_globalModuleReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 373;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 374;
			this.assignedIdentifier();
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
	public assignedIdentifier(): AssignedIdentifierContext {
		let _localctx: AssignedIdentifierContext = new AssignedIdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ASN_3gppParser.RULE_assignedIdentifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			// tslint:disable-next-line:no-empty
			{
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
	public symbolList(): SymbolListContext {
		let _localctx: SymbolListContext = new SymbolListContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ASN_3gppParser.RULE_symbolList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 378;
			this.symbol();
			}
			this.state = 383;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 379;
				this.match(ASN_3gppParser.COMMA);
				this.state = 380;
				this.symbol();
				}
				}
				this.state = 385;
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
	public symbol(): SymbolContext {
		let _localctx: SymbolContext = new SymbolContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ASN_3gppParser.RULE_symbol);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 386;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 389;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				{
				this.state = 387;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 388;
				this.match(ASN_3gppParser.R_BRACE);
				}
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
	public assignmentList(): AssignmentListContext {
		let _localctx: AssignmentListContext = new AssignmentListContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ASN_3gppParser.RULE_assignmentList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 391;
			this.assignment();
			}
			this.state = 395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 392;
				this.assignment();
				}
				}
				this.state = 397;
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
	public assignment(): AssignmentContext {
		let _localctx: AssignmentContext = new AssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ASN_3gppParser.RULE_assignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 398;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 403;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 399;
				this.valueAssignment();
				}
				break;

			case 2:
				{
				this.state = 400;
				this.typeAssignment();
				}
				break;

			case 3:
				{
				this.state = 401;
				this.parameterizedAssignment();
				}
				break;

			case 4:
				{
				this.state = 402;
				this.objectClassAssignment();
				}
				break;
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
	public sequenceType(): SequenceTypeContext {
		let _localctx: SequenceTypeContext = new SequenceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ASN_3gppParser.RULE_sequenceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 405;
			this.match(ASN_3gppParser.SEQUENCE_LITERAL);
			this.state = 406;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				{
				this.state = 407;
				this.extensionAndException();
				this.state = 408;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 410;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 413;
			this.match(ASN_3gppParser.R_BRACE);
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
	public extensionAndException(): ExtensionAndExceptionContext {
		let _localctx: ExtensionAndExceptionContext = new ExtensionAndExceptionContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ASN_3gppParser.RULE_extensionAndException);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			this.match(ASN_3gppParser.ELLIPSIS);
			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCLAM) {
				{
				this.state = 416;
				this.exceptionSpec();
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
	public optionalExtensionMarker(): OptionalExtensionMarkerContext {
		let _localctx: OptionalExtensionMarkerContext = new OptionalExtensionMarkerContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ASN_3gppParser.RULE_optionalExtensionMarker);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 419;
				this.match(ASN_3gppParser.COMMA);
				this.state = 420;
				this.match(ASN_3gppParser.ELLIPSIS);
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
	public componentTypeLists(): ComponentTypeListsContext {
		let _localctx: ComponentTypeListsContext = new ComponentTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ASN_3gppParser.RULE_componentTypeLists);
		let _la: number;
		try {
			this.state = 453;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.COMPONENTS_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 423;
				this.rootComponentTypeList();
				this.state = 440;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.NEED_LITERAL:
				case ASN_3gppParser.COND_LITERAL:
				case ASN_3gppParser.INVALID_TAG:
					{
					this.state = 424;
					this.tag();
					}
					break;
				case ASN_3gppParser.COMMA:
					{
					{
					this.state = 425;
					this.match(ASN_3gppParser.COMMA);
					this.state = 427;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
						{
						this.state = 426;
						this.tag();
						}
					}

					this.state = 429;
					this.extensionAndException();
					this.state = 430;
					this.extensionAdditions();
					this.state = 438;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASN_3gppParser.R_BRACE:
					case ASN_3gppParser.COMMA:
						{
						this.state = 431;
						this.optionalExtensionMarker();
						}
						break;
					case ASN_3gppParser.EXTENSTIONENDMARKER:
						{
						{
						this.state = 432;
						this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
						this.state = 433;
						this.match(ASN_3gppParser.COMMA);
						this.state = 434;
						this.rootComponentTypeList();
						this.state = 436;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
							{
							this.state = 435;
							this.tag();
							}
						}

						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				case ASN_3gppParser.R_BRACE:
					break;
				default:
					break;
				}
				}
				break;
			case ASN_3gppParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.extensionAndException();
				this.state = 443;
				this.extensionAdditions();
				this.state = 451;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
					{
					this.state = 444;
					this.optionalExtensionMarker();
					}
					break;
				case ASN_3gppParser.EXTENSTIONENDMARKER:
					{
					{
					this.state = 445;
					this.match(ASN_3gppParser.EXTENSTIONENDMARKER);
					this.state = 446;
					this.match(ASN_3gppParser.COMMA);
					this.state = 447;
					this.rootComponentTypeList();
					this.state = 449;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
						{
						this.state = 448;
						this.tag();
						}
					}

					}
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
	public rootComponentTypeList(): RootComponentTypeListContext {
		let _localctx: RootComponentTypeListContext = new RootComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ASN_3gppParser.RULE_rootComponentTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 455;
			this.componentTypeList();
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
	public componentTypeList(): ComponentTypeListContext {
		let _localctx: ComponentTypeListContext = new ComponentTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ASN_3gppParser.RULE_componentTypeList);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 457;
			this.componentType();
			}
			this.state = 465;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 458;
					this.match(ASN_3gppParser.COMMA);
					this.state = 460;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
						{
						this.state = 459;
						this.tag();
						}
					}

					this.state = 462;
					this.componentType();
					}
					}
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
	public componentType(): ComponentTypeContext {
		let _localctx: ComponentTypeContext = new ComponentTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ASN_3gppParser.RULE_componentType);
		try {
			this.state = 477;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 468;
				this.namedType();
				this.state = 472;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 469;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					this.state = 470;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 471;
					this.value();
					}
					break;
				case ASN_3gppParser.NEED_LITERAL:
				case ASN_3gppParser.COND_LITERAL:
				case ASN_3gppParser.INVALID_TAG:
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
				case ASN_3gppParser.DOUBLE_R_BRACKET:
				case ASN_3gppParser.EXTENSTIONENDMARKER:
					break;
				default:
					break;
				}
				}
				break;
			case ASN_3gppParser.COMPONENTS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 474;
				this.match(ASN_3gppParser.COMPONENTS_LITERAL);
				this.state = 475;
				this.match(ASN_3gppParser.OF_LITERAL);
				this.state = 476;
				this.asnType();
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
	public tag(): TagContext {
		let _localctx: TagContext = new TagContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ASN_3gppParser.RULE_tag);
		try {
			this.state = 482;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.NEED_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 479;
				this.needTag();
				}
				break;
			case ASN_3gppParser.COND_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 480;
				this.condTag();
				}
				break;
			case ASN_3gppParser.INVALID_TAG:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.match(ASN_3gppParser.INVALID_TAG);
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
	public needTag(): NeedTagContext {
		let _localctx: NeedTagContext = new NeedTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ASN_3gppParser.RULE_needTag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 484;
			this.match(ASN_3gppParser.NEED_LITERAL);
			this.state = 485;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public condTag(): CondTagContext {
		let _localctx: CondTagContext = new CondTagContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ASN_3gppParser.RULE_condTag);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 487;
			this.match(ASN_3gppParser.COND_LITERAL);
			this.state = 488;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public extensionAdditions(): ExtensionAdditionsContext {
		let _localctx: ExtensionAdditionsContext = new ExtensionAdditionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ASN_3gppParser.RULE_extensionAdditions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 490;
				this.match(ASN_3gppParser.COMMA);
				this.state = 491;
				this.extensionAdditionList();
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
	public extensionAdditionList(): ExtensionAdditionListContext {
		let _localctx: ExtensionAdditionListContext = new ExtensionAdditionListContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ASN_3gppParser.RULE_extensionAdditionList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 494;
			this.extensionAddition();
			}
			this.state = 499;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 495;
					this.match(ASN_3gppParser.COMMA);
					this.state = 496;
					this.extensionAddition();
					}
					}
				}
				this.state = 501;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
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
	public extensionAddition(): ExtensionAdditionContext {
		let _localctx: ExtensionAdditionContext = new ExtensionAdditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ASN_3gppParser.RULE_extensionAddition);
		try {
			this.state = 504;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.COMPONENTS_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 502;
				this.componentType();
				}
				break;
			case ASN_3gppParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 503;
				this.extensionAdditionGroup();
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
	public extensionAdditionGroup(): ExtensionAdditionGroupContext {
		let _localctx: ExtensionAdditionGroupContext = new ExtensionAdditionGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ASN_3gppParser.RULE_extensionAdditionGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 506;
			this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
			this.state = 507;
			this.versionNumber();
			this.state = 508;
			this.componentTypeList();
			this.state = 510;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.NEED_LITERAL) | (1 << ASN_3gppParser.COND_LITERAL) | (1 << ASN_3gppParser.INVALID_TAG))) !== 0)) {
				{
				this.state = 509;
				this.tag();
				}
			}

			this.state = 512;
			this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
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
	public versionNumber(): VersionNumberContext {
		let _localctx: VersionNumberContext = new VersionNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ASN_3gppParser.RULE_versionNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 516;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.NUMBER) {
				{
				this.state = 514;
				this.match(ASN_3gppParser.NUMBER);
				this.state = 515;
				this.match(ASN_3gppParser.COLON);
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
	public sequenceOfType(): SequenceOfTypeContext {
		let _localctx: SequenceOfTypeContext = new SequenceOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ASN_3gppParser.RULE_sequenceOfType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 518;
			this.match(ASN_3gppParser.SEQUENCE_LITERAL);
			this.state = 526;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_PARAN) {
				{
				this.state = 519;
				this.match(ASN_3gppParser.L_PARAN);
				this.state = 522;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.L_PARAN:
					{
					this.state = 520;
					this.constraint();
					}
					break;
				case ASN_3gppParser.SIZE_LITERAL:
					{
					this.state = 521;
					this.sizeConstraint();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 524;
				this.match(ASN_3gppParser.R_PARAN);
				}
			}

			this.state = 528;
			this.match(ASN_3gppParser.OF_LITERAL);
			this.state = 531;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				{
				this.state = 529;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 530;
				this.namedType();
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
	public sizeConstraint(): SizeConstraintContext {
		let _localctx: SizeConstraintContext = new SizeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ASN_3gppParser.RULE_sizeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 533;
			this.match(ASN_3gppParser.SIZE_LITERAL);
			this.state = 534;
			this.constraint();
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
	public parameterizedAssignment(): ParameterizedAssignmentContext {
		let _localctx: ParameterizedAssignmentContext = new ParameterizedAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ASN_3gppParser.RULE_parameterizedAssignment);
		try {
			this.state = 550;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.L_BRACE:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 536;
				this.parameterList();
				{
				this.state = 537;
				this.match(ASN_3gppParser.ASSIGN_OP);
				this.state = 541;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 38, this._ctx) ) {
				case 1:
					{
					this.state = 538;
					this.asnType();
					}
					break;

				case 2:
					{
					this.state = 539;
					this.value();
					}
					break;

				case 3:
					{
					this.state = 540;
					this.valueSet();
					}
					break;
				}
				}
				}
				break;
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 543;
				this.definedObjectClass();
				this.state = 544;
				this.match(ASN_3gppParser.ASSIGN_OP);
				this.state = 548;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 39, this._ctx) ) {
				case 1:
					{
					this.state = 545;
					this.object();
					}
					break;

				case 2:
					{
					this.state = 546;
					this.objectClass();
					}
					break;

				case 3:
					{
					this.state = 547;
					this.objectSet();
					}
					break;
				}
				}
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
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ASN_3gppParser.RULE_parameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 553;
			this.parameter();
			this.state = 558;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 554;
				this.match(ASN_3gppParser.COMMA);
				this.state = 555;
				this.parameter();
				}
				}
				this.state = 560;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 561;
			this.match(ASN_3gppParser.R_BRACE);
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
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ASN_3gppParser.RULE_parameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 566;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				{
				this.state = 563;
				this.paramGovernor();
				this.state = 564;
				this.match(ASN_3gppParser.COLON);
				}
				break;
			}
			this.state = 568;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public paramGovernor(): ParamGovernorContext {
		let _localctx: ParamGovernorContext = new ParamGovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ASN_3gppParser.RULE_paramGovernor);
		try {
			this.state = 572;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 570;
				this.governor();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 571;
				this.match(ASN_3gppParser.IDENTIFIER);
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
	public governor(): GovernorContext {
		let _localctx: GovernorContext = new GovernorContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ASN_3gppParser.RULE_governor);
		try {
			this.state = 576;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 574;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 575;
				this.definedObjectClass();
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
	public objectClassAssignment(): ObjectClassAssignmentContext {
		let _localctx: ObjectClassAssignmentContext = new ObjectClassAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ASN_3gppParser.RULE_objectClassAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 578;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 579;
			this.objectClass();
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
	public objectClass(): ObjectClassContext {
		let _localctx: ObjectClassContext = new ObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ASN_3gppParser.RULE_objectClass);
		try {
			this.state = 583;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 581;
				this.definedObjectClass();
				}
				break;
			case ASN_3gppParser.CLASS_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 582;
				this.objectClassDefn();
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
	public definedObjectClass(): DefinedObjectClassContext {
		let _localctx: DefinedObjectClassContext = new DefinedObjectClassContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ASN_3gppParser.RULE_definedObjectClass);
		try {
			this.state = 592;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 587;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
				case 1:
					{
					this.state = 585;
					this.match(ASN_3gppParser.IDENTIFIER);
					this.state = 586;
					this.match(ASN_3gppParser.DOT);
					}
					break;
				}
				this.state = 589;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;
			case ASN_3gppParser.TYPE_IDENTIFIER_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 590;
				this.match(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL);
				}
				break;
			case ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 591;
				this.match(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL);
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
	public usefulObjectClassReference(): UsefulObjectClassReferenceContext {
		let _localctx: UsefulObjectClassReferenceContext = new UsefulObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ASN_3gppParser.RULE_usefulObjectClassReference);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 594;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.TYPE_IDENTIFIER_LITERAL || _la === ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL)) {
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
	public externalObjectClassReference(): ExternalObjectClassReferenceContext {
		let _localctx: ExternalObjectClassReferenceContext = new ExternalObjectClassReferenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ASN_3gppParser.RULE_externalObjectClassReference);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 596;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 597;
			this.match(ASN_3gppParser.DOT);
			this.state = 598;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public objectClassDefn(): ObjectClassDefnContext {
		let _localctx: ObjectClassDefnContext = new ObjectClassDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ASN_3gppParser.RULE_objectClassDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 600;
			this.match(ASN_3gppParser.CLASS_LITERAL);
			this.state = 601;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 602;
			this.fieldSpec();
			this.state = 607;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 603;
				this.match(ASN_3gppParser.COMMA);
				this.state = 604;
				this.fieldSpec();
				}
				}
				this.state = 609;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 610;
			this.match(ASN_3gppParser.R_BRACE);
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.WITH_LITERAL) {
				{
				this.state = 611;
				this.withSyntaxSpec();
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
	public withSyntaxSpec(): WithSyntaxSpecContext {
		let _localctx: WithSyntaxSpecContext = new WithSyntaxSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ASN_3gppParser.RULE_withSyntaxSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 614;
			this.match(ASN_3gppParser.WITH_LITERAL);
			this.state = 615;
			this.match(ASN_3gppParser.SYNTAX_LITERAL);
			this.state = 616;
			this.syntaxList();
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
	public syntaxList(): SyntaxListContext {
		let _localctx: SyntaxListContext = new SyntaxListContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ASN_3gppParser.RULE_syntaxList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 618;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 620;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 619;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
			this.state = 624;
			this.match(ASN_3gppParser.R_BRACE);
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
	public tokenOrGroupSpec(): TokenOrGroupSpecContext {
		let _localctx: TokenOrGroupSpecContext = new TokenOrGroupSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ASN_3gppParser.RULE_tokenOrGroupSpec);
		try {
			this.state = 628;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.AMPERSAND:
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 626;
				this.requiredToken();
				}
				break;
			case ASN_3gppParser.L_BRACKET:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 627;
				this.optionalGroup();
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
	public optionalGroup(): OptionalGroupContext {
		let _localctx: OptionalGroupContext = new OptionalGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ASN_3gppParser.RULE_optionalGroup);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 630;
			this.match(ASN_3gppParser.L_BRACKET);
			this.state = 632;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 631;
				this.tokenOrGroupSpec();
				}
				}
				this.state = 634;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === ASN_3gppParser.AMPERSAND || _la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.L_BRACKET || _la === ASN_3gppParser.IDENTIFIER);
			this.state = 636;
			this.match(ASN_3gppParser.R_BRACKET);
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
	public requiredToken(): RequiredTokenContext {
		let _localctx: RequiredTokenContext = new RequiredTokenContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ASN_3gppParser.RULE_requiredToken);
		try {
			this.state = 640;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 638;
				this.literal();
				}
				break;
			case ASN_3gppParser.AMPERSAND:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 639;
				this.primitiveFieldName();
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ASN_3gppParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 642;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.COMMA || _la === ASN_3gppParser.IDENTIFIER)) {
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
	public primitiveFieldName(): PrimitiveFieldNameContext {
		let _localctx: PrimitiveFieldNameContext = new PrimitiveFieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ASN_3gppParser.RULE_primitiveFieldName);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 644;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 645;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public fieldSpec(): FieldSpecContext {
		let _localctx: FieldSpecContext = new FieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, ASN_3gppParser.RULE_fieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 647;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 648;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 682;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
					{
					this.state = 649;
					this.typeOptionalitySpec();
					}
				}

				}
				break;

			case 2:
				{
				this.state = 652;
				this.asnType();
				this.state = 662;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
				case 1:
					{
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
						{
						this.state = 653;
						this.valueSetOptionalitySpec();
						}
					}

					}
					break;

				case 2:
					{
					this.state = 657;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
						{
						this.state = 656;
						this.match(ASN_3gppParser.UNIQUE_LITERAL);
						}
					}

					this.state = 660;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
						{
						this.state = 659;
						this.valueOptionalitySpec();
						}
					}

					}
					break;
				}
				}
				break;

			case 3:
				{
				this.state = 664;
				this.fieldName();
				this.state = 671;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 665;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					{
					this.state = 666;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 669;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
					case 1:
						{
						this.state = 667;
						this.valueSet();
						}
						break;

					case 2:
						{
						this.state = 668;
						this.value();
						}
						break;
					}
					}
					}
					break;
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
					break;
				default:
					break;
				}
				}
				break;

			case 4:
				{
				this.state = 673;
				this.definedObjectClass();
				this.state = 680;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.OPTIONAL_LITERAL:
					{
					this.state = 674;
					this.match(ASN_3gppParser.OPTIONAL_LITERAL);
					}
					break;
				case ASN_3gppParser.DEFAULT_LITERAL:
					{
					{
					this.state = 675;
					this.match(ASN_3gppParser.DEFAULT_LITERAL);
					this.state = 678;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASN_3gppParser.L_BRACE:
						{
						this.state = 676;
						this.objectSet();
						}
						break;
					case ASN_3gppParser.IDENTIFIER:
						{
						this.state = 677;
						this.object();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
					break;
				case ASN_3gppParser.R_BRACE:
				case ASN_3gppParser.COMMA:
					break;
				default:
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
	public typeFieldSpec(): TypeFieldSpecContext {
		let _localctx: TypeFieldSpecContext = new TypeFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, ASN_3gppParser.RULE_typeFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 684;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 685;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 687;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 686;
				this.typeOptionalitySpec();
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
	public typeOptionalitySpec(): TypeOptionalitySpecContext {
		let _localctx: TypeOptionalitySpecContext = new TypeOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, ASN_3gppParser.RULE_typeOptionalitySpec);
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 689;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 690;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 691;
				this.asnType();
				}
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
	public fixedTypeValueFieldSpec(): FixedTypeValueFieldSpecContext {
		let _localctx: FixedTypeValueFieldSpecContext = new FixedTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, ASN_3gppParser.RULE_fixedTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 694;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 695;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 696;
			this.asnType();
			this.state = 698;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.UNIQUE_LITERAL) {
				{
				this.state = 697;
				this.match(ASN_3gppParser.UNIQUE_LITERAL);
				}
			}

			this.state = 701;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 700;
				this.valueOptionalitySpec();
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
	public valueOptionalitySpec(): ValueOptionalitySpecContext {
		let _localctx: ValueOptionalitySpecContext = new ValueOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, ASN_3gppParser.RULE_valueOptionalitySpec);
		try {
			this.state = 706;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 703;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 704;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 705;
				this.value();
				}
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
	public variableTypeValueFieldSpec(): VariableTypeValueFieldSpecContext {
		let _localctx: VariableTypeValueFieldSpecContext = new VariableTypeValueFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, ASN_3gppParser.RULE_variableTypeValueFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 708;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 709;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 710;
			this.fieldName();
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 711;
				this.valueOptionalitySpec();
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
	public fixedTypeValueSetFieldSpec(): FixedTypeValueSetFieldSpecContext {
		let _localctx: FixedTypeValueSetFieldSpecContext = new FixedTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 714;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 715;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 716;
			this.asnType();
			this.state = 718;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 717;
				this.valueSetOptionalitySpec();
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
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext {
		let _localctx: ValueSetOptionalitySpecContext = new ValueSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, ASN_3gppParser.RULE_valueSetOptionalitySpec);
		try {
			this.state = 723;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 720;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 721;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 722;
				this.valueSet();
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
	public object(): ObjectContext {
		let _localctx: ObjectContext = new ObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, ASN_3gppParser.RULE_object);
		try {
			this.state = 727;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 725;
				this.definedObject();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 726;
				this.parameterizedObject();
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
	public parameterizedObject(): ParameterizedObjectContext {
		let _localctx: ParameterizedObjectContext = new ParameterizedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, ASN_3gppParser.RULE_parameterizedObject);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 729;
			this.definedObject();
			this.state = 730;
			this.actualParameterList();
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
	public definedObject(): DefinedObjectContext {
		let _localctx: DefinedObjectContext = new DefinedObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, ASN_3gppParser.RULE_definedObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 732;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 734;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 733;
				this.match(ASN_3gppParser.DOT);
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
	public objectSet(): ObjectSetContext {
		let _localctx: ObjectSetContext = new ObjectSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, ASN_3gppParser.RULE_objectSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 736;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 737;
			this.objectSetSpec();
			this.state = 738;
			this.match(ASN_3gppParser.R_BRACE);
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
	public objectSetSpec(): ObjectSetSpecContext {
		let _localctx: ObjectSetSpecContext = new ObjectSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, ASN_3gppParser.RULE_objectSetSpec);
		let _la: number;
		try {
			this.state = 754;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TRUE_LITERAL:
			case ASN_3gppParser.FALSE_LITERAL:
			case ASN_3gppParser.TRUE_SMALL_LITERAL:
			case ASN_3gppParser.FALSE_SMALL_LITERAL:
			case ASN_3gppParser.L_BRACE:
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.ALL_LITERAL:
			case ASN_3gppParser.MIN_LITERAL:
			case ASN_3gppParser.SIZE_LITERAL:
			case ASN_3gppParser.PATTERN_LITERAL:
			case ASN_3gppParser.NUMBER:
			case ASN_3gppParser.BSTRING:
			case ASN_3gppParser.CSTRING:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 740;
				this.rootElementSetSpec();
				this.state = 747;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 741;
					this.match(ASN_3gppParser.COMMA);
					this.state = 742;
					this.match(ASN_3gppParser.ELLIPSIS);
					this.state = 745;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.COMMA) {
						{
						this.state = 743;
						this.match(ASN_3gppParser.COMMA);
						this.state = 744;
						this.additionalElementSetSpec();
						}
					}

					}
				}

				}
				break;
			case ASN_3gppParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 749;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 752;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 750;
					this.match(ASN_3gppParser.COMMA);
					this.state = 751;
					this.additionalElementSetSpec();
					}
				}

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
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, ASN_3gppParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 756;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 757;
			this.match(ASN_3gppParser.IDENTIFIER);
			}
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.AMPERSAND) {
				{
				{
				this.state = 759;
				this.match(ASN_3gppParser.AMPERSAND);
				this.state = 760;
				this.match(ASN_3gppParser.IDENTIFIER);
				this.state = 761;
				this.match(ASN_3gppParser.DOT);
				}
				}
				this.state = 766;
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
	public valueSet(): ValueSetContext {
		let _localctx: ValueSetContext = new ValueSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, ASN_3gppParser.RULE_valueSet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 768;
			this.elementSetSpecs();
			this.state = 769;
			this.match(ASN_3gppParser.R_BRACE);
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
	public elementSetSpecs(): ElementSetSpecsContext {
		let _localctx: ElementSetSpecsContext = new ElementSetSpecsContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, ASN_3gppParser.RULE_elementSetSpecs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 771;
			this.rootElementSetSpec();
			this.state = 778;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 772;
				this.match(ASN_3gppParser.COMMA);
				this.state = 773;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 774;
					this.match(ASN_3gppParser.COMMA);
					this.state = 775;
					this.additionalElementSetSpec();
					}
				}

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
	public rootElementSetSpec(): RootElementSetSpecContext {
		let _localctx: RootElementSetSpecContext = new RootElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, ASN_3gppParser.RULE_rootElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			this.elementSetSpec();
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
	public additionalElementSetSpec(): AdditionalElementSetSpecContext {
		let _localctx: AdditionalElementSetSpecContext = new AdditionalElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, ASN_3gppParser.RULE_additionalElementSetSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 782;
			this.elementSetSpec();
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
	public elementSetSpec(): ElementSetSpecContext {
		let _localctx: ElementSetSpecContext = new ElementSetSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, ASN_3gppParser.RULE_elementSetSpec);
		try {
			this.state = 787;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.TRUE_LITERAL:
			case ASN_3gppParser.FALSE_LITERAL:
			case ASN_3gppParser.TRUE_SMALL_LITERAL:
			case ASN_3gppParser.FALSE_SMALL_LITERAL:
			case ASN_3gppParser.L_BRACE:
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.MIN_LITERAL:
			case ASN_3gppParser.SIZE_LITERAL:
			case ASN_3gppParser.PATTERN_LITERAL:
			case ASN_3gppParser.NUMBER:
			case ASN_3gppParser.BSTRING:
			case ASN_3gppParser.CSTRING:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 784;
				this.unions();
				}
				break;
			case ASN_3gppParser.ALL_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 785;
				this.match(ASN_3gppParser.ALL_LITERAL);
				this.state = 786;
				this.exclusions();
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
	public unions(): UnionsContext {
		let _localctx: UnionsContext = new UnionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, ASN_3gppParser.RULE_unions);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 789;
			this.intersections();
			}
			this.state = 795;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL) {
				{
				{
				this.state = 790;
				this.unionMark();
				this.state = 791;
				this.intersections();
				}
				}
				this.state = 797;
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
	public exclusions(): ExclusionsContext {
		let _localctx: ExclusionsContext = new ExclusionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, ASN_3gppParser.RULE_exclusions);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 798;
			this.match(ASN_3gppParser.EXCEPT_LITERAL);
			this.state = 799;
			this.elements();
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
	public intersections(): IntersectionsContext {
		let _localctx: IntersectionsContext = new IntersectionsContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, ASN_3gppParser.RULE_intersections);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 801;
			this.intersectionElements();
			}
			this.state = 807;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL) {
				{
				{
				this.state = 802;
				this.intersectionMark();
				this.state = 803;
				this.intersectionElements();
				}
				}
				this.state = 809;
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
	public unionMark(): UnionMarkContext {
		let _localctx: UnionMarkContext = new UnionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, ASN_3gppParser.RULE_unionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 810;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.PIPE || _la === ASN_3gppParser.UNION_LITERAL)) {
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
	public intersectionMark(): IntersectionMarkContext {
		let _localctx: IntersectionMarkContext = new IntersectionMarkContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, ASN_3gppParser.RULE_intersectionMark);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 812;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.POWER || _la === ASN_3gppParser.INTERSECTION_LITERAL)) {
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
	public elements(): ElementsContext {
		let _localctx: ElementsContext = new ElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, ASN_3gppParser.RULE_elements);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.subtypeElements();
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
	public objectSetElements(): ObjectSetElementsContext {
		let _localctx: ObjectSetElementsContext = new ObjectSetElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, ASN_3gppParser.RULE_objectSetElements);
		try {
			this.state = 818;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 816;
				this.object();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 817;
				this.definedObject();
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
	public intersectionElements(): IntersectionElementsContext {
		let _localctx: IntersectionElementsContext = new IntersectionElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, ASN_3gppParser.RULE_intersectionElements);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 820;
			this.elements();
			this.state = 822;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCEPT_LITERAL) {
				{
				this.state = 821;
				this.exclusions();
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
	public subtypeElements(): SubtypeElementsContext {
		let _localctx: SubtypeElementsContext = new SubtypeElementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, ASN_3gppParser.RULE_subtypeElements);
		let _la: number;
		try {
			this.state = 843;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 826;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.TRUE_LITERAL:
				case ASN_3gppParser.FALSE_LITERAL:
				case ASN_3gppParser.TRUE_SMALL_LITERAL:
				case ASN_3gppParser.FALSE_SMALL_LITERAL:
				case ASN_3gppParser.L_BRACE:
				case ASN_3gppParser.MINUS:
				case ASN_3gppParser.NUMBER:
				case ASN_3gppParser.BSTRING:
				case ASN_3gppParser.CSTRING:
				case ASN_3gppParser.IDENTIFIER:
					{
					this.state = 824;
					this.value();
					}
					break;
				case ASN_3gppParser.MIN_LITERAL:
					{
					this.state = 825;
					this.match(ASN_3gppParser.MIN_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.LESS_THAN) {
					{
					this.state = 828;
					this.match(ASN_3gppParser.LESS_THAN);
					}
				}

				this.state = 831;
				this.match(ASN_3gppParser.DOUBLE_DOT);
				this.state = 833;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.LESS_THAN) {
					{
					this.state = 832;
					this.match(ASN_3gppParser.LESS_THAN);
					}
				}

				this.state = 837;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASN_3gppParser.TRUE_LITERAL:
				case ASN_3gppParser.FALSE_LITERAL:
				case ASN_3gppParser.TRUE_SMALL_LITERAL:
				case ASN_3gppParser.FALSE_SMALL_LITERAL:
				case ASN_3gppParser.L_BRACE:
				case ASN_3gppParser.MINUS:
				case ASN_3gppParser.NUMBER:
				case ASN_3gppParser.BSTRING:
				case ASN_3gppParser.CSTRING:
				case ASN_3gppParser.IDENTIFIER:
					{
					this.state = 835;
					this.value();
					}
					break;
				case ASN_3gppParser.MAX_LITERAL:
					{
					this.state = 836;
					this.match(ASN_3gppParser.MAX_LITERAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 839;
				this.sizeConstraint();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				{
				this.state = 840;
				this.match(ASN_3gppParser.PATTERN_LITERAL);
				this.state = 841;
				this.value();
				}
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 842;
				this.value();
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
	public variableTypeValueSetFieldSpec(): VariableTypeValueSetFieldSpecContext {
		let _localctx: VariableTypeValueSetFieldSpecContext = new VariableTypeValueSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, ASN_3gppParser.RULE_variableTypeValueSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 845;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 846;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 847;
			this.fieldName();
			this.state = 849;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 848;
				this.valueSetOptionalitySpec();
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
	public objectFieldSpec(): ObjectFieldSpecContext {
		let _localctx: ObjectFieldSpecContext = new ObjectFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, ASN_3gppParser.RULE_objectFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 851;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 852;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 853;
			this.definedObjectClass();
			this.state = 855;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 854;
				this.objectOptionalitySpec();
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
	public objectOptionalitySpec(): ObjectOptionalitySpecContext {
		let _localctx: ObjectOptionalitySpecContext = new ObjectOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, ASN_3gppParser.RULE_objectOptionalitySpec);
		try {
			this.state = 860;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 857;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 858;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 859;
				this.object();
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
	public objectSetFieldSpec(): ObjectSetFieldSpecContext {
		let _localctx: ObjectSetFieldSpecContext = new ObjectSetFieldSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, ASN_3gppParser.RULE_objectSetFieldSpec);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 862;
			this.match(ASN_3gppParser.AMPERSAND);
			this.state = 863;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 864;
			this.definedObjectClass();
			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.OPTIONAL_LITERAL || _la === ASN_3gppParser.DEFAULT_LITERAL) {
				{
				this.state = 865;
				this.objectSetOptionalitySpec();
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
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext {
		let _localctx: ObjectSetOptionalitySpecContext = new ObjectSetOptionalitySpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, ASN_3gppParser.RULE_objectSetOptionalitySpec);
		try {
			this.state = 871;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.OPTIONAL_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 868;
				this.match(ASN_3gppParser.OPTIONAL_LITERAL);
				}
				break;
			case ASN_3gppParser.DEFAULT_LITERAL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 869;
				this.match(ASN_3gppParser.DEFAULT_LITERAL);
				this.state = 870;
				this.objectSet();
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
	public typeAssignment(): TypeAssignmentContext {
		let _localctx: TypeAssignmentContext = new TypeAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, ASN_3gppParser.RULE_typeAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 873;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 874;
			this.asnType();
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
	public valueAssignment(): ValueAssignmentContext {
		let _localctx: ValueAssignmentContext = new ValueAssignmentContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, ASN_3gppParser.RULE_valueAssignment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 876;
			this.asnType();
			this.state = 877;
			this.match(ASN_3gppParser.ASSIGN_OP);
			this.state = 878;
			this.value();
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
	public asnType(): AsnTypeContext {
		let _localctx: AsnTypeContext = new AsnTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, ASN_3gppParser.RULE_asnType);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 880;
				this.builtinType();
				}
				break;

			case 2:
				{
				this.state = 881;
				this.referencedType();
				}
				break;
			}
			this.state = 887;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 884;
					this.constraint();
					}
					}
				}
				this.state = 889;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 97, this._ctx);
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
	public builtinType(): BuiltinTypeContext {
		let _localctx: BuiltinTypeContext = new BuiltinTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, ASN_3gppParser.RULE_builtinType);
		try {
			this.state = 903;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 890;
				this.octetStringType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 891;
				this.bitStringType();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 892;
				this.choiceType();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 893;
				this.enumeratedType();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 894;
				this.integerType();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 895;
				this.sequenceType();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 896;
				this.sequenceOfType();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 897;
				this.setType();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 898;
				this.setOfType();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 899;
				this.objectidentifiertype();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 900;
				this.objectClassFieldType();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 901;
				this.match(ASN_3gppParser.BOOLEAN_LITERAL);
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 902;
				this.match(ASN_3gppParser.NULL_LITERAL);
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
	public objectClassFieldType(): ObjectClassFieldTypeContext {
		let _localctx: ObjectClassFieldTypeContext = new ObjectClassFieldTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, ASN_3gppParser.RULE_objectClassFieldType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 905;
			this.definedObjectClass();
			this.state = 906;
			this.match(ASN_3gppParser.DOT);
			this.state = 907;
			this.fieldName();
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
	public setType(): SetTypeContext {
		let _localctx: SetTypeContext = new SetTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, ASN_3gppParser.RULE_setType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			this.match(ASN_3gppParser.SET_LITERAL);
			this.state = 910;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 915;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 911;
				this.extensionAndException();
				this.state = 912;
				this.optionalExtensionMarker();
				}
				break;

			case 2:
				{
				this.state = 914;
				this.componentTypeLists();
				}
				break;
			}
			this.state = 917;
			this.match(ASN_3gppParser.R_BRACE);
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
	public setOfType(): SetOfTypeContext {
		let _localctx: SetOfTypeContext = new SetOfTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, ASN_3gppParser.RULE_setOfType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 919;
			this.match(ASN_3gppParser.SET_LITERAL);
			this.state = 922;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.L_PARAN:
				{
				this.state = 920;
				this.constraint();
				}
				break;
			case ASN_3gppParser.SIZE_LITERAL:
				{
				this.state = 921;
				this.sizeConstraint();
				}
				break;
			case ASN_3gppParser.OF_LITERAL:
				break;
			default:
				break;
			}
			this.state = 924;
			this.match(ASN_3gppParser.OF_LITERAL);
			this.state = 927;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 101, this._ctx) ) {
			case 1:
				{
				this.state = 925;
				this.asnType();
				}
				break;

			case 2:
				{
				this.state = 926;
				this.namedType();
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
	public referencedType(): ReferencedTypeContext {
		let _localctx: ReferencedTypeContext = new ReferencedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, ASN_3gppParser.RULE_referencedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 929;
			this.definedType();
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
	public definedType(): DefinedTypeContext {
		let _localctx: DefinedTypeContext = new DefinedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, ASN_3gppParser.RULE_definedType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 931;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 934;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 932;
				this.match(ASN_3gppParser.DOT);
				this.state = 933;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
			}

			this.state = 937;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 936;
				this.actualParameterList();
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
	public constraint(): ConstraintContext {
		let _localctx: ConstraintContext = new ConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, ASN_3gppParser.RULE_constraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 939;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 940;
			this.constraintSpec();
			this.state = 942;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.EXCLAM) {
				{
				this.state = 941;
				this.exceptionSpec();
				}
			}

			this.state = 944;
			this.match(ASN_3gppParser.R_PARAN);
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
	public constraintSpec(): ConstraintSpecContext {
		let _localctx: ConstraintSpecContext = new ConstraintSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, ASN_3gppParser.RULE_constraintSpec);
		try {
			this.state = 948;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 946;
				this.generalConstraint();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 947;
				this.subtypeConstraint();
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
	public userDefinedConstraint(): UserDefinedConstraintContext {
		let _localctx: UserDefinedConstraintContext = new UserDefinedConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, ASN_3gppParser.RULE_userDefinedConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 950;
			this.match(ASN_3gppParser.CONSTRAINED_LITERAL);
			this.state = 951;
			this.match(ASN_3gppParser.BY_LITERAL);
			this.state = 952;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 953;
			this.userDefinedConstraintParameter();
			this.state = 958;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 954;
				this.match(ASN_3gppParser.COMMA);
				this.state = 955;
				this.userDefinedConstraintParameter();
				}
				}
				this.state = 960;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 961;
			this.match(ASN_3gppParser.R_BRACE);
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
	public generalConstraint(): GeneralConstraintContext {
		let _localctx: GeneralConstraintContext = new GeneralConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, ASN_3gppParser.RULE_generalConstraint);
		try {
			this.state = 966;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.CONSTRAINED_LITERAL:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 963;
				this.userDefinedConstraint();
				}
				break;
			case ASN_3gppParser.L_BRACE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 964;
				this.tableConstraint();
				}
				break;
			case ASN_3gppParser.CONTAINING_LITERAL:
			case ASN_3gppParser.WITH_LITERAL:
			case ASN_3gppParser.ENCODED_LITERAL:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 965;
				this.contentsConstraint();
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
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext {
		let _localctx: UserDefinedConstraintParameterContext = new UserDefinedConstraintParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, ASN_3gppParser.RULE_userDefinedConstraintParameter);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 968;
			this.governor();
			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 969;
				this.match(ASN_3gppParser.COLON);
				this.state = 970;
				this.value();
				}
				break;

			case 2:
				{
				this.state = 971;
				this.valueSet();
				}
				break;

			case 3:
				{
				this.state = 972;
				this.object();
				}
				break;

			case 4:
				{
				this.state = 973;
				this.objectSet();
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
	public tableConstraint(): TableConstraintContext {
		let _localctx: TableConstraintContext = new TableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, ASN_3gppParser.RULE_tableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this.componentRelationConstraint();
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
	public simpleTableConstraint(): SimpleTableConstraintContext {
		let _localctx: SimpleTableConstraintContext = new SimpleTableConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, ASN_3gppParser.RULE_simpleTableConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 978;
			this.objectSet();
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
	public contentsConstraint(): ContentsConstraintContext {
		let _localctx: ContentsConstraintContext = new ContentsConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, ASN_3gppParser.RULE_contentsConstraint);
		try {
			this.state = 997;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 980;
				this.match(ASN_3gppParser.CONTAINING_LITERAL);
				this.state = 981;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 982;
				this.match(ASN_3gppParser.ENCODED_LITERAL);
				this.state = 983;
				this.match(ASN_3gppParser.BY_LITERAL);
				this.state = 984;
				this.value();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 985;
				this.match(ASN_3gppParser.CONTAINING_LITERAL);
				this.state = 986;
				this.asnType();
				this.state = 987;
				this.match(ASN_3gppParser.ENCODED_LITERAL);
				this.state = 988;
				this.match(ASN_3gppParser.BY_LITERAL);
				this.state = 989;
				this.value();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 991;
				this.match(ASN_3gppParser.WITH_LITERAL);
				this.state = 992;
				this.match(ASN_3gppParser.COMPONENTS_LITERAL);
				this.state = 993;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 994;
				this.componentPresenceLists();
				this.state = 995;
				this.match(ASN_3gppParser.R_BRACE);
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
	public componentPresenceLists(): ComponentPresenceListsContext {
		let _localctx: ComponentPresenceListsContext = new ComponentPresenceListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, ASN_3gppParser.RULE_componentPresenceLists);
		let _la: number;
		try {
			this.state = 1015;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.R_BRACE:
			case ASN_3gppParser.COMMA:
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1000;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.IDENTIFIER) {
					{
					this.state = 999;
					this.componentPresenceList();
					}
				}

				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1002;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1003;
					this.match(ASN_3gppParser.ELLIPSIS);
					this.state = 1006;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === ASN_3gppParser.COMMA) {
						{
						this.state = 1004;
						this.match(ASN_3gppParser.COMMA);
						this.state = 1005;
						this.componentPresenceList();
						}
					}

					}
				}

				}
				break;
			case ASN_3gppParser.ELLIPSIS:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1010;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1011;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1012;
					this.componentPresenceList();
					}
				}

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
	public componentPresenceList(): ComponentPresenceListContext {
		let _localctx: ComponentPresenceListContext = new ComponentPresenceListContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, ASN_3gppParser.RULE_componentPresenceList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1017;
			this.componentPresence();
			}
			this.state = 1022;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1018;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1019;
					this.componentPresence();
					}
					}
				}
				this.state = 1024;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 115, this._ctx);
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
	public componentPresence(): ComponentPresenceContext {
		let _localctx: ComponentPresenceContext = new ComponentPresenceContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, ASN_3gppParser.RULE_componentPresence);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1025;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1026;
			_la = this._input.LA(1);
			if (!(_la === ASN_3gppParser.PRESENT_LITERAL || _la === ASN_3gppParser.ABSENT_LITERAL)) {
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
	public subtypeConstraint(): SubtypeConstraintContext {
		let _localctx: SubtypeConstraintContext = new SubtypeConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, ASN_3gppParser.RULE_subtypeConstraint);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1028;
			this.elementSetSpecs();
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
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, ASN_3gppParser.RULE_value);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1030;
			this.builtinValue();
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
	public builtinValue(): BuiltinValueContext {
		let _localctx: BuiltinValueContext = new BuiltinValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, ASN_3gppParser.RULE_builtinValue);
		try {
			this.state = 1039;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 116, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1032;
				this.enumeratedValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1033;
				this.integerValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1034;
				this.choiceValue();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1035;
				this.objectIdentifierValue();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1036;
				this.booleanValue();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1037;
				this.match(ASN_3gppParser.CSTRING);
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1038;
				this.match(ASN_3gppParser.BSTRING);
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
	public objectIdentifierValue(): ObjectIdentifierValueContext {
		let _localctx: ObjectIdentifierValueContext = new ObjectIdentifierValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, ASN_3gppParser.RULE_objectIdentifierValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1042;
			this.objIdComponentsList();
			this.state = 1043;
			this.match(ASN_3gppParser.R_BRACE);
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
	public objIdComponentsList(): ObjIdComponentsListContext {
		let _localctx: ObjIdComponentsListContext = new ObjIdComponentsListContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, ASN_3gppParser.RULE_objIdComponentsList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1045;
			this.objIdComponents();
			}
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.NUMBER || _la === ASN_3gppParser.IDENTIFIER) {
				{
				{
				this.state = 1046;
				this.objIdComponents();
				}
				}
				this.state = 1051;
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
	public objIdComponents(): ObjIdComponentsContext {
		let _localctx: ObjIdComponentsContext = new ObjIdComponentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, ASN_3gppParser.RULE_objIdComponents);
		let _la: number;
		try {
			this.state = 1063;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 120, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1052;
				this.match(ASN_3gppParser.NUMBER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1053;
				this.match(ASN_3gppParser.IDENTIFIER);
				this.state = 1060;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.L_PARAN) {
					{
					this.state = 1054;
					this.match(ASN_3gppParser.L_PARAN);
					this.state = 1057;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case ASN_3gppParser.NUMBER:
						{
						this.state = 1055;
						this.match(ASN_3gppParser.NUMBER);
						}
						break;
					case ASN_3gppParser.IDENTIFIER:
						{
						this.state = 1056;
						this.definedValue();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 1059;
					this.match(ASN_3gppParser.R_PARAN);
					}
				}

				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1062;
				this.definedValue();
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
	public integerValue(): IntegerValueContext {
		let _localctx: IntegerValueContext = new IntegerValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, ASN_3gppParser.RULE_integerValue);
		try {
			this.state = 1067;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1065;
				this.signedNumber();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1066;
				this.match(ASN_3gppParser.IDENTIFIER);
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
	public choiceValue(): ChoiceValueContext {
		let _localctx: ChoiceValueContext = new ChoiceValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, ASN_3gppParser.RULE_choiceValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1069;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1070;
			this.match(ASN_3gppParser.COLON);
			this.state = 1071;
			this.value();
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
	public enumeratedValue(): EnumeratedValueContext {
		let _localctx: EnumeratedValueContext = new EnumeratedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, ASN_3gppParser.RULE_enumeratedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1073;
			this.match(ASN_3gppParser.IDENTIFIER);
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
	public signedNumber(): SignedNumberContext {
		let _localctx: SignedNumberContext = new SignedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, ASN_3gppParser.RULE_signedNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1076;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.MINUS) {
				{
				this.state = 1075;
				this.match(ASN_3gppParser.MINUS);
				}
			}

			this.state = 1078;
			this.match(ASN_3gppParser.NUMBER);
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
	public choiceType(): ChoiceTypeContext {
		let _localctx: ChoiceTypeContext = new ChoiceTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, ASN_3gppParser.RULE_choiceType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1080;
			this.match(ASN_3gppParser.CHOICE_LITERAL);
			this.state = 1081;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1082;
			this.alternativeTypeLists();
			this.state = 1083;
			this.match(ASN_3gppParser.R_BRACE);
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
	public alternativeTypeLists(): AlternativeTypeListsContext {
		let _localctx: AlternativeTypeListsContext = new AlternativeTypeListsContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, ASN_3gppParser.RULE_alternativeTypeLists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1085;
			this.rootAlternativeTypeList();
			this.state = 1091;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 1086;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1087;
				this.extensionAndException();
				this.state = 1088;
				this.extensionAdditionAlternatives();
				this.state = 1089;
				this.optionalExtensionMarker();
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
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext {
		let _localctx: ExtensionAdditionAlternativesContext = new ExtensionAdditionAlternativesContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, ASN_3gppParser.RULE_extensionAdditionAlternatives);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1095;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 124, this._ctx) ) {
			case 1:
				{
				this.state = 1093;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1094;
				this.extensionAdditionAlternativesList();
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
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext {
		let _localctx: ExtensionAdditionAlternativesListContext = new ExtensionAdditionAlternativesListContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, ASN_3gppParser.RULE_extensionAdditionAlternativesList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1097;
			this.extensionAdditionAlternative();
			}
			this.state = 1102;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1098;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1099;
					this.extensionAdditionAlternative();
					}
					}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 125, this._ctx);
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
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext {
		let _localctx: ExtensionAdditionAlternativeContext = new ExtensionAdditionAlternativeContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, ASN_3gppParser.RULE_extensionAdditionAlternative);
		try {
			this.state = 1107;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.DOUBLE_L_BRACKET:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1105;
				this.extensionAdditionAlternativesGroup();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1106;
				this.namedType();
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
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext {
		let _localctx: ExtensionAdditionAlternativesGroupContext = new ExtensionAdditionAlternativesGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, ASN_3gppParser.RULE_extensionAdditionAlternativesGroup);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			this.match(ASN_3gppParser.DOUBLE_L_BRACKET);
			this.state = 1110;
			this.versionNumber();
			this.state = 1111;
			this.alternativeTypeList();
			this.state = 1112;
			this.match(ASN_3gppParser.DOUBLE_R_BRACKET);
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
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		let _localctx: RootAlternativeTypeListContext = new RootAlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, ASN_3gppParser.RULE_rootAlternativeTypeList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1114;
			this.alternativeTypeList();
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
	public alternativeTypeList(): AlternativeTypeListContext {
		let _localctx: AlternativeTypeListContext = new AlternativeTypeListContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, ASN_3gppParser.RULE_alternativeTypeList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1116;
			this.namedType();
			}
			this.state = 1121;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1117;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1118;
					this.namedType();
					}
					}
				}
				this.state = 1123;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 127, this._ctx);
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
	public namedType(): NamedTypeContext {
		let _localctx: NamedTypeContext = new NamedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, ASN_3gppParser.RULE_namedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1124;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1125;
			this.asnType();
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
	public enumeratedType(): EnumeratedTypeContext {
		let _localctx: EnumeratedTypeContext = new EnumeratedTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, ASN_3gppParser.RULE_enumeratedType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1127;
			this.match(ASN_3gppParser.ENUMERATED_LITERAL);
			this.state = 1128;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1129;
			this.enumerations();
			this.state = 1130;
			this.match(ASN_3gppParser.R_BRACE);
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
	public enumerations(): EnumerationsContext {
		let _localctx: EnumerationsContext = new EnumerationsContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, ASN_3gppParser.RULE_enumerations);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1132;
			this.rootEnumeration();
			this.state = 1142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.COMMA) {
				{
				this.state = 1133;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1134;
				this.match(ASN_3gppParser.ELLIPSIS);
				this.state = 1136;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.EXCLAM) {
					{
					this.state = 1135;
					this.exceptionSpec();
					}
				}

				this.state = 1140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASN_3gppParser.COMMA) {
					{
					this.state = 1138;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1139;
					this.additionalEnumeration();
					}
				}

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
	public rootEnumeration(): RootEnumerationContext {
		let _localctx: RootEnumerationContext = new RootEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, ASN_3gppParser.RULE_rootEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1144;
			this.enumeration();
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
	public enumeration(): EnumerationContext {
		let _localctx: EnumerationContext = new EnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, ASN_3gppParser.RULE_enumeration);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1146;
			this.enumerationItem();
			this.state = 1151;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1147;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1148;
					this.enumerationItem();
					}
					}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 131, this._ctx);
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
	public enumerationItem(): EnumerationItemContext {
		let _localctx: EnumerationItemContext = new EnumerationItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, ASN_3gppParser.RULE_enumerationItem);
		try {
			this.state = 1157;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 132, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1154;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1155;
				this.namedNumber();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1156;
				this.value();
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
	public namedNumber(): NamedNumberContext {
		let _localctx: NamedNumberContext = new NamedNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, ASN_3gppParser.RULE_namedNumber);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1159;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1160;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 1163;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.MINUS:
			case ASN_3gppParser.NUMBER:
				{
				this.state = 1161;
				this.signedNumber();
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				{
				this.state = 1162;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1165;
			this.match(ASN_3gppParser.R_PARAN);
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
	public definedValue(): DefinedValueContext {
		let _localctx: DefinedValueContext = new DefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, ASN_3gppParser.RULE_definedValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1167;
			this.parameterizedValue();
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
	public parameterizedValue(): ParameterizedValueContext {
		let _localctx: ParameterizedValueContext = new ParameterizedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, ASN_3gppParser.RULE_parameterizedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1169;
			this.simpleDefinedValue();
			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 1170;
				this.actualParameterList();
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
	public simpleDefinedValue(): SimpleDefinedValueContext {
		let _localctx: SimpleDefinedValueContext = new SimpleDefinedValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, ASN_3gppParser.RULE_simpleDefinedValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1176;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1174;
				this.match(ASN_3gppParser.DOT);
				this.state = 1175;
				this.match(ASN_3gppParser.IDENTIFIER);
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
	public actualParameterList(): ActualParameterListContext {
		let _localctx: ActualParameterListContext = new ActualParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, ASN_3gppParser.RULE_actualParameterList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1178;
			this.match(ASN_3gppParser.L_BRACE);
			this.state = 1179;
			this.actualParameter();
			this.state = 1184;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1180;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1181;
				this.actualParameter();
				}
				}
				this.state = 1186;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1187;
			this.match(ASN_3gppParser.R_BRACE);
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
	public actualParameter(): ActualParameterContext {
		let _localctx: ActualParameterContext = new ActualParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, ASN_3gppParser.RULE_actualParameter);
		try {
			this.state = 1191;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 137, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1189;
				this.asnType();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1190;
				this.value();
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
	public exceptionSpec(): ExceptionSpecContext {
		let _localctx: ExceptionSpecContext = new ExceptionSpecContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, ASN_3gppParser.RULE_exceptionSpec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1193;
			this.match(ASN_3gppParser.EXCLAM);
			this.state = 1194;
			this.exceptionIdentification();
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
	public exceptionIdentification(): ExceptionIdentificationContext {
		let _localctx: ExceptionIdentificationContext = new ExceptionIdentificationContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, ASN_3gppParser.RULE_exceptionIdentification);
		try {
			this.state = 1202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1196;
				this.signedNumber();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1197;
				this.definedValue();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1198;
				this.asnType();
				this.state = 1199;
				this.match(ASN_3gppParser.COLON);
				this.state = 1200;
				this.value();
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
	public additionalEnumeration(): AdditionalEnumerationContext {
		let _localctx: AdditionalEnumerationContext = new AdditionalEnumerationContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, ASN_3gppParser.RULE_additionalEnumeration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1204;
			this.enumeration();
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
	public integerType(): IntegerTypeContext {
		let _localctx: IntegerTypeContext = new IntegerTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, ASN_3gppParser.RULE_integerType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1206;
			this.match(ASN_3gppParser.INTEGER_LITERAL);
			this.state = 1211;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 139, this._ctx) ) {
			case 1:
				{
				this.state = 1207;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1208;
				this.namedNumberList();
				this.state = 1209;
				this.match(ASN_3gppParser.R_BRACE);
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
	public namedNumberList(): NamedNumberListContext {
		let _localctx: NamedNumberListContext = new NamedNumberListContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, ASN_3gppParser.RULE_namedNumberList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1213;
			this.namedNumber();
			}
			this.state = 1218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1214;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1215;
				this.namedNumber();
				}
				}
				this.state = 1220;
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
	public objectidentifiertype(): ObjectidentifiertypeContext {
		let _localctx: ObjectidentifiertypeContext = new ObjectidentifiertypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, ASN_3gppParser.RULE_objectidentifiertype);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1221;
			this.match(ASN_3gppParser.OBJECT_LITERAL);
			this.state = 1222;
			this.match(ASN_3gppParser.IDENTIFIER_LITERAL);
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
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		let _localctx: ComponentRelationConstraintContext = new ComponentRelationConstraintContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, ASN_3gppParser.RULE_componentRelationConstraint);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1224;
			this.match(ASN_3gppParser.L_BRACE);
			{
			this.state = 1225;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1226;
				this.match(ASN_3gppParser.DOT);
				this.state = 1227;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
			}

			}
			this.state = 1230;
			this.match(ASN_3gppParser.R_BRACE);
			this.state = 1242;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.L_BRACE) {
				{
				this.state = 1231;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1232;
				this.atNotation();
				this.state = 1237;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ASN_3gppParser.COMMA) {
					{
					{
					this.state = 1233;
					this.match(ASN_3gppParser.COMMA);
					this.state = 1234;
					this.atNotation();
					}
					}
					this.state = 1239;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1240;
				this.match(ASN_3gppParser.R_BRACE);
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
	public atNotation(): AtNotationContext {
		let _localctx: AtNotationContext = new AtNotationContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, ASN_3gppParser.RULE_atNotation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1247;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.A_ROND:
				{
				this.state = 1244;
				this.match(ASN_3gppParser.A_ROND);
				}
				break;
			case ASN_3gppParser.A_ROND_DOT:
				{
				{
				this.state = 1245;
				this.match(ASN_3gppParser.A_ROND_DOT);
				this.state = 1246;
				this.level();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1249;
			this.componentIdList();
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
	public level(): LevelContext {
		let _localctx: LevelContext = new LevelContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, ASN_3gppParser.RULE_level);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASN_3gppParser.DOT) {
				{
				this.state = 1251;
				this.match(ASN_3gppParser.DOT);
				this.state = 1252;
				this.level();
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
	public componentIdList(): ComponentIdListContext {
		let _localctx: ComponentIdListContext = new ComponentIdListContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, ASN_3gppParser.RULE_componentIdList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1255;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1260;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.DOT) {
				{
				{
				this.state = 1256;
				this.match(ASN_3gppParser.DOT);
				this.state = 1257;
				this.match(ASN_3gppParser.IDENTIFIER);
				}
				}
				this.state = 1262;
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
	public octetStringType(): OctetStringTypeContext {
		let _localctx: OctetStringTypeContext = new OctetStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, ASN_3gppParser.RULE_octetStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1263;
			this.match(ASN_3gppParser.OCTET_LITERAL);
			this.state = 1264;
			this.match(ASN_3gppParser.STRING_LITERAL);
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
	public bitStringType(): BitStringTypeContext {
		let _localctx: BitStringTypeContext = new BitStringTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, ASN_3gppParser.RULE_bitStringType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1266;
			this.match(ASN_3gppParser.BIT_LITERAL);
			this.state = 1267;
			this.match(ASN_3gppParser.STRING_LITERAL);
			}
			this.state = 1273;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 147, this._ctx) ) {
			case 1:
				{
				this.state = 1269;
				this.match(ASN_3gppParser.L_BRACE);
				this.state = 1270;
				this.namedBitList();
				this.state = 1271;
				this.match(ASN_3gppParser.R_BRACE);
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
	public namedBitList(): NamedBitListContext {
		let _localctx: NamedBitListContext = new NamedBitListContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, ASN_3gppParser.RULE_namedBitList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 1275;
			this.namedBit();
			}
			this.state = 1280;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASN_3gppParser.COMMA) {
				{
				{
				this.state = 1276;
				this.match(ASN_3gppParser.COMMA);
				this.state = 1277;
				this.namedBit();
				}
				}
				this.state = 1282;
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
	public namedBit(): NamedBitContext {
		let _localctx: NamedBitContext = new NamedBitContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, ASN_3gppParser.RULE_namedBit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1283;
			this.match(ASN_3gppParser.IDENTIFIER);
			this.state = 1284;
			this.match(ASN_3gppParser.L_PARAN);
			this.state = 1287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASN_3gppParser.NUMBER:
				{
				this.state = 1285;
				this.match(ASN_3gppParser.NUMBER);
				}
				break;
			case ASN_3gppParser.IDENTIFIER:
				{
				this.state = 1286;
				this.definedValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 1289;
			this.match(ASN_3gppParser.R_PARAN);
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
	public booleanValue(): BooleanValueContext {
		let _localctx: BooleanValueContext = new BooleanValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, ASN_3gppParser.RULE_booleanValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1291;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASN_3gppParser.TRUE_LITERAL) | (1 << ASN_3gppParser.FALSE_LITERAL) | (1 << ASN_3gppParser.TRUE_SMALL_LITERAL) | (1 << ASN_3gppParser.FALSE_SMALL_LITERAL))) !== 0))) {
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

	private static readonly _serializedATNSegments: number = 3;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03m\u0510\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
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
		"\x04\x96\t\x96\x04\x97\t\x97\x03\x02\x06\x02\u0130\n\x02\r\x02\x0E\x02" +
		"\u0131\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\u013A\n" +
		"\x03\f\x03\x0E\x03\u013D\v\x03\x03\x03\x05\x03\u0140\n\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x05" +
		"\x04\u014C\n\x04\x03\x05\x03\x05\x05\x05\u0150\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06\u0156\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07\u015F\n\x07\x03\b\x05\b\u0162\n\b\x03\t\x03\t" +
		"\x03\t\x03\t\x05\t\u0168\n\t\x03\n\x05\n\u016B\n\n\x03\v\x03\v\x07\v\u016F" +
		"\n\v\f\v\x0E\v\u0172\v\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x07\x0F\u0180\n\x0F\f\x0F\x0E\x0F" +
		"\u0183\v\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u0188\n\x10\x03\x11\x03\x11" +
		"\x07\x11\u018C\n\x11\f\x11\x0E\x11\u018F\v\x11\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x03\x12\x05\x12\u0196\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x05\x13\u019E\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14" +
		"\u01A4\n\x14\x03\x15\x03\x15\x05\x15\u01A8\n\x15\x03\x16\x03\x16\x03\x16" +
		"\x03\x16\x05\x16\u01AE\n\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x05\x16\u01B7\n\x16\x05\x16\u01B9\n\x16\x05\x16\u01BB\n\x16" +
		"\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x05\x16\u01C4" +
		"\n\x16\x05\x16\u01C6\n\x16\x05\x16\u01C8\n\x16\x03\x17\x03\x17\x03\x18" +
		"\x03\x18\x03\x18\x05\x18\u01CF\n\x18\x03\x18\x07\x18\u01D2\n\x18\f\x18" +
		"\x0E\x18\u01D5\v\x18\x03\x19\x03\x19\x03\x19\x03\x19\x05\x19\u01DB\n\x19" +
		"\x03\x19\x03\x19\x03\x19\x05\x19\u01E0\n\x19\x03\x1A\x03\x1A\x03\x1A\x05" +
		"\x1A\u01E5\n\x1A\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D" +
		"\x03\x1D\x05\x1D\u01EF\n\x1D\x03\x1E\x03\x1E\x03\x1E\x07\x1E\u01F4\n\x1E" +
		"\f\x1E\x0E\x1E\u01F7\v\x1E\x03\x1F\x03\x1F\x05\x1F\u01FB\n\x1F\x03 \x03" +
		" \x03 \x03 \x05 \u0201\n \x03 \x03 \x03!\x03!\x05!\u0207\n!\x03\"\x03" +
		"\"\x03\"\x03\"\x05\"\u020D\n\"\x03\"\x03\"\x05\"\u0211\n\"\x03\"\x03\"" +
		"\x03\"\x05\"\u0216\n\"\x03#\x03#\x03#\x03$\x03$\x03$\x03$\x03$\x05$\u0220" +
		"\n$\x03$\x03$\x03$\x03$\x03$\x05$\u0227\n$\x05$\u0229\n$\x03%\x03%\x03" +
		"%\x03%\x07%\u022F\n%\f%\x0E%\u0232\v%\x03%\x03%\x03&\x03&\x03&\x05&\u0239" +
		"\n&\x03&\x03&\x03\'\x03\'\x05\'\u023F\n\'\x03(\x03(\x05(\u0243\n(\x03" +
		")\x03)\x03)\x03*\x03*\x05*\u024A\n*\x03+\x03+\x05+\u024E\n+\x03+\x03+" +
		"\x03+\x05+\u0253\n+\x03,\x03,\x03-\x03-\x03-\x03-\x03.\x03.\x03.\x03." +
		"\x03.\x07.\u0260\n.\f.\x0E.\u0263\v.\x03.\x03.\x05.\u0267\n.\x03/\x03" +
		"/\x03/\x03/\x030\x030\x060\u026F\n0\r0\x0E0\u0270\x030\x030\x031\x031" +
		"\x051\u0277\n1\x032\x032\x062\u027B\n2\r2\x0E2\u027C\x032\x032\x033\x03" +
		"3\x053\u0283\n3\x034\x034\x035\x035\x035\x036\x036\x036\x056\u028D\n6" +
		"\x036\x036\x056\u0291\n6\x036\x056\u0294\n6\x036\x056\u0297\n6\x056\u0299" +
		"\n6\x036\x036\x036\x036\x036\x056\u02A0\n6\x056\u02A2\n6\x036\x036\x03" +
		"6\x036\x036\x056\u02A9\n6\x056\u02AB\n6\x056\u02AD\n6\x037\x037\x037\x05" +
		"7\u02B2\n7\x038\x038\x038\x058\u02B7\n8\x039\x039\x039\x039\x059\u02BD" +
		"\n9\x039\x059\u02C0\n9\x03:\x03:\x03:\x05:\u02C5\n:\x03;\x03;\x03;\x03" +
		";\x05;\u02CB\n;\x03<\x03<\x03<\x03<\x05<\u02D1\n<\x03=\x03=\x03=\x05=" +
		"\u02D6\n=\x03>\x03>\x05>\u02DA\n>\x03?\x03?\x03?\x03@\x03@\x05@\u02E1" +
		"\n@\x03A\x03A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x05B\u02EC\nB\x05B\u02EE" +
		"\nB\x03B\x03B\x03B\x05B\u02F3\nB\x05B\u02F5\nB\x03C\x03C\x03C\x03C\x03" +
		"C\x03C\x07C\u02FD\nC\fC\x0EC\u0300\vC\x03D\x03D\x03D\x03D\x03E\x03E\x03" +
		"E\x03E\x03E\x05E\u030B\nE\x05E\u030D\nE\x03F\x03F\x03G\x03G\x03H\x03H" +
		"\x03H\x05H\u0316\nH\x03I\x03I\x03I\x03I\x07I\u031C\nI\fI\x0EI\u031F\v" +
		"I\x03J\x03J\x03J\x03K\x03K\x03K\x03K\x07K\u0328\nK\fK\x0EK\u032B\vK\x03" +
		"L\x03L\x03M\x03M\x03N\x03N\x03O\x03O\x05O\u0335\nO\x03P\x03P\x05P\u0339" +
		"\nP\x03Q\x03Q\x05Q\u033D\nQ\x03Q\x05Q\u0340\nQ\x03Q\x03Q\x05Q\u0344\n" +
		"Q\x03Q\x03Q\x05Q\u0348\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u034E\nQ\x03R\x03R" +
		"\x03R\x03R\x05R\u0354\nR\x03S\x03S\x03S\x03S\x05S\u035A\nS\x03T\x03T\x03" +
		"T\x05T\u035F\nT\x03U\x03U\x03U\x03U\x05U\u0365\nU\x03V\x03V\x03V\x05V" +
		"\u036A\nV\x03W\x03W\x03W\x03X\x03X\x03X\x03X\x03Y\x03Y\x05Y\u0375\nY\x03" +
		"Y\x07Y\u0378\nY\fY\x0EY\u037B\vY\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03Z\x03" +
		"Z\x03Z\x03Z\x03Z\x03Z\x03Z\x05Z\u038A\nZ\x03[\x03[\x03[\x03[\x03\\\x03" +
		"\\\x03\\\x03\\\x03\\\x03\\\x05\\\u0396\n\\\x03\\\x03\\\x03]\x03]\x03]" +
		"\x05]\u039D\n]\x03]\x03]\x03]\x05]\u03A2\n]\x03^\x03^\x03_\x03_\x03_\x05" +
		"_\u03A9\n_\x03_\x05_\u03AC\n_\x03`\x03`\x03`\x05`\u03B1\n`\x03`\x03`\x03" +
		"a\x03a\x05a\u03B7\na\x03b\x03b\x03b\x03b\x03b\x03b\x07b\u03BF\nb\fb\x0E" +
		"b\u03C2\vb\x03b\x03b\x03c\x03c\x03c\x05c\u03C9\nc\x03d\x03d\x03d\x03d" +
		"\x03d\x03d\x05d\u03D1\nd\x03e\x03e\x03f\x03f\x03g\x03g\x03g\x03g\x03g" +
		"\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x03g\x05g\u03E8" +
		"\ng\x03h\x05h\u03EB\nh\x03h\x03h\x03h\x03h\x05h\u03F1\nh\x05h\u03F3\n" +
		"h\x03h\x03h\x03h\x05h\u03F8\nh\x05h\u03FA\nh\x03i\x03i\x03i\x07i\u03FF" +
		"\ni\fi\x0Ei\u0402\vi\x03j\x03j\x03j\x03k\x03k\x03l\x03l\x03m\x03m\x03" +
		"m\x03m\x03m\x03m\x03m\x05m\u0412\nm\x03n\x03n\x03n\x03n\x03o\x03o\x07" +
		"o\u041A\no\fo\x0Eo\u041D\vo\x03p\x03p\x03p\x03p\x03p\x05p\u0424\np\x03" +
		"p\x05p\u0427\np\x03p\x05p\u042A\np\x03q\x03q\x05q\u042E\nq\x03r\x03r\x03" +
		"r\x03r\x03s\x03s\x03t\x05t\u0437\nt\x03t\x03t\x03u\x03u\x03u\x03u\x03" +
		"u\x03v\x03v\x03v\x03v\x03v\x03v\x05v\u0446\nv\x03w\x03w\x05w\u044A\nw" +
		"\x03x\x03x\x03x\x07x\u044F\nx\fx\x0Ex\u0452\vx\x03y\x03y\x05y\u0456\n" +
		"y\x03z\x03z\x03z\x03z\x03z\x03{\x03{\x03|\x03|\x03|\x07|\u0462\n|\f|\x0E" +
		"|\u0465\v|\x03}\x03}\x03}\x03~\x03~\x03~\x03~\x03~\x03\x7F\x03\x7F\x03" +
		"\x7F\x03\x7F\x05\x7F\u0473\n\x7F\x03\x7F\x03\x7F\x05\x7F\u0477\n\x7F\x05" +
		"\x7F\u0479\n\x7F\x03\x80\x03\x80\x03\x81\x03\x81\x03\x81\x07\x81\u0480" +
		"\n\x81\f\x81\x0E\x81\u0483\v\x81\x03\x82\x03\x82\x03\x82\x05\x82\u0488" +
		"\n\x82\x03\x83\x03\x83\x03\x83\x03\x83\x05\x83\u048E\n\x83\x03\x83\x03" +
		"\x83\x03\x84\x03\x84\x03\x85\x03\x85\x05\x85\u0496\n\x85\x03\x86\x03\x86" +
		"\x03\x86\x05\x86\u049B\n\x86\x03\x87\x03\x87\x03\x87\x03\x87\x07\x87\u04A1" +
		"\n\x87\f\x87\x0E\x87\u04A4\v\x87\x03\x87\x03\x87\x03\x88\x03\x88\x05\x88" +
		"\u04AA\n\x88\x03\x89\x03\x89\x03\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8A\x03" +
		"\x8A\x03\x8A\x05\x8A\u04B5\n\x8A\x03\x8B\x03\x8B\x03\x8C\x03\x8C\x03\x8C" +
		"\x03\x8C\x03\x8C\x05\x8C\u04BE\n\x8C\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u04C3" +
		"\n\x8D\f\x8D\x0E\x8D\u04C6\v\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F" +
		"\x03\x8F\x03\x8F\x05\x8F\u04CF\n\x8F\x03\x8F\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x8F\x07\x8F\u04D6\n\x8F\f\x8F\x0E\x8F\u04D9\v\x8F\x03\x8F\x03\x8F\x05" +
		"\x8F\u04DD\n\x8F\x03\x90\x03\x90\x03\x90\x05\x90\u04E2\n\x90\x03\x90\x03" +
		"\x90\x03\x91\x03\x91\x05\x91\u04E8\n\x91\x03\x92\x03\x92\x03\x92\x07\x92" +
		"\u04ED\n\x92\f\x92\x0E\x92\u04F0\v\x92\x03\x93\x03\x93\x03\x93\x03\x94" +
		"\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x03\x94\x05\x94\u04FC\n\x94\x03" +
		"\x95\x03\x95\x03\x95\x07\x95\u0501\n\x95\f\x95\x0E\x95\u0504\v\x95\x03" +
		"\x96\x03\x96\x03\x96\x03\x96\x05\x96\u050A\n\x96\x03\x96\x03\x96\x03\x97" +
		"\x03\x97\x03\x97\x02\x02\x02\x98\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f" +
		"\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E" +
		"\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02" +
		":\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02" +
		"V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02" +
		"r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88" +
		"\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A" +
		"\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC" +
		"\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE" +
		"\x02\xC0\x02\xC2\x02\xC4\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0" +
		"\x02\xD2\x02\xD4\x02\xD6\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2" +
		"\x02\xE4\x02\xE6\x02\xE8\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4" +
		"\x02\xF6\x02\xF8\x02\xFA\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104" +
		"\x02\u0106\x02\u0108\x02\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112" +
		"\x02\u0114\x02\u0116\x02\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120" +
		"\x02\u0122\x02\u0124\x02\u0126\x02\u0128\x02\u012A\x02\u012C\x02\x02\t" +
		"\x04\x02KKMN\x03\x02>?\x04\x02\x1A\x1Amm\x03\x0212\x04\x020033\x03\x02" +
		";<\x04\x02\n\v\x15\x16\x02\u053A\x02\u012F\x03\x02\x02\x02\x04\u0133\x03" +
		"\x02\x02\x02\x06\u014B\x03\x02\x02\x02\b\u014F\x03\x02\x02\x02\n\u0155" +
		"\x03\x02\x02\x02\f\u015E\x03\x02\x02\x02\x0E\u0161\x03\x02\x02\x02\x10" +
		"\u0167\x03\x02\x02\x02\x12\u016A\x03\x02\x02\x02\x14\u016C\x03\x02\x02" +
		"\x02\x16\u0173\x03\x02\x02\x02\x18\u0177\x03\x02\x02\x02\x1A\u017A\x03" +
		"\x02\x02\x02\x1C\u017C\x03\x02\x02\x02\x1E\u0184\x03\x02\x02\x02 \u0189" +
		"\x03\x02\x02\x02\"\u0190\x03\x02\x02\x02$\u0197\x03\x02\x02\x02&\u01A1" +
		"\x03\x02\x02\x02(\u01A7\x03\x02\x02\x02*\u01C7\x03\x02\x02\x02,\u01C9" +
		"\x03\x02\x02\x02.\u01CB\x03\x02\x02\x020\u01DF\x03\x02\x02\x022\u01E4" +
		"\x03\x02\x02\x024\u01E6\x03\x02\x02\x026\u01E9\x03\x02\x02\x028\u01EE" +
		"\x03\x02\x02\x02:\u01F0\x03\x02\x02\x02<\u01FA\x03\x02\x02\x02>\u01FC" +
		"\x03\x02\x02\x02@\u0206\x03\x02\x02\x02B\u0208\x03\x02\x02\x02D\u0217" +
		"\x03\x02\x02\x02F\u0228\x03\x02\x02\x02H\u022A\x03\x02\x02\x02J\u0238" +
		"\x03\x02\x02\x02L\u023E\x03\x02\x02\x02N\u0242\x03\x02\x02\x02P\u0244" +
		"\x03\x02\x02\x02R\u0249\x03\x02\x02\x02T\u0252\x03\x02\x02\x02V\u0254" +
		"\x03\x02\x02\x02X\u0256\x03\x02\x02\x02Z\u025A\x03\x02\x02\x02\\\u0268" +
		"\x03\x02\x02\x02^\u026C\x03\x02\x02\x02`\u0276\x03\x02\x02\x02b\u0278" +
		"\x03\x02\x02\x02d\u0282\x03\x02\x02\x02f\u0284\x03\x02\x02\x02h\u0286" +
		"\x03\x02\x02\x02j\u0289\x03\x02\x02\x02l\u02AE\x03\x02\x02\x02n\u02B6" +
		"\x03\x02\x02\x02p\u02B8\x03\x02\x02\x02r\u02C4\x03\x02\x02\x02t\u02C6" +
		"\x03\x02\x02\x02v\u02CC\x03\x02\x02\x02x\u02D5\x03\x02\x02\x02z\u02D9" +
		"\x03\x02\x02\x02|\u02DB\x03\x02\x02\x02~\u02DE\x03\x02\x02\x02\x80\u02E2" +
		"\x03\x02\x02\x02\x82\u02F4\x03\x02\x02\x02\x84\u02F6\x03\x02\x02\x02\x86" +
		"\u0301\x03\x02\x02\x02\x88\u0305\x03\x02\x02\x02\x8A\u030E\x03\x02\x02" +
		"\x02\x8C\u0310\x03\x02\x02\x02\x8E\u0315\x03\x02\x02\x02\x90\u0317\x03" +
		"\x02\x02\x02\x92\u0320\x03\x02\x02\x02\x94\u0323\x03\x02\x02\x02\x96\u032C" +
		"\x03\x02\x02\x02\x98\u032E\x03\x02\x02\x02\x9A\u0330\x03\x02\x02\x02\x9C" +
		"\u0334\x03\x02\x02\x02\x9E\u0336\x03\x02\x02\x02\xA0\u034D\x03\x02\x02" +
		"\x02\xA2\u034F\x03\x02\x02\x02\xA4\u0355\x03\x02\x02\x02\xA6\u035E\x03" +
		"\x02\x02\x02\xA8\u0360\x03\x02\x02\x02\xAA\u0369\x03\x02\x02\x02\xAC\u036B" +
		"\x03\x02\x02\x02\xAE\u036E\x03\x02\x02\x02\xB0\u0374\x03\x02\x02\x02\xB2" +
		"\u0389\x03\x02\x02\x02\xB4\u038B\x03\x02\x02\x02\xB6\u038F\x03\x02\x02" +
		"\x02\xB8\u0399\x03\x02\x02\x02\xBA\u03A3\x03\x02\x02\x02\xBC\u03A5\x03" +
		"\x02\x02\x02\xBE\u03AD\x03\x02\x02\x02\xC0\u03B6\x03\x02\x02\x02\xC2\u03B8" +
		"\x03\x02\x02\x02\xC4\u03C8\x03\x02\x02\x02\xC6\u03CA\x03\x02\x02\x02\xC8" +
		"\u03D2\x03\x02\x02\x02\xCA\u03D4\x03\x02\x02\x02\xCC\u03E7\x03\x02\x02" +
		"\x02\xCE\u03F9\x03\x02\x02\x02\xD0\u03FB\x03\x02\x02\x02\xD2\u0403\x03" +
		"\x02\x02\x02\xD4\u0406\x03\x02\x02\x02\xD6\u0408\x03\x02\x02\x02\xD8\u0411" +
		"\x03\x02\x02\x02\xDA\u0413\x03\x02\x02\x02\xDC\u0417\x03\x02\x02\x02\xDE" +
		"\u0429\x03\x02\x02\x02\xE0\u042D\x03\x02\x02\x02\xE2\u042F\x03\x02\x02" +
		"\x02\xE4\u0433\x03\x02\x02\x02\xE6\u0436\x03\x02\x02\x02\xE8\u043A\x03" +
		"\x02\x02\x02\xEA\u043F\x03\x02\x02\x02\xEC\u0449\x03\x02\x02\x02\xEE\u044B" +
		"\x03\x02\x02\x02\xF0\u0455\x03\x02\x02\x02\xF2\u0457\x03\x02\x02\x02\xF4" +
		"\u045C\x03\x02\x02\x02\xF6\u045E\x03\x02\x02\x02\xF8\u0466\x03\x02\x02" +
		"\x02\xFA\u0469\x03\x02\x02\x02\xFC\u046E\x03\x02\x02\x02\xFE\u047A\x03" +
		"\x02\x02\x02\u0100\u047C\x03\x02\x02\x02\u0102\u0487\x03\x02\x02\x02\u0104" +
		"\u0489\x03\x02\x02\x02\u0106\u0491\x03\x02\x02\x02\u0108\u0493\x03\x02" +
		"\x02\x02\u010A\u0497\x03\x02\x02\x02\u010C\u049C\x03\x02\x02\x02\u010E" +
		"\u04A9\x03\x02\x02\x02\u0110\u04AB\x03\x02\x02\x02\u0112\u04B4\x03\x02" +
		"\x02\x02\u0114\u04B6\x03\x02\x02\x02\u0116\u04B8\x03\x02\x02\x02\u0118" +
		"\u04BF\x03\x02\x02\x02\u011A\u04C7\x03\x02\x02\x02\u011C\u04CA\x03\x02" +
		"\x02\x02\u011E\u04E1\x03\x02\x02\x02\u0120\u04E7\x03\x02\x02\x02\u0122" +
		"\u04E9\x03\x02\x02\x02\u0124\u04F1\x03\x02\x02\x02\u0126\u04F4\x03\x02" +
		"\x02\x02\u0128\u04FD\x03\x02\x02\x02\u012A\u0505\x03\x02\x02\x02\u012C" +
		"\u050D\x03\x02\x02\x02\u012E\u0130\x05\x04\x03\x02\u012F\u012E\x03\x02" +
		"\x02\x02\u0130\u0131\x03\x02\x02\x02\u0131\u012F\x03\x02\x02\x02\u0131" +
		"\u0132\x03\x02\x02\x02\u0132\x03\x03\x02\x02\x02\u0133\u013F\x07m\x02" +
		"\x02\u0134\u013B\x07\x18\x02\x02\u0135\u0136\x07m\x02\x02\u0136\u0137" +
		"\x07\x1B\x02\x02\u0137\u0138\x07g\x02\x02\u0138\u013A\x07\x1C\x02\x02" +
		"\u0139\u0135\x03\x02\x02\x02\u013A\u013D\x03\x02\x02\x02\u013B\u0139\x03" +
		"\x02\x02\x02\u013B\u013C\x03\x02\x02\x02\u013C\u013E\x03\x02\x02\x02\u013D" +
		"\u013B\x03\x02\x02\x02\u013E\u0140\x07\x19\x02\x02\u013F\u0134\x03\x02" +
		"\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0141\x03\x02\x02\x02\u0141" +
		"\u0142\x07O\x02\x02\u0142\u0143\x05\x06\x04\x02\u0143\u0144\x05\b\x05" +
		"\x02\u0144\u0145\x07\b\x02\x02\u0145\u0146\x07P\x02\x02\u0146\u0147\x05" +
		"\n\x06\x02\u0147\u0148\x07Q\x02\x02\u0148\x05\x03\x02\x02\x02\u0149\u014A" +
		"\t\x02\x02\x02\u014A\u014C\x07L\x02\x02\u014B\u0149\x03\x02\x02\x02\u014B" +
		"\u014C\x03\x02\x02\x02\u014C\x07\x03\x02\x02\x02\u014D\u014E\x07I\x02" +
		"\x02\u014E\u0150\x07J\x02\x02\u014F\u014D\x03\x02\x02\x02\u014F\u0150" +
		"\x03\x02\x02\x02\u0150\t\x03\x02\x02\x02\u0151\u0152\x05\f\x07\x02\u0152" +
		"\u0153\x05\x10\t\x02\u0153\u0154\x05 \x11\x02\u0154\u0156\x03\x02\x02" +
		"\x02\u0155\u0151\x03\x02\x02\x02\u0155\u0156\x03\x02\x02\x02\u0156\v\x03" +
		"\x02\x02\x02\u0157\u0158\x07H\x02\x02\u0158\u0159\x05\x0E\b\x02\u0159" +
		"\u015A\x07F\x02\x02\u015A\u015F\x03\x02\x02\x02\u015B\u015C\x07H\x02\x02" +
		"\u015C\u015D\x07.\x02\x02\u015D\u015F\x07F\x02\x02\u015E\u0157\x03\x02" +
		"\x02\x02\u015E\u015B\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02\u015F" +
		"\r\x03\x02\x02\x02\u0160\u0162\x05\x1C\x0F\x02\u0161\u0160\x03\x02\x02" +
		"\x02\u0161\u0162\x03\x02\x02\x02\u0162\x0F\x03\x02\x02\x02\u0163\u0164" +
		"\x07G\x02\x02\u0164\u0165\x05\x12\n\x02\u0165\u0166\x07F\x02\x02\u0166" +
		"\u0168\x03\x02\x02\x02\u0167\u0163\x03\x02\x02\x02\u0167\u0168\x03\x02" +
		"\x02\x02\u0168\x11\x03\x02\x02\x02\u0169\u016B\x05\x14\v\x02\u016A\u0169" +
		"\x03\x02\x02\x02\u016A\u016B\x03\x02\x02\x02\u016B\x13\x03\x02\x02\x02" +
		"\u016C\u0170\x05\x16\f\x02\u016D\u016F\x05\x16\f\x02\u016E\u016D\x03\x02" +
		"\x02\x02\u016F\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0170" +
		"\u0171\x03\x02\x02\x02\u0171\x15\x03\x02\x02\x02\u0172\u0170\x03\x02\x02" +
		"\x02\u0173\u0174\x05\x1C\x0F\x02\u0174\u0175\x078\x02\x02\u0175\u0176" +
		"\x05\x18\r\x02\u0176\x17\x03\x02\x02\x02\u0177\u0178\x07m\x02\x02\u0178" +
		"\u0179\x05\x1A\x0E\x02\u0179\x19\x03\x02\x02\x02\u017A\u017B\x03\x02\x02" +
		"\x02\u017B\x1B\x03\x02\x02\x02\u017C\u0181\x05\x1E\x10\x02\u017D\u017E" +
		"\x07\x1A\x02\x02\u017E\u0180\x05\x1E\x10\x02\u017F\u017D\x03\x02\x02\x02" +
		"\u0180\u0183\x03\x02\x02\x02\u0181\u017F\x03\x02\x02\x02\u0181\u0182\x03" +
		"\x02\x02\x02\u0182\x1D\x03\x02\x02\x02\u0183\u0181\x03\x02\x02\x02\u0184" +
		"\u0187\x07m\x02\x02\u0185\u0186\x07\x18\x02\x02\u0186\u0188\x07\x19\x02" +
		"\x02\u0187\u0185\x03\x02\x02\x02\u0187\u0188\x03\x02\x02\x02\u0188\x1F" +
		"\x03\x02\x02\x02\u0189\u018D\x05\"\x12\x02\u018A\u018C\x05\"\x12\x02\u018B" +
		"\u018A\x03\x02\x02\x02\u018C\u018F\x03\x02\x02\x02\u018D\u018B\x03\x02" +
		"\x02\x02\u018D\u018E\x03\x02\x02\x02\u018E!\x03\x02\x02\x02\u018F\u018D" +
		"\x03\x02\x02\x02\u0190\u0195\x07m\x02\x02\u0191\u0196\x05\xAEX\x02\u0192" +
		"\u0196\x05\xACW\x02\u0193\u0196\x05F$\x02\u0194\u0196\x05P)\x02\u0195" +
		"\u0191\x03\x02\x02\x02\u0195\u0192\x03\x02\x02\x02\u0195\u0193\x03\x02" +
		"\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196#\x03\x02\x02\x02\u0197\u0198" +
		"\x07\'\x02\x02\u0198\u019D\x07\x18\x02\x02\u0199\u019A\x05&\x14\x02\u019A" +
		"\u019B\x05(\x15\x02\u019B\u019E\x03\x02\x02\x02\u019C\u019E\x05*\x16\x02" +
		"\u019D\u0199\x03\x02\x02\x02\u019D\u019C\x03\x02\x02\x02\u019D\u019E\x03" +
		"\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A0\x07\x19\x02\x02\u01A0" +
		"%\x03\x02\x02\x02\u01A1\u01A3\x07\x0E\x02\x02\u01A2\u01A4\x05\u0110\x89" +
		"\x02\u01A3\u01A2\x03\x02\x02\x02\u01A3\u01A4\x03\x02\x02\x02\u01A4\'\x03" +
		"\x02\x02\x02\u01A5\u01A6\x07\x1A\x02\x02\u01A6\u01A8\x07\x0E\x02\x02\u01A7" +
		"\u01A5\x03\x02\x02\x02\u01A7\u01A8\x03\x02\x02\x02\u01A8)\x03\x02\x02" +
		"\x02\u01A9\u01BA\x05,\x17\x02\u01AA\u01BB\x052\x1A\x02\u01AB\u01AD\x07" +
		"\x1A\x02\x02\u01AC\u01AE\x052\x1A\x02\u01AD\u01AC\x03\x02\x02\x02\u01AD" +
		"\u01AE\x03\x02\x02\x02\u01AE\u01AF\x03\x02\x02\x02\u01AF\u01B0\x05&\x14" +
		"\x02\u01B0\u01B8\x058\x1D\x02\u01B1\u01B9\x05(\x15\x02\u01B2\u01B3\x07" +
		"f\x02\x02\u01B3\u01B4\x07\x1A\x02\x02\u01B4\u01B6\x05,\x17\x02\u01B5\u01B7" +
		"\x052\x1A\x02\u01B6\u01B5\x03\x02\x02\x02\u01B6\u01B7\x03\x02\x02\x02" +
		"\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01B1\x03\x02\x02\x02\u01B8\u01B2";
	private static readonly _serializedATNSegment1: string =
		"\x03\x02\x02\x02\u01B9\u01BB\x03\x02\x02\x02\u01BA\u01AA\x03\x02\x02\x02" +
		"\u01BA\u01AB\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB\u01C8\x03" +
		"\x02\x02\x02\u01BC\u01BD\x05&\x14\x02\u01BD\u01C5\x058\x1D\x02\u01BE\u01C6" +
		"\x05(\x15\x02\u01BF\u01C0\x07f\x02\x02\u01C0\u01C1\x07\x1A\x02\x02\u01C1" +
		"\u01C3\x05,\x17\x02\u01C2\u01C4\x052\x1A\x02\u01C3\u01C2\x03\x02\x02\x02" +
		"\u01C3\u01C4\x03\x02\x02\x02\u01C4\u01C6\x03\x02\x02\x02\u01C5\u01BE\x03" +
		"\x02\x02\x02\u01C5\u01BF\x03\x02\x02\x02\u01C6\u01C8\x03\x02\x02\x02\u01C7" +
		"\u01A9\x03\x02\x02\x02\u01C7\u01BC\x03\x02\x02\x02\u01C8+\x03\x02\x02" +
		"\x02\u01C9\u01CA\x05.\x18\x02\u01CA-\x03\x02\x02\x02\u01CB\u01D3\x050" +
		"\x19\x02\u01CC\u01CE\x07\x1A\x02\x02\u01CD\u01CF\x052\x1A\x02\u01CE\u01CD" +
		"\x03\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
		"\u01D0\u01D2\x050\x19\x02\u01D1\u01CC\x03\x02\x02\x02\u01D2\u01D5\x03" +
		"\x02\x02\x02\u01D3\u01D1\x03\x02\x02\x02\u01D3\u01D4\x03\x02\x02\x02\u01D4" +
		"/\x03\x02\x02\x02\u01D5\u01D3\x03\x02\x02\x02\u01D6\u01DA\x05\xF8}\x02" +
		"\u01D7\u01DB\x07(\x02\x02\u01D8\u01D9\x07)\x02\x02\u01D9\u01DB\x05\xD6" +
		"l\x02\u01DA\u01D7\x03\x02\x02\x02\u01DA\u01D8\x03\x02\x02\x02\u01DA\u01DB" +
		"\x03\x02\x02\x02\u01DB\u01E0\x03\x02\x02\x02\u01DC\u01DD\x07*\x02\x02" +
		"\u01DD\u01DE\x07+\x02\x02\u01DE\u01E0\x05\xB0Y\x02\u01DF\u01D6\x03\x02" +
		"\x02\x02\u01DF\u01DC\x03\x02\x02\x02\u01E01\x03\x02\x02\x02\u01E1\u01E5" +
		"\x054\x1B\x02\u01E2\u01E5\x056\x1C\x02\u01E3\u01E5\x07\x05\x02\x02\u01E4" +
		"\u01E1\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E3\x03\x02" +
		"\x02\x02\u01E53\x03\x02\x02\x02\u01E6\u01E7\x07\x03\x02\x02\u01E7\u01E8" +
		"\x07m\x02\x02\u01E85\x03\x02\x02\x02\u01E9\u01EA\x07\x04\x02\x02\u01EA" +
		"\u01EB\x07m\x02\x02\u01EB7\x03\x02\x02\x02\u01EC\u01ED\x07\x1A\x02\x02" +
		"\u01ED\u01EF\x05:\x1E\x02\u01EE\u01EC\x03\x02\x02\x02\u01EE\u01EF\x03" +
		"\x02\x02\x02\u01EF9\x03\x02\x02\x02\u01F0\u01F5\x05<\x1F\x02\u01F1\u01F2" +
		"\x07\x1A\x02\x02\u01F2\u01F4\x05<\x1F\x02\u01F3\u01F1\x03\x02\x02\x02" +
		"\u01F4\u01F7\x03\x02\x02\x02\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03" +
		"\x02\x02\x02\u01F6;\x03\x02\x02\x02\u01F7\u01F5\x03\x02\x02\x02\u01F8" +
		"\u01FB\x050\x19\x02\u01F9\u01FB\x05> \x02\u01FA\u01F8\x03\x02\x02\x02" +
		"\u01FA\u01F9\x03\x02\x02\x02\u01FB=\x03\x02\x02\x02\u01FC\u01FD\x07R\x02" +
		"\x02\u01FD\u01FE\x05@!\x02\u01FE\u0200\x05.\x18\x02\u01FF\u0201\x052\x1A" +
		"\x02\u0200\u01FF\x03\x02\x02\x02\u0200\u0201\x03\x02\x02\x02\u0201\u0202" +
		"\x03\x02\x02\x02\u0202\u0203\x07S\x02\x02\u0203?\x03\x02\x02\x02\u0204" +
		"\u0205\x07g\x02\x02\u0205\u0207\x07T\x02\x02\u0206\u0204\x03\x02\x02\x02" +
		"\u0206\u0207\x03\x02\x02\x02\u0207A\x03\x02\x02\x02\u0208\u0210\x07\'" +
		"\x02\x02\u0209\u020C\x07\x1B\x02\x02\u020A\u020D\x05\xBE`\x02\u020B\u020D" +
		"\x05D#\x02\u020C\u020A\x03\x02\x02\x02\u020C\u020B\x03\x02\x02\x02\u020D" +
		"\u020E\x03\x02\x02\x02\u020E\u020F\x07\x1C\x02\x02\u020F\u0211\x03\x02" +
		"\x02\x02\u0210\u0209\x03\x02\x02\x02\u0210\u0211\x03\x02\x02\x02\u0211" +
		"\u0212\x03\x02\x02\x02\u0212\u0215\x07+\x02\x02\u0213\u0216\x05\xB0Y\x02" +
		"\u0214\u0216\x05\xF8}\x02\u0215\u0213\x03\x02\x02\x02\u0215\u0214\x03" +
		"\x02\x02\x02\u0216C\x03\x02\x02\x02\u0217\u0218\x077\x02\x02\u0218\u0219" +
		"\x05\xBE`\x02\u0219E\x03\x02\x02\x02\u021A\u021B\x05H%\x02\u021B\u021F" +
		"\x07\b\x02\x02\u021C\u0220\x05\xB0Y\x02\u021D\u0220\x05\xD6l\x02\u021E" +
		"\u0220\x05\x86D\x02\u021F\u021C\x03\x02\x02\x02\u021F\u021D\x03\x02\x02" +
		"\x02\u021F\u021E\x03\x02\x02\x02\u0220\u0229\x03\x02\x02\x02\u0221\u0222" +
		"\x05T+\x02\u0222\u0226\x07\b\x02\x02\u0223\u0227\x05z>\x02\u0224\u0227" +
		"\x05R*\x02\u0225\u0227\x05\x80A\x02\u0226\u0223\x03\x02\x02\x02\u0226" +
		"\u0224\x03\x02\x02\x02\u0226\u0225\x03\x02\x02\x02\u0227\u0229\x03\x02" +
		"\x02\x02\u0228\u021A\x03\x02\x02\x02\u0228\u0221\x03\x02\x02\x02\u0229" +
		"G\x03\x02\x02\x02\u022A\u022B\x07\x18\x02\x02\u022B\u0230\x05J&\x02\u022C" +
		"\u022D\x07\x1A\x02\x02\u022D\u022F\x05J&\x02\u022E\u022C\x03\x02\x02\x02" +
		"\u022F\u0232\x03\x02\x02\x02\u0230\u022E\x03\x02\x02\x02\u0230\u0231\x03" +
		"\x02\x02\x02\u0231\u0233\x03\x02\x02\x02\u0232\u0230\x03\x02\x02\x02\u0233" +
		"\u0234\x07\x19\x02\x02\u0234I\x03\x02\x02\x02\u0235\u0236\x05L\'\x02\u0236" +
		"\u0237\x07T\x02\x02\u0237\u0239\x03\x02\x02\x02\u0238\u0235\x03\x02\x02" +
		"\x02\u0238\u0239\x03\x02\x02\x02\u0239\u023A\x03\x02\x02\x02\u023A\u023B" +
		"\x07m\x02\x02\u023BK\x03\x02\x02\x02\u023C\u023F\x05N(\x02\u023D\u023F" +
		"\x07m\x02\x02\u023E\u023C\x03\x02\x02\x02\u023E\u023D\x03\x02\x02\x02" +
		"\u023FM\x03\x02\x02\x02\u0240\u0243\x05\xB0Y\x02\u0241\u0243\x05T+\x02" +
		"\u0242\u0240\x03\x02\x02\x02\u0242\u0241\x03\x02\x02\x02\u0243O\x03\x02" +
		"\x02\x02\u0244\u0245\x07\b\x02\x02\u0245\u0246\x05R*\x02\u0246Q\x03\x02" +
		"\x02\x02\u0247\u024A\x05T+\x02\u0248\u024A\x05Z.\x02\u0249\u0247\x03\x02" +
		"\x02\x02\u0249\u0248\x03\x02\x02\x02\u024AS\x03\x02\x02\x02\u024B\u024C" +
		"\x07m\x02\x02\u024C\u024E\x07\f\x02\x02\u024D\u024B\x03\x02\x02\x02\u024D" +
		"\u024E\x03\x02\x02\x02\u024E\u024F\x03\x02\x02\x02\u024F\u0253\x07m\x02" +
		"\x02\u0250\u0253\x07>\x02\x02\u0251\u0253\x07?\x02\x02\u0252\u024D\x03" +
		"\x02\x02\x02\u0252\u0250\x03\x02\x02\x02\u0252\u0251\x03\x02\x02\x02\u0253" +
		"U\x03\x02\x02\x02\u0254\u0255\t\x03\x02\x02\u0255W\x03\x02\x02\x02\u0256" +
		"\u0257\x07m\x02\x02\u0257\u0258\x07\f\x02\x02\u0258\u0259\x07m\x02\x02" +
		"\u0259Y\x03\x02\x02\x02\u025A\u025B\x07@\x02\x02\u025B\u025C\x07\x18\x02" +
		"\x02\u025C\u0261\x05j6\x02\u025D\u025E\x07\x1A\x02\x02\u025E\u0260\x05" +
		"j6\x02\u025F\u025D\x03\x02\x02\x02\u0260\u0263\x03\x02\x02\x02\u0261\u025F" +
		"\x03\x02\x02\x02\u0261\u0262\x03\x02\x02\x02\u0262\u0264\x03\x02\x02\x02" +
		"\u0263\u0261\x03\x02\x02\x02\u0264\u0266\x07\x19\x02\x02\u0265\u0267\x05" +
		"\\/\x02\u0266\u0265\x03\x02\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267" +
		"[\x03\x02\x02\x02\u0268\u0269\x079\x02\x02\u0269\u026A\x07B\x02\x02\u026A" +
		"\u026B\x05^0\x02\u026B]\x03\x02\x02\x02\u026C\u026E\x07\x18\x02\x02\u026D" +
		"\u026F\x05`1\x02\u026E\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02" +
		"\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02\u0271\u0272\x03" +
		"\x02\x02\x02\u0272\u0273\x07\x19\x02\x02\u0273_\x03\x02\x02\x02\u0274" +
		"\u0277\x05d3\x02\u0275\u0277\x05b2\x02\u0276\u0274\x03\x02\x02\x02\u0276" +
		"\u0275\x03\x02\x02\x02\u0277a\x03\x02\x02\x02\u0278\u027A\x07C\x02\x02" +
		"\u0279\u027B\x05`1\x02\u027A\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02" +
		"\x02\x02\u027C\u027A\x03\x02\x02\x02\u027C\u027D\x03\x02\x02\x02\u027D" +
		"\u027E\x03\x02\x02\x02\u027E\u027F\x07D\x02\x02\u027Fc\x03\x02\x02\x02" +
		"\u0280\u0283\x05f4\x02\u0281\u0283\x05h5\x02\u0282\u0280\x03\x02\x02\x02" +
		"\u0282\u0281\x03\x02\x02\x02\u0283e\x03\x02\x02\x02\u0284\u0285\t\x04" +
		"\x02\x02\u0285g\x03\x02\x02\x02\u0286\u0287\x07\x10\x02\x02\u0287\u0288" +
		"\x07m\x02\x02\u0288i\x03\x02\x02\x02\u0289\u028A\x07\x10\x02\x02\u028A" +
		"\u02AC\x07m\x02\x02\u028B\u028D\x05n8\x02\u028C\u028B\x03\x02\x02\x02" +
		"\u028C\u028D\x03\x02\x02\x02\u028D\u02AD\x03\x02\x02\x02\u028E\u0298\x05" +
		"\xB0Y\x02\u028F\u0291\x05x=\x02\u0290\u028F\x03\x02\x02\x02\u0290\u0291" +
		"\x03\x02\x02\x02\u0291\u0299\x03\x02\x02\x02\u0292\u0294\x07A\x02\x02" +
		"\u0293\u0292\x03\x02\x02\x02\u0293\u0294\x03\x02\x02\x02\u0294\u0296\x03" +
		"\x02\x02\x02\u0295\u0297\x05r:\x02\u0296\u0295\x03\x02\x02\x02\u0296\u0297" +
		"\x03\x02\x02\x02\u0297\u0299\x03\x02\x02\x02\u0298\u0290\x03\x02\x02\x02" +
		"\u0298\u0293\x03\x02\x02\x02\u0299\u02AD\x03\x02\x02\x02\u029A\u02A1\x05" +
		"\x84C\x02\u029B\u02A2\x07(\x02\x02\u029C\u029F\x07)\x02\x02\u029D\u02A0" +
		"\x05\x86D\x02\u029E\u02A0\x05\xD6l\x02\u029F\u029D\x03\x02\x02\x02\u029F" +
		"\u029E\x03\x02\x02\x02\u02A0\u02A2\x03\x02\x02\x02\u02A1\u029B\x03\x02" +
		"\x02\x02\u02A1\u029C\x03\x02\x02\x02\u02A1\u02A2\x03\x02\x02\x02\u02A2" +
		"\u02AD\x03\x02\x02\x02\u02A3\u02AA\x05T+\x02\u02A4\u02AB\x07(\x02\x02" +
		"\u02A5\u02A8\x07)\x02\x02\u02A6\u02A9\x05\x80A\x02\u02A7\u02A9\x05z>\x02" +
		"\u02A8\u02A6\x03\x02\x02\x02\u02A8\u02A7\x03\x02\x02\x02\u02A9\u02AB\x03" +
		"\x02\x02\x02\u02AA\u02A4\x03\x02\x02\x02\u02AA\u02A5\x03\x02\x02\x02\u02AA" +
		"\u02AB\x03\x02\x02\x02\u02AB\u02AD\x03\x02\x02\x02\u02AC\u028C\x03\x02" +
		"\x02\x02\u02AC\u028E\x03\x02\x02\x02\u02AC\u029A\x03\x02\x02\x02\u02AC" +
		"\u02A3\x03\x02\x02\x02\u02ADk\x03\x02\x02\x02\u02AE\u02AF\x07\x10\x02" +
		"\x02\u02AF\u02B1\x07m\x02\x02\u02B0\u02B2\x05n8\x02\u02B1\u02B0\x03\x02" +
		"\x02\x02\u02B1\u02B2\x03\x02\x02\x02\u02B2m\x03\x02\x02\x02\u02B3\u02B7" +
		"\x07(\x02\x02\u02B4\u02B5\x07)\x02\x02\u02B5\u02B7\x05\xB0Y\x02\u02B6" +
		"\u02B3\x03\x02\x02\x02\u02B6\u02B4\x03\x02\x02\x02\u02B7o\x03\x02\x02" +
		"\x02\u02B8\u02B9\x07\x10\x02\x02\u02B9\u02BA\x07m\x02\x02\u02BA\u02BC" +
		"\x05\xB0Y\x02\u02BB\u02BD\x07A\x02\x02\u02BC\u02BB\x03\x02\x02\x02\u02BC" +
		"\u02BD\x03\x02\x02\x02\u02BD\u02BF\x03\x02\x02\x02\u02BE\u02C0\x05r:\x02" +
		"\u02BF\u02BE\x03\x02\x02\x02\u02BF\u02C0\x03\x02\x02\x02\u02C0q\x03\x02" +
		"\x02\x02\u02C1\u02C5\x07(\x02\x02\u02C2\u02C3\x07)\x02\x02\u02C3\u02C5" +
		"\x05\xD6l\x02\u02C4\u02C1\x03\x02\x02\x02\u02C4\u02C2\x03\x02\x02\x02" +
		"\u02C5s\x03\x02\x02\x02\u02C6\u02C7\x07\x10\x02\x02\u02C7\u02C8\x07m\x02" +
		"\x02\u02C8\u02CA\x05\x84C\x02\u02C9\u02CB\x05r:\x02\u02CA\u02C9\x03\x02" +
		"\x02\x02\u02CA\u02CB\x03\x02\x02\x02\u02CBu\x03\x02\x02\x02\u02CC\u02CD" +
		"\x07\x10\x02\x02\u02CD\u02CE\x07m\x02\x02\u02CE\u02D0\x05\xB0Y\x02\u02CF" +
		"\u02D1\x05x=\x02\u02D0\u02CF\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02" +
		"\u02D1w\x03\x02\x02\x02\u02D2\u02D6\x07(\x02\x02\u02D3\u02D4\x07)\x02" +
		"\x02\u02D4\u02D6\x05\x86D\x02\u02D5\u02D2\x03\x02\x02\x02\u02D5\u02D3" +
		"\x03\x02\x02\x02\u02D6y\x03\x02\x02\x02\u02D7\u02DA\x05~@\x02\u02D8\u02DA" +
		"\x05|?\x02\u02D9\u02D7\x03\x02\x02\x02\u02D9\u02D8\x03\x02\x02\x02\u02DA" +
		"{\x03\x02\x02\x02\u02DB\u02DC\x05~@\x02\u02DC\u02DD\x05\u010C\x87\x02" +
		"\u02DD}\x03\x02\x02\x02\u02DE\u02E0\x07m\x02\x02\u02DF\u02E1\x07\f\x02" +
		"\x02\u02E0\u02DF\x03\x02\x02\x02\u02E0\u02E1\x03\x02\x02\x02\u02E1\x7F" +
		"\x03\x02\x02\x02\u02E2\u02E3\x07\x18\x02\x02\u02E3\u02E4\x05\x82B\x02" +
		"\u02E4\u02E5\x07\x19\x02\x02\u02E5\x81\x03\x02\x02\x02\u02E6\u02ED\x05" +
		"\x8AF\x02\u02E7\u02E8\x07\x1A\x02\x02\u02E8\u02EB\x07\x0E\x02\x02\u02E9" +
		"\u02EA\x07\x1A\x02\x02\u02EA\u02EC\x05\x8CG\x02\u02EB\u02E9\x03\x02\x02" +
		"\x02\u02EB\u02EC\x03\x02\x02\x02\u02EC\u02EE\x03\x02\x02\x02\u02ED\u02E7" +
		"\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02\u02EE\u02F5\x03\x02\x02\x02" +
		"\u02EF\u02F2\x07\x0E\x02\x02\u02F0\u02F1\x07\x1A\x02\x02\u02F1\u02F3\x05" +
		"\x8CG\x02\u02F2\u02F0\x03\x02\x02\x02\u02F2\u02F3\x03\x02\x02\x02\u02F3" +
		"\u02F5\x03\x02\x02\x02\u02F4\u02E6\x03\x02\x02\x02\u02F4\u02EF\x03\x02" +
		"\x02\x02\u02F5\x83\x03\x02\x02\x02\u02F6\u02F7\x07\x10\x02\x02\u02F7\u02F8" +
		"\x07m\x02\x02\u02F8\u02FE\x03\x02\x02\x02\u02F9\u02FA\x07\x10\x02\x02" +
		"\u02FA\u02FB\x07m\x02\x02\u02FB\u02FD\x07\f\x02\x02\u02FC\u02F9\x03\x02" +
		"\x02\x02\u02FD\u0300\x03\x02\x02\x02\u02FE\u02FC\x03\x02\x02\x02\u02FE" +
		"\u02FF\x03\x02\x02\x02\u02FF\x85\x03\x02\x02\x02\u0300\u02FE\x03\x02\x02" +
		"\x02\u0301\u0302\x07\x18\x02\x02\u0302\u0303\x05\x88E\x02\u0303\u0304" +
		"\x07\x19\x02\x02\u0304\x87\x03\x02\x02\x02\u0305\u030C\x05\x8AF\x02\u0306" +
		"\u0307\x07\x1A\x02\x02\u0307\u030A\x07\x0E\x02\x02\u0308\u0309\x07\x1A" +
		"\x02\x02\u0309\u030B\x05\x8CG\x02\u030A\u0308\x03\x02\x02\x02\u030A\u030B" +
		"\x03\x02\x02\x02\u030B\u030D\x03\x02\x02\x02\u030C\u0306\x03\x02\x02\x02" +
		"\u030C\u030D\x03\x02\x02\x02\u030D\x89\x03\x02\x02\x02\u030E\u030F\x05" +
		"\x8EH\x02\u030F\x8B\x03\x02\x02\x02\u0310\u0311\x05\x8EH\x02\u0311\x8D" +
		"\x03\x02\x02\x02\u0312\u0316\x05\x90I\x02\u0313\u0314\x07.\x02\x02\u0314" +
		"\u0316\x05\x92J\x02\u0315\u0312\x03\x02\x02\x02\u0315\u0313\x03\x02\x02" +
		"\x02\u0316\x8F\x03\x02\x02\x02\u0317\u031D\x05\x94K\x02\u0318\u0319\x05" +
		"\x96L\x02\u0319\u031A\x05\x94K\x02\u031A\u031C\x03\x02\x02\x02\u031B\u0318" +
		"\x03\x02\x02\x02\u031C\u031F\x03\x02\x02\x02\u031D\u031B\x03\x02\x02\x02" +
		"\u031D\u031E\x03\x02\x02\x02\u031E\x91\x03\x02\x02\x02\u031F\u031D\x03" +
		"\x02\x02\x02\u0320\u0321\x07/\x02\x02\u0321\u0322\x05\x9AN\x02\u0322\x93" +
		"\x03\x02\x02\x02\u0323\u0329\x05\x9EP\x02\u0324\u0325\x05\x98M\x02\u0325" +
		"\u0326\x05\x9EP\x02\u0326\u0328\x03\x02\x02\x02\u0327\u0324\x03\x02\x02" +
		"\x02\u0328\u032B\x03\x02\x02\x02\u0329\u0327\x03\x02\x02\x02\u0329\u032A" +
		"\x03\x02\x02\x02\u032A\x95\x03\x02\x02\x02\u032B\u0329\x03\x02\x02\x02" +
		"\u032C\u032D\t\x05\x02\x02\u032D\x97\x03\x02\x02\x02\u032E\u032F\t\x06" +
		"\x02\x02\u032F\x99\x03\x02\x02\x02\u0330\u0331\x05\xA0Q\x02\u0331\x9B" +
		"\x03\x02\x02\x02\u0332\u0335\x05z>\x02\u0333\u0335\x05~@\x02\u0334\u0332" +
		"\x03\x02\x02\x02\u0334\u0333\x03\x02\x02\x02\u0335\x9D\x03\x02\x02\x02" +
		"\u0336\u0338\x05\x9AN\x02\u0337\u0339\x05\x92J\x02\u0338\u0337\x03\x02" +
		"\x02\x02\u0338\u0339\x03\x02\x02\x02\u0339\x9F\x03\x02\x02\x02\u033A\u033D" +
		"\x05\xD6l\x02\u033B\u033D\x075\x02\x02\u033C\u033A\x03\x02\x02\x02\u033C" +
		"\u033B\x03\x02\x02\x02\u033D\u033F\x03\x02\x02\x02\u033E\u0340\x07\x11" +
		"\x02\x02\u033F\u033E\x03\x02\x02\x02\u033F\u0340\x03\x02\x02\x02\u0340" +
		"\u0341\x03\x02\x02\x02\u0341\u0343\x07\r\x02\x02\u0342\u0344\x07\x11\x02" +
		"\x02\u0343\u0342\x03\x02\x02\x02\u0343\u0344\x03\x02\x02\x02\u0344\u0347" +
		"\x03\x02\x02\x02\u0345\u0348\x05\xD6l\x02\u0346\u0348\x076\x02\x02\u0347" +
		"\u0345\x03\x02\x02\x02\u0347\u0346\x03\x02\x02\x02\u0348\u034E\x03\x02" +
		"\x02\x02\u0349\u034E\x05D#\x02\u034A\u034B\x07=\x02\x02\u034B\u034E\x05" +
		"\xD6l\x02\u034C\u034E\x05\xD6l\x02\u034D\u033C\x03\x02\x02\x02\u034D\u0349" +
		"\x03\x02\x02\x02\u034D\u034A\x03\x02\x02\x02\u034D\u034C\x03\x02\x02\x02" +
		"\u034E\xA1\x03\x02\x02\x02\u034F\u0350\x07\x10\x02\x02\u0350\u0351\x07" +
		"m\x02\x02\u0351\u0353\x05\x84C\x02\u0352\u0354\x05x=\x02\u0353\u0352\x03" +
		"\x02\x02\x02\u0353\u0354\x03\x02\x02\x02\u0354\xA3\x03\x02\x02\x02\u0355" +
		"\u0356\x07\x10\x02\x02\u0356\u0357\x07m\x02\x02\u0357\u0359\x05T+\x02" +
		"\u0358\u035A\x05\xA6T\x02\u0359\u0358\x03\x02\x02\x02\u0359\u035A\x03" +
		"\x02\x02\x02\u035A\xA5\x03\x02\x02\x02\u035B\u035F\x07(\x02\x02\u035C" +
		"\u035D\x07)\x02\x02\u035D\u035F\x05z>\x02\u035E\u035B\x03\x02\x02\x02" +
		"\u035E\u035C\x03\x02\x02\x02\u035F\xA7\x03\x02\x02\x02\u0360\u0361\x07" +
		"\x10\x02\x02\u0361\u0362\x07m\x02\x02\u0362\u0364\x05T+\x02\u0363\u0365" +
		"\x05\xAAV\x02\u0364\u0363\x03\x02\x02\x02\u0364\u0365\x03\x02\x02\x02" +
		"\u0365\xA9\x03\x02\x02\x02\u0366\u036A\x07(\x02\x02\u0367\u0368\x07)\x02" +
		"\x02\u0368\u036A\x05\x80A\x02\u0369\u0366\x03\x02\x02\x02\u0369\u0367" +
		"\x03\x02\x02\x02\u036A\xAB\x03\x02\x02\x02\u036B\u036C\x07\b\x02\x02\u036C" +
		"\u036D\x05\xB0Y\x02\u036D\xAD\x03\x02\x02\x02\u036E\u036F\x05\xB0Y\x02" +
		"\u036F\u0370\x07\b\x02\x02\u0370\u0371\x05\xD6l\x02\u0371\xAF\x03\x02" +
		"\x02\x02\u0372\u0375\x05\xB2Z\x02\u0373\u0375\x05\xBA^\x02\u0374\u0372" +
		"\x03\x02\x02\x02\u0374\u0373\x03\x02\x02\x02\u0375\u0379\x03\x02\x02\x02" +
		"\u0376\u0378\x05\xBE`\x02\u0377\u0376\x03\x02\x02\x02\u0378\u037B\x03" +
		"\x02\x02\x02\u0379\u0377\x03\x02\x02\x02\u0379\u037A\x03\x02\x02\x02\u037A" +
		"\xB1\x03\x02\x02\x02\u037B\u0379\x03\x02\x02\x02\u037C\u038A\x05\u0124" +
		"\x93\x02\u037D\u038A\x05\u0126\x94\x02\u037E\u038A\x05\xE8u\x02\u037F" +
		"\u038A\x05\xFA~\x02\u0380\u038A\x05\u0116\x8C\x02\u0381\u038A\x05$\x13" +
		"\x02\u0382\u038A\x05B\"\x02\u0383\u038A\x05\xB6\\\x02\u0384\u038A\x05" +
		"\xB8]\x02\u0385\u038A\x05\u011A\x8E\x02\u0386\u038A\x05\xB4[\x02\u0387" +
		"\u038A\x07\t\x02\x02\u0388\u038A\x07&\x02\x02\u0389\u037C\x03\x02\x02" +
		"\x02\u0389\u037D\x03\x02\x02\x02\u0389\u037E\x03\x02\x02\x02\u0389\u037F" +
		"\x03\x02\x02\x02\u0389\u0380\x03\x02\x02\x02\u0389\u0381\x03\x02\x02\x02" +
		"\u0389\u0382\x03\x02\x02\x02\u0389\u0383\x03\x02\x02\x02\u0389\u0384\x03" +
		"\x02\x02\x02\u0389\u0385\x03\x02\x02\x02\u0389\u0386\x03\x02\x02\x02\u0389" +
		"\u0387\x03\x02\x02\x02\u0389\u0388\x03\x02\x02\x02\u038A\xB3\x03\x02\x02" +
		"\x02\u038B\u038C\x05T+\x02\u038C\u038D\x07\f\x02\x02\u038D\u038E\x05\x84" +
		"C\x02\u038E\xB5\x03\x02\x02\x02\u038F\u0390\x07,\x02\x02\u0390\u0395\x07" +
		"\x18\x02\x02\u0391\u0392\x05&\x14\x02\u0392\u0393\x05(\x15\x02\u0393\u0396" +
		"\x03\x02\x02\x02\u0394\u0396\x05*\x16\x02\u0395\u0391\x03\x02\x02\x02" +
		"\u0395\u0394\x03\x02\x02\x02\u0395\u0396\x03\x02\x02\x02\u0396\u0397\x03" +
		"\x02\x02\x02\u0397\u0398\x07\x19\x02\x02\u0398\xB7\x03\x02\x02\x02\u0399" +
		"\u039C\x07,\x02\x02\u039A\u039D\x05\xBE`\x02\u039B\u039D\x05D#\x02\u039C" +
		"\u039A\x03\x02\x02\x02\u039C\u039B\x03\x02\x02\x02\u039C\u039D\x03\x02" +
		"\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\u03A1\x07+\x02\x02\u039F\u03A2" +
		"\x05\xB0Y\x02\u03A0\u03A2\x05\xF8}\x02\u03A1\u039F\x03\x02\x02\x02\u03A1" +
		"\u03A0\x03\x02\x02\x02\u03A2\xB9\x03\x02\x02\x02\u03A3\u03A4\x05\xBC_" +
		"\x02\u03A4\xBB\x03\x02\x02\x02\u03A5\u03A8\x07m\x02\x02\u03A6\u03A7\x07" +
		"\f\x02\x02\u03A7\u03A9\x07m\x02\x02\u03A8\u03A6\x03\x02\x02\x02\u03A8" +
		"\u03A9\x03\x02\x02\x02\u03A9\u03AB\x03\x02\x02\x02\u03AA\u03AC\x05\u010C" +
		"\x87\x02\u03AB\u03AA\x03\x02\x02\x02\u03AB\u03AC\x03\x02\x02\x02\u03AC" +
		"\xBD\x03\x02\x02\x02\u03AD\u03AE\x07\x1B\x02\x02\u03AE\u03B0\x05\xC0a" +
		"\x02\u03AF\u03B1\x05\u0110\x89\x02\u03B0\u03AF\x03\x02\x02\x02\u03B0\u03B1" +
		"\x03\x02\x02\x02\u03B1\u03B2\x03\x02\x02\x02\u03B2\u03B3\x07\x1C\x02\x02" +
		"\u03B3\xBF\x03\x02\x02\x02\u03B4\u03B7\x05\xC4c\x02\u03B5\u03B7\x05\xD4" +
		"k\x02\u03B6\u03B4\x03\x02\x02\x02\u03B6\u03B5\x03\x02\x02\x02\u03B7\xC1" +
		"\x03\x02\x02\x02\u03B8\u03B9\x07`\x02\x02\u03B9\u03BA\x07a\x02\x02\u03BA" +
		"\u03BB\x07\x18\x02\x02\u03BB\u03C0\x05\xC6d\x02\u03BC\u03BD\x07\x1A\x02" +
		"\x02\u03BD\u03BF\x05\xC6d\x02\u03BE\u03BC\x03\x02\x02\x02\u03BF\u03C2" +
		"\x03\x02\x02\x02\u03C0\u03BE\x03\x02\x02\x02\u03C0\u03C1\x03\x02\x02\x02" +
		"\u03C1\u03C3\x03\x02\x02\x02\u03C2\u03C0\x03\x02\x02\x02\u03C3\u03C4\x07" +
		"\x19\x02\x02\u03C4\xC3\x03\x02\x02\x02\u03C5\u03C9\x05\xC2b\x02\u03C6" +
		"\u03C9\x05\xC8e\x02\u03C7\u03C9\x05\xCCg\x02\u03C8\u03C5\x03\x02\x02\x02" +
		"\u03C8\u03C6\x03\x02\x02\x02\u03C8\u03C7\x03\x02\x02\x02\u03C9\xC5\x03" +
		"\x02\x02\x02\u03CA\u03D0\x05N(\x02\u03CB\u03CC\x07T\x02\x02\u03CC\u03D1" +
		"\x05\xD6l\x02\u03CD\u03D1\x05\x86D\x02\u03CE\u03D1\x05z>\x02\u03CF\u03D1" +
		"\x05\x80A\x02\u03D0\u03CB\x03\x02\x02\x02\u03D0\u03CD\x03\x02\x02\x02" +
		"\u03D0\u03CE\x03\x02\x02\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1\x03" +
		"\x02\x02\x02\u03D1\xC7\x03\x02\x02\x02\u03D2\u03D3\x05\u011C\x8F\x02\u03D3" +
		"\xC9\x03\x02\x02\x02\u03D4\u03D5\x05\x80A\x02\u03D5\xCB\x03\x02\x02\x02" +
		"\u03D6\u03D7\x07$\x02\x02\u03D7\u03E8\x05\xB0Y\x02\u03D8\u03D9\x07c\x02" +
		"\x02\u03D9\u03DA\x07a\x02\x02\u03DA\u03E8\x05\xD6l\x02\u03DB\u03DC\x07" +
		"$\x02\x02\u03DC\u03DD\x05\xB0Y\x02\u03DD\u03DE\x07c\x02\x02\u03DE\u03DF" +
		"\x07a\x02\x02\u03DF\u03E0\x05\xD6l\x02\u03E0\u03E8\x03\x02\x02\x02\u03E1" +
		"\u03E2\x079\x02\x02\u03E2\u03E3\x07*\x02\x02\u03E3\u03E4\x07\x18\x02\x02" +
		"\u03E4\u03E5\x05\xCEh\x02\u03E5\u03E6\x07\x19\x02\x02\u03E6\u03E8\x03" +
		"\x02\x02\x02\u03E7\u03D6\x03\x02\x02\x02\u03E7\u03D8\x03\x02\x02\x02\u03E7" +
		"\u03DB\x03\x02\x02\x02\u03E7\u03E1\x03\x02\x02\x02\u03E8\xCD\x03\x02\x02" +
		"\x02\u03E9\u03EB\x05\xD0i\x02\u03EA\u03E9\x03\x02\x02\x02\u03EA\u03EB" +
		"\x03\x02\x02\x02\u03EB\u03F2\x03\x02\x02\x02\u03EC\u03ED\x07\x1A\x02\x02" +
		"\u03ED\u03F0\x07\x0E\x02\x02\u03EE\u03EF\x07\x1A\x02\x02\u03EF\u03F1\x05" +
		"\xD0i\x02\u03F0\u03EE\x03\x02\x02\x02\u03F0\u03F1\x03\x02\x02\x02\u03F1" +
		"\u03F3\x03\x02\x02\x02\u03F2\u03EC\x03\x02\x02\x02\u03F2\u03F3\x03\x02" +
		"\x02\x02\u03F3\u03FA\x03\x02\x02\x02\u03F4\u03F7\x07\x0E\x02\x02\u03F5" +
		"\u03F6\x07\x1A\x02\x02\u03F6\u03F8\x05\xD0i\x02\u03F7\u03F5\x03\x02\x02" +
		"\x02\u03F7\u03F8\x03\x02\x02\x02\u03F8\u03FA\x03\x02\x02\x02\u03F9\u03EA" +
		"\x03\x02\x02\x02\u03F9\u03F4\x03\x02\x02\x02\u03FA\xCF\x03\x02\x02\x02" +
		"\u03FB\u0400\x05\xD2j\x02\u03FC\u03FD\x07\x1A\x02\x02\u03FD\u03FF\x05" +
		"\xD2j\x02\u03FE\u03FC\x03\x02\x02\x02\u03FF\u0402\x03\x02\x02\x02\u0400" +
		"\u03FE\x03\x02\x02\x02\u0400\u0401\x03\x02\x02\x02\u0401\xD1\x03\x02\x02" +
		"\x02\u0402\u0400\x03\x02\x02\x02\u0403\u0404\x07m\x02\x02\u0404\u0405" +
		"\t\x07\x02\x02\u0405\xD3\x03\x02\x02\x02\u0406\u0407\x05\x88E\x02\u0407" +
		"\xD5\x03\x02\x02\x02\u0408\u0409\x05\xD8m\x02\u0409\xD7\x03\x02\x02\x02" +
		"\u040A\u0412\x05\xE4s\x02\u040B\u0412\x05\xE0q\x02\u040C\u0412\x05\xE2" +
		"r\x02\u040D\u0412\x05\xDAn\x02\u040E\u0412\x05\u012C\x97\x02\u040F\u0412" +
		"\x07l\x02\x02\u0410\u0412\x07j\x02\x02\u0411\u040A\x03\x02\x02\x02\u0411" +
		"\u040B\x03\x02\x02\x02\u0411\u040C\x03\x02\x02\x02\u0411\u040D\x03\x02" +
		"\x02\x02\u0411\u040E\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411" +
		"\u0410\x03\x02\x02\x02\u0412\xD9\x03\x02\x02\x02\u0413\u0414\x07\x18\x02" +
		"\x02\u0414\u0415\x05\xDCo\x02\u0415\u0416\x07\x19\x02\x02\u0416\xDB\x03" +
		"\x02\x02\x02\u0417\u041B\x05\xDEp\x02\u0418\u041A\x05\xDEp\x02\u0419\u0418" +
		"\x03\x02\x02\x02\u041A\u041D\x03\x02\x02\x02\u041B\u0419\x03\x02\x02\x02" +
		"\u041B\u041C\x03\x02\x02\x02\u041C\xDD\x03\x02\x02\x02\u041D\u041B\x03" +
		"\x02\x02\x02\u041E\u042A\x07g\x02\x02\u041F\u0426\x07m\x02\x02\u0420\u0423" +
		"\x07\x1B\x02\x02\u0421\u0424\x07g\x02\x02\u0422\u0424\x05\u0106\x84\x02" +
		"\u0423\u0421\x03\x02\x02\x02\u0423\u0422\x03\x02\x02\x02\u0424\u0425\x03" +
		"\x02\x02\x02\u0425\u0427\x07\x1C\x02\x02\u0426\u0420\x03\x02\x02\x02\u0426" +
		"\u0427\x03\x02\x02\x02\u0427\u042A\x03\x02\x02\x02\u0428\u042A\x05\u0106" +
		"\x84\x02\u0429\u041E\x03\x02\x02\x02\u0429\u041F\x03\x02\x02\x02\u0429" +
		"\u0428\x03\x02\x02\x02\u042A\xDF\x03\x02\x02\x02\u042B\u042E\x05\xE6t" +
		"\x02\u042C\u042E\x07m\x02\x02\u042D\u042B\x03\x02\x02\x02\u042D\u042C" +
		"\x03\x02\x02\x02\u042E\xE1\x03\x02\x02\x02\u042F\u0430\x07m\x02\x02\u0430" +
		"\u0431\x07T\x02\x02\u0431\u0432\x05\xD6l\x02\u0432\xE3\x03\x02\x02\x02" +
		"\u0433\u0434\x07m\x02\x02\u0434\xE5\x03\x02\x02\x02\u0435\u0437\x07\x1D" +
		"\x02\x02\u0436\u0435\x03\x02\x02\x02\u0436\u0437\x03\x02\x02\x02\u0437" +
		"\u0438\x03\x02\x02\x02\u0438\u0439\x07g\x02\x02\u0439\xE7\x03\x02\x02" +
		"\x02\u043A\u043B\x07U\x02\x02\u043B\u043C\x07\x18\x02\x02\u043C\u043D" +
		"\x05\xEAv\x02\u043D\u043E\x07\x19\x02\x02\u043E\xE9\x03\x02\x02\x02\u043F" +
		"\u0445\x05\xF4{\x02\u0440\u0441\x07\x1A\x02\x02\u0441\u0442\x05&\x14\x02" +
		"\u0442\u0443\x05\xECw\x02\u0443\u0444\x05(\x15\x02\u0444\u0446\x03\x02" +
		"\x02\x02\u0445\u0440\x03\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446" +
		"\xEB\x03\x02\x02\x02\u0447\u0448\x07\x1A\x02\x02\u0448\u044A\x05\xEEx" +
		"\x02\u0449\u0447\x03\x02\x02\x02\u0449\u044A\x03\x02\x02\x02\u044A\xED" +
		"\x03\x02\x02\x02\u044B\u0450\x05\xF0y\x02\u044C\u044D\x07\x1A\x02\x02" +
		"\u044D\u044F\x05\xF0y\x02\u044E\u044C\x03\x02\x02\x02\u044F\u0452\x03" +
		"\x02\x02\x02\u0450\u044E\x03\x02\x02\x02\u0450\u0451\x03\x02\x02\x02\u0451" +
		"\xEF\x03\x02\x02\x02\u0452\u0450\x03\x02\x02\x02\u0453\u0456\x05\xF2z" +
		"\x02\u0454\u0456\x05\xF8}\x02\u0455\u0453\x03\x02\x02\x02\u0455\u0454" +
		"\x03\x02\x02\x02\u0456\xF1\x03\x02\x02\x02\u0457\u0458\x07R\x02\x02\u0458" +
		"\u0459\x05@!\x02\u0459\u045A\x05\xF6|\x02\u045A\u045B\x07S\x02\x02\u045B" +
		"\xF3\x03\x02\x02\x02\u045C\u045D\x05\xF6|\x02\u045D\xF5\x03\x02\x02\x02" +
		"\u045E\u0463\x05\xF8}\x02\u045F\u0460\x07\x1A\x02\x02\u0460\u0462\x05" +
		"\xF8}\x02\u0461\u045F\x03\x02\x02\x02\u0462\u0465\x03\x02\x02\x02\u0463" +
		"\u0461\x03\x02\x02\x02\u0463\u0464\x03\x02\x02\x02\u0464\xF7\x03\x02\x02" +
		"\x02\u0465\u0463\x03\x02\x02\x02\u0466\u0467\x07m\x02\x02\u0467\u0468" +
		"\x05\xB0Y\x02\u0468\xF9\x03\x02\x02\x02\u0469\u046A\x07\x1E";
	private static readonly _serializedATNSegment2: string =
		"\x02\x02\u046A\u046B\x07\x18\x02\x02\u046B\u046C\x05\xFC\x7F\x02\u046C" +
		"\u046D\x07\x19\x02\x02\u046D\xFB\x03\x02\x02\x02\u046E\u0478\x05\xFE\x80" +
		"\x02\u046F\u0470\x07\x1A\x02\x02\u0470\u0472\x07\x0E\x02\x02\u0471\u0473" +
		"\x05\u0110\x89\x02\u0472\u0471\x03\x02\x02\x02\u0472\u0473\x03\x02\x02" +
		"\x02\u0473\u0476\x03\x02\x02\x02\u0474\u0475\x07\x1A\x02\x02\u0475\u0477" +
		"\x05\u0114\x8B\x02\u0476\u0474\x03\x02\x02\x02\u0476\u0477\x03\x02\x02" +
		"\x02\u0477\u0479\x03\x02\x02\x02\u0478\u046F\x03\x02\x02\x02\u0478\u0479" +
		"\x03\x02\x02\x02\u0479\xFD\x03\x02\x02\x02\u047A\u047B\x05\u0100\x81\x02" +
		"\u047B\xFF\x03\x02\x02\x02\u047C\u0481\x05\u0102\x82\x02\u047D\u047E\x07" +
		"\x1A\x02\x02\u047E\u0480\x05\u0102\x82\x02\u047F\u047D\x03\x02\x02\x02" +
		"\u0480\u0483\x03\x02\x02\x02\u0481\u047F\x03\x02\x02\x02\u0481\u0482\x03" +
		"\x02\x02\x02\u0482\u0101\x03\x02\x02\x02\u0483\u0481\x03\x02\x02\x02\u0484" +
		"\u0488\x07m\x02\x02\u0485\u0488\x05\u0104\x83\x02\u0486\u0488\x05\xD6" +
		"l\x02\u0487\u0484\x03\x02\x02\x02\u0487\u0485\x03\x02\x02\x02\u0487\u0486" +
		"\x03\x02\x02\x02\u0488\u0103\x03\x02\x02\x02\u0489\u048A\x07m\x02\x02" +
		"\u048A\u048D\x07\x1B\x02\x02\u048B\u048E\x05\xE6t\x02\u048C\u048E\x05" +
		"\u0106\x84\x02\u048D\u048B\x03\x02\x02\x02\u048D\u048C\x03\x02\x02\x02" +
		"\u048E\u048F\x03\x02\x02\x02\u048F\u0490\x07\x1C\x02\x02\u0490\u0105\x03" +
		"\x02\x02\x02\u0491\u0492\x05\u0108\x85\x02\u0492\u0107\x03\x02\x02\x02" +
		"\u0493\u0495\x05\u010A\x86\x02\u0494\u0496\x05\u010C\x87\x02\u0495\u0494" +
		"\x03\x02\x02\x02\u0495\u0496\x03\x02\x02\x02\u0496\u0109\x03\x02\x02\x02" +
		"\u0497\u049A\x07m\x02\x02\u0498\u0499\x07\f\x02\x02\u0499\u049B\x07m\x02" +
		"\x02\u049A\u0498\x03\x02\x02\x02\u049A\u049B\x03\x02\x02\x02\u049B\u010B" +
		"\x03\x02\x02\x02\u049C\u049D\x07\x18\x02\x02\u049D\u04A2\x05\u010E\x88" +
		"\x02\u049E\u049F\x07\x1A\x02\x02\u049F\u04A1\x05\u010E\x88\x02\u04A0\u049E" +
		"\x03\x02\x02\x02\u04A1\u04A4\x03\x02\x02\x02\u04A2\u04A0\x03\x02\x02\x02" +
		"\u04A2\u04A3\x03\x02\x02\x02\u04A3\u04A5\x03\x02\x02\x02\u04A4\u04A2\x03" +
		"\x02\x02\x02\u04A5\u04A6\x07\x19\x02\x02\u04A6\u010D\x03\x02\x02\x02\u04A7" +
		"\u04AA\x05\xB0Y\x02\u04A8\u04AA\x05\xD6l\x02\u04A9\u04A7\x03\x02\x02\x02" +
		"\u04A9\u04A8\x03\x02\x02\x02\u04AA\u010F\x03\x02\x02\x02\u04AB\u04AC\x07" +
		"-\x02\x02\u04AC\u04AD\x05\u0112\x8A\x02\u04AD\u0111\x03\x02\x02\x02\u04AE" +
		"\u04B5\x05\xE6t\x02\u04AF\u04B5\x05\u0106\x84\x02\u04B0\u04B1\x05\xB0" +
		"Y\x02\u04B1\u04B2\x07T\x02\x02\u04B2\u04B3\x05\xD6l\x02\u04B3\u04B5\x03" +
		"\x02\x02\x02\u04B4\u04AE\x03\x02\x02\x02\u04B4\u04AF\x03\x02\x02\x02\u04B4" +
		"\u04B0\x03\x02\x02\x02\u04B5\u0113\x03\x02\x02\x02\u04B6\u04B7\x05\u0100" +
		"\x81\x02\u04B7\u0115\x03\x02\x02\x02\u04B8\u04BD\x07\x17\x02\x02\u04B9" +
		"\u04BA\x07\x18\x02\x02\u04BA\u04BB\x05\u0118\x8D\x02\u04BB\u04BC\x07\x19" +
		"\x02\x02\u04BC\u04BE\x03\x02\x02\x02\u04BD\u04B9\x03\x02\x02\x02\u04BD" +
		"\u04BE\x03\x02\x02\x02\u04BE\u0117\x03\x02\x02\x02\u04BF\u04C4\x05\u0104" +
		"\x83\x02\u04C0\u04C1\x07\x1A\x02\x02\u04C1\u04C3\x05\u0104\x83\x02\u04C2" +
		"\u04C0\x03\x02\x02\x02\u04C3\u04C6\x03\x02\x02\x02\u04C4\u04C2\x03\x02" +
		"\x02\x02\u04C4\u04C5\x03\x02\x02\x02\u04C5\u0119\x03\x02\x02\x02\u04C6" +
		"\u04C4\x03\x02\x02\x02\u04C7\u04C8\x07\\\x02\x02\u04C8\u04C9\x07]\x02" +
		"\x02\u04C9\u011B\x03\x02\x02\x02\u04CA\u04CB\x07\x18\x02\x02\u04CB\u04CE" +
		"\x07m\x02\x02\u04CC\u04CD\x07\f\x02\x02\u04CD\u04CF\x07m\x02\x02\u04CE" +
		"\u04CC\x03\x02\x02\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u04D0\x03\x02" +
		"\x02\x02\u04D0\u04DC\x07\x19\x02\x02\u04D1\u04D2\x07\x18\x02\x02\u04D2" +
		"\u04D7\x05\u011E\x90\x02\u04D3\u04D4\x07\x1A\x02\x02\u04D4\u04D6\x05\u011E" +
		"\x90\x02\u04D5\u04D3\x03\x02\x02\x02\u04D6\u04D9\x03\x02\x02\x02\u04D7" +
		"\u04D5\x03\x02\x02\x02\u04D7\u04D8\x03\x02\x02\x02\u04D8\u04DA\x03\x02" +
		"\x02\x02\u04D9\u04D7\x03\x02\x02\x02\u04DA\u04DB\x07\x19\x02\x02\u04DB" +
		"\u04DD\x03\x02\x02\x02\u04DC\u04D1\x03\x02\x02\x02\u04DC\u04DD\x03\x02" +
		"\x02\x02\u04DD\u011D\x03\x02\x02\x02\u04DE\u04E2\x07\x06\x02\x02\u04DF" +
		"\u04E0\x07b\x02\x02\u04E0\u04E2\x05\u0120\x91\x02\u04E1\u04DE\x03\x02" +
		"\x02\x02\u04E1\u04DF\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3" +
		"\u04E4\x05\u0122\x92\x02\u04E4\u011F\x03\x02\x02\x02\u04E5\u04E6\x07\f" +
		"\x02\x02\u04E6\u04E8\x05\u0120\x91\x02\u04E7\u04E5\x03\x02\x02\x02\u04E7" +
		"\u04E8\x03\x02\x02\x02\u04E8\u0121\x03\x02\x02\x02\u04E9\u04EE\x07m\x02" +
		"\x02\u04EA\u04EB\x07\f\x02\x02\u04EB\u04ED\x07m\x02\x02\u04EC\u04EA\x03" +
		"\x02\x02\x02\u04ED\u04F0\x03\x02\x02\x02\u04EE\u04EC\x03\x02\x02\x02\u04EE" +
		"\u04EF\x03\x02\x02\x02\u04EF\u0123\x03\x02\x02\x02\u04F0\u04EE\x03\x02" +
		"\x02\x02\u04F1\u04F2\x07%\x02\x02\u04F2\u04F3\x07#\x02\x02\u04F3\u0125" +
		"\x03\x02\x02\x02\u04F4\u04F5\x07\"\x02\x02\u04F5\u04F6\x07#\x02\x02\u04F6" +
		"\u04FB\x03\x02\x02\x02\u04F7\u04F8\x07\x18\x02\x02\u04F8\u04F9\x05\u0128" +
		"\x95\x02\u04F9\u04FA\x07\x19\x02\x02\u04FA\u04FC\x03\x02\x02\x02\u04FB" +
		"\u04F7\x03\x02\x02\x02\u04FB\u04FC\x03\x02\x02\x02\u04FC\u0127\x03\x02" +
		"\x02\x02\u04FD\u0502\x05\u012A\x96\x02\u04FE\u04FF\x07\x1A\x02\x02\u04FF" +
		"\u0501\x05\u012A\x96\x02\u0500\u04FE\x03\x02\x02\x02\u0501\u0504\x03\x02" +
		"\x02\x02\u0502\u0500\x03\x02\x02\x02\u0502\u0503\x03\x02\x02\x02\u0503" +
		"\u0129\x03\x02\x02\x02\u0504\u0502\x03\x02\x02\x02\u0505\u0506\x07m\x02" +
		"\x02\u0506\u0509\x07\x1B\x02\x02\u0507\u050A\x07g\x02\x02\u0508\u050A" +
		"\x05\u0106\x84\x02\u0509\u0507\x03\x02\x02\x02\u0509\u0508\x03\x02\x02" +
		"\x02\u050A\u050B\x03\x02\x02\x02\u050B\u050C\x07\x1C\x02\x02\u050C\u012B" +
		"\x03\x02\x02\x02\u050D\u050E\t\b\x02\x02\u050E\u012D\x03\x02\x02\x02\x98" +
		"\u0131\u013B\u013F\u014B\u014F\u0155\u015E\u0161\u0167\u016A\u0170\u0181" +
		"\u0187\u018D\u0195\u019D\u01A3\u01A7\u01AD\u01B6\u01B8\u01BA\u01C3\u01C5" +
		"\u01C7\u01CE\u01D3\u01DA\u01DF\u01E4\u01EE\u01F5\u01FA\u0200\u0206\u020C" +
		"\u0210\u0215\u021F\u0226\u0228\u0230\u0238\u023E\u0242\u0249\u024D\u0252" +
		"\u0261\u0266\u0270\u0276\u027C\u0282\u028C\u0290\u0293\u0296\u0298\u029F" +
		"\u02A1\u02A8\u02AA\u02AC\u02B1\u02B6\u02BC\u02BF\u02C4\u02CA\u02D0\u02D5" +
		"\u02D9\u02E0\u02EB\u02ED\u02F2\u02F4\u02FE\u030A\u030C\u0315\u031D\u0329" +
		"\u0334\u0338\u033C\u033F\u0343\u0347\u034D\u0353\u0359\u035E\u0364\u0369" +
		"\u0374\u0379\u0389\u0395\u039C\u03A1\u03A8\u03AB\u03B0\u03B6\u03C0\u03C8" +
		"\u03D0\u03E7\u03EA\u03F0\u03F2\u03F7\u03F9\u0400\u0411\u041B\u0423\u0426" +
		"\u0429\u042D\u0436\u0445\u0449\u0450\u0455\u0463\u0472\u0476\u0478\u0481" +
		"\u0487\u048D\u0495\u049A\u04A2\u04A9\u04B4\u04BD\u04C4\u04CE\u04D7\u04DC" +
		"\u04E1\u04E7\u04EE\u04FB\u0502\u0509";
	public static readonly _serializedATN: string = Utils.join(
		[
			ASN_3gppParser._serializedATNSegment0,
			ASN_3gppParser._serializedATNSegment1,
			ASN_3gppParser._serializedATNSegment2,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ASN_3gppParser.__ATN) {
			ASN_3gppParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ASN_3gppParser._serializedATN));
		}

		return ASN_3gppParser.__ATN;
	}

}

export class ModulesContext extends ParserRuleContext {
	public moduleDefinition(): ModuleDefinitionContext[];
	public moduleDefinition(i: number): ModuleDefinitionContext;
	public moduleDefinition(i?: number): ModuleDefinitionContext | ModuleDefinitionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModuleDefinitionContext);
		} else {
			return this.getRuleContext(i, ModuleDefinitionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_modules; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterModules) {
			listener.enterModules(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitModules) {
			listener.exitModules(this);
		}
	}
}


export class ModuleDefinitionContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DEFINITIONS_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.DEFINITIONS_LITERAL, 0); }
	public tagDefault(): TagDefaultContext {
		return this.getRuleContext(0, TagDefaultContext);
	}
	public extensionDefault(): ExtensionDefaultContext {
		return this.getRuleContext(0, ExtensionDefaultContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public BEGIN_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.BEGIN_LITERAL, 0); }
	public moduleBody(): ModuleBodyContext {
		return this.getRuleContext(0, ModuleBodyContext);
	}
	public END_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.END_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	public L_PARAN(): TerminalNode[];
	public L_PARAN(i: number): TerminalNode;
	public L_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.L_PARAN);
		} else {
			return this.getToken(ASN_3gppParser.L_PARAN, i);
		}
	}
	public NUMBER(): TerminalNode[];
	public NUMBER(i: number): TerminalNode;
	public NUMBER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.NUMBER);
		} else {
			return this.getToken(ASN_3gppParser.NUMBER, i);
		}
	}
	public R_PARAN(): TerminalNode[];
	public R_PARAN(i: number): TerminalNode;
	public R_PARAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.R_PARAN);
		} else {
			return this.getToken(ASN_3gppParser.R_PARAN, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_moduleDefinition; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterModuleDefinition) {
			listener.enterModuleDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitModuleDefinition) {
			listener.exitModuleDefinition(this);
		}
	}
}


export class TagDefaultContext extends ParserRuleContext {
	public TAGS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TAGS_LITERAL, 0); }
	public EXPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXPLICIT_LITERAL, 0); }
	public IMPLICIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPLICIT_LITERAL, 0); }
	public AUTOMATIC_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.AUTOMATIC_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tagDefault; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTagDefault) {
			listener.enterTagDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTagDefault) {
			listener.exitTagDefault(this);
		}
	}
}


export class ExtensionDefaultContext extends ParserRuleContext {
	public EXTENSIBILITY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXTENSIBILITY_LITERAL, 0); }
	public IMPLIED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPLIED_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionDefault; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionDefault) {
			listener.enterExtensionDefault(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionDefault) {
			listener.exitExtensionDefault(this);
		}
	}
}


export class ModuleBodyContext extends ParserRuleContext {
	public exports(): ExportsContext | undefined {
		return this.tryGetRuleContext(0, ExportsContext);
	}
	public imports(): ImportsContext | undefined {
		return this.tryGetRuleContext(0, ImportsContext);
	}
	public assignmentList(): AssignmentListContext | undefined {
		return this.tryGetRuleContext(0, AssignmentListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_moduleBody; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterModuleBody) {
			listener.enterModuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitModuleBody) {
			listener.exitModuleBody(this);
		}
	}
}


export class ExportsContext extends ParserRuleContext {
	public EXPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXPORTS_LITERAL, 0); }
	public symbolsExported(): SymbolsExportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsExportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exports; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExports) {
			listener.enterExports(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExports) {
			listener.exitExports(this);
		}
	}
}


export class SymbolsExportedContext extends ParserRuleContext {
	public symbolList(): SymbolListContext | undefined {
		return this.tryGetRuleContext(0, SymbolListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsExported; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbolsExported) {
			listener.enterSymbolsExported(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbolsExported) {
			listener.exitSymbolsExported(this);
		}
	}
}


export class ImportsContext extends ParserRuleContext {
	public IMPORTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IMPORTS_LITERAL, 0); }
	public symbolsImported(): SymbolsImportedContext | undefined {
		return this.tryGetRuleContext(0, SymbolsImportedContext);
	}
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.SEMI_COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_imports; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterImports) {
			listener.enterImports(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitImports) {
			listener.exitImports(this);
		}
	}
}


export class SymbolsImportedContext extends ParserRuleContext {
	public symbolsFromModuleList(): SymbolsFromModuleListContext | undefined {
		return this.tryGetRuleContext(0, SymbolsFromModuleListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsImported; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbolsImported) {
			listener.enterSymbolsImported(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbolsImported) {
			listener.exitSymbolsImported(this);
		}
	}
}


export class SymbolsFromModuleListContext extends ParserRuleContext {
	public symbolsFromModule(): SymbolsFromModuleContext[];
	public symbolsFromModule(i: number): SymbolsFromModuleContext;
	public symbolsFromModule(i?: number): SymbolsFromModuleContext | SymbolsFromModuleContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolsFromModuleContext);
		} else {
			return this.getRuleContext(i, SymbolsFromModuleContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsFromModuleList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbolsFromModuleList) {
			listener.enterSymbolsFromModuleList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbolsFromModuleList) {
			listener.exitSymbolsFromModuleList(this);
		}
	}
}


export class SymbolsFromModuleContext extends ParserRuleContext {
	public symbolList(): SymbolListContext {
		return this.getRuleContext(0, SymbolListContext);
	}
	public FROM_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.FROM_LITERAL, 0); }
	public globalModuleReference(): GlobalModuleReferenceContext {
		return this.getRuleContext(0, GlobalModuleReferenceContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolsFromModule; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbolsFromModule) {
			listener.enterSymbolsFromModule(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbolsFromModule) {
			listener.exitSymbolsFromModule(this);
		}
	}
}


export class GlobalModuleReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public assignedIdentifier(): AssignedIdentifierContext {
		return this.getRuleContext(0, AssignedIdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_globalModuleReference; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterGlobalModuleReference) {
			listener.enterGlobalModuleReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitGlobalModuleReference) {
			listener.exitGlobalModuleReference(this);
		}
	}
}


export class AssignedIdentifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignedIdentifier; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAssignedIdentifier) {
			listener.enterAssignedIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAssignedIdentifier) {
			listener.exitAssignedIdentifier(this);
		}
	}
}


export class SymbolListContext extends ParserRuleContext {
	public symbol(): SymbolContext[];
	public symbol(i: number): SymbolContext;
	public symbol(i?: number): SymbolContext | SymbolContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SymbolContext);
		} else {
			return this.getRuleContext(i, SymbolContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbolList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbolList) {
			listener.enterSymbolList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbolList) {
			listener.exitSymbolList(this);
		}
	}
}


export class SymbolContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_symbol; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSymbol) {
			listener.enterSymbol(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSymbol) {
			listener.exitSymbol(this);
		}
	}
}


export class AssignmentListContext extends ParserRuleContext {
	public assignment(): AssignmentContext[];
	public assignment(i: number): AssignmentContext;
	public assignment(i?: number): AssignmentContext | AssignmentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AssignmentContext);
		} else {
			return this.getRuleContext(i, AssignmentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignmentList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAssignmentList) {
			listener.enterAssignmentList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAssignmentList) {
			listener.exitAssignmentList(this);
		}
	}
}


export class AssignmentContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public valueAssignment(): ValueAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ValueAssignmentContext);
	}
	public typeAssignment(): TypeAssignmentContext | undefined {
		return this.tryGetRuleContext(0, TypeAssignmentContext);
	}
	public parameterizedAssignment(): ParameterizedAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedAssignmentContext);
	}
	public objectClassAssignment(): ObjectClassAssignmentContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassAssignmentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_assignment; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAssignment) {
			listener.enterAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAssignment) {
			listener.exitAssignment(this);
		}
	}
}


export class SequenceTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sequenceType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSequenceType) {
			listener.enterSequenceType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSequenceType) {
			listener.exitSequenceType(this);
		}
	}
}


export class ExtensionAndExceptionContext extends ParserRuleContext {
	public ELLIPSIS(): TerminalNode { return this.getToken(ASN_3gppParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAndException; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAndException) {
			listener.enterExtensionAndException(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAndException) {
			listener.exitExtensionAndException(this);
		}
	}
}


export class OptionalExtensionMarkerContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_optionalExtensionMarker; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterOptionalExtensionMarker) {
			listener.enterOptionalExtensionMarker(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitOptionalExtensionMarker) {
			listener.exitOptionalExtensionMarker(this);
		}
	}
}


export class ComponentTypeListsContext extends ParserRuleContext {
	public rootComponentTypeList(): RootComponentTypeListContext[];
	public rootComponentTypeList(i: number): RootComponentTypeListContext;
	public rootComponentTypeList(i?: number): RootComponentTypeListContext | RootComponentTypeListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RootComponentTypeListContext);
		} else {
			return this.getRuleContext(i, RootComponentTypeListContext);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditions(): ExtensionAdditionsContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionsContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public EXTENSTIONENDMARKER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.EXTENSTIONENDMARKER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentTypeLists; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentTypeLists) {
			listener.enterComponentTypeLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentTypeLists) {
			listener.exitComponentTypeLists(this);
		}
	}
}


export class RootComponentTypeListContext extends ParserRuleContext {
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootComponentTypeList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterRootComponentTypeList) {
			listener.enterRootComponentTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitRootComponentTypeList) {
			listener.exitRootComponentTypeList(this);
		}
	}
}


export class ComponentTypeListContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext[];
	public componentType(i: number): ComponentTypeContext;
	public componentType(i?: number): ComponentTypeContext | ComponentTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentTypeContext);
		} else {
			return this.getRuleContext(i, ComponentTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public tag(): TagContext[];
	public tag(i: number): TagContext;
	public tag(i?: number): TagContext | TagContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TagContext);
		} else {
			return this.getRuleContext(i, TagContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentTypeList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentTypeList) {
			listener.enterComponentTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentTypeList) {
			listener.exitComponentTypeList(this);
		}
	}
}


export class ComponentTypeContext extends ParserRuleContext {
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentType) {
			listener.enterComponentType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentType) {
			listener.exitComponentType(this);
		}
	}
}


export class TagContext extends ParserRuleContext {
	public needTag(): NeedTagContext | undefined {
		return this.tryGetRuleContext(0, NeedTagContext);
	}
	public condTag(): CondTagContext | undefined {
		return this.tryGetRuleContext(0, CondTagContext);
	}
	public INVALID_TAG(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.INVALID_TAG, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tag; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTag) {
			listener.enterTag(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTag) {
			listener.exitTag(this);
		}
	}
}


export class NeedTagContext extends ParserRuleContext {
	public NEED_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.NEED_LITERAL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_needTag; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNeedTag) {
			listener.enterNeedTag(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNeedTag) {
			listener.exitNeedTag(this);
		}
	}
}


export class CondTagContext extends ParserRuleContext {
	public COND_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.COND_LITERAL, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_condTag; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterCondTag) {
			listener.enterCondTag(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitCondTag) {
			listener.exitCondTag(this);
		}
	}
}


export class ExtensionAdditionsContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAdditionList(): ExtensionAdditionListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditions; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditions) {
			listener.enterExtensionAdditions(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditions) {
			listener.exitExtensionAdditions(this);
		}
	}
}


export class ExtensionAdditionListContext extends ParserRuleContext {
	public extensionAddition(): ExtensionAdditionContext[];
	public extensionAddition(i: number): ExtensionAdditionContext;
	public extensionAddition(i?: number): ExtensionAdditionContext | ExtensionAdditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionList) {
			listener.enterExtensionAdditionList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionList) {
			listener.exitExtensionAdditionList(this);
		}
	}
}


export class ExtensionAdditionContext extends ParserRuleContext {
	public componentType(): ComponentTypeContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeContext);
	}
	public extensionAdditionGroup(): ExtensionAdditionGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAddition; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAddition) {
			listener.enterExtensionAddition(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAddition) {
			listener.exitExtensionAddition(this);
		}
	}
}


export class ExtensionAdditionGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public componentTypeList(): ComponentTypeListContext {
		return this.getRuleContext(0, ComponentTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
	public tag(): TagContext | undefined {
		return this.tryGetRuleContext(0, TagContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionGroup; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionGroup) {
			listener.enterExtensionAdditionGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionGroup) {
			listener.exitExtensionAdditionGroup(this);
		}
	}
}


export class VersionNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_versionNumber; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterVersionNumber) {
			listener.enterVersionNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitVersionNumber) {
			listener.exitVersionNumber(this);
		}
	}
}


export class SequenceOfTypeContext extends ParserRuleContext {
	public SEQUENCE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SEQUENCE_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sequenceOfType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSequenceOfType) {
			listener.enterSequenceOfType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSequenceOfType) {
			listener.exitSequenceOfType(this);
		}
	}
}


export class SizeConstraintContext extends ParserRuleContext {
	public SIZE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SIZE_LITERAL, 0); }
	public constraint(): ConstraintContext {
		return this.getRuleContext(0, ConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_sizeConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSizeConstraint) {
			listener.enterSizeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSizeConstraint) {
			listener.exitSizeConstraint(this);
		}
	}
}


export class ParameterizedAssignmentContext extends ParserRuleContext {
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public ASSIGN_OP(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectClass(): ObjectClassContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedAssignment; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParameterizedAssignment) {
			listener.enterParameterizedAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParameterizedAssignment) {
			listener.exitParameterizedAssignment(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public paramGovernor(): ParamGovernorContext | undefined {
		return this.tryGetRuleContext(0, ParamGovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameter; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParameter) {
			listener.enterParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParameter) {
			listener.exitParameter(this);
		}
	}
}


export class ParamGovernorContext extends ParserRuleContext {
	public governor(): GovernorContext | undefined {
		return this.tryGetRuleContext(0, GovernorContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_paramGovernor; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParamGovernor) {
			listener.enterParamGovernor(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParamGovernor) {
			listener.exitParamGovernor(this);
		}
	}
}


export class GovernorContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_governor; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterGovernor) {
			listener.enterGovernor(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitGovernor) {
			listener.exitGovernor(this);
		}
	}
}


export class ObjectClassAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public objectClass(): ObjectClassContext {
		return this.getRuleContext(0, ObjectClassContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassAssignment; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectClassAssignment) {
			listener.enterObjectClassAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectClassAssignment) {
			listener.exitObjectClassAssignment(this);
		}
	}
}


export class ObjectClassContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public objectClassDefn(): ObjectClassDefnContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassDefnContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClass; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectClass) {
			listener.enterObjectClass(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectClass) {
			listener.exitObjectClass(this);
		}
	}
}


export class DefinedObjectClassContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedObjectClass; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterDefinedObjectClass) {
			listener.enterDefinedObjectClass(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitDefinedObjectClass) {
			listener.exitDefinedObjectClass(this);
		}
	}
}


export class UsefulObjectClassReferenceContext extends ParserRuleContext {
	public TYPE_IDENTIFIER_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TYPE_IDENTIFIER_LITERAL, 0); }
	public ABSTRACT_SYNTAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSTRACT_SYNTAX_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_usefulObjectClassReference; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterUsefulObjectClassReference) {
			listener.enterUsefulObjectClassReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitUsefulObjectClassReference) {
			listener.exitUsefulObjectClassReference(this);
		}
	}
}


export class ExternalObjectClassReferenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode { return this.getToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_externalObjectClassReference; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExternalObjectClassReference) {
			listener.enterExternalObjectClassReference(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExternalObjectClassReference) {
			listener.exitExternalObjectClassReference(this);
		}
	}
}


export class ObjectClassDefnContext extends ParserRuleContext {
	public CLASS_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CLASS_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public fieldSpec(): FieldSpecContext[];
	public fieldSpec(i: number): FieldSpecContext;
	public fieldSpec(i?: number): FieldSpecContext | FieldSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldSpecContext);
		} else {
			return this.getRuleContext(i, FieldSpecContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public withSyntaxSpec(): WithSyntaxSpecContext | undefined {
		return this.tryGetRuleContext(0, WithSyntaxSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassDefn; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectClassDefn) {
			listener.enterObjectClassDefn(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectClassDefn) {
			listener.exitObjectClassDefn(this);
		}
	}
}


export class WithSyntaxSpecContext extends ParserRuleContext {
	public WITH_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.WITH_LITERAL, 0); }
	public SYNTAX_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SYNTAX_LITERAL, 0); }
	public syntaxList(): SyntaxListContext {
		return this.getRuleContext(0, SyntaxListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_withSyntaxSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterWithSyntaxSpec) {
			listener.enterWithSyntaxSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitWithSyntaxSpec) {
			listener.exitWithSyntaxSpec(this);
		}
	}
}


export class SyntaxListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_syntaxList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSyntaxList) {
			listener.enterSyntaxList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSyntaxList) {
			listener.exitSyntaxList(this);
		}
	}
}


export class TokenOrGroupSpecContext extends ParserRuleContext {
	public requiredToken(): RequiredTokenContext | undefined {
		return this.tryGetRuleContext(0, RequiredTokenContext);
	}
	public optionalGroup(): OptionalGroupContext | undefined {
		return this.tryGetRuleContext(0, OptionalGroupContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tokenOrGroupSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTokenOrGroupSpec) {
			listener.enterTokenOrGroupSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTokenOrGroupSpec) {
			listener.exitTokenOrGroupSpec(this);
		}
	}
}


export class OptionalGroupContext extends ParserRuleContext {
	public L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACKET, 0); }
	public R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACKET, 0); }
	public tokenOrGroupSpec(): TokenOrGroupSpecContext[];
	public tokenOrGroupSpec(i: number): TokenOrGroupSpecContext;
	public tokenOrGroupSpec(i?: number): TokenOrGroupSpecContext | TokenOrGroupSpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TokenOrGroupSpecContext);
		} else {
			return this.getRuleContext(i, TokenOrGroupSpecContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_optionalGroup; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterOptionalGroup) {
			listener.enterOptionalGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitOptionalGroup) {
			listener.exitOptionalGroup(this);
		}
	}
}


export class RequiredTokenContext extends ParserRuleContext {
	public literal(): LiteralContext | undefined {
		return this.tryGetRuleContext(0, LiteralContext);
	}
	public primitiveFieldName(): PrimitiveFieldNameContext | undefined {
		return this.tryGetRuleContext(0, PrimitiveFieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_requiredToken; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterRequiredToken) {
			listener.enterRequiredToken(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitRequiredToken) {
			listener.exitRequiredToken(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_literal; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class PrimitiveFieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_primitiveFieldName; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterPrimitiveFieldName) {
			listener.enterPrimitiveFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitPrimitiveFieldName) {
			listener.exitPrimitiveFieldName(this);
		}
	}
}


export class FieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public fieldName(): FieldNameContext | undefined {
		return this.tryGetRuleContext(0, FieldNameContext);
	}
	public definedObjectClass(): DefinedObjectClassContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectClassContext);
	}
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterFieldSpec) {
			listener.enterFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitFieldSpec) {
			listener.exitFieldSpec(this);
		}
	}
}


export class TypeFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public typeOptionalitySpec(): TypeOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, TypeOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTypeFieldSpec) {
			listener.enterTypeFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTypeFieldSpec) {
			listener.exitTypeFieldSpec(this);
		}
	}
}


export class TypeOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeOptionalitySpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTypeOptionalitySpec) {
			listener.enterTypeOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTypeOptionalitySpec) {
			listener.exitTypeOptionalitySpec(this);
		}
	}
}


export class FixedTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public UNIQUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNIQUE_LITERAL, 0); }
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fixedTypeValueFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterFixedTypeValueFieldSpec) {
			listener.enterFixedTypeValueFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitFixedTypeValueFieldSpec) {
			listener.exitFixedTypeValueFieldSpec(this);
		}
	}
}


export class ValueOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueOptionalitySpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterValueOptionalitySpec) {
			listener.enterValueOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitValueOptionalitySpec) {
			listener.exitValueOptionalitySpec(this);
		}
	}
}


export class VariableTypeValueFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueOptionalitySpec(): ValueOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_variableTypeValueFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterVariableTypeValueFieldSpec) {
			listener.enterVariableTypeValueFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitVariableTypeValueFieldSpec) {
			listener.exitVariableTypeValueFieldSpec(this);
		}
	}
}


export class FixedTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fixedTypeValueSetFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterFixedTypeValueSetFieldSpec) {
			listener.enterFixedTypeValueSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitFixedTypeValueSetFieldSpec) {
			listener.exitFixedTypeValueSetFieldSpec(this);
		}
	}
}


export class ValueSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueSetOptionalitySpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterValueSetOptionalitySpec) {
			listener.enterValueSetOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitValueSetOptionalitySpec) {
			listener.exitValueSetOptionalitySpec(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	public parameterizedObject(): ParameterizedObjectContext | undefined {
		return this.tryGetRuleContext(0, ParameterizedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_object; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class ParameterizedObjectContext extends ParserRuleContext {
	public definedObject(): DefinedObjectContext {
		return this.getRuleContext(0, DefinedObjectContext);
	}
	public actualParameterList(): ActualParameterListContext {
		return this.getRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedObject; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParameterizedObject) {
			listener.enterParameterizedObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParameterizedObject) {
			listener.exitParameterizedObject(this);
		}
	}
}


export class DefinedObjectContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedObject; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterDefinedObject) {
			listener.enterDefinedObject(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitDefinedObject) {
			listener.exitDefinedObject(this);
		}
	}
}


export class ObjectSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public objectSetSpec(): ObjectSetSpecContext {
		return this.getRuleContext(0, ObjectSetSpecContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSet; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectSet) {
			listener.enterObjectSet(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectSet) {
			listener.exitObjectSet(this);
		}
	}
}


export class ObjectSetSpecContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectSetSpec) {
			listener.enterObjectSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectSetSpec) {
			listener.exitObjectSetSpec(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode[];
	public AMPERSAND(i: number): TerminalNode;
	public AMPERSAND(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.AMPERSAND);
		} else {
			return this.getToken(ASN_3gppParser.AMPERSAND, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.DOT);
		} else {
			return this.getToken(ASN_3gppParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
}


export class ValueSetContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueSet; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterValueSet) {
			listener.enterValueSet(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitValueSet) {
			listener.exitValueSet(this);
		}
	}
}


export class ElementSetSpecsContext extends ParserRuleContext {
	public rootElementSetSpec(): RootElementSetSpecContext {
		return this.getRuleContext(0, RootElementSetSpecContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public additionalElementSetSpec(): AdditionalElementSetSpecContext | undefined {
		return this.tryGetRuleContext(0, AdditionalElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elementSetSpecs; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterElementSetSpecs) {
			listener.enterElementSetSpecs(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitElementSetSpecs) {
			listener.exitElementSetSpecs(this);
		}
	}
}


export class RootElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootElementSetSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterRootElementSetSpec) {
			listener.enterRootElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitRootElementSetSpec) {
			listener.exitRootElementSetSpec(this);
		}
	}
}


export class AdditionalElementSetSpecContext extends ParserRuleContext {
	public elementSetSpec(): ElementSetSpecContext {
		return this.getRuleContext(0, ElementSetSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_additionalElementSetSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAdditionalElementSetSpec) {
			listener.enterAdditionalElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAdditionalElementSetSpec) {
			listener.exitAdditionalElementSetSpec(this);
		}
	}
}


export class ElementSetSpecContext extends ParserRuleContext {
	public unions(): UnionsContext | undefined {
		return this.tryGetRuleContext(0, UnionsContext);
	}
	public ALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ALL_LITERAL, 0); }
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elementSetSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterElementSetSpec) {
			listener.enterElementSetSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitElementSetSpec) {
			listener.exitElementSetSpec(this);
		}
	}
}


export class UnionsContext extends ParserRuleContext {
	public intersections(): IntersectionsContext[];
	public intersections(i: number): IntersectionsContext;
	public intersections(i?: number): IntersectionsContext | IntersectionsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionsContext);
		} else {
			return this.getRuleContext(i, IntersectionsContext);
		}
	}
	public unionMark(): UnionMarkContext[];
	public unionMark(i: number): UnionMarkContext;
	public unionMark(i?: number): UnionMarkContext | UnionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UnionMarkContext);
		} else {
			return this.getRuleContext(i, UnionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_unions; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterUnions) {
			listener.enterUnions(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitUnions) {
			listener.exitUnions(this);
		}
	}
}


export class ExclusionsContext extends ParserRuleContext {
	public EXCEPT_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.EXCEPT_LITERAL, 0); }
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exclusions; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExclusions) {
			listener.enterExclusions(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExclusions) {
			listener.exitExclusions(this);
		}
	}
}


export class IntersectionsContext extends ParserRuleContext {
	public intersectionElements(): IntersectionElementsContext[];
	public intersectionElements(i: number): IntersectionElementsContext;
	public intersectionElements(i?: number): IntersectionElementsContext | IntersectionElementsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionElementsContext);
		} else {
			return this.getRuleContext(i, IntersectionElementsContext);
		}
	}
	public intersectionMark(): IntersectionMarkContext[];
	public intersectionMark(i: number): IntersectionMarkContext;
	public intersectionMark(i?: number): IntersectionMarkContext | IntersectionMarkContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntersectionMarkContext);
		} else {
			return this.getRuleContext(i, IntersectionMarkContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersections; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterIntersections) {
			listener.enterIntersections(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitIntersections) {
			listener.exitIntersections(this);
		}
	}
}


export class UnionMarkContext extends ParserRuleContext {
	public PIPE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PIPE, 0); }
	public UNION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.UNION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_unionMark; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterUnionMark) {
			listener.enterUnionMark(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitUnionMark) {
			listener.exitUnionMark(this);
		}
	}
}


export class IntersectionMarkContext extends ParserRuleContext {
	public POWER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.POWER, 0); }
	public INTERSECTION_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.INTERSECTION_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersectionMark; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterIntersectionMark) {
			listener.enterIntersectionMark(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitIntersectionMark) {
			listener.exitIntersectionMark(this);
		}
	}
}


export class ElementsContext extends ParserRuleContext {
	public subtypeElements(): SubtypeElementsContext {
		return this.getRuleContext(0, SubtypeElementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_elements; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterElements) {
			listener.enterElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitElements) {
			listener.exitElements(this);
		}
	}
}


export class ObjectSetElementsContext extends ParserRuleContext {
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public definedObject(): DefinedObjectContext | undefined {
		return this.tryGetRuleContext(0, DefinedObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetElements; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectSetElements) {
			listener.enterObjectSetElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectSetElements) {
			listener.exitObjectSetElements(this);
		}
	}
}


export class IntersectionElementsContext extends ParserRuleContext {
	public elements(): ElementsContext {
		return this.getRuleContext(0, ElementsContext);
	}
	public exclusions(): ExclusionsContext | undefined {
		return this.tryGetRuleContext(0, ExclusionsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_intersectionElements; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterIntersectionElements) {
			listener.enterIntersectionElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitIntersectionElements) {
			listener.exitIntersectionElements(this);
		}
	}
}


export class SubtypeElementsContext extends ParserRuleContext {
	public DOUBLE_DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOUBLE_DOT, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public MIN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MIN_LITERAL, 0); }
	public MAX_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MAX_LITERAL, 0); }
	public LESS_THAN(): TerminalNode[];
	public LESS_THAN(i: number): TerminalNode;
	public LESS_THAN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.LESS_THAN);
		} else {
			return this.getToken(ASN_3gppParser.LESS_THAN, i);
		}
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	public PATTERN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PATTERN_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_subtypeElements; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSubtypeElements) {
			listener.enterSubtypeElements(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSubtypeElements) {
			listener.exitSubtypeElements(this);
		}
	}
}


export class VariableTypeValueSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public valueSetOptionalitySpec(): ValueSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ValueSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_variableTypeValueSetFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterVariableTypeValueSetFieldSpec) {
			listener.enterVariableTypeValueSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitVariableTypeValueSetFieldSpec) {
			listener.exitVariableTypeValueSetFieldSpec(this);
		}
	}
}


export class ObjectFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectOptionalitySpec(): ObjectOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectFieldSpec) {
			listener.enterObjectFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectFieldSpec) {
			listener.exitObjectFieldSpec(this);
		}
	}
}


export class ObjectOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectOptionalitySpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectOptionalitySpec) {
			listener.enterObjectOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectOptionalitySpec) {
			listener.exitObjectOptionalitySpec(this);
		}
	}
}


export class ObjectSetFieldSpecContext extends ParserRuleContext {
	public AMPERSAND(): TerminalNode { return this.getToken(ASN_3gppParser.AMPERSAND, 0); }
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public objectSetOptionalitySpec(): ObjectSetOptionalitySpecContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetOptionalitySpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetFieldSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectSetFieldSpec) {
			listener.enterObjectSetFieldSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectSetFieldSpec) {
			listener.exitObjectSetFieldSpec(this);
		}
	}
}


export class ObjectSetOptionalitySpecContext extends ParserRuleContext {
	public OPTIONAL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.OPTIONAL_LITERAL, 0); }
	public DEFAULT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DEFAULT_LITERAL, 0); }
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectSetOptionalitySpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectSetOptionalitySpec) {
			listener.enterObjectSetOptionalitySpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectSetOptionalitySpec) {
			listener.exitObjectSetOptionalitySpec(this);
		}
	}
}


export class TypeAssignmentContext extends ParserRuleContext {
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_typeAssignment; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTypeAssignment) {
			listener.enterTypeAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTypeAssignment) {
			listener.exitTypeAssignment(this);
		}
	}
}


export class ValueAssignmentContext extends ParserRuleContext {
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	public ASSIGN_OP(): TerminalNode { return this.getToken(ASN_3gppParser.ASSIGN_OP, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_valueAssignment; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterValueAssignment) {
			listener.enterValueAssignment(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitValueAssignment) {
			listener.exitValueAssignment(this);
		}
	}
}


export class AsnTypeContext extends ParserRuleContext {
	public builtinType(): BuiltinTypeContext | undefined {
		return this.tryGetRuleContext(0, BuiltinTypeContext);
	}
	public referencedType(): ReferencedTypeContext | undefined {
		return this.tryGetRuleContext(0, ReferencedTypeContext);
	}
	public constraint(): ConstraintContext[];
	public constraint(i: number): ConstraintContext;
	public constraint(i?: number): ConstraintContext | ConstraintContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConstraintContext);
		} else {
			return this.getRuleContext(i, ConstraintContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_asnType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAsnType) {
			listener.enterAsnType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAsnType) {
			listener.exitAsnType(this);
		}
	}
}


export class BuiltinTypeContext extends ParserRuleContext {
	public octetStringType(): OctetStringTypeContext | undefined {
		return this.tryGetRuleContext(0, OctetStringTypeContext);
	}
	public bitStringType(): BitStringTypeContext | undefined {
		return this.tryGetRuleContext(0, BitStringTypeContext);
	}
	public choiceType(): ChoiceTypeContext | undefined {
		return this.tryGetRuleContext(0, ChoiceTypeContext);
	}
	public enumeratedType(): EnumeratedTypeContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedTypeContext);
	}
	public integerType(): IntegerTypeContext | undefined {
		return this.tryGetRuleContext(0, IntegerTypeContext);
	}
	public sequenceType(): SequenceTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceTypeContext);
	}
	public sequenceOfType(): SequenceOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SequenceOfTypeContext);
	}
	public setType(): SetTypeContext | undefined {
		return this.tryGetRuleContext(0, SetTypeContext);
	}
	public setOfType(): SetOfTypeContext | undefined {
		return this.tryGetRuleContext(0, SetOfTypeContext);
	}
	public objectidentifiertype(): ObjectidentifiertypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectidentifiertypeContext);
	}
	public objectClassFieldType(): ObjectClassFieldTypeContext | undefined {
		return this.tryGetRuleContext(0, ObjectClassFieldTypeContext);
	}
	public BOOLEAN_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BOOLEAN_LITERAL, 0); }
	public NULL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NULL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_builtinType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterBuiltinType) {
			listener.enterBuiltinType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitBuiltinType) {
			listener.exitBuiltinType(this);
		}
	}
}


export class ObjectClassFieldTypeContext extends ParserRuleContext {
	public definedObjectClass(): DefinedObjectClassContext {
		return this.getRuleContext(0, DefinedObjectClassContext);
	}
	public DOT(): TerminalNode { return this.getToken(ASN_3gppParser.DOT, 0); }
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectClassFieldType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectClassFieldType) {
			listener.enterObjectClassFieldType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectClassFieldType) {
			listener.exitObjectClassFieldType(this);
		}
	}
}


export class SetTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	public componentTypeLists(): ComponentTypeListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentTypeListsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_setType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSetType) {
			listener.enterSetType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSetType) {
			listener.exitSetType(this);
		}
	}
}


export class SetOfTypeContext extends ParserRuleContext {
	public SET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.SET_LITERAL, 0); }
	public OF_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OF_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	public constraint(): ConstraintContext | undefined {
		return this.tryGetRuleContext(0, ConstraintContext);
	}
	public sizeConstraint(): SizeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SizeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_setOfType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSetOfType) {
			listener.enterSetOfType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSetOfType) {
			listener.exitSetOfType(this);
		}
	}
}


export class ReferencedTypeContext extends ParserRuleContext {
	public definedType(): DefinedTypeContext {
		return this.getRuleContext(0, DefinedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_referencedType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterReferencedType) {
			listener.enterReferencedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitReferencedType) {
			listener.exitReferencedType(this);
		}
	}
}


export class DefinedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterDefinedType) {
			listener.enterDefinedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitDefinedType) {
			listener.exitDefinedType(this);
		}
	}
}


export class ConstraintContext extends ParserRuleContext {
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public constraintSpec(): ConstraintSpecContext {
		return this.getRuleContext(0, ConstraintSpecContext);
	}
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_constraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterConstraint) {
			listener.enterConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitConstraint) {
			listener.exitConstraint(this);
		}
	}
}


export class ConstraintSpecContext extends ParserRuleContext {
	public generalConstraint(): GeneralConstraintContext | undefined {
		return this.tryGetRuleContext(0, GeneralConstraintContext);
	}
	public subtypeConstraint(): SubtypeConstraintContext | undefined {
		return this.tryGetRuleContext(0, SubtypeConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_constraintSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterConstraintSpec) {
			listener.enterConstraintSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitConstraintSpec) {
			listener.exitConstraintSpec(this);
		}
	}
}


export class UserDefinedConstraintContext extends ParserRuleContext {
	public CONSTRAINED_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CONSTRAINED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.BY_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public userDefinedConstraintParameter(): UserDefinedConstraintParameterContext[];
	public userDefinedConstraintParameter(i: number): UserDefinedConstraintParameterContext;
	public userDefinedConstraintParameter(i?: number): UserDefinedConstraintParameterContext | UserDefinedConstraintParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(UserDefinedConstraintParameterContext);
		} else {
			return this.getRuleContext(i, UserDefinedConstraintParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_userDefinedConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterUserDefinedConstraint) {
			listener.enterUserDefinedConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitUserDefinedConstraint) {
			listener.exitUserDefinedConstraint(this);
		}
	}
}


export class GeneralConstraintContext extends ParserRuleContext {
	public userDefinedConstraint(): UserDefinedConstraintContext | undefined {
		return this.tryGetRuleContext(0, UserDefinedConstraintContext);
	}
	public tableConstraint(): TableConstraintContext | undefined {
		return this.tryGetRuleContext(0, TableConstraintContext);
	}
	public contentsConstraint(): ContentsConstraintContext | undefined {
		return this.tryGetRuleContext(0, ContentsConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_generalConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterGeneralConstraint) {
			listener.enterGeneralConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitGeneralConstraint) {
			listener.exitGeneralConstraint(this);
		}
	}
}


export class UserDefinedConstraintParameterContext extends ParserRuleContext {
	public governor(): GovernorContext {
		return this.getRuleContext(0, GovernorContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public objectSet(): ObjectSetContext | undefined {
		return this.tryGetRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_userDefinedConstraintParameter; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterUserDefinedConstraintParameter) {
			listener.enterUserDefinedConstraintParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitUserDefinedConstraintParameter) {
			listener.exitUserDefinedConstraintParameter(this);
		}
	}
}


export class TableConstraintContext extends ParserRuleContext {
	public componentRelationConstraint(): ComponentRelationConstraintContext {
		return this.getRuleContext(0, ComponentRelationConstraintContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_tableConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterTableConstraint) {
			listener.enterTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitTableConstraint) {
			listener.exitTableConstraint(this);
		}
	}
}


export class SimpleTableConstraintContext extends ParserRuleContext {
	public objectSet(): ObjectSetContext {
		return this.getRuleContext(0, ObjectSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_simpleTableConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSimpleTableConstraint) {
			listener.enterSimpleTableConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSimpleTableConstraint) {
			listener.exitSimpleTableConstraint(this);
		}
	}
}


export class ContentsConstraintContext extends ParserRuleContext {
	public CONTAINING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.CONTAINING_LITERAL, 0); }
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public ENCODED_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ENCODED_LITERAL, 0); }
	public BY_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BY_LITERAL, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public WITH_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.WITH_LITERAL, 0); }
	public COMPONENTS_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMPONENTS_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public componentPresenceLists(): ComponentPresenceListsContext | undefined {
		return this.tryGetRuleContext(0, ComponentPresenceListsContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_contentsConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterContentsConstraint) {
			listener.enterContentsConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitContentsConstraint) {
			listener.exitContentsConstraint(this);
		}
	}
}


export class ComponentPresenceListsContext extends ParserRuleContext {
	public componentPresenceList(): ComponentPresenceListContext[];
	public componentPresenceList(i: number): ComponentPresenceListContext;
	public componentPresenceList(i?: number): ComponentPresenceListContext | ComponentPresenceListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceListContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceListContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresenceLists; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentPresenceLists) {
			listener.enterComponentPresenceLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentPresenceLists) {
			listener.exitComponentPresenceLists(this);
		}
	}
}


export class ComponentPresenceListContext extends ParserRuleContext {
	public componentPresence(): ComponentPresenceContext[];
	public componentPresence(i: number): ComponentPresenceContext;
	public componentPresence(i?: number): ComponentPresenceContext | ComponentPresenceContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ComponentPresenceContext);
		} else {
			return this.getRuleContext(i, ComponentPresenceContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresenceList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentPresenceList) {
			listener.enterComponentPresenceList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentPresenceList) {
			listener.exitComponentPresenceList(this);
		}
	}
}


export class ComponentPresenceContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public ABSENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ABSENT_LITERAL, 0); }
	public PRESENT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.PRESENT_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentPresence; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentPresence) {
			listener.enterComponentPresence(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentPresence) {
			listener.exitComponentPresence(this);
		}
	}
}


export class SubtypeConstraintContext extends ParserRuleContext {
	public elementSetSpecs(): ElementSetSpecsContext {
		return this.getRuleContext(0, ElementSetSpecsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_subtypeConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSubtypeConstraint) {
			listener.enterSubtypeConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSubtypeConstraint) {
			listener.exitSubtypeConstraint(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public builtinValue(): BuiltinValueContext {
		return this.getRuleContext(0, BuiltinValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_value; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class BuiltinValueContext extends ParserRuleContext {
	public enumeratedValue(): EnumeratedValueContext | undefined {
		return this.tryGetRuleContext(0, EnumeratedValueContext);
	}
	public integerValue(): IntegerValueContext | undefined {
		return this.tryGetRuleContext(0, IntegerValueContext);
	}
	public choiceValue(): ChoiceValueContext | undefined {
		return this.tryGetRuleContext(0, ChoiceValueContext);
	}
	public objectIdentifierValue(): ObjectIdentifierValueContext | undefined {
		return this.tryGetRuleContext(0, ObjectIdentifierValueContext);
	}
	public booleanValue(): BooleanValueContext | undefined {
		return this.tryGetRuleContext(0, BooleanValueContext);
	}
	public CSTRING(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.CSTRING, 0); }
	public BSTRING(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BSTRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_builtinValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterBuiltinValue) {
			listener.enterBuiltinValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitBuiltinValue) {
			listener.exitBuiltinValue(this);
		}
	}
}


export class ObjectIdentifierValueContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public objIdComponentsList(): ObjIdComponentsListContext {
		return this.getRuleContext(0, ObjIdComponentsListContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectIdentifierValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectIdentifierValue) {
			listener.enterObjectIdentifierValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectIdentifierValue) {
			listener.exitObjectIdentifierValue(this);
		}
	}
}


export class ObjIdComponentsListContext extends ParserRuleContext {
	public objIdComponents(): ObjIdComponentsContext[];
	public objIdComponents(i: number): ObjIdComponentsContext;
	public objIdComponents(i?: number): ObjIdComponentsContext | ObjIdComponentsContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjIdComponentsContext);
		} else {
			return this.getRuleContext(i, ObjIdComponentsContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objIdComponentsList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjIdComponentsList) {
			listener.enterObjIdComponentsList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjIdComponentsList) {
			listener.exitObjIdComponentsList(this);
		}
	}
}


export class ObjIdComponentsContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_PARAN, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objIdComponents; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjIdComponents) {
			listener.enterObjIdComponents(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjIdComponents) {
			listener.exitObjIdComponents(this);
		}
	}
}


export class IntegerValueContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_integerValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterIntegerValue) {
			listener.enterIntegerValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitIntegerValue) {
			listener.exitIntegerValue(this);
		}
	}
}


export class ChoiceValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public COLON(): TerminalNode { return this.getToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_choiceValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterChoiceValue) {
			listener.enterChoiceValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitChoiceValue) {
			listener.exitChoiceValue(this);
		}
	}
}


export class EnumeratedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeratedValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterEnumeratedValue) {
			listener.enterEnumeratedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitEnumeratedValue) {
			listener.exitEnumeratedValue(this);
		}
	}
}


export class SignedNumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode { return this.getToken(ASN_3gppParser.NUMBER, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_signedNumber; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSignedNumber) {
			listener.enterSignedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSignedNumber) {
			listener.exitSignedNumber(this);
		}
	}
}


export class ChoiceTypeContext extends ParserRuleContext {
	public CHOICE_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.CHOICE_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public alternativeTypeLists(): AlternativeTypeListsContext {
		return this.getRuleContext(0, AlternativeTypeListsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_choiceType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterChoiceType) {
			listener.enterChoiceType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitChoiceType) {
			listener.exitChoiceType(this);
		}
	}
}


export class AlternativeTypeListsContext extends ParserRuleContext {
	public rootAlternativeTypeList(): RootAlternativeTypeListContext {
		return this.getRuleContext(0, RootAlternativeTypeListContext);
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAndException(): ExtensionAndExceptionContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAndExceptionContext);
	}
	public extensionAdditionAlternatives(): ExtensionAdditionAlternativesContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesContext);
	}
	public optionalExtensionMarker(): OptionalExtensionMarkerContext | undefined {
		return this.tryGetRuleContext(0, OptionalExtensionMarkerContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_alternativeTypeLists; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAlternativeTypeLists) {
			listener.enterAlternativeTypeLists(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAlternativeTypeLists) {
			listener.exitAlternativeTypeLists(this);
		}
	}
}


export class ExtensionAdditionAlternativesContext extends ParserRuleContext {
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COMMA, 0); }
	public extensionAdditionAlternativesList(): ExtensionAdditionAlternativesListContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternatives; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionAlternatives) {
			listener.enterExtensionAdditionAlternatives(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionAlternatives) {
			listener.exitExtensionAdditionAlternatives(this);
		}
	}
}


export class ExtensionAdditionAlternativesListContext extends ParserRuleContext {
	public extensionAdditionAlternative(): ExtensionAdditionAlternativeContext[];
	public extensionAdditionAlternative(i: number): ExtensionAdditionAlternativeContext;
	public extensionAdditionAlternative(i?: number): ExtensionAdditionAlternativeContext | ExtensionAdditionAlternativeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExtensionAdditionAlternativeContext);
		} else {
			return this.getRuleContext(i, ExtensionAdditionAlternativeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternativesList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionAlternativesList) {
			listener.enterExtensionAdditionAlternativesList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionAlternativesList) {
			listener.exitExtensionAdditionAlternativesList(this);
		}
	}
}


export class ExtensionAdditionAlternativeContext extends ParserRuleContext {
	public extensionAdditionAlternativesGroup(): ExtensionAdditionAlternativesGroupContext | undefined {
		return this.tryGetRuleContext(0, ExtensionAdditionAlternativesGroupContext);
	}
	public namedType(): NamedTypeContext | undefined {
		return this.tryGetRuleContext(0, NamedTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternative; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionAlternative) {
			listener.enterExtensionAdditionAlternative(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionAlternative) {
			listener.exitExtensionAdditionAlternative(this);
		}
	}
}


export class ExtensionAdditionAlternativesGroupContext extends ParserRuleContext {
	public DOUBLE_L_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_L_BRACKET, 0); }
	public versionNumber(): VersionNumberContext {
		return this.getRuleContext(0, VersionNumberContext);
	}
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	public DOUBLE_R_BRACKET(): TerminalNode { return this.getToken(ASN_3gppParser.DOUBLE_R_BRACKET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_extensionAdditionAlternativesGroup; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExtensionAdditionAlternativesGroup) {
			listener.enterExtensionAdditionAlternativesGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExtensionAdditionAlternativesGroup) {
			listener.exitExtensionAdditionAlternativesGroup(this);
		}
	}
}


export class RootAlternativeTypeListContext extends ParserRuleContext {
	public alternativeTypeList(): AlternativeTypeListContext {
		return this.getRuleContext(0, AlternativeTypeListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootAlternativeTypeList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterRootAlternativeTypeList) {
			listener.enterRootAlternativeTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitRootAlternativeTypeList) {
			listener.exitRootAlternativeTypeList(this);
		}
	}
}


export class AlternativeTypeListContext extends ParserRuleContext {
	public namedType(): NamedTypeContext[];
	public namedType(i: number): NamedTypeContext;
	public namedType(i?: number): NamedTypeContext | NamedTypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedTypeContext);
		} else {
			return this.getRuleContext(i, NamedTypeContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_alternativeTypeList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAlternativeTypeList) {
			listener.enterAlternativeTypeList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAlternativeTypeList) {
			listener.exitAlternativeTypeList(this);
		}
	}
}


export class NamedTypeContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public asnType(): AsnTypeContext {
		return this.getRuleContext(0, AsnTypeContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNamedType) {
			listener.enterNamedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNamedType) {
			listener.exitNamedType(this);
		}
	}
}


export class EnumeratedTypeContext extends ParserRuleContext {
	public ENUMERATED_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.ENUMERATED_LITERAL, 0); }
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public enumerations(): EnumerationsContext {
		return this.getRuleContext(0, EnumerationsContext);
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeratedType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterEnumeratedType) {
			listener.enterEnumeratedType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitEnumeratedType) {
			listener.exitEnumeratedType(this);
		}
	}
}


export class EnumerationsContext extends ParserRuleContext {
	public rootEnumeration(): RootEnumerationContext {
		return this.getRuleContext(0, RootEnumerationContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	public ELLIPSIS(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.ELLIPSIS, 0); }
	public exceptionSpec(): ExceptionSpecContext | undefined {
		return this.tryGetRuleContext(0, ExceptionSpecContext);
	}
	public additionalEnumeration(): AdditionalEnumerationContext | undefined {
		return this.tryGetRuleContext(0, AdditionalEnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumerations; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterEnumerations) {
			listener.enterEnumerations(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitEnumerations) {
			listener.exitEnumerations(this);
		}
	}
}


export class RootEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_rootEnumeration; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterRootEnumeration) {
			listener.enterRootEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitRootEnumeration) {
			listener.exitRootEnumeration(this);
		}
	}
}


export class EnumerationContext extends ParserRuleContext {
	public enumerationItem(): EnumerationItemContext[];
	public enumerationItem(i: number): EnumerationItemContext;
	public enumerationItem(i?: number): EnumerationItemContext | EnumerationItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EnumerationItemContext);
		} else {
			return this.getRuleContext(i, EnumerationItemContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumeration; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterEnumeration) {
			listener.enterEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitEnumeration) {
			listener.exitEnumeration(this);
		}
	}
}


export class EnumerationItemContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.IDENTIFIER, 0); }
	public namedNumber(): NamedNumberContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_enumerationItem; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterEnumerationItem) {
			listener.enterEnumerationItem(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitEnumerationItem) {
			listener.exitEnumerationItem(this);
		}
	}
}


export class NamedNumberContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedNumber; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNamedNumber) {
			listener.enterNamedNumber(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNamedNumber) {
			listener.exitNamedNumber(this);
		}
	}
}


export class DefinedValueContext extends ParserRuleContext {
	public parameterizedValue(): ParameterizedValueContext {
		return this.getRuleContext(0, ParameterizedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_definedValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterDefinedValue) {
			listener.enterDefinedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitDefinedValue) {
			listener.exitDefinedValue(this);
		}
	}
}


export class ParameterizedValueContext extends ParserRuleContext {
	public simpleDefinedValue(): SimpleDefinedValueContext {
		return this.getRuleContext(0, SimpleDefinedValueContext);
	}
	public actualParameterList(): ActualParameterListContext | undefined {
		return this.tryGetRuleContext(0, ActualParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_parameterizedValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterParameterizedValue) {
			listener.enterParameterizedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitParameterizedValue) {
			listener.exitParameterizedValue(this);
		}
	}
}


export class SimpleDefinedValueContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_simpleDefinedValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterSimpleDefinedValue) {
			listener.enterSimpleDefinedValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitSimpleDefinedValue) {
			listener.exitSimpleDefinedValue(this);
		}
	}
}


export class ActualParameterListContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.L_BRACE, 0); }
	public actualParameter(): ActualParameterContext[];
	public actualParameter(i: number): ActualParameterContext;
	public actualParameter(i?: number): ActualParameterContext | ActualParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ActualParameterContext);
		} else {
			return this.getRuleContext(i, ActualParameterContext);
		}
	}
	public R_BRACE(): TerminalNode { return this.getToken(ASN_3gppParser.R_BRACE, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_actualParameterList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterActualParameterList) {
			listener.enterActualParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitActualParameterList) {
			listener.exitActualParameterList(this);
		}
	}
}


export class ActualParameterContext extends ParserRuleContext {
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_actualParameter; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterActualParameter) {
			listener.enterActualParameter(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitActualParameter) {
			listener.exitActualParameter(this);
		}
	}
}


export class ExceptionSpecContext extends ParserRuleContext {
	public EXCLAM(): TerminalNode { return this.getToken(ASN_3gppParser.EXCLAM, 0); }
	public exceptionIdentification(): ExceptionIdentificationContext {
		return this.getRuleContext(0, ExceptionIdentificationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exceptionSpec; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExceptionSpec) {
			listener.enterExceptionSpec(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExceptionSpec) {
			listener.exitExceptionSpec(this);
		}
	}
}


export class ExceptionIdentificationContext extends ParserRuleContext {
	public signedNumber(): SignedNumberContext | undefined {
		return this.tryGetRuleContext(0, SignedNumberContext);
	}
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	public asnType(): AsnTypeContext | undefined {
		return this.tryGetRuleContext(0, AsnTypeContext);
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.COLON, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_exceptionIdentification; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterExceptionIdentification) {
			listener.enterExceptionIdentification(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitExceptionIdentification) {
			listener.exitExceptionIdentification(this);
		}
	}
}


export class AdditionalEnumerationContext extends ParserRuleContext {
	public enumeration(): EnumerationContext {
		return this.getRuleContext(0, EnumerationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_additionalEnumeration; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAdditionalEnumeration) {
			listener.enterAdditionalEnumeration(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAdditionalEnumeration) {
			listener.exitAdditionalEnumeration(this);
		}
	}
}


export class IntegerTypeContext extends ParserRuleContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.INTEGER_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public namedNumberList(): NamedNumberListContext | undefined {
		return this.tryGetRuleContext(0, NamedNumberListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_integerType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterIntegerType) {
			listener.enterIntegerType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitIntegerType) {
			listener.exitIntegerType(this);
		}
	}
}


export class NamedNumberListContext extends ParserRuleContext {
	public namedNumber(): NamedNumberContext[];
	public namedNumber(i: number): NamedNumberContext;
	public namedNumber(i?: number): NamedNumberContext | NamedNumberContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedNumberContext);
		} else {
			return this.getRuleContext(i, NamedNumberContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedNumberList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNamedNumberList) {
			listener.enterNamedNumberList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNamedNumberList) {
			listener.exitNamedNumberList(this);
		}
	}
}


export class ObjectidentifiertypeContext extends ParserRuleContext {
	public OBJECT_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OBJECT_LITERAL, 0); }
	public IDENTIFIER_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_objectidentifiertype; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterObjectidentifiertype) {
			listener.enterObjectidentifiertype(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitObjectidentifiertype) {
			listener.exitObjectidentifiertype(this);
		}
	}
}


export class ComponentRelationConstraintContext extends ParserRuleContext {
	public L_BRACE(): TerminalNode[];
	public L_BRACE(i: number): TerminalNode;
	public L_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.L_BRACE);
		} else {
			return this.getToken(ASN_3gppParser.L_BRACE, i);
		}
	}
	public R_BRACE(): TerminalNode[];
	public R_BRACE(i: number): TerminalNode;
	public R_BRACE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.R_BRACE);
		} else {
			return this.getToken(ASN_3gppParser.R_BRACE, i);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public atNotation(): AtNotationContext[];
	public atNotation(i: number): AtNotationContext;
	public atNotation(i?: number): AtNotationContext | AtNotationContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AtNotationContext);
		} else {
			return this.getRuleContext(i, AtNotationContext);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentRelationConstraint; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentRelationConstraint) {
			listener.enterComponentRelationConstraint(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentRelationConstraint) {
			listener.exitComponentRelationConstraint(this);
		}
	}
}


export class AtNotationContext extends ParserRuleContext {
	public componentIdList(): ComponentIdListContext {
		return this.getRuleContext(0, ComponentIdListContext);
	}
	public A_ROND(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.A_ROND, 0); }
	public A_ROND_DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.A_ROND_DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_atNotation; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterAtNotation) {
			listener.enterAtNotation(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitAtNotation) {
			listener.exitAtNotation(this);
		}
	}
}


export class LevelContext extends ParserRuleContext {
	public DOT(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.DOT, 0); }
	public level(): LevelContext | undefined {
		return this.tryGetRuleContext(0, LevelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_level; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterLevel) {
			listener.enterLevel(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitLevel) {
			listener.exitLevel(this);
		}
	}
}


export class ComponentIdListContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.IDENTIFIER);
		} else {
			return this.getToken(ASN_3gppParser.IDENTIFIER, i);
		}
	}
	public DOT(): TerminalNode[];
	public DOT(i: number): TerminalNode;
	public DOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.DOT);
		} else {
			return this.getToken(ASN_3gppParser.DOT, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_componentIdList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterComponentIdList) {
			listener.enterComponentIdList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitComponentIdList) {
			listener.exitComponentIdList(this);
		}
	}
}


export class OctetStringTypeContext extends ParserRuleContext {
	public OCTET_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.OCTET_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode { return this.getToken(ASN_3gppParser.STRING_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_octetStringType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterOctetStringType) {
			listener.enterOctetStringType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitOctetStringType) {
			listener.exitOctetStringType(this);
		}
	}
}


export class BitStringTypeContext extends ParserRuleContext {
	public BIT_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.BIT_LITERAL, 0); }
	public STRING_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.STRING_LITERAL, 0); }
	public L_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.L_BRACE, 0); }
	public namedBitList(): NamedBitListContext | undefined {
		return this.tryGetRuleContext(0, NamedBitListContext);
	}
	public R_BRACE(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.R_BRACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_bitStringType; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterBitStringType) {
			listener.enterBitStringType(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitBitStringType) {
			listener.exitBitStringType(this);
		}
	}
}


export class NamedBitListContext extends ParserRuleContext {
	public namedBit(): NamedBitContext[];
	public namedBit(i: number): NamedBitContext;
	public namedBit(i?: number): NamedBitContext | NamedBitContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NamedBitContext);
		} else {
			return this.getRuleContext(i, NamedBitContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASN_3gppParser.COMMA);
		} else {
			return this.getToken(ASN_3gppParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedBitList; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNamedBitList) {
			listener.enterNamedBitList(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNamedBitList) {
			listener.exitNamedBitList(this);
		}
	}
}


export class NamedBitContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASN_3gppParser.IDENTIFIER, 0); }
	public L_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.L_PARAN, 0); }
	public R_PARAN(): TerminalNode { return this.getToken(ASN_3gppParser.R_PARAN, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.NUMBER, 0); }
	public definedValue(): DefinedValueContext | undefined {
		return this.tryGetRuleContext(0, DefinedValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_namedBit; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterNamedBit) {
			listener.enterNamedBit(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitNamedBit) {
			listener.exitNamedBit(this);
		}
	}
}


export class BooleanValueContext extends ParserRuleContext {
	public TRUE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TRUE_LITERAL, 0); }
	public FALSE_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.FALSE_LITERAL, 0); }
	public TRUE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.TRUE_SMALL_LITERAL, 0); }
	public FALSE_SMALL_LITERAL(): TerminalNode | undefined { return this.tryGetToken(ASN_3gppParser.FALSE_SMALL_LITERAL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASN_3gppParser.RULE_booleanValue; }
	// @Override
	public enterRule(listener: ASN_3gppListener): void {
		if (listener.enterBooleanValue) {
			listener.enterBooleanValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASN_3gppListener): void {
		if (listener.exitBooleanValue) {
			listener.exitBooleanValue(this);
		}
	}
}


