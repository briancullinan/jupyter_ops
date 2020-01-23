// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cql3/CqlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RootContext } from "./CqlParser";
import { CqlsContext } from "./CqlParser";
import { StatementSeparatorContext } from "./CqlParser";
import { EmptyContext } from "./CqlParser";
import { CqlContext } from "./CqlParser";
import { RevokeContext } from "./CqlParser";
import { ListUsersContext } from "./CqlParser";
import { ListRolesContext } from "./CqlParser";
import { ListPermissionsContext } from "./CqlParser";
import { GrantContext } from "./CqlParser";
import { PriviledgeContext } from "./CqlParser";
import { ResourceContext } from "./CqlParser";
import { CreateUserContext } from "./CqlParser";
import { CreateRoleContext } from "./CqlParser";
import { CreateTypeContext } from "./CqlParser";
import { TypeMemberColumnListContext } from "./CqlParser";
import { CreateTriggerContext } from "./CqlParser";
import { CreateMaterializedViewContext } from "./CqlParser";
import { MaterializedViewWhereContext } from "./CqlParser";
import { ColumnNotNullListContext } from "./CqlParser";
import { ColumnNotNullContext } from "./CqlParser";
import { MaterializedViewOptionsContext } from "./CqlParser";
import { CreateKeyspaceContext } from "./CqlParser";
import { CreateFunctionContext } from "./CqlParser";
import { CodeBlockContext } from "./CqlParser";
import { ParamListContext } from "./CqlParser";
import { ReturnModeContext } from "./CqlParser";
import { CreateAggregateContext } from "./CqlParser";
import { InitCondDefinitionContext } from "./CqlParser";
import { InitCondHashContext } from "./CqlParser";
import { InitCondHashItemContext } from "./CqlParser";
import { InitCondListNestedContext } from "./CqlParser";
import { InitCondListContext } from "./CqlParser";
import { OrReplaceContext } from "./CqlParser";
import { AlterUserContext } from "./CqlParser";
import { UserPasswordContext } from "./CqlParser";
import { UserSuperUserContext } from "./CqlParser";
import { AlterTypeContext } from "./CqlParser";
import { AlterTypeOperationContext } from "./CqlParser";
import { AlterTypeRenameContext } from "./CqlParser";
import { AlterTypeRenameListContext } from "./CqlParser";
import { AlterTypeRenameItemContext } from "./CqlParser";
import { AlterTypeAddContext } from "./CqlParser";
import { AlterTypeAlterTypeContext } from "./CqlParser";
import { AlterTableContext } from "./CqlParser";
import { AlterTableOperationContext } from "./CqlParser";
import { AlterTableWithContext } from "./CqlParser";
import { AlterTableRenameContext } from "./CqlParser";
import { AlterTableDropCompactStorageContext } from "./CqlParser";
import { AlterTableDropColumnsContext } from "./CqlParser";
import { AlterTableDropColumnListContext } from "./CqlParser";
import { AlterTableAddContext } from "./CqlParser";
import { AlterTableColumnDefinitionContext } from "./CqlParser";
import { AlterRoleContext } from "./CqlParser";
import { RoleWithContext } from "./CqlParser";
import { RoleWithOptionsContext } from "./CqlParser";
import { AlterMaterializedViewContext } from "./CqlParser";
import { DropUserContext } from "./CqlParser";
import { DropTypeContext } from "./CqlParser";
import { DropMaterializedViewContext } from "./CqlParser";
import { DropAggregateContext } from "./CqlParser";
import { DropFunctionContext } from "./CqlParser";
import { DropTriggerContext } from "./CqlParser";
import { DropRoleContext } from "./CqlParser";
import { DropTableContext } from "./CqlParser";
import { DropKeyspaceContext } from "./CqlParser";
import { DropIndexContext } from "./CqlParser";
import { CreateTableContext } from "./CqlParser";
import { WithElementContext } from "./CqlParser";
import { ClusteringOrderContext } from "./CqlParser";
import { TableOptionsContext } from "./CqlParser";
import { TableOptionItemContext } from "./CqlParser";
import { TableOptionNameContext } from "./CqlParser";
import { TableOptionValueContext } from "./CqlParser";
import { OptionHashContext } from "./CqlParser";
import { OptionHashItemContext } from "./CqlParser";
import { OptionHashKeyContext } from "./CqlParser";
import { OptionHashValueContext } from "./CqlParser";
import { ColumnDefinitionListContext } from "./CqlParser";
import { ColumnDefinitionContext } from "./CqlParser";
import { PrimaryKeyColumnContext } from "./CqlParser";
import { PrimaryKeyElementContext } from "./CqlParser";
import { PrimaryKeyDefinitionContext } from "./CqlParser";
import { SinglePrimaryKeyContext } from "./CqlParser";
import { CompoundKeyContext } from "./CqlParser";
import { CompositeKeyContext } from "./CqlParser";
import { PartitionKeyListContext } from "./CqlParser";
import { ClusteringKeyListContext } from "./CqlParser";
import { PartitionKeyContext } from "./CqlParser";
import { ClusteringKeyContext } from "./CqlParser";
import { ApplyBatchContext } from "./CqlParser";
import { BeginBatchContext } from "./CqlParser";
import { BatchTypeContext } from "./CqlParser";
import { AlterKeyspaceContext } from "./CqlParser";
import { ReplicationListContext } from "./CqlParser";
import { ReplicationListItemContext } from "./CqlParser";
import { DurableWritesContext } from "./CqlParser";
import { UseContext } from "./CqlParser";
import { TruncateContext } from "./CqlParser";
import { CreateIndexContext } from "./CqlParser";
import { IndexNameContext } from "./CqlParser";
import { IndexColumnSpecContext } from "./CqlParser";
import { IndexKeysSpecContext } from "./CqlParser";
import { IndexEntriesSSpecContext } from "./CqlParser";
import { IndexFullSpecContext } from "./CqlParser";
import { DeleteContext } from "./CqlParser";
import { DeleteColumnListContext } from "./CqlParser";
import { DeleteColumnItemContext } from "./CqlParser";
import { UpdateContext } from "./CqlParser";
import { IfSpecContext } from "./CqlParser";
import { IfConditionListContext } from "./CqlParser";
import { IfConditionContext } from "./CqlParser";
import { AssignmentsContext } from "./CqlParser";
import { AssignmentElementContext } from "./CqlParser";
import { AssignmentSetContext } from "./CqlParser";
import { AssignmentMapContext } from "./CqlParser";
import { AssignmentListContext } from "./CqlParser";
import { InsertContext } from "./CqlParser";
import { UsingTtlTimestampContext } from "./CqlParser";
import { TimestampContext } from "./CqlParser";
import { TtlContext } from "./CqlParser";
import { UsingTimestampSpecContext } from "./CqlParser";
import { IfNotExistContext } from "./CqlParser";
import { IfExistContext } from "./CqlParser";
import { InsertValuesSpecContext } from "./CqlParser";
import { InsertColumnSpecContext } from "./CqlParser";
import { ColumnListContext } from "./CqlParser";
import { ExpressionListContext } from "./CqlParser";
import { SelectContext } from "./CqlParser";
import { AllowFilteringSpecContext } from "./CqlParser";
import { LimitSpecContext } from "./CqlParser";
import { FromSpecContext } from "./CqlParser";
import { FromSpecElementContext } from "./CqlParser";
import { OrderSpecContext } from "./CqlParser";
import { OrderSpecElementContext } from "./CqlParser";
import { WhereSpecContext } from "./CqlParser";
import { DistinctSpecContext } from "./CqlParser";
import { SelectElementsContext } from "./CqlParser";
import { SelectElementContext } from "./CqlParser";
import { RelationElementsContext } from "./CqlParser";
import { RelationElementContext } from "./CqlParser";
import { RelalationContainsContext } from "./CqlParser";
import { RelalationContainsKeyContext } from "./CqlParser";
import { FunctionCallContext } from "./CqlParser";
import { FunctionArgsContext } from "./CqlParser";
import { ConstantContext } from "./CqlParser";
import { DecimalLiteralContext } from "./CqlParser";
import { FloatLiteralContext } from "./CqlParser";
import { StringLiteralContext } from "./CqlParser";
import { BooleanLiteralContext } from "./CqlParser";
import { HexadecimalLiteralContext } from "./CqlParser";
import { KeyspaceContext } from "./CqlParser";
import { TableContext } from "./CqlParser";
import { ColumnContext } from "./CqlParser";
import { DataTypeContext } from "./CqlParser";
import { DataTypeNameContext } from "./CqlParser";
import { DataTypeDefinitionContext } from "./CqlParser";
import { OrderDirectionContext } from "./CqlParser";
import { RoleContext } from "./CqlParser";
import { TriggerContext } from "./CqlParser";
import { TriggerClassContext } from "./CqlParser";
import { MaterializedViewContext } from "./CqlParser";
import { TypeContext } from "./CqlParser";
import { AggregateContext } from "./CqlParser";
import { FunctionContext } from "./CqlParser";
import { LanguageContext } from "./CqlParser";
import { UserContext } from "./CqlParser";
import { PasswordContext } from "./CqlParser";
import { HashKeyContext } from "./CqlParser";
import { ParamContext } from "./CqlParser";
import { ParamNameContext } from "./CqlParser";
import { KwAddContext } from "./CqlParser";
import { KwAggregateContext } from "./CqlParser";
import { KwAllContext } from "./CqlParser";
import { KwAllPermissionsContext } from "./CqlParser";
import { KwAllowContext } from "./CqlParser";
import { KwAlterContext } from "./CqlParser";
import { KwAndContext } from "./CqlParser";
import { KwApplyContext } from "./CqlParser";
import { KwAsContext } from "./CqlParser";
import { KwAscContext } from "./CqlParser";
import { KwAuthorizeContext } from "./CqlParser";
import { KwBatchContext } from "./CqlParser";
import { KwBeginContext } from "./CqlParser";
import { KwByContext } from "./CqlParser";
import { KwCalledContext } from "./CqlParser";
import { KwClusteringContext } from "./CqlParser";
import { KwCompactContext } from "./CqlParser";
import { KwContainsContext } from "./CqlParser";
import { KwCreateContext } from "./CqlParser";
import { KwDeleteContext } from "./CqlParser";
import { KwDescContext } from "./CqlParser";
import { KwDescibeContext } from "./CqlParser";
import { KwDistinctContext } from "./CqlParser";
import { KwDropContext } from "./CqlParser";
import { KwDurableWritesContext } from "./CqlParser";
import { KwEntriesContext } from "./CqlParser";
import { KwExecuteContext } from "./CqlParser";
import { KwExistsContext } from "./CqlParser";
import { KwFilteringContext } from "./CqlParser";
import { KwFinalfuncContext } from "./CqlParser";
import { KwFromContext } from "./CqlParser";
import { KwFullContext } from "./CqlParser";
import { KwFunctionContext } from "./CqlParser";
import { KwFunctionsContext } from "./CqlParser";
import { KwGrantContext } from "./CqlParser";
import { KwIfContext } from "./CqlParser";
import { KwInContext } from "./CqlParser";
import { KwIndexContext } from "./CqlParser";
import { KwInitcondContext } from "./CqlParser";
import { KwInputContext } from "./CqlParser";
import { KwInsertContext } from "./CqlParser";
import { KwIntoContext } from "./CqlParser";
import { KwIsContext } from "./CqlParser";
import { KwKeyContext } from "./CqlParser";
import { KwKeysContext } from "./CqlParser";
import { KwKeyspaceContext } from "./CqlParser";
import { KwKeyspacesContext } from "./CqlParser";
import { KwLanguageContext } from "./CqlParser";
import { KwLimitContext } from "./CqlParser";
import { KwListContext } from "./CqlParser";
import { KwLoggedContext } from "./CqlParser";
import { KwLoginContext } from "./CqlParser";
import { KwMaterializedContext } from "./CqlParser";
import { KwModifyContext } from "./CqlParser";
import { KwNosuperuserContext } from "./CqlParser";
import { KwNorecursiveContext } from "./CqlParser";
import { KwNotContext } from "./CqlParser";
import { KwNullContext } from "./CqlParser";
import { KwOfContext } from "./CqlParser";
import { KwOnContext } from "./CqlParser";
import { KwOptionsContext } from "./CqlParser";
import { KwOrContext } from "./CqlParser";
import { KwOrderContext } from "./CqlParser";
import { KwPasswordContext } from "./CqlParser";
import { KwPrimaryContext } from "./CqlParser";
import { KwRenameContext } from "./CqlParser";
import { KwReplaceContext } from "./CqlParser";
import { KwReplicationContext } from "./CqlParser";
import { KwReturnsContext } from "./CqlParser";
import { KwRoleContext } from "./CqlParser";
import { KwRolesContext } from "./CqlParser";
import { KwSelectContext } from "./CqlParser";
import { KwSetContext } from "./CqlParser";
import { KwSfuncContext } from "./CqlParser";
import { KwStorageContext } from "./CqlParser";
import { KwStypeContext } from "./CqlParser";
import { KwSuperuserContext } from "./CqlParser";
import { KwTableContext } from "./CqlParser";
import { KwTimestampContext } from "./CqlParser";
import { KwToContext } from "./CqlParser";
import { KwTriggerContext } from "./CqlParser";
import { KwTruncateContext } from "./CqlParser";
import { KwTtlContext } from "./CqlParser";
import { KwTypeContext } from "./CqlParser";
import { KwUnloggedContext } from "./CqlParser";
import { KwUpdateContext } from "./CqlParser";
import { KwUseContext } from "./CqlParser";
import { KwUserContext } from "./CqlParser";
import { KwUsersContext } from "./CqlParser";
import { KwUsingContext } from "./CqlParser";
import { KwValuesContext } from "./CqlParser";
import { KwViewContext } from "./CqlParser";
import { KwWhereContext } from "./CqlParser";
import { KwWithContext } from "./CqlParser";
import { KwRevokeContext } from "./CqlParser";
import { EofContext } from "./CqlParser";
import { SyntaxBracketLrContext } from "./CqlParser";
import { SyntaxBracketRrContext } from "./CqlParser";
import { SyntaxBracketLcContext } from "./CqlParser";
import { SyntaxBracketRcContext } from "./CqlParser";
import { SyntaxBracketLaContext } from "./CqlParser";
import { SyntaxBracketRaContext } from "./CqlParser";
import { SyntaxBracketLsContext } from "./CqlParser";
import { SyntaxBracketRsContext } from "./CqlParser";
import { SyntaxCommaContext } from "./CqlParser";
import { SyntaxColonContext } from "./CqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `CqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface CqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `CqlParser.root`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoot?: (ctx: RootContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.cqls`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCqls?: (ctx: CqlsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.statementSeparator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementSeparator?: (ctx: StatementSeparatorContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.empty`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty?: (ctx: EmptyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.cql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCql?: (ctx: CqlContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.revoke`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRevoke?: (ctx: RevokeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.listUsers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListUsers?: (ctx: ListUsersContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.listRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListRoles?: (ctx: ListRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.listPermissions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPermissions?: (ctx: ListPermissionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.grant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant?: (ctx: GrantContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.priviledge`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPriviledge?: (ctx: PriviledgeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateUser?: (ctx: CreateUserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateRole?: (ctx: CreateRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateType?: (ctx: CreateTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.typeMemberColumnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeMemberColumnList?: (ctx: TypeMemberColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTrigger?: (ctx: CreateTriggerContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createMaterializedView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.materializedViewWhere`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaterializedViewWhere?: (ctx: MaterializedViewWhereContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.columnNotNullList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNotNullList?: (ctx: ColumnNotNullListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.columnNotNull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnNotNull?: (ctx: ColumnNotNullContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.materializedViewOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaterializedViewOptions?: (ctx: MaterializedViewOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createKeyspace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateKeyspace?: (ctx: CreateKeyspaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateFunction?: (ctx: CreateFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.codeBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCodeBlock?: (ctx: CodeBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.paramList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamList?: (ctx: ParamListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.returnMode`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnMode?: (ctx: ReturnModeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createAggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateAggregate?: (ctx: CreateAggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.initCondDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitCondDefinition?: (ctx: InitCondDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.initCondHash`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitCondHash?: (ctx: InitCondHashContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.initCondHashItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitCondHashItem?: (ctx: InitCondHashItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.initCondListNested`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitCondListNested?: (ctx: InitCondListNestedContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.initCondList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInitCondList?: (ctx: InitCondListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.orReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrReplace?: (ctx: OrReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterUser?: (ctx: AlterUserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.userPassword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserPassword?: (ctx: UserPasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.userSuperUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUserSuperUser?: (ctx: UserSuperUserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterType?: (ctx: AlterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeOperation?: (ctx: AlterTypeOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeRename?: (ctx: AlterTypeRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeRenameList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeRenameList?: (ctx: AlterTypeRenameListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeRenameItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeRenameItem?: (ctx: AlterTypeRenameItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeAdd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeAdd?: (ctx: AlterTypeAddContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTypeAlterType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTypeAlterType?: (ctx: AlterTypeAlterTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTable?: (ctx: AlterTableContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableOperation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableOperation?: (ctx: AlterTableOperationContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableWith?: (ctx: AlterTableWithContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableRename?: (ctx: AlterTableRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableDropCompactStorage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableDropCompactStorage?: (ctx: AlterTableDropCompactStorageContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableDropColumns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableDropColumns?: (ctx: AlterTableDropColumnsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableDropColumnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableDropColumnList?: (ctx: AlterTableDropColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableAdd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableAdd?: (ctx: AlterTableAddContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterTableColumnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterTableColumnDefinition?: (ctx: AlterTableColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterRole?: (ctx: AlterRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.roleWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoleWith?: (ctx: RoleWithContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.roleWithOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRoleWithOptions?: (ctx: RoleWithOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterMaterializedView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterMaterializedView?: (ctx: AlterMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropUser?: (ctx: DropUserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropType?: (ctx: DropTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropMaterializedView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropMaterializedView?: (ctx: DropMaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropAggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropAggregate?: (ctx: DropAggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropFunction?: (ctx: DropFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTrigger?: (ctx: DropTriggerContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropRole?: (ctx: DropRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropTable?: (ctx: DropTableContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropKeyspace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropKeyspace?: (ctx: DropKeyspaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dropIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDropIndex?: (ctx: DropIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateTable?: (ctx: CreateTableContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.withElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWithElement?: (ctx: WithElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.clusteringOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusteringOrder?: (ctx: ClusteringOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.tableOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptions?: (ctx: TableOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.tableOptionItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionItem?: (ctx: TableOptionItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.tableOptionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionName?: (ctx: TableOptionNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.tableOptionValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTableOptionValue?: (ctx: TableOptionValueContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.optionHash`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionHash?: (ctx: OptionHashContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.optionHashItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionHashItem?: (ctx: OptionHashItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.optionHashKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionHashKey?: (ctx: OptionHashKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.optionHashValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptionHashValue?: (ctx: OptionHashValueContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.columnDefinitionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinitionList?: (ctx: ColumnDefinitionListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnDefinition?: (ctx: ColumnDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.primaryKeyColumn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryKeyColumn?: (ctx: PrimaryKeyColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.primaryKeyElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryKeyElement?: (ctx: PrimaryKeyElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.primaryKeyDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryKeyDefinition?: (ctx: PrimaryKeyDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.singlePrimaryKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSinglePrimaryKey?: (ctx: SinglePrimaryKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.compoundKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompoundKey?: (ctx: CompoundKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.compositeKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompositeKey?: (ctx: CompositeKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.partitionKeyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionKeyList?: (ctx: PartitionKeyListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.clusteringKeyList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusteringKeyList?: (ctx: ClusteringKeyListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.partitionKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartitionKey?: (ctx: PartitionKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.clusteringKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClusteringKey?: (ctx: ClusteringKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.applyBatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitApplyBatch?: (ctx: ApplyBatchContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.beginBatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBeginBatch?: (ctx: BeginBatchContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.batchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBatchType?: (ctx: BatchTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.alterKeyspace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlterKeyspace?: (ctx: AlterKeyspaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.replicationList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationList?: (ctx: ReplicationListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.replicationListItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReplicationListItem?: (ctx: ReplicationListItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.durableWrites`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDurableWrites?: (ctx: DurableWritesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.use`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse?: (ctx: UseContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.truncate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncate?: (ctx: TruncateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.createIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreateIndex?: (ctx: CreateIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.indexName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexName?: (ctx: IndexNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.indexColumnSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexColumnSpec?: (ctx: IndexColumnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.indexKeysSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexKeysSpec?: (ctx: IndexKeysSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.indexEntriesSSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexEntriesSSpec?: (ctx: IndexEntriesSSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.indexFullSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndexFullSpec?: (ctx: IndexFullSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete?: (ctx: DeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.deleteColumnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteColumnList?: (ctx: DeleteColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.deleteColumnItem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeleteColumnItem?: (ctx: DeleteColumnItemContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.update`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate?: (ctx: UpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ifSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfSpec?: (ctx: IfSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ifConditionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfConditionList?: (ctx: IfConditionListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ifCondition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfCondition?: (ctx: IfConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.assignments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignments?: (ctx: AssignmentsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.assignmentElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentElement?: (ctx: AssignmentElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.assignmentSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentSet?: (ctx: AssignmentSetContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.assignmentMap`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentMap?: (ctx: AssignmentMapContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.assignmentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentList?: (ctx: AssignmentListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.insert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert?: (ctx: InsertContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.usingTtlTimestamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingTtlTimestamp?: (ctx: UsingTtlTimestampContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.timestamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTimestamp?: (ctx: TimestampContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ttl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTtl?: (ctx: TtlContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.usingTimestampSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUsingTimestampSpec?: (ctx: UsingTimestampSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ifNotExist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfNotExist?: (ctx: IfNotExistContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.ifExist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfExist?: (ctx: IfExistContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.insertValuesSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertValuesSpec?: (ctx: InsertValuesSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.insertColumnSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsertColumnSpec?: (ctx: InsertColumnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.columnList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumnList?: (ctx: ColumnListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.expressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionList?: (ctx: ExpressionListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.select`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect?: (ctx: SelectContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.allowFilteringSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAllowFilteringSpec?: (ctx: AllowFilteringSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.limitSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLimitSpec?: (ctx: LimitSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.fromSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSpec?: (ctx: FromSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.fromSpecElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFromSpecElement?: (ctx: FromSpecElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.orderSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpec?: (ctx: OrderSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.orderSpecElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderSpecElement?: (ctx: OrderSpecElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.whereSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhereSpec?: (ctx: WhereSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.distinctSpec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDistinctSpec?: (ctx: DistinctSpecContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.selectElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectElements?: (ctx: SelectElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.selectElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelectElement?: (ctx: SelectElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.relationElements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationElements?: (ctx: RelationElementsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.relationElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationElement?: (ctx: RelationElementContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.relalationContains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelalationContains?: (ctx: RelalationContainsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.relalationContainsKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelalationContainsKey?: (ctx: RelalationContainsKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.functionCall`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionCall?: (ctx: FunctionCallContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.functionArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionArgs?: (ctx: FunctionArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecimalLiteral?: (ctx: DecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.floatLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatLiteral?: (ctx: FloatLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStringLiteral?: (ctx: StringLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBooleanLiteral?: (ctx: BooleanLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.keyspace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKeyspace?: (ctx: KeyspaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable?: (ctx: TableContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.column`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn?: (ctx: ColumnContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dataTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeName?: (ctx: DataTypeNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.dataTypeDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeDefinition?: (ctx: DataTypeDefinitionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.orderDirection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrderDirection?: (ctx: OrderDirectionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRole?: (ctx: RoleContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrigger?: (ctx: TriggerContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.triggerClass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTriggerClass?: (ctx: TriggerClassContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.materializedView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaterializedView?: (ctx: MaterializedViewContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate?: (ctx: AggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction?: (ctx: FunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.language`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLanguage?: (ctx: LanguageContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUser?: (ctx: UserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.password`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPassword?: (ctx: PasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.hashKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHashKey?: (ctx: HashKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam?: (ctx: ParamContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.paramName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParamName?: (ctx: ParamNameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAdd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAdd?: (ctx: KwAddContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAggregate?: (ctx: KwAggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAll`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAll?: (ctx: KwAllContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAllPermissions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAllPermissions?: (ctx: KwAllPermissionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAllow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAllow?: (ctx: KwAllowContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAlter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAlter?: (ctx: KwAlterContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAnd`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAnd?: (ctx: KwAndContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwApply`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwApply?: (ctx: KwApplyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAs?: (ctx: KwAsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAsc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAsc?: (ctx: KwAscContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwAuthorize`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwAuthorize?: (ctx: KwAuthorizeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwBatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwBatch?: (ctx: KwBatchContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwBegin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwBegin?: (ctx: KwBeginContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwBy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwBy?: (ctx: KwByContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwCalled`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwCalled?: (ctx: KwCalledContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwClustering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwClustering?: (ctx: KwClusteringContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwCompact`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwCompact?: (ctx: KwCompactContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwContains`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwContains?: (ctx: KwContainsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwCreate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwCreate?: (ctx: KwCreateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDelete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDelete?: (ctx: KwDeleteContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDesc?: (ctx: KwDescContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDescibe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDescibe?: (ctx: KwDescibeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDistinct`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDistinct?: (ctx: KwDistinctContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDrop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDrop?: (ctx: KwDropContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwDurableWrites`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwDurableWrites?: (ctx: KwDurableWritesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwEntries`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwEntries?: (ctx: KwEntriesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwExecute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwExecute?: (ctx: KwExecuteContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwExists`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwExists?: (ctx: KwExistsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFiltering`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFiltering?: (ctx: KwFilteringContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFinalfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFinalfunc?: (ctx: KwFinalfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFrom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFrom?: (ctx: KwFromContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFull?: (ctx: KwFullContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFunction`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFunction?: (ctx: KwFunctionContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwFunctions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwFunctions?: (ctx: KwFunctionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwGrant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwGrant?: (ctx: KwGrantContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwIf?: (ctx: KwIfContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwIn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwIn?: (ctx: KwInContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwIndex`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwIndex?: (ctx: KwIndexContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwInitcond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwInitcond?: (ctx: KwInitcondContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwInput?: (ctx: KwInputContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwInsert`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwInsert?: (ctx: KwInsertContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwInto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwInto?: (ctx: KwIntoContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwIs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwIs?: (ctx: KwIsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwKey`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwKey?: (ctx: KwKeyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwKeys`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwKeys?: (ctx: KwKeysContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwKeyspace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwKeyspace?: (ctx: KwKeyspaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwKeyspaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwKeyspaces?: (ctx: KwKeyspacesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwLanguage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwLanguage?: (ctx: KwLanguageContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwLimit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwLimit?: (ctx: KwLimitContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwList?: (ctx: KwListContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwLogged`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwLogged?: (ctx: KwLoggedContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwLogin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwLogin?: (ctx: KwLoginContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwMaterialized`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwMaterialized?: (ctx: KwMaterializedContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwModify`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwModify?: (ctx: KwModifyContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwNosuperuser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwNosuperuser?: (ctx: KwNosuperuserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwNorecursive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwNorecursive?: (ctx: KwNorecursiveContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwNot`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwNot?: (ctx: KwNotContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwNull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwNull?: (ctx: KwNullContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwOf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwOf?: (ctx: KwOfContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwOn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwOn?: (ctx: KwOnContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwOptions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwOptions?: (ctx: KwOptionsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwOr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwOr?: (ctx: KwOrContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwOrder`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwOrder?: (ctx: KwOrderContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwPassword`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwPassword?: (ctx: KwPasswordContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwPrimary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwPrimary?: (ctx: KwPrimaryContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwRename`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwRename?: (ctx: KwRenameContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwReplace`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwReplace?: (ctx: KwReplaceContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwReplication`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwReplication?: (ctx: KwReplicationContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwReturns`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwReturns?: (ctx: KwReturnsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwRole`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwRole?: (ctx: KwRoleContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwRoles`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwRoles?: (ctx: KwRolesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwSelect`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwSelect?: (ctx: KwSelectContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwSet?: (ctx: KwSetContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwSfunc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwSfunc?: (ctx: KwSfuncContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwStorage`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwStorage?: (ctx: KwStorageContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwStype`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwStype?: (ctx: KwStypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwSuperuser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwSuperuser?: (ctx: KwSuperuserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTable?: (ctx: KwTableContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTimestamp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTimestamp?: (ctx: KwTimestampContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTo?: (ctx: KwToContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTrigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTrigger?: (ctx: KwTriggerContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTruncate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTruncate?: (ctx: KwTruncateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwTtl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwTtl?: (ctx: KwTtlContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwType?: (ctx: KwTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUnlogged`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUnlogged?: (ctx: KwUnloggedContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUpdate?: (ctx: KwUpdateContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUse`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUse?: (ctx: KwUseContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUser`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUser?: (ctx: KwUserContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUsers`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUsers?: (ctx: KwUsersContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwUsing`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwUsing?: (ctx: KwUsingContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwValues`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwValues?: (ctx: KwValuesContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwView`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwView?: (ctx: KwViewContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwWhere`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwWhere?: (ctx: KwWhereContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwWith`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwWith?: (ctx: KwWithContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.kwRevoke`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKwRevoke?: (ctx: KwRevokeContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.eof`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEof?: (ctx: EofContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketLr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketLr?: (ctx: SyntaxBracketLrContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketRr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketRr?: (ctx: SyntaxBracketRrContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketLc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketLc?: (ctx: SyntaxBracketLcContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketRc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketRc?: (ctx: SyntaxBracketRcContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketLa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketLa?: (ctx: SyntaxBracketLaContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketRa`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketRa?: (ctx: SyntaxBracketRaContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketLs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketLs?: (ctx: SyntaxBracketLsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxBracketRs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxBracketRs?: (ctx: SyntaxBracketRsContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxComma`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxComma?: (ctx: SyntaxCommaContext) => Result;

	/**
	 * Visit a parse tree produced by `CqlParser.syntaxColon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSyntaxColon?: (ctx: SyntaxColonContext) => Result;
}

