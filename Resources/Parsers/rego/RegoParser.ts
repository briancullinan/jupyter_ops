// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/rego/RegoParser.g4 by ANTLR 4.7.3-SNAPSHOT


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

import { RegoParserListener } from "./RegoParserListener";

export class RegoParser extends Parser {
	public static readonly Comment = 1;
	public static readonly String = 2;
	public static readonly Bool = 3;
	public static readonly Null = 4;
	public static readonly As = 5;
	public static readonly Default = 6;
	public static readonly Else = 7;
	public static readonly Import = 8;
	public static readonly Package = 9;
	public static readonly Not = 10;
	public static readonly With = 11;
	public static readonly Set = 12;
	public static readonly LSBrace = 13;
	public static readonly LCBrace = 14;
	public static readonly LParan = 15;
	public static readonly RSBrace = 16;
	public static readonly RCBrace = 17;
	public static readonly RParan = 18;
	public static readonly Mid = 19;
	public static readonly FactorOperator = 20;
	public static readonly ArithOperator = 21;
	public static readonly RelationOperator = 22;
	public static readonly EqOper = 23;
	public static readonly Comma = 24;
	public static readonly Semicolon = 25;
	public static readonly Colon = 26;
	public static readonly Ampersand = 27;
	public static readonly Dot = 28;
	public static readonly WhiteSpace = 29;
	public static readonly LineEnd = 30;
	public static readonly WindowsLineEnd = 31;
	public static readonly UnsignedNumber = 32;
	public static readonly Name = 33;
	public static readonly RULE_root = 0;
	public static readonly RULE_stmt = 1;
	public static readonly RULE_regoPackage = 2;
	public static readonly RULE_importDirective = 3;
	public static readonly RULE_regoRules = 4;
	public static readonly RULE_ruleHead = 5;
	public static readonly RULE_ruleBody = 6;
	public static readonly RULE_ruleExt = 7;
	public static readonly RULE_regoElse = 8;
	public static readonly RULE_regoBody = 9;
	public static readonly RULE_nonEmptyBraceEnclosedBody = 10;
	public static readonly RULE_query = 11;
	public static readonly RULE_literal = 12;
	public static readonly RULE_literalExpr = 13;
	public static readonly RULE_withKeyword = 14;
	public static readonly RULE_functionCall = 15;
	public static readonly RULE_exprTermPair = 16;
	public static readonly RULE_termPair = 17;
	public static readonly RULE_exprTermPairList = 18;
	public static readonly RULE_exprTerm = 19;
	public static readonly RULE_exprTermList = 20;
	public static readonly RULE_relationExpr = 21;
	public static readonly RULE_bitwiseOrExpr = 22;
	public static readonly RULE_bitwiseAndExpr = 23;
	public static readonly RULE_arithExpr = 24;
	public static readonly RULE_factorExpr = 25;
	public static readonly RULE_term = 26;
	public static readonly RULE_arrayComprehension = 27;
	public static readonly RULE_setComprehension = 28;
	public static readonly RULE_objectComprehension = 29;
	public static readonly RULE_object = 30;
	public static readonly RULE_objectItem = 31;
	public static readonly RULE_array = 32;
	public static readonly RULE_set = 33;
	public static readonly RULE_emptySet = 34;
	public static readonly RULE_nonEmptySet = 35;
	public static readonly RULE_ref = 36;
	public static readonly RULE_refOperand = 37;
	public static readonly RULE_refOperandDot = 38;
	public static readonly RULE_refOperandCanonical = 39;
	public static readonly RULE_scalar = 40;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"root", "stmt", "regoPackage", "importDirective", "regoRules", "ruleHead", 
		"ruleBody", "ruleExt", "regoElse", "regoBody", "nonEmptyBraceEnclosedBody", 
		"query", "literal", "literalExpr", "withKeyword", "functionCall", "exprTermPair", 
		"termPair", "exprTermPairList", "exprTerm", "exprTermList", "relationExpr", 
		"bitwiseOrExpr", "bitwiseAndExpr", "arithExpr", "factorExpr", "term", 
		"arrayComprehension", "setComprehension", "objectComprehension", "object", 
		"objectItem", "array", "set", "emptySet", "nonEmptySet", "ref", "refOperand", 
		"refOperandDot", "refOperandCanonical", "scalar",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "'null'", "'as'", "'default'", 
		"'else'", "'import'", "'package'", "'not'", "'with'", "'set('", "'['", 
		"'{'", "'('", "']'", "'}'", "')'", "'|'", undefined, undefined, undefined, 
		undefined, "','", "';'", "':'", "'&'", "'.'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "Comment", "String", "Bool", "Null", "As", "Default", "Else", 
		"Import", "Package", "Not", "With", "Set", "LSBrace", "LCBrace", "LParan", 
		"RSBrace", "RCBrace", "RParan", "Mid", "FactorOperator", "ArithOperator", 
		"RelationOperator", "EqOper", "Comma", "Semicolon", "Colon", "Ampersand", 
		"Dot", "WhiteSpace", "LineEnd", "WindowsLineEnd", "UnsignedNumber", "Name",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RegoParser._LITERAL_NAMES, RegoParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RegoParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RegoParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RegoParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RegoParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RegoParser._ATN, this);
	}
	// @RuleVersion(0)
	public root(): RootContext {
		let _localctx: RootContext = new RootContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RegoParser.RULE_root);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 85;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Default - 2)) | (1 << (RegoParser.Import - 2)) | (1 << (RegoParser.Package - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
				{
				{
				this.state = 82;
				this.stmt();
				}
				}
				this.state = 87;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 88;
			this.match(RegoParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stmt(): StmtContext {
		let _localctx: StmtContext = new StmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RegoParser.RULE_stmt);
		try {
			this.state = 94;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 90;
				this.regoPackage();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 91;
				this.importDirective();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 92;
				this.regoRules();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 93;
				this.regoBody();
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
	public regoPackage(): RegoPackageContext {
		let _localctx: RegoPackageContext = new RegoPackageContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, RegoParser.RULE_regoPackage);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 96;
			this.match(RegoParser.Package);
			this.state = 97;
			this.ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public importDirective(): ImportDirectiveContext {
		let _localctx: ImportDirectiveContext = new ImportDirectiveContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RegoParser.RULE_importDirective);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(RegoParser.Import);
			this.state = 100;
			_localctx._import_target = this.ref();
			this.state = 103;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RegoParser.As) {
				{
				this.state = 101;
				this.match(RegoParser.As);
				this.state = 102;
				_localctx._import_target_rename_as = this.ref();
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
	public regoRules(): RegoRulesContext {
		let _localctx: RegoRulesContext = new RegoRulesContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RegoParser.RULE_regoRules);
		try {
			let _alt: number;
			this.state = 116;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.Default:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 105;
				this.match(RegoParser.Default);
				this.state = 106;
				this.match(RegoParser.Name);
				this.state = 107;
				this.match(RegoParser.EqOper);
				this.state = 108;
				this.term();
				}
				break;
			case RegoParser.Name:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 109;
				this.ruleHead();
				this.state = 113;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 110;
						this.ruleBody();
						}
						}
					}
					this.state = 115;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
	public ruleHead(): RuleHeadContext {
		let _localctx: RuleHeadContext = new RuleHeadContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RegoParser.RULE_ruleHead);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 118;
			this.match(RegoParser.Name);
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 119;
				this.match(RegoParser.LParan);
				this.state = 121;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
					{
					this.state = 120;
					this.exprTermList();
					}
				}

				this.state = 123;
				this.match(RegoParser.RParan);
				}
				break;
			}
			this.state = 130;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				{
				this.state = 126;
				this.match(RegoParser.LSBrace);
				this.state = 127;
				this.exprTerm();
				this.state = 128;
				this.match(RegoParser.RSBrace);
				}
				break;
			}
			this.state = 134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RegoParser.EqOper) {
				{
				this.state = 132;
				this.match(RegoParser.EqOper);
				this.state = 133;
				this.exprTerm();
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
	public ruleBody(): RuleBodyContext {
		let _localctx: RuleBodyContext = new RuleBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RegoParser.RULE_ruleBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RegoParser.Else) {
				{
				this.state = 136;
				this.match(RegoParser.Else);
				this.state = 139;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RegoParser.EqOper) {
					{
					this.state = 137;
					this.match(RegoParser.EqOper);
					this.state = 138;
					this.exprTerm();
					}
				}

				}
			}

			this.state = 143;
			this.nonEmptyBraceEnclosedBody();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ruleExt(): RuleExtContext {
		let _localctx: RuleExtContext = new RuleExtContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RegoParser.RULE_ruleExt);
		try {
			this.state = 147;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.Else:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 145;
				this.regoElse();
				}
				break;
			case RegoParser.LCBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 146;
				this.nonEmptyBraceEnclosedBody();
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
	public regoElse(): RegoElseContext {
		let _localctx: RegoElseContext = new RegoElseContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RegoParser.RULE_regoElse);
		try {
			this.state = 156;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 149;
				this.match(RegoParser.Else);
				this.state = 150;
				this.match(RegoParser.EqOper);
				this.state = 151;
				this.term();
				this.state = 152;
				this.nonEmptyBraceEnclosedBody();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 154;
				this.match(RegoParser.Else);
				this.state = 155;
				this.nonEmptyBraceEnclosedBody();
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
	public regoBody(): RegoBodyContext {
		let _localctx: RegoBodyContext = new RegoBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RegoParser.RULE_regoBody);
		try {
			this.state = 160;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 158;
				this.query();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 159;
				this.nonEmptyBraceEnclosedBody();
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
	public nonEmptyBraceEnclosedBody(): NonEmptyBraceEnclosedBodyContext {
		let _localctx: NonEmptyBraceEnclosedBodyContext = new NonEmptyBraceEnclosedBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RegoParser.RULE_nonEmptyBraceEnclosedBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 162;
			this.match(RegoParser.LCBrace);
			this.state = 163;
			this.query();
			this.state = 164;
			this.match(RegoParser.RCBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public query(): QueryContext {
		let _localctx: QueryContext = new QueryContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RegoParser.RULE_query);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 166;
			this.literal();
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === RegoParser.Semicolon) {
						{
						this.state = 167;
						this.match(RegoParser.Semicolon);
						}
					}

					this.state = 170;
					this.literal();
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
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
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RegoParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 177;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 176;
				this.match(RegoParser.Not);
				}
				break;
			}
			this.state = 179;
			this.literalExpr();
			this.state = 183;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.With) {
				{
				{
				this.state = 180;
				this.withKeyword();
				}
				}
				this.state = 185;
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
	public literalExpr(): LiteralExprContext {
		let _localctx: LiteralExprContext = new LiteralExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RegoParser.RULE_literalExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 186;
			this.exprTerm();
			this.state = 191;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.EqOper) {
				{
				{
				this.state = 187;
				this.match(RegoParser.EqOper);
				this.state = 188;
				this.exprTerm();
				}
				}
				this.state = 193;
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
	public withKeyword(): WithKeywordContext {
		let _localctx: WithKeywordContext = new WithKeywordContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RegoParser.RULE_withKeyword);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 194;
			this.match(RegoParser.With);
			this.state = 195;
			this.exprTerm();
			this.state = 196;
			this.match(RegoParser.As);
			this.state = 197;
			this.exprTerm();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RegoParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.ref();
			this.state = 200;
			this.match(RegoParser.LParan);
			this.state = 202;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
				{
				this.state = 201;
				this.exprTermList();
				}
			}

			this.state = 204;
			this.match(RegoParser.RParan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprTermPair(): ExprTermPairContext {
		let _localctx: ExprTermPairContext = new ExprTermPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RegoParser.RULE_exprTermPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.exprTerm();
			this.state = 207;
			this.match(RegoParser.Colon);
			this.state = 208;
			this.exprTerm();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public termPair(): TermPairContext {
		let _localctx: TermPairContext = new TermPairContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RegoParser.RULE_termPair);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.term();
			this.state = 211;
			this.match(RegoParser.Colon);
			this.state = 212;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprTermPairList(): ExprTermPairListContext {
		let _localctx: ExprTermPairListContext = new ExprTermPairListContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RegoParser.RULE_exprTermPairList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 214;
			this.exprTermPair();
			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.Comma) {
				{
				{
				this.state = 215;
				this.match(RegoParser.Comma);
				this.state = 216;
				this.exprTermPair();
				}
				}
				this.state = 221;
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
	public exprTerm(): ExprTermContext {
		let _localctx: ExprTermContext = new ExprTermContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RegoParser.RULE_exprTerm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 222;
			this.relationExpr();
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.RelationOperator) {
				{
				{
				this.state = 223;
				this.match(RegoParser.RelationOperator);
				this.state = 224;
				this.relationExpr();
				}
				}
				this.state = 229;
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
	public exprTermList(): ExprTermListContext {
		let _localctx: ExprTermListContext = new ExprTermListContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RegoParser.RULE_exprTermList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 230;
			this.exprTerm();
			this.state = 235;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.Comma) {
				{
				{
				this.state = 231;
				this.match(RegoParser.Comma);
				this.state = 232;
				this.exprTerm();
				}
				}
				this.state = 237;
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
	public relationExpr(): RelationExprContext {
		let _localctx: RelationExprContext = new RelationExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RegoParser.RULE_relationExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 238;
			this.bitwiseOrExpr();
			this.state = 243;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.Mid) {
				{
				{
				this.state = 239;
				this.match(RegoParser.Mid);
				this.state = 240;
				this.bitwiseOrExpr();
				}
				}
				this.state = 245;
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
	public bitwiseOrExpr(): BitwiseOrExprContext {
		let _localctx: BitwiseOrExprContext = new BitwiseOrExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RegoParser.RULE_bitwiseOrExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 246;
			this.bitwiseAndExpr();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.Ampersand) {
				{
				{
				this.state = 247;
				this.match(RegoParser.Ampersand);
				this.state = 248;
				this.bitwiseAndExpr();
				}
				}
				this.state = 253;
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
	public bitwiseAndExpr(): BitwiseAndExprContext {
		let _localctx: BitwiseAndExprContext = new BitwiseAndExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RegoParser.RULE_bitwiseAndExpr);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 254;
			this.arithExpr();
			this.state = 259;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 255;
					this.match(RegoParser.ArithOperator);
					this.state = 256;
					this.arithExpr();
					}
					}
				}
				this.state = 261;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
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
	public arithExpr(): ArithExprContext {
		let _localctx: ArithExprContext = new ArithExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RegoParser.RULE_arithExpr);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 262;
			this.factorExpr();
			this.state = 267;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RegoParser.FactorOperator) {
				{
				{
				this.state = 263;
				this.match(RegoParser.FactorOperator);
				this.state = 264;
				this.factorExpr();
				}
				}
				this.state = 269;
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
	public factorExpr(): FactorExprContext {
		let _localctx: FactorExprContext = new FactorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RegoParser.RULE_factorExpr);
		try {
			this.state = 275;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.LParan:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 270;
				this.match(RegoParser.LParan);
				this.state = 271;
				this.exprTerm();
				this.state = 272;
				this.match(RegoParser.RParan);
				}
				break;
			case RegoParser.String:
			case RegoParser.Bool:
			case RegoParser.Null:
			case RegoParser.Not:
			case RegoParser.Set:
			case RegoParser.LSBrace:
			case RegoParser.LCBrace:
			case RegoParser.ArithOperator:
			case RegoParser.UnsignedNumber:
			case RegoParser.Name:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.term();
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
	public term(): TermContext {
		let _localctx: TermContext = new TermContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RegoParser.RULE_term);
		let _la: number;
		try {
			this.state = 292;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.arrayComprehension();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.objectComprehension();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
				this.setComprehension();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
				this.object();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 281;
				this.array();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 282;
				this.set();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RegoParser.ArithOperator) {
					{
					this.state = 283;
					this.match(RegoParser.ArithOperator);
					}
				}

				this.state = 286;
				this.scalar();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 287;
				this.functionCall();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 289;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RegoParser.Not) {
					{
					this.state = 288;
					this.match(RegoParser.Not);
					}
				}

				this.state = 291;
				this.ref();
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
	public arrayComprehension(): ArrayComprehensionContext {
		let _localctx: ArrayComprehensionContext = new ArrayComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RegoParser.RULE_arrayComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(RegoParser.LSBrace);
			this.state = 295;
			this.term();
			this.state = 296;
			this.match(RegoParser.Mid);
			this.state = 297;
			this.query();
			this.state = 298;
			this.match(RegoParser.RSBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setComprehension(): SetComprehensionContext {
		let _localctx: SetComprehensionContext = new SetComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RegoParser.RULE_setComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 300;
			this.match(RegoParser.LCBrace);
			this.state = 301;
			this.term();
			this.state = 302;
			this.match(RegoParser.Mid);
			this.state = 303;
			this.query();
			this.state = 304;
			this.match(RegoParser.RCBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectComprehension(): ObjectComprehensionContext {
		let _localctx: ObjectComprehensionContext = new ObjectComprehensionContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RegoParser.RULE_objectComprehension);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 306;
			this.match(RegoParser.LCBrace);
			this.state = 307;
			this.termPair();
			this.state = 308;
			this.match(RegoParser.Mid);
			this.state = 309;
			this.query();
			this.state = 310;
			this.match(RegoParser.RCBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(_localctx, 60, RegoParser.RULE_object);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 312;
			this.match(RegoParser.LCBrace);
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
				{
				this.state = 313;
				this.objectItem();
				this.state = 318;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 314;
						this.match(RegoParser.Comma);
						this.state = 315;
						this.objectItem();
						}
						}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
				}
				this.state = 322;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RegoParser.Comma) {
					{
					this.state = 321;
					this.match(RegoParser.Comma);
					}
				}

				}
			}

			this.state = 326;
			this.match(RegoParser.RCBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public objectItem(): ObjectItemContext {
		let _localctx: ObjectItemContext = new ObjectItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RegoParser.RULE_objectItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 330;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.String:
			case RegoParser.Bool:
			case RegoParser.Null:
			case RegoParser.UnsignedNumber:
				{
				this.state = 328;
				this.scalar();
				}
				break;
			case RegoParser.Name:
				{
				this.state = 329;
				this.ref();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 332;
			this.match(RegoParser.Colon);
			this.state = 333;
			this.term();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public array(): ArrayContext {
		let _localctx: ArrayContext = new ArrayContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RegoParser.RULE_array);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 335;
			this.match(RegoParser.LSBrace);
			this.state = 337;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.Not - 2)) | (1 << (RegoParser.Set - 2)) | (1 << (RegoParser.LSBrace - 2)) | (1 << (RegoParser.LCBrace - 2)) | (1 << (RegoParser.LParan - 2)) | (1 << (RegoParser.ArithOperator - 2)) | (1 << (RegoParser.UnsignedNumber - 2)) | (1 << (RegoParser.Name - 2)))) !== 0)) {
				{
				this.state = 336;
				this.exprTermList();
				}
			}

			this.state = 339;
			this.match(RegoParser.RSBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RegoParser.RULE_set);
		try {
			this.state = 343;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.Set:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 341;
				this.emptySet();
				}
				break;
			case RegoParser.LCBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 342;
				this.nonEmptySet();
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
	public emptySet(): EmptySetContext {
		let _localctx: EmptySetContext = new EmptySetContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RegoParser.RULE_emptySet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 345;
			this.match(RegoParser.Set);
			this.state = 346;
			this.match(RegoParser.RParan);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public nonEmptySet(): NonEmptySetContext {
		let _localctx: NonEmptySetContext = new NonEmptySetContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RegoParser.RULE_nonEmptySet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 348;
			this.match(RegoParser.LCBrace);
			this.state = 349;
			this.exprTermList();
			this.state = 350;
			this.match(RegoParser.RCBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ref(): RefContext {
		let _localctx: RefContext = new RefContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RegoParser.RULE_ref);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(RegoParser.Name);
			this.state = 356;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 353;
					this.refOperand();
					}
					}
				}
				this.state = 358;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
	public refOperand(): RefOperandContext {
		let _localctx: RefOperandContext = new RefOperandContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, RegoParser.RULE_refOperand);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RegoParser.Dot:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 359;
				this.refOperandDot();
				}
				break;
			case RegoParser.LSBrace:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 360;
				this.refOperandCanonical();
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
	public refOperandDot(): RefOperandDotContext {
		let _localctx: RefOperandDotContext = new RefOperandDotContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RegoParser.RULE_refOperandDot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 363;
			this.match(RegoParser.Dot);
			this.state = 364;
			this.match(RegoParser.Name);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public refOperandCanonical(): RefOperandCanonicalContext {
		let _localctx: RefOperandCanonicalContext = new RefOperandCanonicalContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RegoParser.RULE_refOperandCanonical);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 366;
			this.match(RegoParser.LSBrace);
			this.state = 367;
			this.exprTerm();
			this.state = 368;
			this.match(RegoParser.RSBrace);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public scalar(): ScalarContext {
		let _localctx: ScalarContext = new ScalarContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RegoParser.RULE_scalar);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 370;
			_la = this._input.LA(1);
			if (!(((((_la - 2)) & ~0x1F) === 0 && ((1 << (_la - 2)) & ((1 << (RegoParser.String - 2)) | (1 << (RegoParser.Bool - 2)) | (1 << (RegoParser.Null - 2)) | (1 << (RegoParser.UnsignedNumber - 2)))) !== 0))) {
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

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03#\u0177\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x03\x02" +
		"\x07\x02V\n\x02\f\x02\x0E\x02Y\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x05\x03a\n\x03\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05j\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x07\x06r\n\x06\f\x06\x0E\x06u\v\x06\x05\x06w\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x05\x07|\n\x07\x03\x07\x05\x07\x7F\n\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\x85\n\x07\x03\x07\x03\x07\x05\x07\x89\n\x07\x03\b" +
		"\x03\b\x03\b\x05\b\x8E\n\b\x05\b\x90\n\b\x03\b\x03\b\x03\t\x03\t\x05\t" +
		"\x96\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\x9F\n\n\x03\v" +
		"\x03\v\x05\v\xA3\n\v\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r\xAB\n\r" +
		"\x03\r\x07\r\xAE\n\r\f\r\x0E\r\xB1\v\r\x03\x0E\x05\x0E\xB4\n\x0E\x03\x0E" +
		"\x03\x0E\x07\x0E\xB8\n\x0E\f\x0E\x0E\x0E\xBB\v\x0E\x03\x0F\x03\x0F\x03" +
		"\x0F\x07\x0F\xC0\n\x0F\f\x0F\x0E\x0F\xC3\v\x0F\x03\x10\x03\x10\x03\x10" +
		"\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x05\x11\xCD\n\x11\x03\x11\x03" +
		"\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x14\x03\x14\x03\x14\x07\x14\xDC\n\x14\f\x14\x0E\x14\xDF\v\x14\x03\x15" +
		"\x03\x15\x03\x15\x07\x15\xE4\n\x15\f\x15\x0E\x15\xE7\v\x15\x03\x16\x03" +
		"\x16\x03\x16\x07\x16\xEC\n\x16\f\x16\x0E\x16\xEF\v\x16\x03\x17\x03\x17" +
		"\x03\x17\x07\x17\xF4\n\x17\f\x17\x0E\x17\xF7\v\x17\x03\x18\x03\x18\x03" +
		"\x18\x07\x18\xFC\n\x18\f\x18\x0E\x18\xFF\v\x18\x03\x19\x03\x19\x03\x19" +
		"\x07\x19\u0104\n\x19\f\x19\x0E\x19\u0107\v\x19\x03\x1A\x03\x1A\x03\x1A" +
		"\x07\x1A\u010C\n\x1A\f\x1A\x0E\x1A\u010F\v\x1A\x03\x1B\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1B\x05\x1B\u0116\n\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1C\x05\x1C\u011F\n\x1C\x03\x1C\x03\x1C\x03\x1C\x05\x1C" +
		"\u0124\n\x1C\x03\x1C\x05\x1C\u0127\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D" +
		"\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03 \x07 \u013F" +
		"\n \f \x0E \u0142\v \x03 \x05 \u0145\n \x05 \u0147\n \x03 \x03 \x03!\x03" +
		"!\x05!\u014D\n!\x03!\x03!\x03!\x03\"\x03\"\x05\"\u0154\n\"\x03\"\x03\"" +
		"\x03#\x03#\x05#\u015A\n#\x03$\x03$\x03$\x03%\x03%\x03%\x03%\x03&\x03&" +
		"\x07&\u0165\n&\f&\x0E&\u0168\v&\x03\'\x03\'\x05\'\u016C\n\'\x03(\x03(" +
		"\x03(\x03)\x03)\x03)\x03)\x03*\x03*\x03*\x02\x02\x02+\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x02" +
		"0\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02" +
		"L\x02N\x02P\x02R\x02\x02\x03\x04\x02\x04\x06\"\"\x02\u017D\x02W\x03\x02" +
		"\x02\x02\x04`\x03\x02\x02\x02\x06b\x03\x02\x02\x02\be\x03\x02\x02\x02" +
		"\nv\x03\x02\x02\x02\fx\x03\x02\x02\x02\x0E\x8F\x03\x02\x02\x02\x10\x95" +
		"\x03\x02\x02\x02\x12\x9E\x03\x02\x02\x02\x14\xA2\x03\x02\x02\x02\x16\xA4" +
		"\x03\x02\x02\x02\x18\xA8\x03\x02\x02\x02\x1A\xB3\x03\x02\x02\x02\x1C\xBC" +
		"\x03\x02\x02\x02\x1E\xC4\x03\x02\x02\x02 \xC9\x03\x02\x02\x02\"\xD0\x03" +
		"\x02\x02\x02$\xD4\x03\x02\x02\x02&\xD8\x03\x02\x02\x02(\xE0\x03\x02\x02" +
		"\x02*\xE8\x03\x02\x02\x02,\xF0\x03\x02\x02\x02.\xF8\x03\x02\x02\x020\u0100" +
		"\x03\x02\x02\x022\u0108\x03\x02\x02\x024\u0115\x03\x02\x02\x026\u0126" +
		"\x03\x02\x02\x028\u0128\x03\x02\x02\x02:\u012E\x03\x02\x02\x02<\u0134" +
		"\x03\x02\x02\x02>\u013A\x03\x02\x02\x02@\u014C\x03\x02\x02\x02B\u0151" +
		"\x03\x02\x02\x02D\u0159\x03\x02\x02\x02F\u015B\x03\x02\x02\x02H\u015E" +
		"\x03\x02\x02\x02J\u0162\x03\x02\x02\x02L\u016B\x03\x02\x02\x02N\u016D" +
		"\x03\x02\x02\x02P\u0170\x03\x02\x02\x02R\u0174\x03\x02\x02\x02TV\x05\x04" +
		"\x03\x02UT\x03\x02\x02\x02VY\x03\x02\x02\x02WU\x03\x02\x02\x02WX\x03\x02" +
		"\x02\x02XZ\x03\x02\x02\x02YW\x03\x02\x02\x02Z[\x07\x02\x02\x03[\x03\x03" +
		"\x02\x02\x02\\a\x05\x06\x04\x02]a\x05\b\x05\x02^a\x05\n\x06\x02_a\x05" +
		"\x14\v\x02`\\\x03\x02\x02\x02`]\x03\x02\x02\x02`^\x03\x02\x02\x02`_\x03" +
		"\x02\x02\x02a\x05\x03\x02\x02\x02bc\x07\v\x02\x02cd\x05J&\x02d\x07\x03" +
		"\x02\x02\x02ef\x07\n\x02\x02fi\x05J&\x02gh\x07\x07\x02\x02hj\x05J&\x02" +
		"ig\x03\x02\x02\x02ij\x03\x02\x02\x02j\t\x03\x02\x02\x02kl\x07\b\x02\x02" +
		"lm\x07#\x02\x02mn\x07\x19\x02\x02nw\x056\x1C\x02os\x05\f\x07\x02pr\x05" +
		"\x0E\b\x02qp\x03\x02\x02\x02ru\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03" +
		"\x02\x02\x02tw\x03\x02\x02\x02us\x03\x02\x02\x02vk\x03\x02\x02\x02vo\x03" +
		"\x02\x02\x02w\v\x03\x02\x02\x02x~\x07#\x02\x02y{\x07\x11\x02\x02z|\x05" +
		"*\x16\x02{z\x03\x02\x02\x02{|\x03\x02\x02\x02|}\x03\x02\x02\x02}\x7F\x07" +
		"\x14\x02\x02~y\x03\x02\x02\x02~\x7F\x03\x02\x02\x02\x7F\x84\x03\x02\x02" +
		"\x02\x80\x81\x07\x0F\x02\x02\x81\x82\x05(\x15\x02\x82\x83\x07\x12\x02" +
		"\x02\x83\x85\x03\x02\x02\x02\x84\x80\x03\x02\x02\x02\x84\x85\x03\x02\x02" +
		"\x02\x85\x88\x03\x02\x02\x02\x86\x87\x07\x19\x02\x02\x87\x89\x05(\x15" +
		"\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\r\x03\x02\x02" +
		"\x02\x8A\x8D\x07\t\x02\x02\x8B\x8C\x07\x19\x02\x02\x8C\x8E\x05(\x15\x02" +
		"\x8D\x8B\x03\x02\x02\x02\x8D\x8E\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02" +
		"\x8F\x8A\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02" +
		"\x91\x92\x05\x16\f\x02\x92\x0F\x03\x02\x02\x02\x93\x96\x05\x12\n\x02\x94" +
		"\x96\x05\x16\f\x02\x95\x93\x03\x02\x02\x02\x95\x94\x03\x02\x02\x02\x96" +
		"\x11\x03\x02\x02\x02\x97\x98\x07\t\x02\x02\x98\x99\x07\x19\x02\x02\x99" +
		"\x9A\x056\x1C\x02\x9A\x9B\x05\x16\f\x02\x9B\x9F\x03\x02\x02\x02\x9C\x9D" +
		"\x07\t\x02\x02\x9D\x9F\x05\x16\f\x02\x9E\x97\x03\x02\x02\x02\x9E\x9C\x03" +
		"\x02\x02\x02\x9F\x13\x03\x02\x02\x02\xA0\xA3\x05\x18\r\x02\xA1\xA3\x05" +
		"\x16\f\x02\xA2\xA0\x03\x02\x02\x02\xA2\xA1\x03\x02\x02\x02\xA3\x15\x03" +
		"\x02\x02\x02\xA4\xA5\x07\x10\x02\x02\xA5\xA6\x05\x18\r\x02\xA6\xA7\x07" +
		"\x13\x02\x02\xA7\x17\x03\x02\x02\x02\xA8\xAF\x05\x1A\x0E\x02\xA9\xAB\x07" +
		"\x1B\x02\x02\xAA\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03" +
		"\x02\x02\x02\xAC\xAE\x05\x1A\x0E\x02\xAD\xAA\x03\x02\x02\x02\xAE\xB1\x03" +
		"\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x19\x03" +
		"\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB4\x07\f\x02\x02\xB3\xB2\x03" +
		"\x02\x02\x02\xB3\xB4\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB9\x05" +
		"\x1C\x0F\x02\xB6\xB8\x05\x1E\x10\x02\xB7\xB6\x03\x02\x02\x02\xB8\xBB\x03" +
		"\x02\x02\x02\xB9\xB7\x03\x02\x02\x02\xB9\xBA\x03\x02\x02\x02\xBA\x1B\x03" +
		"\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBC\xC1\x05(\x15\x02\xBD\xBE\x07" +
		"\x19\x02\x02\xBE\xC0\x05(\x15\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC3\x03" +
		"\x02\x02\x02\xC1\xBF\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\x1D\x03" +
		"\x02\x02\x02\xC3\xC1\x03\x02\x02\x02\xC4\xC5\x07\r\x02\x02\xC5\xC6\x05" +
		"(\x15\x02\xC6\xC7\x07\x07\x02\x02\xC7\xC8\x05(\x15\x02\xC8\x1F\x03\x02" +
		"\x02\x02\xC9\xCA\x05J&\x02\xCA\xCC\x07\x11\x02\x02\xCB\xCD\x05*\x16\x02" +
		"\xCC\xCB\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xCE\x03\x02\x02\x02" +
		"\xCE\xCF\x07\x14\x02\x02\xCF!\x03\x02\x02\x02\xD0\xD1\x05(\x15\x02\xD1" +
		"\xD2\x07\x1C\x02\x02\xD2\xD3\x05(\x15\x02\xD3#\x03\x02\x02\x02\xD4\xD5" +
		"\x056\x1C\x02\xD5\xD6\x07\x1C\x02\x02\xD6\xD7\x056\x1C\x02\xD7%\x03\x02" +
		"\x02\x02\xD8\xDD\x05\"\x12\x02\xD9\xDA\x07\x1A\x02\x02\xDA\xDC\x05\"\x12" +
		"\x02\xDB\xD9\x03\x02\x02\x02\xDC\xDF\x03\x02\x02\x02\xDD\xDB\x03\x02\x02" +
		"\x02\xDD\xDE\x03\x02\x02\x02\xDE\'\x03\x02\x02\x02\xDF\xDD\x03\x02\x02" +
		"\x02\xE0\xE5\x05,\x17\x02\xE1\xE2\x07\x18\x02\x02\xE2\xE4\x05,\x17\x02" +
		"\xE3\xE1\x03\x02\x02\x02\xE4\xE7\x03\x02\x02\x02\xE5\xE3\x03\x02\x02\x02" +
		"\xE5\xE6\x03\x02\x02\x02\xE6)\x03\x02\x02\x02\xE7\xE5\x03\x02\x02\x02" +
		"\xE8\xED\x05(\x15\x02\xE9\xEA\x07\x1A\x02\x02\xEA\xEC\x05(\x15\x02\xEB" +
		"\xE9\x03\x02\x02\x02\xEC\xEF\x03\x02\x02\x02\xED\xEB\x03\x02\x02\x02\xED" +
		"\xEE\x03\x02\x02\x02\xEE+\x03\x02\x02\x02\xEF\xED\x03\x02\x02\x02\xF0" +
		"\xF5\x05.\x18\x02\xF1\xF2\x07\x15\x02\x02\xF2\xF4\x05.\x18\x02\xF3\xF1" +
		"\x03\x02\x02\x02\xF4\xF7\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6" +
		"\x03\x02\x02\x02\xF6-\x03\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF8\xFD" +
		"\x050\x19\x02\xF9\xFA\x07\x1D\x02\x02\xFA\xFC\x050\x19\x02\xFB\xF9\x03" +
		"\x02\x02\x02\xFC\xFF\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFD\xFE\x03" +
		"\x02\x02\x02\xFE/\x03\x02\x02\x02\xFF\xFD\x03\x02\x02\x02\u0100\u0105" +
		"\x052\x1A\x02\u0101\u0102\x07\x17\x02\x02\u0102\u0104\x052\x1A\x02\u0103" +
		"\u0101\x03\x02\x02\x02\u0104\u0107\x03\x02\x02\x02\u0105\u0103\x03\x02" +
		"\x02\x02\u0105\u0106\x03\x02\x02\x02\u01061\x03\x02\x02\x02\u0107\u0105" +
		"\x03\x02\x02\x02\u0108\u010D\x054\x1B\x02\u0109\u010A\x07\x16\x02\x02" +
		"\u010A\u010C\x054\x1B\x02\u010B\u0109\x03\x02\x02\x02\u010C\u010F\x03" +
		"\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010E\x03\x02\x02\x02\u010E" +
		"3\x03\x02\x02\x02\u010F\u010D\x03\x02\x02\x02\u0110\u0111\x07\x11\x02" +
		"\x02\u0111\u0112\x05(\x15\x02\u0112\u0113\x07\x14\x02\x02\u0113\u0116" +
		"\x03\x02\x02\x02\u0114\u0116\x056\x1C\x02\u0115\u0110\x03\x02\x02\x02" +
		"\u0115\u0114\x03\x02\x02\x02\u01165\x03\x02\x02\x02\u0117\u0127\x058\x1D" +
		"\x02\u0118\u0127\x05<\x1F\x02\u0119\u0127\x05:\x1E\x02\u011A\u0127\x05" +
		"> \x02\u011B\u0127\x05B\"\x02\u011C\u0127\x05D#\x02\u011D\u011F\x07\x17" +
		"\x02\x02\u011E\u011D\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F" +
		"\u0120\x03\x02\x02\x02\u0120\u0127\x05R*\x02\u0121\u0127\x05 \x11\x02" +
		"\u0122\u0124\x07\f\x02\x02\u0123\u0122\x03\x02\x02\x02\u0123\u0124\x03" +
		"\x02\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0127\x05J&\x02\u0126\u0117" +
		"\x03\x02\x02\x02\u0126\u0118\x03\x02\x02\x02\u0126\u0119\x03\x02\x02\x02" +
		"\u0126\u011A\x03\x02\x02\x02\u0126\u011B\x03\x02\x02\x02\u0126\u011C\x03" +
		"\x02\x02\x02\u0126\u011E\x03\x02\x02\x02\u0126\u0121\x03\x02\x02\x02\u0126" +
		"\u0123\x03\x02\x02\x02\u01277\x03\x02\x02\x02\u0128\u0129\x07\x0F\x02" +
		"\x02\u0129\u012A\x056\x1C\x02\u012A\u012B\x07\x15\x02\x02\u012B\u012C" +
		"\x05\x18\r\x02\u012C\u012D\x07\x12\x02\x02\u012D9\x03\x02\x02\x02\u012E" +
		"\u012F\x07\x10\x02\x02\u012F\u0130\x056\x1C\x02\u0130\u0131\x07\x15\x02" +
		"\x02\u0131\u0132\x05\x18\r\x02\u0132\u0133\x07\x13\x02\x02\u0133;\x03" +
		"\x02\x02\x02\u0134\u0135\x07\x10\x02\x02\u0135\u0136\x05$\x13\x02\u0136" +
		"\u0137\x07\x15\x02\x02\u0137\u0138\x05\x18\r\x02\u0138\u0139\x07\x13\x02" +
		"\x02\u0139=\x03\x02\x02\x02\u013A\u0146\x07\x10\x02\x02\u013B\u0140\x05" +
		"@!\x02\u013C\u013D\x07\x1A\x02\x02\u013D\u013F\x05@!\x02\u013E\u013C\x03" +
		"\x02\x02\x02\u013F\u0142\x03\x02\x02\x02\u0140\u013E\x03\x02\x02\x02\u0140" +
		"\u0141\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0143\u0145\x07\x1A\x02\x02\u0144\u0143\x03\x02\x02\x02\u0144" +
		"\u0145\x03\x02\x02\x02\u0145\u0147\x03\x02\x02\x02\u0146\u013B\x03\x02" +
		"\x02\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148" +
		"\u0149\x07\x13\x02\x02\u0149?\x03\x02\x02\x02\u014A\u014D\x05R*\x02\u014B" +
		"\u014D\x05J&\x02\u014C\u014A\x03\x02\x02\x02\u014C\u014B\x03\x02\x02\x02" +
		"\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x07\x1C\x02\x02\u014F\u0150\x05" +
		"6\x1C\x02\u0150A\x03\x02\x02\x02\u0151\u0153\x07\x0F\x02\x02\u0152\u0154" +
		"\x05*\x16\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02" +
		"\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x07\x12\x02\x02\u0156C\x03\x02" +
		"\x02\x02\u0157\u015A\x05F$\x02\u0158\u015A\x05H%\x02\u0159\u0157\x03\x02" +
		"\x02\x02\u0159\u0158\x03\x02\x02\x02\u015AE\x03\x02\x02\x02\u015B\u015C" +
		"\x07\x0E\x02\x02\u015C\u015D\x07\x14\x02\x02\u015DG\x03\x02\x02\x02\u015E" +
		"\u015F\x07\x10\x02\x02\u015F\u0160\x05*\x16\x02\u0160\u0161\x07\x13\x02" +
		"\x02\u0161I\x03\x02\x02\x02\u0162\u0166\x07#\x02\x02\u0163\u0165\x05L" +
		"\'\x02\u0164\u0163\x03\x02\x02\x02\u0165\u0168\x03\x02\x02\x02\u0166\u0164" +
		"\x03\x02\x02\x02\u0166\u0167\x03\x02\x02\x02\u0167K\x03\x02\x02\x02\u0168" +
		"\u0166\x03\x02\x02\x02\u0169\u016C\x05N(\x02\u016A\u016C\x05P)\x02\u016B" +
		"\u0169\x03\x02\x02\x02\u016B\u016A\x03\x02\x02\x02\u016CM\x03\x02\x02" +
		"\x02\u016D\u016E\x07\x1E\x02\x02\u016E\u016F\x07#\x02\x02\u016FO\x03\x02" +
		"\x02\x02\u0170\u0171\x07\x0F\x02\x02\u0171\u0172\x05(\x15\x02\u0172\u0173" +
		"\x07\x12\x02\x02\u0173Q\x03\x02\x02\x02\u0174\u0175\t\x02\x02\x02\u0175" +
		"S\x03\x02\x02\x02)W`isv{~\x84\x88\x8D\x8F\x95\x9E\xA2\xAA\xAF\xB3\xB9" +
		"\xC1\xCC\xDD\xE5\xED\xF5\xFD\u0105\u010D\u0115\u011E\u0123\u0126\u0140" +
		"\u0144\u0146\u014C\u0153\u0159\u0166\u016B";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RegoParser.__ATN) {
			RegoParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RegoParser._serializedATN));
		}

		return RegoParser.__ATN;
	}

}

