// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/vb6/VisualBasic6.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `VisualBasic6Parser`.
 */
export interface VisualBasic6Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `inlineIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitInlineIfThenElse?: (ctx: InlineIfThenElseContext) => void;

	/**
	 * Enter a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;
	/**
	 * Exit a parse tree produced by the `blockIfThenElse`
	 * labeled alternative in `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockIfThenElse?: (ctx: BlockIfThenElseContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLiteral`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLiteral?: (ctx: VsLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLiteral`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLiteral?: (ctx: VsLiteralContext) => void;

	/**
	 * Enter a parse tree produced by the `vsStruct`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsStruct?: (ctx: VsStructContext) => void;
	/**
	 * Exit a parse tree produced by the `vsStruct`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsStruct?: (ctx: VsStructContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNew`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNew?: (ctx: VsNewContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNew`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNew?: (ctx: VsNewContext) => void;

	/**
	 * Enter a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsTypeOf?: (ctx: VsTypeOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsTypeOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsTypeOf?: (ctx: VsTypeOfContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAddressOf?: (ctx: VsAddressOfContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAddressOf`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAddressOf?: (ctx: VsAddressOfContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAssign`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAssign?: (ctx: VsAssignContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAssign`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAssign?: (ctx: VsAssignContext) => void;

	/**
	 * Enter a parse tree produced by the `vsPow`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPow?: (ctx: VsPowContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPow`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPow?: (ctx: VsPowContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNegation`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNegation?: (ctx: VsNegationContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNegation`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNegation?: (ctx: VsNegationContext) => void;

	/**
	 * Enter a parse tree produced by the `vsPlus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsPlus?: (ctx: VsPlusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsPlus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsPlus?: (ctx: VsPlusContext) => void;

	/**
	 * Enter a parse tree produced by the `vsDiv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsDiv?: (ctx: VsDivContext) => void;
	/**
	 * Exit a parse tree produced by the `vsDiv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsDiv?: (ctx: VsDivContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMult`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMult?: (ctx: VsMultContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMult`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMult?: (ctx: VsMultContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMod`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMod?: (ctx: VsModContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMod`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMod?: (ctx: VsModContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAdd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAdd?: (ctx: VsAddContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAdd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAdd?: (ctx: VsAddContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMinus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMinus?: (ctx: VsMinusContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMinus`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMinus?: (ctx: VsMinusContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAmp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAmp?: (ctx: VsAmpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAmp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAmp?: (ctx: VsAmpContext) => void;

	/**
	 * Enter a parse tree produced by the `vsEq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsEq?: (ctx: VsEqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsEq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsEq?: (ctx: VsEqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNeq?: (ctx: VsNeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNeq?: (ctx: VsNeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLt?: (ctx: VsLtContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLt?: (ctx: VsLtContext) => void;

	/**
	 * Enter a parse tree produced by the `vsGt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsGt?: (ctx: VsGtContext) => void;
	/**
	 * Exit a parse tree produced by the `vsGt`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsGt?: (ctx: VsGtContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLeq?: (ctx: VsLeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLeq?: (ctx: VsLeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsGeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsGeq?: (ctx: VsGeqContext) => void;
	/**
	 * Exit a parse tree produced by the `vsGeq`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsGeq?: (ctx: VsGeqContext) => void;

	/**
	 * Enter a parse tree produced by the `vsLike`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsLike?: (ctx: VsLikeContext) => void;
	/**
	 * Exit a parse tree produced by the `vsLike`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsLike?: (ctx: VsLikeContext) => void;

	/**
	 * Enter a parse tree produced by the `vsIs`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsIs?: (ctx: VsIsContext) => void;
	/**
	 * Exit a parse tree produced by the `vsIs`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsIs?: (ctx: VsIsContext) => void;

	/**
	 * Enter a parse tree produced by the `vsNot`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsNot?: (ctx: VsNotContext) => void;
	/**
	 * Exit a parse tree produced by the `vsNot`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsNot?: (ctx: VsNotContext) => void;

	/**
	 * Enter a parse tree produced by the `vsAnd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsAnd?: (ctx: VsAndContext) => void;
	/**
	 * Exit a parse tree produced by the `vsAnd`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsAnd?: (ctx: VsAndContext) => void;

	/**
	 * Enter a parse tree produced by the `vsOr`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsOr?: (ctx: VsOrContext) => void;
	/**
	 * Exit a parse tree produced by the `vsOr`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsOr?: (ctx: VsOrContext) => void;

	/**
	 * Enter a parse tree produced by the `vsXor`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsXor?: (ctx: VsXorContext) => void;
	/**
	 * Exit a parse tree produced by the `vsXor`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsXor?: (ctx: VsXorContext) => void;

	/**
	 * Enter a parse tree produced by the `vsEqv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsEqv?: (ctx: VsEqvContext) => void;
	/**
	 * Exit a parse tree produced by the `vsEqv`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsEqv?: (ctx: VsEqvContext) => void;

	/**
	 * Enter a parse tree produced by the `vsImp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsImp?: (ctx: VsImpContext) => void;
	/**
	 * Exit a parse tree produced by the `vsImp`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsImp?: (ctx: VsImpContext) => void;

	/**
	 * Enter a parse tree produced by the `vsICS`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsICS?: (ctx: VsICSContext) => void;
	/**
	 * Exit a parse tree produced by the `vsICS`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsICS?: (ctx: VsICSContext) => void;

	/**
	 * Enter a parse tree produced by the `vsMid`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterVsMid?: (ctx: VsMidContext) => void;
	/**
	 * Exit a parse tree produced by the `vsMid`
	 * labeled alternative in `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitVsMid?: (ctx: VsMidContext) => void;

	/**
	 * Enter a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionBaseStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionBaseStmt?: (ctx: OptionBaseStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionCompareStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionCompareStmt?: (ctx: OptionCompareStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionExplicitStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionExplicitStmt?: (ctx: OptionExplicitStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;
	/**
	 * Exit a parse tree produced by the `optionPrivateModuleStmt`
	 * labeled alternative in `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitOptionPrivateModuleStmt?: (ctx: OptionPrivateModuleStmtContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondElse`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondElse?: (ctx: CaseCondElseContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondElse`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondElse?: (ctx: CaseCondElseContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExpr?: (ctx: CaseCondExprContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExpr`
	 * labeled alternative in `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExpr?: (ctx: CaseCondExprContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprIs?: (ctx: CaseCondExprIsContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprIs`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprIs?: (ctx: CaseCondExprIsContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprValue?: (ctx: CaseCondExprValueContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprValue`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprValue?: (ctx: CaseCondExprValueContext) => void;

	/**
	 * Enter a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterCaseCondExprTo?: (ctx: CaseCondExprToContext) => void;
	/**
	 * Exit a parse tree produced by the `caseCondExprTo`
	 * labeled alternative in `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitCaseCondExprTo?: (ctx: CaseCondExprToContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.startRule`.
	 * @param ctx the parse tree
	 */
	enterStartRule?: (ctx: StartRuleContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.startRule`.
	 * @param ctx the parse tree
	 */
	exitStartRule?: (ctx: StartRuleContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleReferences`.
	 * @param ctx the parse tree
	 */
	enterModuleReferences?: (ctx: ModuleReferencesContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleReferences`.
	 * @param ctx the parse tree
	 */
	exitModuleReferences?: (ctx: ModuleReferencesContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleReference`.
	 * @param ctx the parse tree
	 */
	enterModuleReference?: (ctx: ModuleReferenceContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleReference`.
	 * @param ctx the parse tree
	 */
	exitModuleReference?: (ctx: ModuleReferenceContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 */
	enterModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleReferenceValue`.
	 * @param ctx the parse tree
	 */
	exitModuleReferenceValue?: (ctx: ModuleReferenceValueContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 */
	enterModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleReferenceComponent`.
	 * @param ctx the parse tree
	 */
	exitModuleReferenceComponent?: (ctx: ModuleReferenceComponentContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	enterModuleHeader?: (ctx: ModuleHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleHeader`.
	 * @param ctx the parse tree
	 */
	exitModuleHeader?: (ctx: ModuleHeaderContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	enterModuleConfig?: (ctx: ModuleConfigContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleConfig`.
	 * @param ctx the parse tree
	 */
	exitModuleConfig?: (ctx: ModuleConfigContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	enterModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleConfigElement`.
	 * @param ctx the parse tree
	 */
	exitModuleConfigElement?: (ctx: ModuleConfigElementContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	enterModuleAttributes?: (ctx: ModuleAttributesContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleAttributes`.
	 * @param ctx the parse tree
	 */
	exitModuleAttributes?: (ctx: ModuleAttributesContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleOptions`.
	 * @param ctx the parse tree
	 */
	enterModuleOptions?: (ctx: ModuleOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleOptions`.
	 * @param ctx the parse tree
	 */
	exitModuleOptions?: (ctx: ModuleOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	enterModuleOption?: (ctx: ModuleOptionContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleOption`.
	 * @param ctx the parse tree
	 */
	exitModuleOption?: (ctx: ModuleOptionContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleBody`.
	 * @param ctx the parse tree
	 */
	enterModuleBody?: (ctx: ModuleBodyContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleBody`.
	 * @param ctx the parse tree
	 */
	exitModuleBody?: (ctx: ModuleBodyContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	enterModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleBodyElement`.
	 * @param ctx the parse tree
	 */
	exitModuleBodyElement?: (ctx: ModuleBodyElementContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.controlProperties`.
	 * @param ctx the parse tree
	 */
	enterControlProperties?: (ctx: ControlPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.controlProperties`.
	 * @param ctx the parse tree
	 */
	exitControlProperties?: (ctx: ControlPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_Properties`.
	 * @param ctx the parse tree
	 */
	enterCp_Properties?: (ctx: Cp_PropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_Properties`.
	 * @param ctx the parse tree
	 */
	exitCp_Properties?: (ctx: Cp_PropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 */
	enterCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_SingleProperty`.
	 * @param ctx the parse tree
	 */
	exitCp_SingleProperty?: (ctx: Cp_SinglePropertyContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_PropertyName`.
	 * @param ctx the parse tree
	 */
	enterCp_PropertyName?: (ctx: Cp_PropertyNameContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_PropertyName`.
	 * @param ctx the parse tree
	 */
	exitCp_PropertyName?: (ctx: Cp_PropertyNameContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 */
	enterCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_PropertyValue`.
	 * @param ctx the parse tree
	 */
	exitCp_PropertyValue?: (ctx: Cp_PropertyValueContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 */
	enterCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_NestedProperty`.
	 * @param ctx the parse tree
	 */
	exitCp_NestedProperty?: (ctx: Cp_NestedPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_ControlType`.
	 * @param ctx the parse tree
	 */
	enterCp_ControlType?: (ctx: Cp_ControlTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_ControlType`.
	 * @param ctx the parse tree
	 */
	exitCp_ControlType?: (ctx: Cp_ControlTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.cp_ControlIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCp_ControlIdentifier?: (ctx: Cp_ControlIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.moduleBlock`.
	 * @param ctx the parse tree
	 */
	enterModuleBlock?: (ctx: ModuleBlockContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.moduleBlock`.
	 * @param ctx the parse tree
	 */
	exitModuleBlock?: (ctx: ModuleBlockContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	enterAttributeStmt?: (ctx: AttributeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.attributeStmt`.
	 * @param ctx the parse tree
	 */
	exitAttributeStmt?: (ctx: AttributeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.blockStmt`.
	 * @param ctx the parse tree
	 */
	enterBlockStmt?: (ctx: BlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.blockStmt`.
	 * @param ctx the parse tree
	 */
	exitBlockStmt?: (ctx: BlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.appActivateStmt`.
	 * @param ctx the parse tree
	 */
	enterAppActivateStmt?: (ctx: AppActivateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.appActivateStmt`.
	 * @param ctx the parse tree
	 */
	exitAppActivateStmt?: (ctx: AppActivateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.beepStmt`.
	 * @param ctx the parse tree
	 */
	enterBeepStmt?: (ctx: BeepStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.beepStmt`.
	 * @param ctx the parse tree
	 */
	exitBeepStmt?: (ctx: BeepStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.chDirStmt`.
	 * @param ctx the parse tree
	 */
	enterChDirStmt?: (ctx: ChDirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.chDirStmt`.
	 * @param ctx the parse tree
	 */
	exitChDirStmt?: (ctx: ChDirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.chDriveStmt`.
	 * @param ctx the parse tree
	 */
	enterChDriveStmt?: (ctx: ChDriveStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.chDriveStmt`.
	 * @param ctx the parse tree
	 */
	exitChDriveStmt?: (ctx: ChDriveStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.closeStmt`.
	 * @param ctx the parse tree
	 */
	enterCloseStmt?: (ctx: CloseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.closeStmt`.
	 * @param ctx the parse tree
	 */
	exitCloseStmt?: (ctx: CloseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.constStmt`.
	 * @param ctx the parse tree
	 */
	enterConstStmt?: (ctx: ConstStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.constStmt`.
	 * @param ctx the parse tree
	 */
	exitConstStmt?: (ctx: ConstStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	enterConstSubStmt?: (ctx: ConstSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.constSubStmt`.
	 * @param ctx the parse tree
	 */
	exitConstSubStmt?: (ctx: ConstSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.dateStmt`.
	 * @param ctx the parse tree
	 */
	enterDateStmt?: (ctx: DateStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.dateStmt`.
	 * @param ctx the parse tree
	 */
	exitDateStmt?: (ctx: DateStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.declareStmt`.
	 * @param ctx the parse tree
	 */
	enterDeclareStmt?: (ctx: DeclareStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.declareStmt`.
	 * @param ctx the parse tree
	 */
	exitDeclareStmt?: (ctx: DeclareStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	enterDeftypeStmt?: (ctx: DeftypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.deftypeStmt`.
	 * @param ctx the parse tree
	 */
	exitDeftypeStmt?: (ctx: DeftypeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.deleteSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitDeleteSettingStmt?: (ctx: DeleteSettingStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	enterDoLoopStmt?: (ctx: DoLoopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.doLoopStmt`.
	 * @param ctx the parse tree
	 */
	exitDoLoopStmt?: (ctx: DoLoopStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.endStmt`.
	 * @param ctx the parse tree
	 */
	enterEndStmt?: (ctx: EndStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.endStmt`.
	 * @param ctx the parse tree
	 */
	exitEndStmt?: (ctx: EndStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt?: (ctx: EnumerationStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.enumerationStmt`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt?: (ctx: EnumerationStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	enterEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.enumerationStmt_Constant`.
	 * @param ctx the parse tree
	 */
	exitEnumerationStmt_Constant?: (ctx: EnumerationStmt_ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	enterEraseStmt?: (ctx: EraseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.eraseStmt`.
	 * @param ctx the parse tree
	 */
	exitEraseStmt?: (ctx: EraseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.errorStmt`.
	 * @param ctx the parse tree
	 */
	enterErrorStmt?: (ctx: ErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.errorStmt`.
	 * @param ctx the parse tree
	 */
	exitErrorStmt?: (ctx: ErrorStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.eventStmt`.
	 * @param ctx the parse tree
	 */
	enterEventStmt?: (ctx: EventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.eventStmt`.
	 * @param ctx the parse tree
	 */
	exitEventStmt?: (ctx: EventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.exitStmt`.
	 * @param ctx the parse tree
	 */
	enterExitStmt?: (ctx: ExitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.exitStmt`.
	 * @param ctx the parse tree
	 */
	exitExitStmt?: (ctx: ExitStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	enterFilecopyStmt?: (ctx: FilecopyStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.filecopyStmt`.
	 * @param ctx the parse tree
	 */
	exitFilecopyStmt?: (ctx: FilecopyStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	enterForEachStmt?: (ctx: ForEachStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.forEachStmt`.
	 * @param ctx the parse tree
	 */
	exitForEachStmt?: (ctx: ForEachStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	enterForNextStmt?: (ctx: ForNextStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.forNextStmt`.
	 * @param ctx the parse tree
	 */
	exitForNextStmt?: (ctx: ForNextStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.functionStmt`.
	 * @param ctx the parse tree
	 */
	enterFunctionStmt?: (ctx: FunctionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.functionStmt`.
	 * @param ctx the parse tree
	 */
	exitFunctionStmt?: (ctx: FunctionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.getStmt`.
	 * @param ctx the parse tree
	 */
	enterGetStmt?: (ctx: GetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.getStmt`.
	 * @param ctx the parse tree
	 */
	exitGetStmt?: (ctx: GetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	enterGoSubStmt?: (ctx: GoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.goSubStmt`.
	 * @param ctx the parse tree
	 */
	exitGoSubStmt?: (ctx: GoSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.goToStmt`.
	 * @param ctx the parse tree
	 */
	enterGoToStmt?: (ctx: GoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.goToStmt`.
	 * @param ctx the parse tree
	 */
	exitGoToStmt?: (ctx: GoToStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterIfThenElseStmt?: (ctx: IfThenElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ifThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitIfThenElseStmt?: (ctx: IfThenElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfBlockStmt?: (ctx: IfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ifBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfBlockStmt?: (ctx: IfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	enterIfConditionStmt?: (ctx: IfConditionStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ifConditionStmt`.
	 * @param ctx the parse tree
	 */
	exitIfConditionStmt?: (ctx: IfConditionStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ifElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseIfBlockStmt?: (ctx: IfElseIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ifElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitIfElseBlockStmt?: (ctx: IfElseBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	enterImplementsStmt?: (ctx: ImplementsStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.implementsStmt`.
	 * @param ctx the parse tree
	 */
	exitImplementsStmt?: (ctx: ImplementsStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.inputStmt`.
	 * @param ctx the parse tree
	 */
	enterInputStmt?: (ctx: InputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.inputStmt`.
	 * @param ctx the parse tree
	 */
	exitInputStmt?: (ctx: InputStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.killStmt`.
	 * @param ctx the parse tree
	 */
	enterKillStmt?: (ctx: KillStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.killStmt`.
	 * @param ctx the parse tree
	 */
	exitKillStmt?: (ctx: KillStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.letStmt`.
	 * @param ctx the parse tree
	 */
	enterLetStmt?: (ctx: LetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.letStmt`.
	 * @param ctx the parse tree
	 */
	exitLetStmt?: (ctx: LetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	enterLineInputStmt?: (ctx: LineInputStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.lineInputStmt`.
	 * @param ctx the parse tree
	 */
	exitLineInputStmt?: (ctx: LineInputStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.loadStmt`.
	 * @param ctx the parse tree
	 */
	enterLoadStmt?: (ctx: LoadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.loadStmt`.
	 * @param ctx the parse tree
	 */
	exitLoadStmt?: (ctx: LoadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.lockStmt`.
	 * @param ctx the parse tree
	 */
	enterLockStmt?: (ctx: LockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.lockStmt`.
	 * @param ctx the parse tree
	 */
	exitLockStmt?: (ctx: LockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	enterLsetStmt?: (ctx: LsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.lsetStmt`.
	 * @param ctx the parse tree
	 */
	exitLsetStmt?: (ctx: LsetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.macroIfThenElseStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfThenElseStmt?: (ctx: MacroIfThenElseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.macroIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroIfBlockStmt?: (ctx: MacroIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.macroElseIfBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseIfBlockStmt?: (ctx: MacroElseIfBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	enterMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.macroElseBlockStmt`.
	 * @param ctx the parse tree
	 */
	exitMacroElseBlockStmt?: (ctx: MacroElseBlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.midStmt`.
	 * @param ctx the parse tree
	 */
	enterMidStmt?: (ctx: MidStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.midStmt`.
	 * @param ctx the parse tree
	 */
	exitMidStmt?: (ctx: MidStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	enterMkdirStmt?: (ctx: MkdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.mkdirStmt`.
	 * @param ctx the parse tree
	 */
	exitMkdirStmt?: (ctx: MkdirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.nameStmt`.
	 * @param ctx the parse tree
	 */
	enterNameStmt?: (ctx: NameStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.nameStmt`.
	 * @param ctx the parse tree
	 */
	exitNameStmt?: (ctx: NameStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	enterOnErrorStmt?: (ctx: OnErrorStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.onErrorStmt`.
	 * @param ctx the parse tree
	 */
	exitOnErrorStmt?: (ctx: OnErrorStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoToStmt?: (ctx: OnGoToStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.onGoToStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoToStmt?: (ctx: OnGoToStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	enterOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.onGoSubStmt`.
	 * @param ctx the parse tree
	 */
	exitOnGoSubStmt?: (ctx: OnGoSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.openStmt`.
	 * @param ctx the parse tree
	 */
	enterOpenStmt?: (ctx: OpenStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.openStmt`.
	 * @param ctx the parse tree
	 */
	exitOpenStmt?: (ctx: OpenStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.outputList`.
	 * @param ctx the parse tree
	 */
	enterOutputList?: (ctx: OutputListContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.outputList`.
	 * @param ctx the parse tree
	 */
	exitOutputList?: (ctx: OutputListContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	enterOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.outputList_Expression`.
	 * @param ctx the parse tree
	 */
	exitOutputList_Expression?: (ctx: OutputList_ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.printStmt`.
	 * @param ctx the parse tree
	 */
	enterPrintStmt?: (ctx: PrintStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.printStmt`.
	 * @param ctx the parse tree
	 */
	exitPrintStmt?: (ctx: PrintStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.propertyGetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyGetStmt?: (ctx: PropertyGetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertySetStmt?: (ctx: PropertySetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.propertySetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertySetStmt?: (ctx: PropertySetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	enterPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.propertyLetStmt`.
	 * @param ctx the parse tree
	 */
	exitPropertyLetStmt?: (ctx: PropertyLetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.putStmt`.
	 * @param ctx the parse tree
	 */
	enterPutStmt?: (ctx: PutStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.putStmt`.
	 * @param ctx the parse tree
	 */
	exitPutStmt?: (ctx: PutStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	enterRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.raiseEventStmt`.
	 * @param ctx the parse tree
	 */
	exitRaiseEventStmt?: (ctx: RaiseEventStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	enterRandomizeStmt?: (ctx: RandomizeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.randomizeStmt`.
	 * @param ctx the parse tree
	 */
	exitRandomizeStmt?: (ctx: RandomizeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.redimStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimStmt?: (ctx: RedimStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.redimStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimStmt?: (ctx: RedimStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	enterRedimSubStmt?: (ctx: RedimSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.redimSubStmt`.
	 * @param ctx the parse tree
	 */
	exitRedimSubStmt?: (ctx: RedimSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.resetStmt`.
	 * @param ctx the parse tree
	 */
	enterResetStmt?: (ctx: ResetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.resetStmt`.
	 * @param ctx the parse tree
	 */
	exitResetStmt?: (ctx: ResetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	enterResumeStmt?: (ctx: ResumeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.resumeStmt`.
	 * @param ctx the parse tree
	 */
	exitResumeStmt?: (ctx: ResumeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	enterRmdirStmt?: (ctx: RmdirStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.rmdirStmt`.
	 * @param ctx the parse tree
	 */
	exitRmdirStmt?: (ctx: RmdirStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	enterRsetStmt?: (ctx: RsetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.rsetStmt`.
	 * @param ctx the parse tree
	 */
	exitRsetStmt?: (ctx: RsetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	enterSavepictureStmt?: (ctx: SavepictureStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.savepictureStmt`.
	 * @param ctx the parse tree
	 */
	exitSavepictureStmt?: (ctx: SavepictureStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	enterSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.saveSettingStmt`.
	 * @param ctx the parse tree
	 */
	exitSaveSettingStmt?: (ctx: SaveSettingStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.seekStmt`.
	 * @param ctx the parse tree
	 */
	enterSeekStmt?: (ctx: SeekStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.seekStmt`.
	 * @param ctx the parse tree
	 */
	exitSeekStmt?: (ctx: SeekStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	enterSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.selectCaseStmt`.
	 * @param ctx the parse tree
	 */
	exitSelectCaseStmt?: (ctx: SelectCaseStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.sC_Case`.
	 * @param ctx the parse tree
	 */
	enterSC_Case?: (ctx: SC_CaseContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.sC_Case`.
	 * @param ctx the parse tree
	 */
	exitSC_Case?: (ctx: SC_CaseContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	enterSC_Cond?: (ctx: SC_CondContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.sC_Cond`.
	 * @param ctx the parse tree
	 */
	exitSC_Cond?: (ctx: SC_CondContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	enterSC_CondExpr?: (ctx: SC_CondExprContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.sC_CondExpr`.
	 * @param ctx the parse tree
	 */
	exitSC_CondExpr?: (ctx: SC_CondExprContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	enterSendkeysStmt?: (ctx: SendkeysStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.sendkeysStmt`.
	 * @param ctx the parse tree
	 */
	exitSendkeysStmt?: (ctx: SendkeysStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	enterSetattrStmt?: (ctx: SetattrStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.setattrStmt`.
	 * @param ctx the parse tree
	 */
	exitSetattrStmt?: (ctx: SetattrStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.setStmt`.
	 * @param ctx the parse tree
	 */
	enterSetStmt?: (ctx: SetStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.setStmt`.
	 * @param ctx the parse tree
	 */
	exitSetStmt?: (ctx: SetStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.stopStmt`.
	 * @param ctx the parse tree
	 */
	enterStopStmt?: (ctx: StopStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.stopStmt`.
	 * @param ctx the parse tree
	 */
	exitStopStmt?: (ctx: StopStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.subStmt`.
	 * @param ctx the parse tree
	 */
	enterSubStmt?: (ctx: SubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.subStmt`.
	 * @param ctx the parse tree
	 */
	exitSubStmt?: (ctx: SubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.timeStmt`.
	 * @param ctx the parse tree
	 */
	enterTimeStmt?: (ctx: TimeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.timeStmt`.
	 * @param ctx the parse tree
	 */
	exitTimeStmt?: (ctx: TimeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.typeStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt?: (ctx: TypeStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.typeStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt?: (ctx: TypeStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	enterTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.typeStmt_Element`.
	 * @param ctx the parse tree
	 */
	exitTypeStmt_Element?: (ctx: TypeStmt_ElementContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	enterTypeOfStmt?: (ctx: TypeOfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.typeOfStmt`.
	 * @param ctx the parse tree
	 */
	exitTypeOfStmt?: (ctx: TypeOfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	enterUnloadStmt?: (ctx: UnloadStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.unloadStmt`.
	 * @param ctx the parse tree
	 */
	exitUnloadStmt?: (ctx: UnloadStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	enterUnlockStmt?: (ctx: UnlockStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.unlockStmt`.
	 * @param ctx the parse tree
	 */
	exitUnlockStmt?: (ctx: UnlockStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	enterValueStmt?: (ctx: ValueStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.valueStmt`.
	 * @param ctx the parse tree
	 */
	exitValueStmt?: (ctx: ValueStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.variableStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableStmt?: (ctx: VariableStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.variableStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableStmt?: (ctx: VariableStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableListStmt?: (ctx: VariableListStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.variableListStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableListStmt?: (ctx: VariableListStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	enterVariableSubStmt?: (ctx: VariableSubStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.variableSubStmt`.
	 * @param ctx the parse tree
	 */
	exitVariableSubStmt?: (ctx: VariableSubStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	enterWhileWendStmt?: (ctx: WhileWendStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.whileWendStmt`.
	 * @param ctx the parse tree
	 */
	exitWhileWendStmt?: (ctx: WhileWendStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.widthStmt`.
	 * @param ctx the parse tree
	 */
	enterWidthStmt?: (ctx: WidthStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.widthStmt`.
	 * @param ctx the parse tree
	 */
	exitWidthStmt?: (ctx: WidthStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.withStmt`.
	 * @param ctx the parse tree
	 */
	enterWithStmt?: (ctx: WithStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.withStmt`.
	 * @param ctx the parse tree
	 */
	exitWithStmt?: (ctx: WithStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.writeStmt`.
	 * @param ctx the parse tree
	 */
	enterWriteStmt?: (ctx: WriteStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.writeStmt`.
	 * @param ctx the parse tree
	 */
	exitWriteStmt?: (ctx: WriteStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	enterExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.explicitCallStmt`.
	 * @param ctx the parse tree
	 */
	exitExplicitCallStmt?: (ctx: ExplicitCallStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.eCS_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_ProcedureCall?: (ctx: ECS_ProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.eCS_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitECS_MemberProcedureCall?: (ctx: ECS_MemberProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InBlock`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InBlock?: (ctx: ImplicitCallStmt_InBlockContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_B_ProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_ProcedureCall?: (ctx: ICS_B_ProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_B_MemberProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_B_MemberProcedureCall?: (ctx: ICS_B_MemberProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	enterImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.implicitCallStmt_InStmt`.
	 * @param ctx the parse tree
	 */
	exitImplicitCallStmt_InStmt?: (ctx: ImplicitCallStmt_InStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_VariableOrProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_VariableOrProcedureCall?: (ctx: ICS_S_VariableOrProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_ProcedureOrArrayCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_ProcedureOrArrayCall?: (ctx: ICS_S_ProcedureOrArrayCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_NestedProcedureCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_NestedProcedureCall?: (ctx: ICS_S_NestedProcedureCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_MembersCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MembersCall?: (ctx: ICS_S_MembersCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_MemberCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_MemberCall?: (ctx: ICS_S_MemberCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	enterICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.iCS_S_DictionaryCall`.
	 * @param ctx the parse tree
	 */
	exitICS_S_DictionaryCall?: (ctx: ICS_S_DictionaryCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.argsCall`.
	 * @param ctx the parse tree
	 */
	enterArgsCall?: (ctx: ArgsCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.argsCall`.
	 * @param ctx the parse tree
	 */
	exitArgsCall?: (ctx: ArgsCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.argCall`.
	 * @param ctx the parse tree
	 */
	enterArgCall?: (ctx: ArgCallContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.argCall`.
	 * @param ctx the parse tree
	 */
	exitArgCall?: (ctx: ArgCallContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	enterDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.dictionaryCallStmt`.
	 * @param ctx the parse tree
	 */
	exitDictionaryCallStmt?: (ctx: DictionaryCallStmtContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.argList`.
	 * @param ctx the parse tree
	 */
	enterArgList?: (ctx: ArgListContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.argList`.
	 * @param ctx the parse tree
	 */
	exitArgList?: (ctx: ArgListContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.arg`.
	 * @param ctx the parse tree
	 */
	enterArg?: (ctx: ArgContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.arg`.
	 * @param ctx the parse tree
	 */
	exitArg?: (ctx: ArgContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	enterArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.argDefaultValue`.
	 * @param ctx the parse tree
	 */
	exitArgDefaultValue?: (ctx: ArgDefaultValueContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.subscripts`.
	 * @param ctx the parse tree
	 */
	enterSubscripts?: (ctx: SubscriptsContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.subscripts`.
	 * @param ctx the parse tree
	 */
	exitSubscripts?: (ctx: SubscriptsContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ambiguousIdentifier`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousIdentifier?: (ctx: AmbiguousIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	enterAsTypeClause?: (ctx: AsTypeClauseContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.asTypeClause`.
	 * @param ctx the parse tree
	 */
	exitAsTypeClause?: (ctx: AsTypeClauseContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.baseType`.
	 * @param ctx the parse tree
	 */
	enterBaseType?: (ctx: BaseTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.baseType`.
	 * @param ctx the parse tree
	 */
	exitBaseType?: (ctx: BaseTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	enterCertainIdentifier?: (ctx: CertainIdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.certainIdentifier`.
	 * @param ctx the parse tree
	 */
	exitCertainIdentifier?: (ctx: CertainIdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterComparisonOperator?: (ctx: ComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.comparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitComparisonOperator?: (ctx: ComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.complexType`.
	 * @param ctx the parse tree
	 */
	enterComplexType?: (ctx: ComplexTypeContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.complexType`.
	 * @param ctx the parse tree
	 */
	exitComplexType?: (ctx: ComplexTypeContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.fieldLength`.
	 * @param ctx the parse tree
	 */
	enterFieldLength?: (ctx: FieldLengthContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.fieldLength`.
	 * @param ctx the parse tree
	 */
	exitFieldLength?: (ctx: FieldLengthContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.letterrange`.
	 * @param ctx the parse tree
	 */
	enterLetterrange?: (ctx: LetterrangeContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.letterrange`.
	 * @param ctx the parse tree
	 */
	exitLetterrange?: (ctx: LetterrangeContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.lineLabel`.
	 * @param ctx the parse tree
	 */
	enterLineLabel?: (ctx: LineLabelContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.lineLabel`.
	 * @param ctx the parse tree
	 */
	exitLineLabel?: (ctx: LineLabelContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 */
	enterPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.publicPrivateVisibility`.
	 * @param ctx the parse tree
	 */
	exitPublicPrivateVisibility?: (ctx: PublicPrivateVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 */
	enterPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.publicPrivateGlobalVisibility`.
	 * @param ctx the parse tree
	 */
	exitPublicPrivateGlobalVisibility?: (ctx: PublicPrivateGlobalVisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.typeHint`.
	 * @param ctx the parse tree
	 */
	enterTypeHint?: (ctx: TypeHintContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.typeHint`.
	 * @param ctx the parse tree
	 */
	exitTypeHint?: (ctx: TypeHintContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.visibility`.
	 * @param ctx the parse tree
	 */
	enterVisibility?: (ctx: VisibilityContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.visibility`.
	 * @param ctx the parse tree
	 */
	exitVisibility?: (ctx: VisibilityContext) => void;

	/**
	 * Enter a parse tree produced by `VisualBasic6Parser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	enterAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
	/**
	 * Exit a parse tree produced by `VisualBasic6Parser.ambiguousKeyword`.
	 * @param ctx the parse tree
	 */
	exitAmbiguousKeyword?: (ctx: AmbiguousKeywordContext) => void;
}

