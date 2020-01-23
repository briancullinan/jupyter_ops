// Generated from /Users/briancullinan/jupyter_ops/Resources/Parsers/cql3/CqlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `CqlParser`.
 */
export interface CqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `CqlParser.root`.
	 * @param ctx the parse tree
	 */
	enterRoot?: (ctx: RootContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.root`.
	 * @param ctx the parse tree
	 */
	exitRoot?: (ctx: RootContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.cqls`.
	 * @param ctx the parse tree
	 */
	enterCqls?: (ctx: CqlsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.cqls`.
	 * @param ctx the parse tree
	 */
	exitCqls?: (ctx: CqlsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.statementSeparator`.
	 * @param ctx the parse tree
	 */
	enterStatementSeparator?: (ctx: StatementSeparatorContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.statementSeparator`.
	 * @param ctx the parse tree
	 */
	exitStatementSeparator?: (ctx: StatementSeparatorContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.empty`.
	 * @param ctx the parse tree
	 */
	enterEmpty?: (ctx: EmptyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.empty`.
	 * @param ctx the parse tree
	 */
	exitEmpty?: (ctx: EmptyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.cql`.
	 * @param ctx the parse tree
	 */
	enterCql?: (ctx: CqlContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.cql`.
	 * @param ctx the parse tree
	 */
	exitCql?: (ctx: CqlContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.revoke`.
	 * @param ctx the parse tree
	 */
	enterRevoke?: (ctx: RevokeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.revoke`.
	 * @param ctx the parse tree
	 */
	exitRevoke?: (ctx: RevokeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.listUsers`.
	 * @param ctx the parse tree
	 */
	enterListUsers?: (ctx: ListUsersContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.listUsers`.
	 * @param ctx the parse tree
	 */
	exitListUsers?: (ctx: ListUsersContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.listRoles`.
	 * @param ctx the parse tree
	 */
	enterListRoles?: (ctx: ListRolesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.listRoles`.
	 * @param ctx the parse tree
	 */
	exitListRoles?: (ctx: ListRolesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.listPermissions`.
	 * @param ctx the parse tree
	 */
	enterListPermissions?: (ctx: ListPermissionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.listPermissions`.
	 * @param ctx the parse tree
	 */
	exitListPermissions?: (ctx: ListPermissionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.grant`.
	 * @param ctx the parse tree
	 */
	enterGrant?: (ctx: GrantContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.grant`.
	 * @param ctx the parse tree
	 */
	exitGrant?: (ctx: GrantContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.priviledge`.
	 * @param ctx the parse tree
	 */
	enterPriviledge?: (ctx: PriviledgeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.priviledge`.
	 * @param ctx the parse tree
	 */
	exitPriviledge?: (ctx: PriviledgeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.resource`.
	 * @param ctx the parse tree
	 */
	enterResource?: (ctx: ResourceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.resource`.
	 * @param ctx the parse tree
	 */
	exitResource?: (ctx: ResourceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	enterCreateUser?: (ctx: CreateUserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createUser`.
	 * @param ctx the parse tree
	 */
	exitCreateUser?: (ctx: CreateUserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createRole`.
	 * @param ctx the parse tree
	 */
	enterCreateRole?: (ctx: CreateRoleContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createRole`.
	 * @param ctx the parse tree
	 */
	exitCreateRole?: (ctx: CreateRoleContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createType`.
	 * @param ctx the parse tree
	 */
	enterCreateType?: (ctx: CreateTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createType`.
	 * @param ctx the parse tree
	 */
	exitCreateType?: (ctx: CreateTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.typeMemberColumnList`.
	 * @param ctx the parse tree
	 */
	enterTypeMemberColumnList?: (ctx: TypeMemberColumnListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.typeMemberColumnList`.
	 * @param ctx the parse tree
	 */
	exitTypeMemberColumnList?: (ctx: TypeMemberColumnListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	enterCreateTrigger?: (ctx: CreateTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createTrigger`.
	 * @param ctx the parse tree
	 */
	exitCreateTrigger?: (ctx: CreateTriggerContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createMaterializedView`.
	 * @param ctx the parse tree
	 */
	enterCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createMaterializedView`.
	 * @param ctx the parse tree
	 */
	exitCreateMaterializedView?: (ctx: CreateMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.materializedViewWhere`.
	 * @param ctx the parse tree
	 */
	enterMaterializedViewWhere?: (ctx: MaterializedViewWhereContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.materializedViewWhere`.
	 * @param ctx the parse tree
	 */
	exitMaterializedViewWhere?: (ctx: MaterializedViewWhereContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.columnNotNullList`.
	 * @param ctx the parse tree
	 */
	enterColumnNotNullList?: (ctx: ColumnNotNullListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.columnNotNullList`.
	 * @param ctx the parse tree
	 */
	exitColumnNotNullList?: (ctx: ColumnNotNullListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.columnNotNull`.
	 * @param ctx the parse tree
	 */
	enterColumnNotNull?: (ctx: ColumnNotNullContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.columnNotNull`.
	 * @param ctx the parse tree
	 */
	exitColumnNotNull?: (ctx: ColumnNotNullContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.materializedViewOptions`.
	 * @param ctx the parse tree
	 */
	enterMaterializedViewOptions?: (ctx: MaterializedViewOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.materializedViewOptions`.
	 * @param ctx the parse tree
	 */
	exitMaterializedViewOptions?: (ctx: MaterializedViewOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createKeyspace`.
	 * @param ctx the parse tree
	 */
	enterCreateKeyspace?: (ctx: CreateKeyspaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createKeyspace`.
	 * @param ctx the parse tree
	 */
	exitCreateKeyspace?: (ctx: CreateKeyspaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	enterCreateFunction?: (ctx: CreateFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createFunction`.
	 * @param ctx the parse tree
	 */
	exitCreateFunction?: (ctx: CreateFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	enterCodeBlock?: (ctx: CodeBlockContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.codeBlock`.
	 * @param ctx the parse tree
	 */
	exitCodeBlock?: (ctx: CodeBlockContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.paramList`.
	 * @param ctx the parse tree
	 */
	enterParamList?: (ctx: ParamListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.paramList`.
	 * @param ctx the parse tree
	 */
	exitParamList?: (ctx: ParamListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.returnMode`.
	 * @param ctx the parse tree
	 */
	enterReturnMode?: (ctx: ReturnModeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.returnMode`.
	 * @param ctx the parse tree
	 */
	exitReturnMode?: (ctx: ReturnModeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createAggregate`.
	 * @param ctx the parse tree
	 */
	enterCreateAggregate?: (ctx: CreateAggregateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createAggregate`.
	 * @param ctx the parse tree
	 */
	exitCreateAggregate?: (ctx: CreateAggregateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.initCondDefinition`.
	 * @param ctx the parse tree
	 */
	enterInitCondDefinition?: (ctx: InitCondDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.initCondDefinition`.
	 * @param ctx the parse tree
	 */
	exitInitCondDefinition?: (ctx: InitCondDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.initCondHash`.
	 * @param ctx the parse tree
	 */
	enterInitCondHash?: (ctx: InitCondHashContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.initCondHash`.
	 * @param ctx the parse tree
	 */
	exitInitCondHash?: (ctx: InitCondHashContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.initCondHashItem`.
	 * @param ctx the parse tree
	 */
	enterInitCondHashItem?: (ctx: InitCondHashItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.initCondHashItem`.
	 * @param ctx the parse tree
	 */
	exitInitCondHashItem?: (ctx: InitCondHashItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.initCondListNested`.
	 * @param ctx the parse tree
	 */
	enterInitCondListNested?: (ctx: InitCondListNestedContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.initCondListNested`.
	 * @param ctx the parse tree
	 */
	exitInitCondListNested?: (ctx: InitCondListNestedContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.initCondList`.
	 * @param ctx the parse tree
	 */
	enterInitCondList?: (ctx: InitCondListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.initCondList`.
	 * @param ctx the parse tree
	 */
	exitInitCondList?: (ctx: InitCondListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.orReplace`.
	 * @param ctx the parse tree
	 */
	enterOrReplace?: (ctx: OrReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.orReplace`.
	 * @param ctx the parse tree
	 */
	exitOrReplace?: (ctx: OrReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	enterAlterUser?: (ctx: AlterUserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterUser`.
	 * @param ctx the parse tree
	 */
	exitAlterUser?: (ctx: AlterUserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.userPassword`.
	 * @param ctx the parse tree
	 */
	enterUserPassword?: (ctx: UserPasswordContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.userPassword`.
	 * @param ctx the parse tree
	 */
	exitUserPassword?: (ctx: UserPasswordContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.userSuperUser`.
	 * @param ctx the parse tree
	 */
	enterUserSuperUser?: (ctx: UserSuperUserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.userSuperUser`.
	 * @param ctx the parse tree
	 */
	exitUserSuperUser?: (ctx: UserSuperUserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterType`.
	 * @param ctx the parse tree
	 */
	enterAlterType?: (ctx: AlterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterType`.
	 * @param ctx the parse tree
	 */
	exitAlterType?: (ctx: AlterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeOperation`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeOperation?: (ctx: AlterTypeOperationContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeOperation`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeOperation?: (ctx: AlterTypeOperationContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeRename`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeRename?: (ctx: AlterTypeRenameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeRename`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeRename?: (ctx: AlterTypeRenameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeRenameList`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeRenameList?: (ctx: AlterTypeRenameListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeRenameList`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeRenameList?: (ctx: AlterTypeRenameListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeRenameItem`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeRenameItem?: (ctx: AlterTypeRenameItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeRenameItem`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeRenameItem?: (ctx: AlterTypeRenameItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeAdd`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeAdd?: (ctx: AlterTypeAddContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeAdd`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeAdd?: (ctx: AlterTypeAddContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTypeAlterType`.
	 * @param ctx the parse tree
	 */
	enterAlterTypeAlterType?: (ctx: AlterTypeAlterTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTypeAlterType`.
	 * @param ctx the parse tree
	 */
	exitAlterTypeAlterType?: (ctx: AlterTypeAlterTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	enterAlterTable?: (ctx: AlterTableContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTable`.
	 * @param ctx the parse tree
	 */
	exitAlterTable?: (ctx: AlterTableContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableOperation`.
	 * @param ctx the parse tree
	 */
	enterAlterTableOperation?: (ctx: AlterTableOperationContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableOperation`.
	 * @param ctx the parse tree
	 */
	exitAlterTableOperation?: (ctx: AlterTableOperationContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableWith`.
	 * @param ctx the parse tree
	 */
	enterAlterTableWith?: (ctx: AlterTableWithContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableWith`.
	 * @param ctx the parse tree
	 */
	exitAlterTableWith?: (ctx: AlterTableWithContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableRename`.
	 * @param ctx the parse tree
	 */
	enterAlterTableRename?: (ctx: AlterTableRenameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableRename`.
	 * @param ctx the parse tree
	 */
	exitAlterTableRename?: (ctx: AlterTableRenameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableDropCompactStorage`.
	 * @param ctx the parse tree
	 */
	enterAlterTableDropCompactStorage?: (ctx: AlterTableDropCompactStorageContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableDropCompactStorage`.
	 * @param ctx the parse tree
	 */
	exitAlterTableDropCompactStorage?: (ctx: AlterTableDropCompactStorageContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableDropColumns`.
	 * @param ctx the parse tree
	 */
	enterAlterTableDropColumns?: (ctx: AlterTableDropColumnsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableDropColumns`.
	 * @param ctx the parse tree
	 */
	exitAlterTableDropColumns?: (ctx: AlterTableDropColumnsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableDropColumnList`.
	 * @param ctx the parse tree
	 */
	enterAlterTableDropColumnList?: (ctx: AlterTableDropColumnListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableDropColumnList`.
	 * @param ctx the parse tree
	 */
	exitAlterTableDropColumnList?: (ctx: AlterTableDropColumnListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableAdd`.
	 * @param ctx the parse tree
	 */
	enterAlterTableAdd?: (ctx: AlterTableAddContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableAdd`.
	 * @param ctx the parse tree
	 */
	exitAlterTableAdd?: (ctx: AlterTableAddContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterTableColumnDefinition`.
	 * @param ctx the parse tree
	 */
	enterAlterTableColumnDefinition?: (ctx: AlterTableColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterTableColumnDefinition`.
	 * @param ctx the parse tree
	 */
	exitAlterTableColumnDefinition?: (ctx: AlterTableColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterRole`.
	 * @param ctx the parse tree
	 */
	enterAlterRole?: (ctx: AlterRoleContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterRole`.
	 * @param ctx the parse tree
	 */
	exitAlterRole?: (ctx: AlterRoleContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.roleWith`.
	 * @param ctx the parse tree
	 */
	enterRoleWith?: (ctx: RoleWithContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.roleWith`.
	 * @param ctx the parse tree
	 */
	exitRoleWith?: (ctx: RoleWithContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.roleWithOptions`.
	 * @param ctx the parse tree
	 */
	enterRoleWithOptions?: (ctx: RoleWithOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.roleWithOptions`.
	 * @param ctx the parse tree
	 */
	exitRoleWithOptions?: (ctx: RoleWithOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterMaterializedView`.
	 * @param ctx the parse tree
	 */
	enterAlterMaterializedView?: (ctx: AlterMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterMaterializedView`.
	 * @param ctx the parse tree
	 */
	exitAlterMaterializedView?: (ctx: AlterMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropUser`.
	 * @param ctx the parse tree
	 */
	enterDropUser?: (ctx: DropUserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropUser`.
	 * @param ctx the parse tree
	 */
	exitDropUser?: (ctx: DropUserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropType`.
	 * @param ctx the parse tree
	 */
	enterDropType?: (ctx: DropTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropType`.
	 * @param ctx the parse tree
	 */
	exitDropType?: (ctx: DropTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropMaterializedView`.
	 * @param ctx the parse tree
	 */
	enterDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropMaterializedView`.
	 * @param ctx the parse tree
	 */
	exitDropMaterializedView?: (ctx: DropMaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropAggregate`.
	 * @param ctx the parse tree
	 */
	enterDropAggregate?: (ctx: DropAggregateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropAggregate`.
	 * @param ctx the parse tree
	 */
	exitDropAggregate?: (ctx: DropAggregateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	enterDropFunction?: (ctx: DropFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropFunction`.
	 * @param ctx the parse tree
	 */
	exitDropFunction?: (ctx: DropFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	enterDropTrigger?: (ctx: DropTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropTrigger`.
	 * @param ctx the parse tree
	 */
	exitDropTrigger?: (ctx: DropTriggerContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropRole`.
	 * @param ctx the parse tree
	 */
	enterDropRole?: (ctx: DropRoleContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropRole`.
	 * @param ctx the parse tree
	 */
	exitDropRole?: (ctx: DropRoleContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	enterDropTable?: (ctx: DropTableContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropTable`.
	 * @param ctx the parse tree
	 */
	exitDropTable?: (ctx: DropTableContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropKeyspace`.
	 * @param ctx the parse tree
	 */
	enterDropKeyspace?: (ctx: DropKeyspaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropKeyspace`.
	 * @param ctx the parse tree
	 */
	exitDropKeyspace?: (ctx: DropKeyspaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	enterDropIndex?: (ctx: DropIndexContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dropIndex`.
	 * @param ctx the parse tree
	 */
	exitDropIndex?: (ctx: DropIndexContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	enterCreateTable?: (ctx: CreateTableContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createTable`.
	 * @param ctx the parse tree
	 */
	exitCreateTable?: (ctx: CreateTableContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.withElement`.
	 * @param ctx the parse tree
	 */
	enterWithElement?: (ctx: WithElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.withElement`.
	 * @param ctx the parse tree
	 */
	exitWithElement?: (ctx: WithElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.clusteringOrder`.
	 * @param ctx the parse tree
	 */
	enterClusteringOrder?: (ctx: ClusteringOrderContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.clusteringOrder`.
	 * @param ctx the parse tree
	 */
	exitClusteringOrder?: (ctx: ClusteringOrderContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.tableOptions`.
	 * @param ctx the parse tree
	 */
	enterTableOptions?: (ctx: TableOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.tableOptions`.
	 * @param ctx the parse tree
	 */
	exitTableOptions?: (ctx: TableOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.tableOptionItem`.
	 * @param ctx the parse tree
	 */
	enterTableOptionItem?: (ctx: TableOptionItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.tableOptionItem`.
	 * @param ctx the parse tree
	 */
	exitTableOptionItem?: (ctx: TableOptionItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.tableOptionName`.
	 * @param ctx the parse tree
	 */
	enterTableOptionName?: (ctx: TableOptionNameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.tableOptionName`.
	 * @param ctx the parse tree
	 */
	exitTableOptionName?: (ctx: TableOptionNameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.tableOptionValue`.
	 * @param ctx the parse tree
	 */
	enterTableOptionValue?: (ctx: TableOptionValueContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.tableOptionValue`.
	 * @param ctx the parse tree
	 */
	exitTableOptionValue?: (ctx: TableOptionValueContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.optionHash`.
	 * @param ctx the parse tree
	 */
	enterOptionHash?: (ctx: OptionHashContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.optionHash`.
	 * @param ctx the parse tree
	 */
	exitOptionHash?: (ctx: OptionHashContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.optionHashItem`.
	 * @param ctx the parse tree
	 */
	enterOptionHashItem?: (ctx: OptionHashItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.optionHashItem`.
	 * @param ctx the parse tree
	 */
	exitOptionHashItem?: (ctx: OptionHashItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.optionHashKey`.
	 * @param ctx the parse tree
	 */
	enterOptionHashKey?: (ctx: OptionHashKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.optionHashKey`.
	 * @param ctx the parse tree
	 */
	exitOptionHashKey?: (ctx: OptionHashKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.optionHashValue`.
	 * @param ctx the parse tree
	 */
	enterOptionHashValue?: (ctx: OptionHashValueContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.optionHashValue`.
	 * @param ctx the parse tree
	 */
	exitOptionHashValue?: (ctx: OptionHashValueContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.columnDefinitionList`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinitionList?: (ctx: ColumnDefinitionListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.columnDefinitionList`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinitionList?: (ctx: ColumnDefinitionListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	enterColumnDefinition?: (ctx: ColumnDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.columnDefinition`.
	 * @param ctx the parse tree
	 */
	exitColumnDefinition?: (ctx: ColumnDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.primaryKeyColumn`.
	 * @param ctx the parse tree
	 */
	enterPrimaryKeyColumn?: (ctx: PrimaryKeyColumnContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.primaryKeyColumn`.
	 * @param ctx the parse tree
	 */
	exitPrimaryKeyColumn?: (ctx: PrimaryKeyColumnContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.primaryKeyElement`.
	 * @param ctx the parse tree
	 */
	enterPrimaryKeyElement?: (ctx: PrimaryKeyElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.primaryKeyElement`.
	 * @param ctx the parse tree
	 */
	exitPrimaryKeyElement?: (ctx: PrimaryKeyElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.primaryKeyDefinition`.
	 * @param ctx the parse tree
	 */
	enterPrimaryKeyDefinition?: (ctx: PrimaryKeyDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.primaryKeyDefinition`.
	 * @param ctx the parse tree
	 */
	exitPrimaryKeyDefinition?: (ctx: PrimaryKeyDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.singlePrimaryKey`.
	 * @param ctx the parse tree
	 */
	enterSinglePrimaryKey?: (ctx: SinglePrimaryKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.singlePrimaryKey`.
	 * @param ctx the parse tree
	 */
	exitSinglePrimaryKey?: (ctx: SinglePrimaryKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.compoundKey`.
	 * @param ctx the parse tree
	 */
	enterCompoundKey?: (ctx: CompoundKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.compoundKey`.
	 * @param ctx the parse tree
	 */
	exitCompoundKey?: (ctx: CompoundKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.compositeKey`.
	 * @param ctx the parse tree
	 */
	enterCompositeKey?: (ctx: CompositeKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.compositeKey`.
	 * @param ctx the parse tree
	 */
	exitCompositeKey?: (ctx: CompositeKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.partitionKeyList`.
	 * @param ctx the parse tree
	 */
	enterPartitionKeyList?: (ctx: PartitionKeyListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.partitionKeyList`.
	 * @param ctx the parse tree
	 */
	exitPartitionKeyList?: (ctx: PartitionKeyListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.clusteringKeyList`.
	 * @param ctx the parse tree
	 */
	enterClusteringKeyList?: (ctx: ClusteringKeyListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.clusteringKeyList`.
	 * @param ctx the parse tree
	 */
	exitClusteringKeyList?: (ctx: ClusteringKeyListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.partitionKey`.
	 * @param ctx the parse tree
	 */
	enterPartitionKey?: (ctx: PartitionKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.partitionKey`.
	 * @param ctx the parse tree
	 */
	exitPartitionKey?: (ctx: PartitionKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.clusteringKey`.
	 * @param ctx the parse tree
	 */
	enterClusteringKey?: (ctx: ClusteringKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.clusteringKey`.
	 * @param ctx the parse tree
	 */
	exitClusteringKey?: (ctx: ClusteringKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.applyBatch`.
	 * @param ctx the parse tree
	 */
	enterApplyBatch?: (ctx: ApplyBatchContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.applyBatch`.
	 * @param ctx the parse tree
	 */
	exitApplyBatch?: (ctx: ApplyBatchContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.beginBatch`.
	 * @param ctx the parse tree
	 */
	enterBeginBatch?: (ctx: BeginBatchContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.beginBatch`.
	 * @param ctx the parse tree
	 */
	exitBeginBatch?: (ctx: BeginBatchContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.batchType`.
	 * @param ctx the parse tree
	 */
	enterBatchType?: (ctx: BatchTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.batchType`.
	 * @param ctx the parse tree
	 */
	exitBatchType?: (ctx: BatchTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.alterKeyspace`.
	 * @param ctx the parse tree
	 */
	enterAlterKeyspace?: (ctx: AlterKeyspaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.alterKeyspace`.
	 * @param ctx the parse tree
	 */
	exitAlterKeyspace?: (ctx: AlterKeyspaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.replicationList`.
	 * @param ctx the parse tree
	 */
	enterReplicationList?: (ctx: ReplicationListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.replicationList`.
	 * @param ctx the parse tree
	 */
	exitReplicationList?: (ctx: ReplicationListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.replicationListItem`.
	 * @param ctx the parse tree
	 */
	enterReplicationListItem?: (ctx: ReplicationListItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.replicationListItem`.
	 * @param ctx the parse tree
	 */
	exitReplicationListItem?: (ctx: ReplicationListItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.durableWrites`.
	 * @param ctx the parse tree
	 */
	enterDurableWrites?: (ctx: DurableWritesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.durableWrites`.
	 * @param ctx the parse tree
	 */
	exitDurableWrites?: (ctx: DurableWritesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.use`.
	 * @param ctx the parse tree
	 */
	enterUse?: (ctx: UseContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.use`.
	 * @param ctx the parse tree
	 */
	exitUse?: (ctx: UseContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.truncate`.
	 * @param ctx the parse tree
	 */
	enterTruncate?: (ctx: TruncateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.truncate`.
	 * @param ctx the parse tree
	 */
	exitTruncate?: (ctx: TruncateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.createIndex`.
	 * @param ctx the parse tree
	 */
	enterCreateIndex?: (ctx: CreateIndexContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.createIndex`.
	 * @param ctx the parse tree
	 */
	exitCreateIndex?: (ctx: CreateIndexContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.indexName`.
	 * @param ctx the parse tree
	 */
	enterIndexName?: (ctx: IndexNameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.indexName`.
	 * @param ctx the parse tree
	 */
	exitIndexName?: (ctx: IndexNameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.indexColumnSpec`.
	 * @param ctx the parse tree
	 */
	enterIndexColumnSpec?: (ctx: IndexColumnSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.indexColumnSpec`.
	 * @param ctx the parse tree
	 */
	exitIndexColumnSpec?: (ctx: IndexColumnSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.indexKeysSpec`.
	 * @param ctx the parse tree
	 */
	enterIndexKeysSpec?: (ctx: IndexKeysSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.indexKeysSpec`.
	 * @param ctx the parse tree
	 */
	exitIndexKeysSpec?: (ctx: IndexKeysSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.indexEntriesSSpec`.
	 * @param ctx the parse tree
	 */
	enterIndexEntriesSSpec?: (ctx: IndexEntriesSSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.indexEntriesSSpec`.
	 * @param ctx the parse tree
	 */
	exitIndexEntriesSSpec?: (ctx: IndexEntriesSSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.indexFullSpec`.
	 * @param ctx the parse tree
	 */
	enterIndexFullSpec?: (ctx: IndexFullSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.indexFullSpec`.
	 * @param ctx the parse tree
	 */
	exitIndexFullSpec?: (ctx: IndexFullSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.delete`.
	 * @param ctx the parse tree
	 */
	enterDelete?: (ctx: DeleteContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.delete`.
	 * @param ctx the parse tree
	 */
	exitDelete?: (ctx: DeleteContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.deleteColumnList`.
	 * @param ctx the parse tree
	 */
	enterDeleteColumnList?: (ctx: DeleteColumnListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.deleteColumnList`.
	 * @param ctx the parse tree
	 */
	exitDeleteColumnList?: (ctx: DeleteColumnListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.deleteColumnItem`.
	 * @param ctx the parse tree
	 */
	enterDeleteColumnItem?: (ctx: DeleteColumnItemContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.deleteColumnItem`.
	 * @param ctx the parse tree
	 */
	exitDeleteColumnItem?: (ctx: DeleteColumnItemContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.update`.
	 * @param ctx the parse tree
	 */
	enterUpdate?: (ctx: UpdateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.update`.
	 * @param ctx the parse tree
	 */
	exitUpdate?: (ctx: UpdateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ifSpec`.
	 * @param ctx the parse tree
	 */
	enterIfSpec?: (ctx: IfSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ifSpec`.
	 * @param ctx the parse tree
	 */
	exitIfSpec?: (ctx: IfSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ifConditionList`.
	 * @param ctx the parse tree
	 */
	enterIfConditionList?: (ctx: IfConditionListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ifConditionList`.
	 * @param ctx the parse tree
	 */
	exitIfConditionList?: (ctx: IfConditionListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	enterIfCondition?: (ctx: IfConditionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ifCondition`.
	 * @param ctx the parse tree
	 */
	exitIfCondition?: (ctx: IfConditionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.assignments`.
	 * @param ctx the parse tree
	 */
	enterAssignments?: (ctx: AssignmentsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.assignments`.
	 * @param ctx the parse tree
	 */
	exitAssignments?: (ctx: AssignmentsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.assignmentElement`.
	 * @param ctx the parse tree
	 */
	enterAssignmentElement?: (ctx: AssignmentElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.assignmentElement`.
	 * @param ctx the parse tree
	 */
	exitAssignmentElement?: (ctx: AssignmentElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.assignmentSet`.
	 * @param ctx the parse tree
	 */
	enterAssignmentSet?: (ctx: AssignmentSetContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.assignmentSet`.
	 * @param ctx the parse tree
	 */
	exitAssignmentSet?: (ctx: AssignmentSetContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.assignmentMap`.
	 * @param ctx the parse tree
	 */
	enterAssignmentMap?: (ctx: AssignmentMapContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.assignmentMap`.
	 * @param ctx the parse tree
	 */
	exitAssignmentMap?: (ctx: AssignmentMapContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	enterAssignmentList?: (ctx: AssignmentListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.assignmentList`.
	 * @param ctx the parse tree
	 */
	exitAssignmentList?: (ctx: AssignmentListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.insert`.
	 * @param ctx the parse tree
	 */
	enterInsert?: (ctx: InsertContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.insert`.
	 * @param ctx the parse tree
	 */
	exitInsert?: (ctx: InsertContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.usingTtlTimestamp`.
	 * @param ctx the parse tree
	 */
	enterUsingTtlTimestamp?: (ctx: UsingTtlTimestampContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.usingTtlTimestamp`.
	 * @param ctx the parse tree
	 */
	exitUsingTtlTimestamp?: (ctx: UsingTtlTimestampContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.timestamp`.
	 * @param ctx the parse tree
	 */
	enterTimestamp?: (ctx: TimestampContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.timestamp`.
	 * @param ctx the parse tree
	 */
	exitTimestamp?: (ctx: TimestampContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ttl`.
	 * @param ctx the parse tree
	 */
	enterTtl?: (ctx: TtlContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ttl`.
	 * @param ctx the parse tree
	 */
	exitTtl?: (ctx: TtlContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.usingTimestampSpec`.
	 * @param ctx the parse tree
	 */
	enterUsingTimestampSpec?: (ctx: UsingTimestampSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.usingTimestampSpec`.
	 * @param ctx the parse tree
	 */
	exitUsingTimestampSpec?: (ctx: UsingTimestampSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ifNotExist`.
	 * @param ctx the parse tree
	 */
	enterIfNotExist?: (ctx: IfNotExistContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ifNotExist`.
	 * @param ctx the parse tree
	 */
	exitIfNotExist?: (ctx: IfNotExistContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.ifExist`.
	 * @param ctx the parse tree
	 */
	enterIfExist?: (ctx: IfExistContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.ifExist`.
	 * @param ctx the parse tree
	 */
	exitIfExist?: (ctx: IfExistContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.insertValuesSpec`.
	 * @param ctx the parse tree
	 */
	enterInsertValuesSpec?: (ctx: InsertValuesSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.insertValuesSpec`.
	 * @param ctx the parse tree
	 */
	exitInsertValuesSpec?: (ctx: InsertValuesSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.insertColumnSpec`.
	 * @param ctx the parse tree
	 */
	enterInsertColumnSpec?: (ctx: InsertColumnSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.insertColumnSpec`.
	 * @param ctx the parse tree
	 */
	exitInsertColumnSpec?: (ctx: InsertColumnSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.columnList`.
	 * @param ctx the parse tree
	 */
	enterColumnList?: (ctx: ColumnListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.columnList`.
	 * @param ctx the parse tree
	 */
	exitColumnList?: (ctx: ColumnListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	enterExpressionList?: (ctx: ExpressionListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.expressionList`.
	 * @param ctx the parse tree
	 */
	exitExpressionList?: (ctx: ExpressionListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.select`.
	 * @param ctx the parse tree
	 */
	enterSelect?: (ctx: SelectContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.select`.
	 * @param ctx the parse tree
	 */
	exitSelect?: (ctx: SelectContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.allowFilteringSpec`.
	 * @param ctx the parse tree
	 */
	enterAllowFilteringSpec?: (ctx: AllowFilteringSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.allowFilteringSpec`.
	 * @param ctx the parse tree
	 */
	exitAllowFilteringSpec?: (ctx: AllowFilteringSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.limitSpec`.
	 * @param ctx the parse tree
	 */
	enterLimitSpec?: (ctx: LimitSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.limitSpec`.
	 * @param ctx the parse tree
	 */
	exitLimitSpec?: (ctx: LimitSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.fromSpec`.
	 * @param ctx the parse tree
	 */
	enterFromSpec?: (ctx: FromSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.fromSpec`.
	 * @param ctx the parse tree
	 */
	exitFromSpec?: (ctx: FromSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.fromSpecElement`.
	 * @param ctx the parse tree
	 */
	enterFromSpecElement?: (ctx: FromSpecElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.fromSpecElement`.
	 * @param ctx the parse tree
	 */
	exitFromSpecElement?: (ctx: FromSpecElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.orderSpec`.
	 * @param ctx the parse tree
	 */
	enterOrderSpec?: (ctx: OrderSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.orderSpec`.
	 * @param ctx the parse tree
	 */
	exitOrderSpec?: (ctx: OrderSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.orderSpecElement`.
	 * @param ctx the parse tree
	 */
	enterOrderSpecElement?: (ctx: OrderSpecElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.orderSpecElement`.
	 * @param ctx the parse tree
	 */
	exitOrderSpecElement?: (ctx: OrderSpecElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.whereSpec`.
	 * @param ctx the parse tree
	 */
	enterWhereSpec?: (ctx: WhereSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.whereSpec`.
	 * @param ctx the parse tree
	 */
	exitWhereSpec?: (ctx: WhereSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.distinctSpec`.
	 * @param ctx the parse tree
	 */
	enterDistinctSpec?: (ctx: DistinctSpecContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.distinctSpec`.
	 * @param ctx the parse tree
	 */
	exitDistinctSpec?: (ctx: DistinctSpecContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.selectElements`.
	 * @param ctx the parse tree
	 */
	enterSelectElements?: (ctx: SelectElementsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.selectElements`.
	 * @param ctx the parse tree
	 */
	exitSelectElements?: (ctx: SelectElementsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	enterSelectElement?: (ctx: SelectElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.selectElement`.
	 * @param ctx the parse tree
	 */
	exitSelectElement?: (ctx: SelectElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.relationElements`.
	 * @param ctx the parse tree
	 */
	enterRelationElements?: (ctx: RelationElementsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.relationElements`.
	 * @param ctx the parse tree
	 */
	exitRelationElements?: (ctx: RelationElementsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.relationElement`.
	 * @param ctx the parse tree
	 */
	enterRelationElement?: (ctx: RelationElementContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.relationElement`.
	 * @param ctx the parse tree
	 */
	exitRelationElement?: (ctx: RelationElementContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.relalationContains`.
	 * @param ctx the parse tree
	 */
	enterRelalationContains?: (ctx: RelalationContainsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.relalationContains`.
	 * @param ctx the parse tree
	 */
	exitRelalationContains?: (ctx: RelalationContainsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.relalationContainsKey`.
	 * @param ctx the parse tree
	 */
	enterRelalationContainsKey?: (ctx: RelalationContainsKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.relalationContainsKey`.
	 * @param ctx the parse tree
	 */
	exitRelalationContainsKey?: (ctx: RelalationContainsKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.functionArgs`.
	 * @param ctx the parse tree
	 */
	enterFunctionArgs?: (ctx: FunctionArgsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.functionArgs`.
	 * @param ctx the parse tree
	 */
	exitFunctionArgs?: (ctx: FunctionArgsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.decimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	enterFloatLiteral?: (ctx: FloatLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.floatLiteral`.
	 * @param ctx the parse tree
	 */
	exitFloatLiteral?: (ctx: FloatLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.booleanLiteral`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 */
	enterHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.hexadecimalLiteral`.
	 * @param ctx the parse tree
	 */
	exitHexadecimalLiteral?: (ctx: HexadecimalLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.keyspace`.
	 * @param ctx the parse tree
	 */
	enterKeyspace?: (ctx: KeyspaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.keyspace`.
	 * @param ctx the parse tree
	 */
	exitKeyspace?: (ctx: KeyspaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.table`.
	 * @param ctx the parse tree
	 */
	enterTable?: (ctx: TableContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.table`.
	 * @param ctx the parse tree
	 */
	exitTable?: (ctx: TableContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.column`.
	 * @param ctx the parse tree
	 */
	enterColumn?: (ctx: ColumnContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.column`.
	 * @param ctx the parse tree
	 */
	exitColumn?: (ctx: ColumnContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dataTypeName`.
	 * @param ctx the parse tree
	 */
	enterDataTypeName?: (ctx: DataTypeNameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dataTypeName`.
	 * @param ctx the parse tree
	 */
	exitDataTypeName?: (ctx: DataTypeNameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.dataTypeDefinition`.
	 * @param ctx the parse tree
	 */
	enterDataTypeDefinition?: (ctx: DataTypeDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.dataTypeDefinition`.
	 * @param ctx the parse tree
	 */
	exitDataTypeDefinition?: (ctx: DataTypeDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.orderDirection`.
	 * @param ctx the parse tree
	 */
	enterOrderDirection?: (ctx: OrderDirectionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.orderDirection`.
	 * @param ctx the parse tree
	 */
	exitOrderDirection?: (ctx: OrderDirectionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.role`.
	 * @param ctx the parse tree
	 */
	enterRole?: (ctx: RoleContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.role`.
	 * @param ctx the parse tree
	 */
	exitRole?: (ctx: RoleContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.trigger`.
	 * @param ctx the parse tree
	 */
	enterTrigger?: (ctx: TriggerContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.trigger`.
	 * @param ctx the parse tree
	 */
	exitTrigger?: (ctx: TriggerContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.triggerClass`.
	 * @param ctx the parse tree
	 */
	enterTriggerClass?: (ctx: TriggerClassContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.triggerClass`.
	 * @param ctx the parse tree
	 */
	exitTriggerClass?: (ctx: TriggerClassContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.materializedView`.
	 * @param ctx the parse tree
	 */
	enterMaterializedView?: (ctx: MaterializedViewContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.materializedView`.
	 * @param ctx the parse tree
	 */
	exitMaterializedView?: (ctx: MaterializedViewContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.aggregate`.
	 * @param ctx the parse tree
	 */
	enterAggregate?: (ctx: AggregateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.aggregate`.
	 * @param ctx the parse tree
	 */
	exitAggregate?: (ctx: AggregateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.function`.
	 * @param ctx the parse tree
	 */
	enterFunction?: (ctx: FunctionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.function`.
	 * @param ctx the parse tree
	 */
	exitFunction?: (ctx: FunctionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.language`.
	 * @param ctx the parse tree
	 */
	enterLanguage?: (ctx: LanguageContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.language`.
	 * @param ctx the parse tree
	 */
	exitLanguage?: (ctx: LanguageContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.user`.
	 * @param ctx the parse tree
	 */
	enterUser?: (ctx: UserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.user`.
	 * @param ctx the parse tree
	 */
	exitUser?: (ctx: UserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.password`.
	 * @param ctx the parse tree
	 */
	enterPassword?: (ctx: PasswordContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.password`.
	 * @param ctx the parse tree
	 */
	exitPassword?: (ctx: PasswordContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.hashKey`.
	 * @param ctx the parse tree
	 */
	enterHashKey?: (ctx: HashKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.hashKey`.
	 * @param ctx the parse tree
	 */
	exitHashKey?: (ctx: HashKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.param`.
	 * @param ctx the parse tree
	 */
	enterParam?: (ctx: ParamContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.param`.
	 * @param ctx the parse tree
	 */
	exitParam?: (ctx: ParamContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.paramName`.
	 * @param ctx the parse tree
	 */
	enterParamName?: (ctx: ParamNameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.paramName`.
	 * @param ctx the parse tree
	 */
	exitParamName?: (ctx: ParamNameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAdd`.
	 * @param ctx the parse tree
	 */
	enterKwAdd?: (ctx: KwAddContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAdd`.
	 * @param ctx the parse tree
	 */
	exitKwAdd?: (ctx: KwAddContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAggregate`.
	 * @param ctx the parse tree
	 */
	enterKwAggregate?: (ctx: KwAggregateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAggregate`.
	 * @param ctx the parse tree
	 */
	exitKwAggregate?: (ctx: KwAggregateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAll`.
	 * @param ctx the parse tree
	 */
	enterKwAll?: (ctx: KwAllContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAll`.
	 * @param ctx the parse tree
	 */
	exitKwAll?: (ctx: KwAllContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAllPermissions`.
	 * @param ctx the parse tree
	 */
	enterKwAllPermissions?: (ctx: KwAllPermissionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAllPermissions`.
	 * @param ctx the parse tree
	 */
	exitKwAllPermissions?: (ctx: KwAllPermissionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAllow`.
	 * @param ctx the parse tree
	 */
	enterKwAllow?: (ctx: KwAllowContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAllow`.
	 * @param ctx the parse tree
	 */
	exitKwAllow?: (ctx: KwAllowContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAlter`.
	 * @param ctx the parse tree
	 */
	enterKwAlter?: (ctx: KwAlterContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAlter`.
	 * @param ctx the parse tree
	 */
	exitKwAlter?: (ctx: KwAlterContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAnd`.
	 * @param ctx the parse tree
	 */
	enterKwAnd?: (ctx: KwAndContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAnd`.
	 * @param ctx the parse tree
	 */
	exitKwAnd?: (ctx: KwAndContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwApply`.
	 * @param ctx the parse tree
	 */
	enterKwApply?: (ctx: KwApplyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwApply`.
	 * @param ctx the parse tree
	 */
	exitKwApply?: (ctx: KwApplyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAs`.
	 * @param ctx the parse tree
	 */
	enterKwAs?: (ctx: KwAsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAs`.
	 * @param ctx the parse tree
	 */
	exitKwAs?: (ctx: KwAsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAsc`.
	 * @param ctx the parse tree
	 */
	enterKwAsc?: (ctx: KwAscContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAsc`.
	 * @param ctx the parse tree
	 */
	exitKwAsc?: (ctx: KwAscContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwAuthorize`.
	 * @param ctx the parse tree
	 */
	enterKwAuthorize?: (ctx: KwAuthorizeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwAuthorize`.
	 * @param ctx the parse tree
	 */
	exitKwAuthorize?: (ctx: KwAuthorizeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwBatch`.
	 * @param ctx the parse tree
	 */
	enterKwBatch?: (ctx: KwBatchContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwBatch`.
	 * @param ctx the parse tree
	 */
	exitKwBatch?: (ctx: KwBatchContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwBegin`.
	 * @param ctx the parse tree
	 */
	enterKwBegin?: (ctx: KwBeginContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwBegin`.
	 * @param ctx the parse tree
	 */
	exitKwBegin?: (ctx: KwBeginContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwBy`.
	 * @param ctx the parse tree
	 */
	enterKwBy?: (ctx: KwByContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwBy`.
	 * @param ctx the parse tree
	 */
	exitKwBy?: (ctx: KwByContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwCalled`.
	 * @param ctx the parse tree
	 */
	enterKwCalled?: (ctx: KwCalledContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwCalled`.
	 * @param ctx the parse tree
	 */
	exitKwCalled?: (ctx: KwCalledContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwClustering`.
	 * @param ctx the parse tree
	 */
	enterKwClustering?: (ctx: KwClusteringContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwClustering`.
	 * @param ctx the parse tree
	 */
	exitKwClustering?: (ctx: KwClusteringContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwCompact`.
	 * @param ctx the parse tree
	 */
	enterKwCompact?: (ctx: KwCompactContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwCompact`.
	 * @param ctx the parse tree
	 */
	exitKwCompact?: (ctx: KwCompactContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwContains`.
	 * @param ctx the parse tree
	 */
	enterKwContains?: (ctx: KwContainsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwContains`.
	 * @param ctx the parse tree
	 */
	exitKwContains?: (ctx: KwContainsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwCreate`.
	 * @param ctx the parse tree
	 */
	enterKwCreate?: (ctx: KwCreateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwCreate`.
	 * @param ctx the parse tree
	 */
	exitKwCreate?: (ctx: KwCreateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDelete`.
	 * @param ctx the parse tree
	 */
	enterKwDelete?: (ctx: KwDeleteContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDelete`.
	 * @param ctx the parse tree
	 */
	exitKwDelete?: (ctx: KwDeleteContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDesc`.
	 * @param ctx the parse tree
	 */
	enterKwDesc?: (ctx: KwDescContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDesc`.
	 * @param ctx the parse tree
	 */
	exitKwDesc?: (ctx: KwDescContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDescibe`.
	 * @param ctx the parse tree
	 */
	enterKwDescibe?: (ctx: KwDescibeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDescibe`.
	 * @param ctx the parse tree
	 */
	exitKwDescibe?: (ctx: KwDescibeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDistinct`.
	 * @param ctx the parse tree
	 */
	enterKwDistinct?: (ctx: KwDistinctContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDistinct`.
	 * @param ctx the parse tree
	 */
	exitKwDistinct?: (ctx: KwDistinctContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDrop`.
	 * @param ctx the parse tree
	 */
	enterKwDrop?: (ctx: KwDropContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDrop`.
	 * @param ctx the parse tree
	 */
	exitKwDrop?: (ctx: KwDropContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwDurableWrites`.
	 * @param ctx the parse tree
	 */
	enterKwDurableWrites?: (ctx: KwDurableWritesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwDurableWrites`.
	 * @param ctx the parse tree
	 */
	exitKwDurableWrites?: (ctx: KwDurableWritesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwEntries`.
	 * @param ctx the parse tree
	 */
	enterKwEntries?: (ctx: KwEntriesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwEntries`.
	 * @param ctx the parse tree
	 */
	exitKwEntries?: (ctx: KwEntriesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwExecute`.
	 * @param ctx the parse tree
	 */
	enterKwExecute?: (ctx: KwExecuteContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwExecute`.
	 * @param ctx the parse tree
	 */
	exitKwExecute?: (ctx: KwExecuteContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwExists`.
	 * @param ctx the parse tree
	 */
	enterKwExists?: (ctx: KwExistsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwExists`.
	 * @param ctx the parse tree
	 */
	exitKwExists?: (ctx: KwExistsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFiltering`.
	 * @param ctx the parse tree
	 */
	enterKwFiltering?: (ctx: KwFilteringContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFiltering`.
	 * @param ctx the parse tree
	 */
	exitKwFiltering?: (ctx: KwFilteringContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFinalfunc`.
	 * @param ctx the parse tree
	 */
	enterKwFinalfunc?: (ctx: KwFinalfuncContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFinalfunc`.
	 * @param ctx the parse tree
	 */
	exitKwFinalfunc?: (ctx: KwFinalfuncContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFrom`.
	 * @param ctx the parse tree
	 */
	enterKwFrom?: (ctx: KwFromContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFrom`.
	 * @param ctx the parse tree
	 */
	exitKwFrom?: (ctx: KwFromContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFull`.
	 * @param ctx the parse tree
	 */
	enterKwFull?: (ctx: KwFullContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFull`.
	 * @param ctx the parse tree
	 */
	exitKwFull?: (ctx: KwFullContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFunction`.
	 * @param ctx the parse tree
	 */
	enterKwFunction?: (ctx: KwFunctionContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFunction`.
	 * @param ctx the parse tree
	 */
	exitKwFunction?: (ctx: KwFunctionContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwFunctions`.
	 * @param ctx the parse tree
	 */
	enterKwFunctions?: (ctx: KwFunctionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwFunctions`.
	 * @param ctx the parse tree
	 */
	exitKwFunctions?: (ctx: KwFunctionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwGrant`.
	 * @param ctx the parse tree
	 */
	enterKwGrant?: (ctx: KwGrantContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwGrant`.
	 * @param ctx the parse tree
	 */
	exitKwGrant?: (ctx: KwGrantContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwIf`.
	 * @param ctx the parse tree
	 */
	enterKwIf?: (ctx: KwIfContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwIf`.
	 * @param ctx the parse tree
	 */
	exitKwIf?: (ctx: KwIfContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwIn`.
	 * @param ctx the parse tree
	 */
	enterKwIn?: (ctx: KwInContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwIn`.
	 * @param ctx the parse tree
	 */
	exitKwIn?: (ctx: KwInContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwIndex`.
	 * @param ctx the parse tree
	 */
	enterKwIndex?: (ctx: KwIndexContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwIndex`.
	 * @param ctx the parse tree
	 */
	exitKwIndex?: (ctx: KwIndexContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwInitcond`.
	 * @param ctx the parse tree
	 */
	enterKwInitcond?: (ctx: KwInitcondContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwInitcond`.
	 * @param ctx the parse tree
	 */
	exitKwInitcond?: (ctx: KwInitcondContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwInput`.
	 * @param ctx the parse tree
	 */
	enterKwInput?: (ctx: KwInputContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwInput`.
	 * @param ctx the parse tree
	 */
	exitKwInput?: (ctx: KwInputContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwInsert`.
	 * @param ctx the parse tree
	 */
	enterKwInsert?: (ctx: KwInsertContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwInsert`.
	 * @param ctx the parse tree
	 */
	exitKwInsert?: (ctx: KwInsertContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwInto`.
	 * @param ctx the parse tree
	 */
	enterKwInto?: (ctx: KwIntoContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwInto`.
	 * @param ctx the parse tree
	 */
	exitKwInto?: (ctx: KwIntoContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwIs`.
	 * @param ctx the parse tree
	 */
	enterKwIs?: (ctx: KwIsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwIs`.
	 * @param ctx the parse tree
	 */
	exitKwIs?: (ctx: KwIsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwKey`.
	 * @param ctx the parse tree
	 */
	enterKwKey?: (ctx: KwKeyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwKey`.
	 * @param ctx the parse tree
	 */
	exitKwKey?: (ctx: KwKeyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwKeys`.
	 * @param ctx the parse tree
	 */
	enterKwKeys?: (ctx: KwKeysContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwKeys`.
	 * @param ctx the parse tree
	 */
	exitKwKeys?: (ctx: KwKeysContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwKeyspace`.
	 * @param ctx the parse tree
	 */
	enterKwKeyspace?: (ctx: KwKeyspaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwKeyspace`.
	 * @param ctx the parse tree
	 */
	exitKwKeyspace?: (ctx: KwKeyspaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwKeyspaces`.
	 * @param ctx the parse tree
	 */
	enterKwKeyspaces?: (ctx: KwKeyspacesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwKeyspaces`.
	 * @param ctx the parse tree
	 */
	exitKwKeyspaces?: (ctx: KwKeyspacesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwLanguage`.
	 * @param ctx the parse tree
	 */
	enterKwLanguage?: (ctx: KwLanguageContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwLanguage`.
	 * @param ctx the parse tree
	 */
	exitKwLanguage?: (ctx: KwLanguageContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwLimit`.
	 * @param ctx the parse tree
	 */
	enterKwLimit?: (ctx: KwLimitContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwLimit`.
	 * @param ctx the parse tree
	 */
	exitKwLimit?: (ctx: KwLimitContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwList`.
	 * @param ctx the parse tree
	 */
	enterKwList?: (ctx: KwListContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwList`.
	 * @param ctx the parse tree
	 */
	exitKwList?: (ctx: KwListContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwLogged`.
	 * @param ctx the parse tree
	 */
	enterKwLogged?: (ctx: KwLoggedContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwLogged`.
	 * @param ctx the parse tree
	 */
	exitKwLogged?: (ctx: KwLoggedContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwLogin`.
	 * @param ctx the parse tree
	 */
	enterKwLogin?: (ctx: KwLoginContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwLogin`.
	 * @param ctx the parse tree
	 */
	exitKwLogin?: (ctx: KwLoginContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwMaterialized`.
	 * @param ctx the parse tree
	 */
	enterKwMaterialized?: (ctx: KwMaterializedContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwMaterialized`.
	 * @param ctx the parse tree
	 */
	exitKwMaterialized?: (ctx: KwMaterializedContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwModify`.
	 * @param ctx the parse tree
	 */
	enterKwModify?: (ctx: KwModifyContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwModify`.
	 * @param ctx the parse tree
	 */
	exitKwModify?: (ctx: KwModifyContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwNosuperuser`.
	 * @param ctx the parse tree
	 */
	enterKwNosuperuser?: (ctx: KwNosuperuserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwNosuperuser`.
	 * @param ctx the parse tree
	 */
	exitKwNosuperuser?: (ctx: KwNosuperuserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwNorecursive`.
	 * @param ctx the parse tree
	 */
	enterKwNorecursive?: (ctx: KwNorecursiveContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwNorecursive`.
	 * @param ctx the parse tree
	 */
	exitKwNorecursive?: (ctx: KwNorecursiveContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwNot`.
	 * @param ctx the parse tree
	 */
	enterKwNot?: (ctx: KwNotContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwNot`.
	 * @param ctx the parse tree
	 */
	exitKwNot?: (ctx: KwNotContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwNull`.
	 * @param ctx the parse tree
	 */
	enterKwNull?: (ctx: KwNullContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwNull`.
	 * @param ctx the parse tree
	 */
	exitKwNull?: (ctx: KwNullContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwOf`.
	 * @param ctx the parse tree
	 */
	enterKwOf?: (ctx: KwOfContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwOf`.
	 * @param ctx the parse tree
	 */
	exitKwOf?: (ctx: KwOfContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwOn`.
	 * @param ctx the parse tree
	 */
	enterKwOn?: (ctx: KwOnContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwOn`.
	 * @param ctx the parse tree
	 */
	exitKwOn?: (ctx: KwOnContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwOptions`.
	 * @param ctx the parse tree
	 */
	enterKwOptions?: (ctx: KwOptionsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwOptions`.
	 * @param ctx the parse tree
	 */
	exitKwOptions?: (ctx: KwOptionsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwOr`.
	 * @param ctx the parse tree
	 */
	enterKwOr?: (ctx: KwOrContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwOr`.
	 * @param ctx the parse tree
	 */
	exitKwOr?: (ctx: KwOrContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwOrder`.
	 * @param ctx the parse tree
	 */
	enterKwOrder?: (ctx: KwOrderContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwOrder`.
	 * @param ctx the parse tree
	 */
	exitKwOrder?: (ctx: KwOrderContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwPassword`.
	 * @param ctx the parse tree
	 */
	enterKwPassword?: (ctx: KwPasswordContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwPassword`.
	 * @param ctx the parse tree
	 */
	exitKwPassword?: (ctx: KwPasswordContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwPrimary`.
	 * @param ctx the parse tree
	 */
	enterKwPrimary?: (ctx: KwPrimaryContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwPrimary`.
	 * @param ctx the parse tree
	 */
	exitKwPrimary?: (ctx: KwPrimaryContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwRename`.
	 * @param ctx the parse tree
	 */
	enterKwRename?: (ctx: KwRenameContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwRename`.
	 * @param ctx the parse tree
	 */
	exitKwRename?: (ctx: KwRenameContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwReplace`.
	 * @param ctx the parse tree
	 */
	enterKwReplace?: (ctx: KwReplaceContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwReplace`.
	 * @param ctx the parse tree
	 */
	exitKwReplace?: (ctx: KwReplaceContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwReplication`.
	 * @param ctx the parse tree
	 */
	enterKwReplication?: (ctx: KwReplicationContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwReplication`.
	 * @param ctx the parse tree
	 */
	exitKwReplication?: (ctx: KwReplicationContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwReturns`.
	 * @param ctx the parse tree
	 */
	enterKwReturns?: (ctx: KwReturnsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwReturns`.
	 * @param ctx the parse tree
	 */
	exitKwReturns?: (ctx: KwReturnsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwRole`.
	 * @param ctx the parse tree
	 */
	enterKwRole?: (ctx: KwRoleContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwRole`.
	 * @param ctx the parse tree
	 */
	exitKwRole?: (ctx: KwRoleContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwRoles`.
	 * @param ctx the parse tree
	 */
	enterKwRoles?: (ctx: KwRolesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwRoles`.
	 * @param ctx the parse tree
	 */
	exitKwRoles?: (ctx: KwRolesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwSelect`.
	 * @param ctx the parse tree
	 */
	enterKwSelect?: (ctx: KwSelectContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwSelect`.
	 * @param ctx the parse tree
	 */
	exitKwSelect?: (ctx: KwSelectContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwSet`.
	 * @param ctx the parse tree
	 */
	enterKwSet?: (ctx: KwSetContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwSet`.
	 * @param ctx the parse tree
	 */
	exitKwSet?: (ctx: KwSetContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwSfunc`.
	 * @param ctx the parse tree
	 */
	enterKwSfunc?: (ctx: KwSfuncContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwSfunc`.
	 * @param ctx the parse tree
	 */
	exitKwSfunc?: (ctx: KwSfuncContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwStorage`.
	 * @param ctx the parse tree
	 */
	enterKwStorage?: (ctx: KwStorageContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwStorage`.
	 * @param ctx the parse tree
	 */
	exitKwStorage?: (ctx: KwStorageContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwStype`.
	 * @param ctx the parse tree
	 */
	enterKwStype?: (ctx: KwStypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwStype`.
	 * @param ctx the parse tree
	 */
	exitKwStype?: (ctx: KwStypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwSuperuser`.
	 * @param ctx the parse tree
	 */
	enterKwSuperuser?: (ctx: KwSuperuserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwSuperuser`.
	 * @param ctx the parse tree
	 */
	exitKwSuperuser?: (ctx: KwSuperuserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTable`.
	 * @param ctx the parse tree
	 */
	enterKwTable?: (ctx: KwTableContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTable`.
	 * @param ctx the parse tree
	 */
	exitKwTable?: (ctx: KwTableContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTimestamp`.
	 * @param ctx the parse tree
	 */
	enterKwTimestamp?: (ctx: KwTimestampContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTimestamp`.
	 * @param ctx the parse tree
	 */
	exitKwTimestamp?: (ctx: KwTimestampContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTo`.
	 * @param ctx the parse tree
	 */
	enterKwTo?: (ctx: KwToContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTo`.
	 * @param ctx the parse tree
	 */
	exitKwTo?: (ctx: KwToContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTrigger`.
	 * @param ctx the parse tree
	 */
	enterKwTrigger?: (ctx: KwTriggerContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTrigger`.
	 * @param ctx the parse tree
	 */
	exitKwTrigger?: (ctx: KwTriggerContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTruncate`.
	 * @param ctx the parse tree
	 */
	enterKwTruncate?: (ctx: KwTruncateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTruncate`.
	 * @param ctx the parse tree
	 */
	exitKwTruncate?: (ctx: KwTruncateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwTtl`.
	 * @param ctx the parse tree
	 */
	enterKwTtl?: (ctx: KwTtlContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwTtl`.
	 * @param ctx the parse tree
	 */
	exitKwTtl?: (ctx: KwTtlContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwType`.
	 * @param ctx the parse tree
	 */
	enterKwType?: (ctx: KwTypeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwType`.
	 * @param ctx the parse tree
	 */
	exitKwType?: (ctx: KwTypeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUnlogged`.
	 * @param ctx the parse tree
	 */
	enterKwUnlogged?: (ctx: KwUnloggedContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUnlogged`.
	 * @param ctx the parse tree
	 */
	exitKwUnlogged?: (ctx: KwUnloggedContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUpdate`.
	 * @param ctx the parse tree
	 */
	enterKwUpdate?: (ctx: KwUpdateContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUpdate`.
	 * @param ctx the parse tree
	 */
	exitKwUpdate?: (ctx: KwUpdateContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUse`.
	 * @param ctx the parse tree
	 */
	enterKwUse?: (ctx: KwUseContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUse`.
	 * @param ctx the parse tree
	 */
	exitKwUse?: (ctx: KwUseContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUser`.
	 * @param ctx the parse tree
	 */
	enterKwUser?: (ctx: KwUserContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUser`.
	 * @param ctx the parse tree
	 */
	exitKwUser?: (ctx: KwUserContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUsers`.
	 * @param ctx the parse tree
	 */
	enterKwUsers?: (ctx: KwUsersContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUsers`.
	 * @param ctx the parse tree
	 */
	exitKwUsers?: (ctx: KwUsersContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwUsing`.
	 * @param ctx the parse tree
	 */
	enterKwUsing?: (ctx: KwUsingContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwUsing`.
	 * @param ctx the parse tree
	 */
	exitKwUsing?: (ctx: KwUsingContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwValues`.
	 * @param ctx the parse tree
	 */
	enterKwValues?: (ctx: KwValuesContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwValues`.
	 * @param ctx the parse tree
	 */
	exitKwValues?: (ctx: KwValuesContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwView`.
	 * @param ctx the parse tree
	 */
	enterKwView?: (ctx: KwViewContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwView`.
	 * @param ctx the parse tree
	 */
	exitKwView?: (ctx: KwViewContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwWhere`.
	 * @param ctx the parse tree
	 */
	enterKwWhere?: (ctx: KwWhereContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwWhere`.
	 * @param ctx the parse tree
	 */
	exitKwWhere?: (ctx: KwWhereContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwWith`.
	 * @param ctx the parse tree
	 */
	enterKwWith?: (ctx: KwWithContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwWith`.
	 * @param ctx the parse tree
	 */
	exitKwWith?: (ctx: KwWithContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.kwRevoke`.
	 * @param ctx the parse tree
	 */
	enterKwRevoke?: (ctx: KwRevokeContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.kwRevoke`.
	 * @param ctx the parse tree
	 */
	exitKwRevoke?: (ctx: KwRevokeContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.eof`.
	 * @param ctx the parse tree
	 */
	enterEof?: (ctx: EofContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.eof`.
	 * @param ctx the parse tree
	 */
	exitEof?: (ctx: EofContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketLr`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketLr?: (ctx: SyntaxBracketLrContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketLr`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketLr?: (ctx: SyntaxBracketLrContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketRr`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketRr?: (ctx: SyntaxBracketRrContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketRr`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketRr?: (ctx: SyntaxBracketRrContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketLc`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketLc?: (ctx: SyntaxBracketLcContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketLc`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketLc?: (ctx: SyntaxBracketLcContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketRc`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketRc?: (ctx: SyntaxBracketRcContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketRc`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketRc?: (ctx: SyntaxBracketRcContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketLa`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketLa?: (ctx: SyntaxBracketLaContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketLa`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketLa?: (ctx: SyntaxBracketLaContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketRa`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketRa?: (ctx: SyntaxBracketRaContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketRa`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketRa?: (ctx: SyntaxBracketRaContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketLs`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketLs?: (ctx: SyntaxBracketLsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketLs`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketLs?: (ctx: SyntaxBracketLsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxBracketRs`.
	 * @param ctx the parse tree
	 */
	enterSyntaxBracketRs?: (ctx: SyntaxBracketRsContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxBracketRs`.
	 * @param ctx the parse tree
	 */
	exitSyntaxBracketRs?: (ctx: SyntaxBracketRsContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxComma`.
	 * @param ctx the parse tree
	 */
	enterSyntaxComma?: (ctx: SyntaxCommaContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxComma`.
	 * @param ctx the parse tree
	 */
	exitSyntaxComma?: (ctx: SyntaxCommaContext) => void;

	/**
	 * Enter a parse tree produced by `CqlParser.syntaxColon`.
	 * @param ctx the parse tree
	 */
	enterSyntaxColon?: (ctx: SyntaxColonContext) => void;
	/**
	 * Exit a parse tree produced by `CqlParser.syntaxColon`.
	 * @param ctx the parse tree
	 */
	exitSyntaxColon?: (ctx: SyntaxColonContext) => void;
}