export class RootContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RegoParser.EOF, 0); }
	public stmt(): StmtContext[];
	public stmt(i: number): StmtContext;
	public stmt(i?: number): StmtContext | StmtContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StmtContext);
		} else {
			return this.getRuleContext(i, StmtContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_root; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRoot) {
			listener.enterRoot(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRoot) {
			listener.exitRoot(this);
		}
	}
}


export class StmtContext extends ParserRuleContext {
	public regoPackage(): RegoPackageContext | undefined {
		return this.tryGetRuleContext(0, RegoPackageContext);
	}
	public importDirective(): ImportDirectiveContext | undefined {
		return this.tryGetRuleContext(0, ImportDirectiveContext);
	}
	public regoRules(): RegoRulesContext | undefined {
		return this.tryGetRuleContext(0, RegoRulesContext);
	}
	public regoBody(): RegoBodyContext | undefined {
		return this.tryGetRuleContext(0, RegoBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_stmt; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterStmt) {
			listener.enterStmt(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitStmt) {
			listener.exitStmt(this);
		}
	}
}


export class RegoPackageContext extends ParserRuleContext {
	public Package(): TerminalNode { return this.getToken(RegoParser.Package, 0); }
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_regoPackage; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRegoPackage) {
			listener.enterRegoPackage(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRegoPackage) {
			listener.exitRegoPackage(this);
		}
	}
}


