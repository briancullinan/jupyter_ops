// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/vb6/VisualBasic6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { InlineIfThenElseContext } from "./VisualBasic6Parser";
import { BlockIfThenElseContext } from "./VisualBasic6Parser";
import { VsLiteralContext } from "./VisualBasic6Parser";
import { VsStructContext } from "./VisualBasic6Parser";
import { VsNewContext } from "./VisualBasic6Parser";
import { VsTypeOfContext } from "./VisualBasic6Parser";
import { VsAddressOfContext } from "./VisualBasic6Parser";
import { VsAssignContext } from "./VisualBasic6Parser";
import { VsPowContext } from "./VisualBasic6Parser";
import { VsNegationContext } from "./VisualBasic6Parser";
import { VsPlusContext } from "./VisualBasic6Parser";
import { VsDivContext } from "./VisualBasic6Parser";
import { VsMultContext } from "./VisualBasic6Parser";
import { VsModContext } from "./VisualBasic6Parser";
import { VsAddContext } from "./VisualBasic6Parser";
import { VsMinusContext } from "./VisualBasic6Parser";
import { VsAmpContext } from "./VisualBasic6Parser";
import { VsEqContext } from "./VisualBasic6Parser";
import { VsNeqContext } from "./VisualBasic6Parser";
import { VsLtContext } from "./VisualBasic6Parser";
import { VsGtContext } from "./VisualBasic6Parser";
import { VsLeqContext } from "./VisualBasic6Parser";
import { VsGeqContext } from "./VisualBasic6Parser";
import { VsLikeContext } from "./VisualBasic6Parser";
import { VsIsContext } from "./VisualBasic6Parser";
import { VsNotContext } from "./VisualBasic6Parser";
import { VsAndContext } from "./VisualBasic6Parser";
import { VsOrContext } from "./VisualBasic6Parser";
import { VsXorContext } from "./VisualBasic6Parser";
import { VsEqvContext } from "./VisualBasic6Parser";
import { VsImpContext } from "./VisualBasic6Parser";
import { VsICSContext } from "./VisualBasic6Parser";
import { VsMidContext } from "./VisualBasic6Parser";
import { OptionBaseStmtContext } from "./VisualBasic6Parser";
import { OptionCompareStmtContext } from "./VisualBasic6Parser";
import { OptionExplicitStmtContext } from "./VisualBasic6Parser";
import { OptionPrivateModuleStmtContext } from "./VisualBasic6Parser";
import { CaseCondElseContext } from "./VisualBasic6Parser";
import { CaseCondExprContext } from "./VisualBasic6Parser";
import { CaseCondExprIsContext } from "./VisualBasic6Parser";
import { CaseCondExprValueContext } from "./VisualBasic6Parser";
import { CaseCondExprToContext } from "./VisualBasic6Parser";
import { StartRuleContext } from "./VisualBasic6Parser";
import { ModuleContext } from "./VisualBasic6Parser";
import { ModuleReferencesContext } from "./VisualBasic6Parser";
import { ModuleReferenceContext } from "./VisualBasic6Parser";
import { ModuleReferenceValueContext } from "./VisualBasic6Parser";
import { ModuleReferenceComponentContext } from "./VisualBasic6Parser";
import { ModuleHeaderContext } from "./VisualBasic6Parser";
import { ModuleConfigContext } from "./VisualBasic6Parser";
import { ModuleConfigElementContext } from "./VisualBasic6Parser";
import { ModuleAttributesContext } from "./VisualBasic6Parser";
import { ModuleOptionsContext } from "./VisualBasic6Parser";
import { ModuleOptionContext } from "./VisualBasic6Parser";
import { ModuleBodyContext } from "./VisualBasic6Parser";
import { ModuleBodyElementContext } from "./VisualBasic6Parser";
import { ControlPropertiesContext } from "./VisualBasic6Parser";
import { Cp_PropertiesContext } from "./VisualBasic6Parser";
import { Cp_SinglePropertyContext } from "./VisualBasic6Parser";
import { Cp_PropertyNameContext } from "./VisualBasic6Parser";
import { Cp_PropertyValueContext } from "./VisualBasic6Parser";
import { Cp_NestedPropertyContext } from "./VisualBasic6Parser";
import { Cp_ControlTypeContext } from "./VisualBasic6Parser";
import { Cp_ControlIdentifierContext } from "./VisualBasic6Parser";
import { ModuleBlockContext } from "./VisualBasic6Parser";
import { AttributeStmtContext } from "./VisualBasic6Parser";
import { BlockContext } from "./VisualBasic6Parser";
import { BlockStmtContext } from "./VisualBasic6Parser";
import { AppActivateStmtContext } from "./VisualBasic6Parser";
import { BeepStmtContext } from "./VisualBasic6Parser";
import { ChDirStmtContext } from "./VisualBasic6Parser";
import { ChDriveStmtContext } from "./VisualBasic6Parser";
import { CloseStmtContext } from "./VisualBasic6Parser";
import { ConstStmtContext } from "./VisualBasic6Parser";
import { ConstSubStmtContext } from "./VisualBasic6Parser";
import { DateStmtContext } from "./VisualBasic6Parser";
import { DeclareStmtContext } from "./VisualBasic6Parser";
import { DeftypeStmtContext } from "./VisualBasic6Parser";
import { DeleteSettingStmtContext } from "./VisualBasic6Parser";
import { DoLoopStmtContext } from "./VisualBasic6Parser";
import { EndStmtContext } from "./VisualBasic6Parser";
import { EnumerationStmtContext } from "./VisualBasic6Parser";
import { EnumerationStmt_ConstantContext } from "./VisualBasic6Parser";
import { EraseStmtContext } from "./VisualBasic6Parser";
import { ErrorStmtContext } from "./VisualBasic6Parser";
import { EventStmtContext } from "./VisualBasic6Parser";
import { ExitStmtContext } from "./VisualBasic6Parser";
import { FilecopyStmtContext } from "./VisualBasic6Parser";
import { ForEachStmtContext } from "./VisualBasic6Parser";
import { ForNextStmtContext } from "./VisualBasic6Parser";
import { FunctionStmtContext } from "./VisualBasic6Parser";
import { GetStmtContext } from "./VisualBasic6Parser";
import { GoSubStmtContext } from "./VisualBasic6Parser";
import { GoToStmtContext } from "./VisualBasic6Parser";
import { IfThenElseStmtContext } from "./VisualBasic6Parser";
import { IfBlockStmtContext } from "./VisualBasic6Parser";
import { IfConditionStmtContext } from "./VisualBasic6Parser";
import { IfElseIfBlockStmtContext } from "./VisualBasic6Parser";
import { IfElseBlockStmtContext } from "./VisualBasic6Parser";
import { ImplementsStmtContext } from "./VisualBasic6Parser";
import { InputStmtContext } from "./VisualBasic6Parser";
import { KillStmtContext } from "./VisualBasic6Parser";
import { LetStmtContext } from "./VisualBasic6Parser";
import { LineInputStmtContext } from "./VisualBasic6Parser";
import { LoadStmtContext } from "./VisualBasic6Parser";
import { LockStmtContext } from "./VisualBasic6Parser";
import { LsetStmtContext } from "./VisualBasic6Parser";
import { MacroIfThenElseStmtContext } from "./VisualBasic6Parser";
import { MacroIfBlockStmtContext } from "./VisualBasic6Parser";
import { MacroElseIfBlockStmtContext } from "./VisualBasic6Parser";
import { MacroElseBlockStmtContext } from "./VisualBasic6Parser";
import { MidStmtContext } from "./VisualBasic6Parser";
import { MkdirStmtContext } from "./VisualBasic6Parser";
import { NameStmtContext } from "./VisualBasic6Parser";
import { OnErrorStmtContext } from "./VisualBasic6Parser";
import { OnGoToStmtContext } from "./VisualBasic6Parser";
import { OnGoSubStmtContext } from "./VisualBasic6Parser";
import { OpenStmtContext } from "./VisualBasic6Parser";
import { OutputListContext } from "./VisualBasic6Parser";
import { OutputList_ExpressionContext } from "./VisualBasic6Parser";
import { PrintStmtContext } from "./VisualBasic6Parser";
import { PropertyGetStmtContext } from "./VisualBasic6Parser";
import { PropertySetStmtContext } from "./VisualBasic6Parser";
import { PropertyLetStmtContext } from "./VisualBasic6Parser";
import { PutStmtContext } from "./VisualBasic6Parser";
import { RaiseEventStmtContext } from "./VisualBasic6Parser";
import { RandomizeStmtContext } from "./VisualBasic6Parser";
import { RedimStmtContext } from "./VisualBasic6Parser";
import { RedimSubStmtContext } from "./VisualBasic6Parser";
import { ResetStmtContext } from "./VisualBasic6Parser";
import { ResumeStmtContext } from "./VisualBasic6Parser";
import { ReturnStmtContext } from "./VisualBasic6Parser";
import { RmdirStmtContext } from "./VisualBasic6Parser";
import { RsetStmtContext } from "./VisualBasic6Parser";
import { SavepictureStmtContext } from "./VisualBasic6Parser";
import { SaveSettingStmtContext } from "./VisualBasic6Parser";
import { SeekStmtContext } from "./VisualBasic6Parser";
import { SelectCaseStmtContext } from "./VisualBasic6Parser";
import { SC_CaseContext } from "./VisualBasic6Parser";
import { SC_CondContext } from "./VisualBasic6Parser";
import { SC_CondExprContext } from "./VisualBasic6Parser";
import { SendkeysStmtContext } from "./VisualBasic6Parser";
import { SetattrStmtContext } from "./VisualBasic6Parser";
import { SetStmtContext } from "./VisualBasic6Parser";
import { StopStmtContext } from "./VisualBasic6Parser";
import { SubStmtContext } from "./VisualBasic6Parser";
import { TimeStmtContext } from "./VisualBasic6Parser";
import { TypeStmtContext } from "./VisualBasic6Parser";
import { TypeStmt_ElementContext } from "./VisualBasic6Parser";
import { TypeOfStmtContext } from "./VisualBasic6Parser";
import { UnloadStmtContext } from "./VisualBasic6Parser";
import { UnlockStmtContext } from "./VisualBasic6Parser";
import { ValueStmtContext } from "./VisualBasic6Parser";
import { VariableStmtContext } from "./VisualBasic6Parser";
import { VariableListStmtContext } from "./VisualBasic6Parser";
import { VariableSubStmtContext } from "./VisualBasic6Parser";
import { WhileWendStmtContext } from "./VisualBasic6Parser";
import { WidthStmtContext } from "./VisualBasic6Parser";
import { WithStmtContext } from "./VisualBasic6Parser";
import { WriteStmtContext } from "./VisualBasic6Parser";
import { ExplicitCallStmtContext } from "./VisualBasic6Parser";
import { ECS_ProcedureCallContext } from "./VisualBasic6Parser";
import { ECS_MemberProcedureCallContext } from "./VisualBasic6Parser";
import { ImplicitCallStmt_InBlockContext } from "./VisualBasic6Parser";
import { ICS_B_ProcedureCallContext } from "./VisualBasic6Parser";
import { ICS_B_MemberProcedureCallContext } from "./VisualBasic6Parser";
import { ImplicitCallStmt_InStmtContext } from "./VisualBasic6Parser";
import { ICS_S_VariableOrProcedureCallContext } from "./VisualBasic6Parser";
import { ICS_S_ProcedureOrArrayCallContext } from "./VisualBasic6Parser";
import { ICS_S_NestedProcedureCallContext } from "./VisualBasic6Parser";
import { ICS_S_MembersCallContext } from "./VisualBasic6Parser";
import { ICS_S_MemberCallContext } from "./VisualBasic6Parser";
import { ICS_S_DictionaryCallContext } from "./VisualBasic6Parser";
import { ArgsCallContext } from "./VisualBasic6Parser";
import { ArgCallContext } from "./VisualBasic6Parser";
import { DictionaryCallStmtContext } from "./VisualBasic6Parser";
import { ArgListContext } from "./VisualBasic6Parser";
import { ArgContext } from "./VisualBasic6Parser";
import { ArgDefaultValueContext } from "./VisualBasic6Parser";
import { SubscriptsContext } from "./VisualBasic6Parser";
import { SubscriptContext } from "./VisualBasic6Parser";
import { AmbiguousIdentifierContext } from "./VisualBasic6Parser";
import { AsTypeClauseContext } from "./VisualBasic6Parser";
import { BaseTypeContext } from "./VisualBasic6Parser";
import { CertainIdentifierContext } from "./VisualBasic6Parser";
import { ComparisonOperatorContext } from "./VisualBasic6Parser";
import { ComplexTypeContext } from "./VisualBasic6Parser";
import { FieldLengthContext } from "./VisualBasic6Parser";
import { LetterrangeContext } from "./VisualBasic6Parser";
import { LineLabelContext } from "./VisualBasic6Parser";
import { LiteralContext } from "./VisualBasic6Parser";
import { PublicPrivateVisibilityContext } from "./VisualBasic6Parser";
import { PublicPrivateGlobalVisibilityContext } from "./VisualBasic6Parser";
import { TypeContext } from "./VisualBasic6Parser";
import { TypeHintContext } from "./VisualBasic6Parser";
import { VisibilityContext } from "./VisualBasic6Parser";
import { AmbiguousKeywordContext } from "./VisualBasic6Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `VisualBasic6Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface VisualBasic6Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLiteral?: (ctx: VsLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsStruct`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsStruct?: (ctx: VsStructContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNew`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNew?: (ctx: VsNewContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsTypeOf?: (ctx: VsTypeOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAddressOf?: (ctx: VsAddressOfContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAssign`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAssign?: (ctx: VsAssignContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPow`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPow?: (ctx: VsPowContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNegation`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNegation?: (ctx: VsNegationContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsPlus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsPlus?: (ctx: VsPlusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsDiv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsDiv?: (ctx: VsDivContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMult`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMult?: (ctx: VsMultContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMod`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMod?: (ctx: VsModContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAdd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAdd?: (ctx: VsAddContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMinus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMinus?: (ctx: VsMinusContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAmp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAmp?: (ctx: VsAmpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEq?: (ctx: VsEqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNeq?: (ctx: VsNeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLt?: (ctx: VsLtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGt?: (ctx: VsGtContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLeq?: (ctx: VsLeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsGeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsGeq?: (ctx: VsGeqContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsLike`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsLike?: (ctx: VsLikeContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsIs`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsIs?: (ctx: VsIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsNot`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsNot?: (ctx: VsNotContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsAnd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsAnd?: (ctx: VsAndContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsOr`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsOr?: (ctx: VsOrContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsXor`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsXor?: (ctx: VsXorContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsEqv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsEqv?: (ctx: VsEqvContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsImp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsImp?: (ctx: VsImpContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsICS`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsICS?: (ctx: VsICSContext) => Result;

	/**
	 * Visit a parse tree produced by the `vsMid`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVsMid?: (ctx: VsMidContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondElse?: (ctx: CaseCondElseContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExpr?: (ctx: CaseCondExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprIs?: (ctx: CaseCondExprIsContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprValue?: (ctx: CaseCondExprValueContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseCondExprTo?: (ctx: CaseCondExprToContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.startRule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStartRule?: (ctx: StartRuleContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleReferences`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferences?: (ctx: ModuleReferencesContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReference?: (ctx: ModuleReferenceContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleHeader?: (ctx: ModuleHeaderContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleConfig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfig?: (ctx: ModuleConfigContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleConfigElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleConfigElement?: (ctx: ModuleConfigElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleAttributes`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleAttributes?: (ctx: ModuleAttributesContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleOptions?: (ctx: ModuleOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleOption?: (ctx: ModuleOptionContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBody?: (ctx: ModuleBodyContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleBodyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBodyElement?: (ctx: ModuleBodyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.controlProperties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitControlProperties?: (ctx: ControlPropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_Properties`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_Properties?: (ctx: Cp_PropertiesContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_PropertyName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_PropertyName?: (ctx: Cp_PropertyNameContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_ControlType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_ControlType?: (ctx: Cp_ControlTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.moduleBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleBlock?: (ctx: ModuleBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.attributeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAttributeStmt?: (ctx: AttributeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.blockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStmt?: (ctx: BlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.appActivateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppActivateStmt?: (ctx: AppActivateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.beepStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeepStmt?: (ctx: BeepStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.chDirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChDirStmt?: (ctx: ChDirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.chDriveStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChDriveStmt?: (ctx: ChDriveStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.closeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCloseStmt?: (ctx: CloseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.constStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstStmt?: (ctx: ConstStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.constSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstSubStmt?: (ctx: ConstSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.dateStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDateStmt?: (ctx: DateStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.declareStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclareStmt?: (ctx: DeclareStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.deftypeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeftypeStmt?: (ctx: DeftypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.doLoopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoLoopStmt?: (ctx: DoLoopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.endStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEndStmt?: (ctx: EndStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.enumerationStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt?: (ctx: EnumerationStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.eraseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEraseStmt?: (ctx: EraseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.errorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitErrorStmt?: (ctx: ErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.eventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEventStmt?: (ctx: EventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.exitStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExitStmt?: (ctx: ExitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.filecopyStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFilecopyStmt?: (ctx: FilecopyStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.forEachStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForEachStmt?: (ctx: ForEachStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.forNextStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForNextStmt?: (ctx: ForNextStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.functionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionStmt?: (ctx: FunctionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.getStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGetStmt?: (ctx: GetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.goSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoSubStmt?: (ctx: GoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.goToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoToStmt?: (ctx: GoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStmt?: (ctx: IfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ifBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfBlockStmt?: (ctx: IfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ifConditionStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditionStmt?: (ctx: IfConditionStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.implementsStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplementsStmt?: (ctx: ImplementsStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.inputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInputStmt?: (ctx: InputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.killStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKillStmt?: (ctx: KillStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.letStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetStmt?: (ctx: LetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.lineInputStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineInputStmt?: (ctx: LineInputStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.loadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLoadStmt?: (ctx: LoadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.lockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLockStmt?: (ctx: LockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.lsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLsetStmt?: (ctx: LsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.midStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMidStmt?: (ctx: MidStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.mkdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMkdirStmt?: (ctx: MkdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.nameStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNameStmt?: (ctx: NameStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.onErrorStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnErrorStmt?: (ctx: OnErrorStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.onGoToStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoToStmt?: (ctx: OnGoToStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.onGoSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.openStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenStmt?: (ctx: OpenStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.outputList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList?: (ctx: OutputListContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.outputList_Expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.printStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrintStmt?: (ctx: PrintStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.propertyGetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.propertySetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertySetStmt?: (ctx: PropertySetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.propertyLetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.putStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPutStmt?: (ctx: PutStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.raiseEventStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.randomizeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRandomizeStmt?: (ctx: RandomizeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.redimStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimStmt?: (ctx: RedimStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.redimSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRedimSubStmt?: (ctx: RedimSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.resetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResetStmt?: (ctx: ResetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.resumeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResumeStmt?: (ctx: ResumeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.rmdirStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRmdirStmt?: (ctx: RmdirStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.rsetStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRsetStmt?: (ctx: RsetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.savepictureStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSavepictureStmt?: (ctx: SavepictureStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.saveSettingStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.seekStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeekStmt?: (ctx: SeekStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.selectCaseStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.sC_Case`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Case?: (ctx: SC_CaseContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_Cond?: (ctx: SC_CondContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSC_CondExpr?: (ctx: SC_CondExprContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.sendkeysStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSendkeysStmt?: (ctx: SendkeysStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.setattrStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetattrStmt?: (ctx: SetattrStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.setStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetStmt?: (ctx: SetStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.stopStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStopStmt?: (ctx: StopStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.subStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubStmt?: (ctx: SubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.timeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimeStmt?: (ctx: TimeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.typeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt?: (ctx: TypeStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.typeStmt_Element`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.typeOfStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeOfStmt?: (ctx: TypeOfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.unloadStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnloadStmt?: (ctx: UnloadStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.unlockStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnlockStmt?: (ctx: UnlockStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueStmt?: (ctx: ValueStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.variableStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableStmt?: (ctx: VariableStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.variableListStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableListStmt?: (ctx: VariableListStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.variableSubStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableSubStmt?: (ctx: VariableSubStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.whileWendStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileWendStmt?: (ctx: WhileWendStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.widthStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidthStmt?: (ctx: WidthStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.withStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithStmt?: (ctx: WithStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.writeStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWriteStmt?: (ctx: WriteStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.explicitCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.argsCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgsCall?: (ctx: ArgsCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.argCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgCall?: (ctx: ArgCallContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.argList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgList?: (ctx: ArgListContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArg?: (ctx: ArgContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.argDefaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgDefaultValue?: (ctx: ArgDefaultValueContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.subscripts`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscripts?: (ctx: SubscriptsContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.asTypeClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsTypeClause?: (ctx: AsTypeClauseContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.baseType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBaseType?: (ctx: BaseTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.certainIdentifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCertainIdentifier?: (ctx: CertainIdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.comparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparisonOperator?: (ctx: ComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.complexType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComplexType?: (ctx: ComplexTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.fieldLength`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldLength?: (ctx: FieldLengthContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.letterrange`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLetterrange?: (ctx: LetterrangeContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.lineLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineLabel?: (ctx: LineLabelContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.typeHint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeHint?: (ctx: TypeHintContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.visibility`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisibility?: (ctx: VisibilityContext) => Result;

	/**
	 * Visit a parse tree produced by `VisualBasic6Parser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => Result;
}