export class ImportDirectiveContext extends ParserRuleContext {
	public _import_target: RefContext;
	public _import_target_rename_as: RefContext;
	public Import(): TerminalNode { return this.getToken(RegoParser.Import, 0); }
	public ref(): RefContext[];
	public ref(i: number): RefContext;
	public ref(i?: number): RefContext | RefContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RefContext);
		} else {
			return this.getRuleContext(i, RefContext);
		}
	}
	public As(): TerminalNode | undefined { return this.tryGetToken(RegoParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_importDirective; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterImportDirective) {
			listener.enterImportDirective(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitImportDirective) {
			listener.exitImportDirective(this);
		}
	}
}


export class RegoRulesContext extends ParserRuleContext {
	public Default(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Default, 0); }
	public Name(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Name, 0); }
	public EqOper(): TerminalNode | undefined { return this.tryGetToken(RegoParser.EqOper, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public ruleHead(): RuleHeadContext | undefined {
		return this.tryGetRuleContext(0, RuleHeadContext);
	}
	public ruleBody(): RuleBodyContext[];
	public ruleBody(i: number): RuleBodyContext;
	public ruleBody(i?: number): RuleBodyContext | RuleBodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RuleBodyContext);
		} else {
			return this.getRuleContext(i, RuleBodyContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_regoRules; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRegoRules) {
			listener.enterRegoRules(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRegoRules) {
			listener.exitRegoRules(this);
		}
	}
}


export class RuleHeadContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(RegoParser.Name, 0); }
	public LParan(): TerminalNode | undefined { return this.tryGetToken(RegoParser.LParan, 0); }
	public RParan(): TerminalNode | undefined { return this.tryGetToken(RegoParser.RParan, 0); }
	public LSBrace(): TerminalNode | undefined { return this.tryGetToken(RegoParser.LSBrace, 0); }
	public exprTerm(): ExprTermContext[];
	public exprTerm(i: number): ExprTermContext;
	public exprTerm(i?: number): ExprTermContext | ExprTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermContext);
		} else {
			return this.getRuleContext(i, ExprTermContext);
		}
	}
	public RSBrace(): TerminalNode | undefined { return this.tryGetToken(RegoParser.RSBrace, 0); }
	public EqOper(): TerminalNode | undefined { return this.tryGetToken(RegoParser.EqOper, 0); }
	public exprTermList(): ExprTermListContext | undefined {
		return this.tryGetRuleContext(0, ExprTermListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_ruleHead; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRuleHead) {
			listener.enterRuleHead(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRuleHead) {
			listener.exitRuleHead(this);
		}
	}
}


export class RuleBodyContext extends ParserRuleContext {
	public nonEmptyBraceEnclosedBody(): NonEmptyBraceEnclosedBodyContext {
		return this.getRuleContext(0, NonEmptyBraceEnclosedBodyContext);
	}
	public Else(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Else, 0); }
	public EqOper(): TerminalNode | undefined { return this.tryGetToken(RegoParser.EqOper, 0); }
	public exprTerm(): ExprTermContext | undefined {
		return this.tryGetRuleContext(0, ExprTermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_ruleBody; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRuleBody) {
			listener.enterRuleBody(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRuleBody) {
			listener.exitRuleBody(this);
		}
	}
}


export class RuleExtContext extends ParserRuleContext {
	public regoElse(): RegoElseContext | undefined {
		return this.tryGetRuleContext(0, RegoElseContext);
	}
	public nonEmptyBraceEnclosedBody(): NonEmptyBraceEnclosedBodyContext | undefined {
		return this.tryGetRuleContext(0, NonEmptyBraceEnclosedBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_ruleExt; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRuleExt) {
			listener.enterRuleExt(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRuleExt) {
			listener.exitRuleExt(this);
		}
	}
}


export class RegoElseContext extends ParserRuleContext {
	public Else(): TerminalNode { return this.getToken(RegoParser.Else, 0); }
	public EqOper(): TerminalNode | undefined { return this.tryGetToken(RegoParser.EqOper, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	public nonEmptyBraceEnclosedBody(): NonEmptyBraceEnclosedBodyContext {
		return this.getRuleContext(0, NonEmptyBraceEnclosedBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_regoElse; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRegoElse) {
			listener.enterRegoElse(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRegoElse) {
			listener.exitRegoElse(this);
		}
	}
}


export class RegoBodyContext extends ParserRuleContext {
	public query(): QueryContext | undefined {
		return this.tryGetRuleContext(0, QueryContext);
	}
	public nonEmptyBraceEnclosedBody(): NonEmptyBraceEnclosedBodyContext | undefined {
		return this.tryGetRuleContext(0, NonEmptyBraceEnclosedBodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_regoBody; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRegoBody) {
			listener.enterRegoBody(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRegoBody) {
			listener.exitRegoBody(this);
		}
	}
}


export class NonEmptyBraceEnclosedBodyContext extends ParserRuleContext {
	public LCBrace(): TerminalNode { return this.getToken(RegoParser.LCBrace, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RCBrace(): TerminalNode { return this.getToken(RegoParser.RCBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_nonEmptyBraceEnclosedBody; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterNonEmptyBraceEnclosedBody) {
			listener.enterNonEmptyBraceEnclosedBody(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitNonEmptyBraceEnclosedBody) {
			listener.exitNonEmptyBraceEnclosedBody(this);
		}
	}
}


export class QueryContext extends ParserRuleContext {
	public literal(): LiteralContext[];
	public literal(i: number): LiteralContext;
	public literal(i?: number): LiteralContext | LiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LiteralContext);
		} else {
			return this.getRuleContext(i, LiteralContext);
		}
	}
	public Semicolon(): TerminalNode[];
	public Semicolon(i: number): TerminalNode;
	public Semicolon(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Semicolon);
		} else {
			return this.getToken(RegoParser.Semicolon, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_query; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterQuery) {
			listener.enterQuery(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitQuery) {
			listener.exitQuery(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public literalExpr(): LiteralExprContext {
		return this.getRuleContext(0, LiteralExprContext);
	}
	public Not(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Not, 0); }
	public withKeyword(): WithKeywordContext[];
	public withKeyword(i: number): WithKeywordContext;
	public withKeyword(i?: number): WithKeywordContext | WithKeywordContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WithKeywordContext);
		} else {
			return this.getRuleContext(i, WithKeywordContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_literal; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
}


export class LiteralExprContext extends ParserRuleContext {
	public exprTerm(): ExprTermContext[];
	public exprTerm(i: number): ExprTermContext;
	public exprTerm(i?: number): ExprTermContext | ExprTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermContext);
		} else {
			return this.getRuleContext(i, ExprTermContext);
		}
	}
	public EqOper(): TerminalNode[];
	public EqOper(i: number): TerminalNode;
	public EqOper(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.EqOper);
		} else {
			return this.getToken(RegoParser.EqOper, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_literalExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
}


export class WithKeywordContext extends ParserRuleContext {
	public With(): TerminalNode { return this.getToken(RegoParser.With, 0); }
	public exprTerm(): ExprTermContext[];
	public exprTerm(i: number): ExprTermContext;
	public exprTerm(i?: number): ExprTermContext | ExprTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermContext);
		} else {
			return this.getRuleContext(i, ExprTermContext);
		}
	}
	public As(): TerminalNode { return this.getToken(RegoParser.As, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_withKeyword; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterWithKeyword) {
			listener.enterWithKeyword(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitWithKeyword) {
			listener.exitWithKeyword(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public ref(): RefContext {
		return this.getRuleContext(0, RefContext);
	}
	public LParan(): TerminalNode { return this.getToken(RegoParser.LParan, 0); }
	public RParan(): TerminalNode { return this.getToken(RegoParser.RParan, 0); }
	public exprTermList(): ExprTermListContext | undefined {
		return this.tryGetRuleContext(0, ExprTermListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}


export class ExprTermPairContext extends ParserRuleContext {
	public exprTerm(): ExprTermContext[];
	public exprTerm(i: number): ExprTermContext;
	public exprTerm(i?: number): ExprTermContext | ExprTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermContext);
		} else {
			return this.getRuleContext(i, ExprTermContext);
		}
	}
	public Colon(): TerminalNode { return this.getToken(RegoParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_exprTermPair; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterExprTermPair) {
			listener.enterExprTermPair(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitExprTermPair) {
			listener.exitExprTermPair(this);
		}
	}
}


export class TermPairContext extends ParserRuleContext {
	public term(): TermContext[];
	public term(i: number): TermContext;
	public term(i?: number): TermContext | TermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TermContext);
		} else {
			return this.getRuleContext(i, TermContext);
		}
	}
	public Colon(): TerminalNode { return this.getToken(RegoParser.Colon, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_termPair; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterTermPair) {
			listener.enterTermPair(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitTermPair) {
			listener.exitTermPair(this);
		}
	}
}


export class ExprTermPairListContext extends ParserRuleContext {
	public exprTermPair(): ExprTermPairContext[];
	public exprTermPair(i: number): ExprTermPairContext;
	public exprTermPair(i?: number): ExprTermPairContext | ExprTermPairContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermPairContext);
		} else {
			return this.getRuleContext(i, ExprTermPairContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Comma);
		} else {
			return this.getToken(RegoParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_exprTermPairList; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterExprTermPairList) {
			listener.enterExprTermPairList(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitExprTermPairList) {
			listener.exitExprTermPairList(this);
		}
	}
}


export class ExprTermContext extends ParserRuleContext {
	public relationExpr(): RelationExprContext[];
	public relationExpr(i: number): RelationExprContext;
	public relationExpr(i?: number): RelationExprContext | RelationExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RelationExprContext);
		} else {
			return this.getRuleContext(i, RelationExprContext);
		}
	}
	public RelationOperator(): TerminalNode[];
	public RelationOperator(i: number): TerminalNode;
	public RelationOperator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.RelationOperator);
		} else {
			return this.getToken(RegoParser.RelationOperator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_exprTerm; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterExprTerm) {
			listener.enterExprTerm(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitExprTerm) {
			listener.exitExprTerm(this);
		}
	}
}


export class ExprTermListContext extends ParserRuleContext {
	public exprTerm(): ExprTermContext[];
	public exprTerm(i: number): ExprTermContext;
	public exprTerm(i?: number): ExprTermContext | ExprTermContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprTermContext);
		} else {
			return this.getRuleContext(i, ExprTermContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Comma);
		} else {
			return this.getToken(RegoParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_exprTermList; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterExprTermList) {
			listener.enterExprTermList(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitExprTermList) {
			listener.exitExprTermList(this);
		}
	}
}


export class RelationExprContext extends ParserRuleContext {
	public bitwiseOrExpr(): BitwiseOrExprContext[];
	public bitwiseOrExpr(i: number): BitwiseOrExprContext;
	public bitwiseOrExpr(i?: number): BitwiseOrExprContext | BitwiseOrExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseOrExprContext);
		} else {
			return this.getRuleContext(i, BitwiseOrExprContext);
		}
	}
	public Mid(): TerminalNode[];
	public Mid(i: number): TerminalNode;
	public Mid(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Mid);
		} else {
			return this.getToken(RegoParser.Mid, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_relationExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRelationExpr) {
			listener.enterRelationExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRelationExpr) {
			listener.exitRelationExpr(this);
		}
	}
}


export class BitwiseOrExprContext extends ParserRuleContext {
	public bitwiseAndExpr(): BitwiseAndExprContext[];
	public bitwiseAndExpr(i: number): BitwiseAndExprContext;
	public bitwiseAndExpr(i?: number): BitwiseAndExprContext | BitwiseAndExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BitwiseAndExprContext);
		} else {
			return this.getRuleContext(i, BitwiseAndExprContext);
		}
	}
	public Ampersand(): TerminalNode[];
	public Ampersand(i: number): TerminalNode;
	public Ampersand(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Ampersand);
		} else {
			return this.getToken(RegoParser.Ampersand, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_bitwiseOrExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterBitwiseOrExpr) {
			listener.enterBitwiseOrExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitBitwiseOrExpr) {
			listener.exitBitwiseOrExpr(this);
		}
	}
}


export class BitwiseAndExprContext extends ParserRuleContext {
	public arithExpr(): ArithExprContext[];
	public arithExpr(i: number): ArithExprContext;
	public arithExpr(i?: number): ArithExprContext | ArithExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArithExprContext);
		} else {
			return this.getRuleContext(i, ArithExprContext);
		}
	}
	public ArithOperator(): TerminalNode[];
	public ArithOperator(i: number): TerminalNode;
	public ArithOperator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.ArithOperator);
		} else {
			return this.getToken(RegoParser.ArithOperator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_bitwiseAndExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterBitwiseAndExpr) {
			listener.enterBitwiseAndExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitBitwiseAndExpr) {
			listener.exitBitwiseAndExpr(this);
		}
	}
}


export class ArithExprContext extends ParserRuleContext {
	public factorExpr(): FactorExprContext[];
	public factorExpr(i: number): FactorExprContext;
	public factorExpr(i?: number): FactorExprContext | FactorExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FactorExprContext);
		} else {
			return this.getRuleContext(i, FactorExprContext);
		}
	}
	public FactorOperator(): TerminalNode[];
	public FactorOperator(i: number): TerminalNode;
	public FactorOperator(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.FactorOperator);
		} else {
			return this.getToken(RegoParser.FactorOperator, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_arithExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterArithExpr) {
			listener.enterArithExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitArithExpr) {
			listener.exitArithExpr(this);
		}
	}
}


export class FactorExprContext extends ParserRuleContext {
	public LParan(): TerminalNode | undefined { return this.tryGetToken(RegoParser.LParan, 0); }
	public exprTerm(): ExprTermContext | undefined {
		return this.tryGetRuleContext(0, ExprTermContext);
	}
	public RParan(): TerminalNode | undefined { return this.tryGetToken(RegoParser.RParan, 0); }
	public term(): TermContext | undefined {
		return this.tryGetRuleContext(0, TermContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_factorExpr; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterFactorExpr) {
			listener.enterFactorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitFactorExpr) {
			listener.exitFactorExpr(this);
		}
	}
}


export class TermContext extends ParserRuleContext {
	public arrayComprehension(): ArrayComprehensionContext | undefined {
		return this.tryGetRuleContext(0, ArrayComprehensionContext);
	}
	public objectComprehension(): ObjectComprehensionContext | undefined {
		return this.tryGetRuleContext(0, ObjectComprehensionContext);
	}
	public setComprehension(): SetComprehensionContext | undefined {
		return this.tryGetRuleContext(0, SetComprehensionContext);
	}
	public object(): ObjectContext | undefined {
		return this.tryGetRuleContext(0, ObjectContext);
	}
	public array(): ArrayContext | undefined {
		return this.tryGetRuleContext(0, ArrayContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public ArithOperator(): TerminalNode | undefined { return this.tryGetToken(RegoParser.ArithOperator, 0); }
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public ref(): RefContext | undefined {
		return this.tryGetRuleContext(0, RefContext);
	}
	public Not(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Not, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_term; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterTerm) {
			listener.enterTerm(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitTerm) {
			listener.exitTerm(this);
		}
	}
}


export class ArrayComprehensionContext extends ParserRuleContext {
	public LSBrace(): TerminalNode { return this.getToken(RegoParser.LSBrace, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public Mid(): TerminalNode { return this.getToken(RegoParser.Mid, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RSBrace(): TerminalNode { return this.getToken(RegoParser.RSBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_arrayComprehension; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterArrayComprehension) {
			listener.enterArrayComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitArrayComprehension) {
			listener.exitArrayComprehension(this);
		}
	}
}


export class SetComprehensionContext extends ParserRuleContext {
	public LCBrace(): TerminalNode { return this.getToken(RegoParser.LCBrace, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public Mid(): TerminalNode { return this.getToken(RegoParser.Mid, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RCBrace(): TerminalNode { return this.getToken(RegoParser.RCBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_setComprehension; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterSetComprehension) {
			listener.enterSetComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitSetComprehension) {
			listener.exitSetComprehension(this);
		}
	}
}


export class ObjectComprehensionContext extends ParserRuleContext {
	public LCBrace(): TerminalNode { return this.getToken(RegoParser.LCBrace, 0); }
	public termPair(): TermPairContext {
		return this.getRuleContext(0, TermPairContext);
	}
	public Mid(): TerminalNode { return this.getToken(RegoParser.Mid, 0); }
	public query(): QueryContext {
		return this.getRuleContext(0, QueryContext);
	}
	public RCBrace(): TerminalNode { return this.getToken(RegoParser.RCBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_objectComprehension; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterObjectComprehension) {
			listener.enterObjectComprehension(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitObjectComprehension) {
			listener.exitObjectComprehension(this);
		}
	}
}


export class ObjectContext extends ParserRuleContext {
	public LCBrace(): TerminalNode { return this.getToken(RegoParser.LCBrace, 0); }
	public RCBrace(): TerminalNode { return this.getToken(RegoParser.RCBrace, 0); }
	public objectItem(): ObjectItemContext[];
	public objectItem(i: number): ObjectItemContext;
	public objectItem(i?: number): ObjectItemContext | ObjectItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ObjectItemContext);
		} else {
			return this.getRuleContext(i, ObjectItemContext);
		}
	}
	public Comma(): TerminalNode[];
	public Comma(i: number): TerminalNode;
	public Comma(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(RegoParser.Comma);
		} else {
			return this.getToken(RegoParser.Comma, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_object; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterObject) {
			listener.enterObject(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitObject) {
			listener.exitObject(this);
		}
	}
}


export class ObjectItemContext extends ParserRuleContext {
	public Colon(): TerminalNode { return this.getToken(RegoParser.Colon, 0); }
	public term(): TermContext {
		return this.getRuleContext(0, TermContext);
	}
	public scalar(): ScalarContext | undefined {
		return this.tryGetRuleContext(0, ScalarContext);
	}
	public ref(): RefContext | undefined {
		return this.tryGetRuleContext(0, RefContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_objectItem; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterObjectItem) {
			listener.enterObjectItem(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitObjectItem) {
			listener.exitObjectItem(this);
		}
	}
}


export class ArrayContext extends ParserRuleContext {
	public LSBrace(): TerminalNode { return this.getToken(RegoParser.LSBrace, 0); }
	public RSBrace(): TerminalNode { return this.getToken(RegoParser.RSBrace, 0); }
	public exprTermList(): ExprTermListContext | undefined {
		return this.tryGetRuleContext(0, ExprTermListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_array; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterArray) {
			listener.enterArray(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitArray) {
			listener.exitArray(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public emptySet(): EmptySetContext | undefined {
		return this.tryGetRuleContext(0, EmptySetContext);
	}
	public nonEmptySet(): NonEmptySetContext | undefined {
		return this.tryGetRuleContext(0, NonEmptySetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_set; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class EmptySetContext extends ParserRuleContext {
	public Set(): TerminalNode { return this.getToken(RegoParser.Set, 0); }
	public RParan(): TerminalNode { return this.getToken(RegoParser.RParan, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_emptySet; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterEmptySet) {
			listener.enterEmptySet(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitEmptySet) {
			listener.exitEmptySet(this);
		}
	}
}


export class NonEmptySetContext extends ParserRuleContext {
	public LCBrace(): TerminalNode { return this.getToken(RegoParser.LCBrace, 0); }
	public exprTermList(): ExprTermListContext {
		return this.getRuleContext(0, ExprTermListContext);
	}
	public RCBrace(): TerminalNode { return this.getToken(RegoParser.RCBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_nonEmptySet; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterNonEmptySet) {
			listener.enterNonEmptySet(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitNonEmptySet) {
			listener.exitNonEmptySet(this);
		}
	}
}


export class RefContext extends ParserRuleContext {
	public Name(): TerminalNode { return this.getToken(RegoParser.Name, 0); }
	public refOperand(): RefOperandContext[];
	public refOperand(i: number): RefOperandContext;
	public refOperand(i?: number): RefOperandContext | RefOperandContext[] {
		if (i === undefined) {
			return this.getRuleContexts(RefOperandContext);
		} else {
			return this.getRuleContext(i, RefOperandContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_ref; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRef) {
			listener.enterRef(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRef) {
			listener.exitRef(this);
		}
	}
}


export class RefOperandContext extends ParserRuleContext {
	public refOperandDot(): RefOperandDotContext | undefined {
		return this.tryGetRuleContext(0, RefOperandDotContext);
	}
	public refOperandCanonical(): RefOperandCanonicalContext | undefined {
		return this.tryGetRuleContext(0, RefOperandCanonicalContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_refOperand; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRefOperand) {
			listener.enterRefOperand(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRefOperand) {
			listener.exitRefOperand(this);
		}
	}
}


export class RefOperandDotContext extends ParserRuleContext {
	public Dot(): TerminalNode { return this.getToken(RegoParser.Dot, 0); }
	public Name(): TerminalNode { return this.getToken(RegoParser.Name, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_refOperandDot; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRefOperandDot) {
			listener.enterRefOperandDot(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRefOperandDot) {
			listener.exitRefOperandDot(this);
		}
	}
}


export class RefOperandCanonicalContext extends ParserRuleContext {
	public LSBrace(): TerminalNode { return this.getToken(RegoParser.LSBrace, 0); }
	public exprTerm(): ExprTermContext {
		return this.getRuleContext(0, ExprTermContext);
	}
	public RSBrace(): TerminalNode { return this.getToken(RegoParser.RSBrace, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_refOperandCanonical; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterRefOperandCanonical) {
			listener.enterRefOperandCanonical(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitRefOperandCanonical) {
			listener.exitRefOperandCanonical(this);
		}
	}
}


export class ScalarContext extends ParserRuleContext {
	public UnsignedNumber(): TerminalNode | undefined { return this.tryGetToken(RegoParser.UnsignedNumber, 0); }
	public String(): TerminalNode | undefined { return this.tryGetToken(RegoParser.String, 0); }
	public Bool(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Bool, 0); }
	public Null(): TerminalNode | undefined { return this.tryGetToken(RegoParser.Null, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RegoParser.RULE_scalar; }
	// @Override
	public enterRule(listener: RegoParserListener): void {
		if (listener.enterScalar) {
			listener.enterScalar(this);
		}
	}
	// @Override
	public exitRule(listener: RegoParserListener): void {
		if (listener.exitScalar) {
			listener.exitScalar(this);
		}
	}
}


