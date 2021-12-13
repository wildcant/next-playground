export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** insert a single row into the table: "online_user" */
  onlineUserInsert?: Maybe<OnlineUser>;
  /** delete data from the table: "online_user" */
  onlineUsersDelete?: Maybe<OnlineUser_Mutation_Response>;
  /** insert data into the table: "online_user" */
  onlineUsersInsert?: Maybe<OnlineUser_Mutation_Response>;
  /** update data of the table: "online_user" */
  onlineUsersUpdate?: Maybe<OnlineUser_Mutation_Response>;
  /** delete single row from the table: "user" */
  userDelete?: Maybe<User>;
  /** insert a single row into the table: "user" */
  userInsert?: Maybe<User>;
  /** update single row of the table: "user" */
  userUpdate?: Maybe<User>;
  /** delete data from the table: "user" */
  usersDelete?: Maybe<User_Mutation_Response>;
  /** insert data into the table: "user" */
  usersInsert?: Maybe<User_Mutation_Response>;
  /** update data of the table: "user" */
  usersUpdate?: Maybe<User_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootOnlineUserInsertArgs = {
  object: OnlineUser_Insert_Input;
};


/** mutation root */
export type Mutation_RootOnlineUsersDeleteArgs = {
  where: OnlineUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootOnlineUsersInsertArgs = {
  objects: Array<OnlineUser_Insert_Input>;
};


/** mutation root */
export type Mutation_RootOnlineUsersUpdateArgs = {
  _inc?: Maybe<OnlineUser_Inc_Input>;
  _set?: Maybe<OnlineUser_Set_Input>;
  where: OnlineUser_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUserDeleteArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootUserInsertArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUserUpdateArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUsersDeleteArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUsersInsertArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUsersUpdateArgs = {
  _inc?: Maybe<User_Inc_Input>;
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** columns and relationships of "online_user" */
export type OnlineUser = {
  __typename?: 'onlineUser';
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
};

/** aggregated selection of "online_user" */
export type OnlineUser_Aggregate = {
  __typename?: 'onlineUser_aggregate';
  aggregate?: Maybe<OnlineUser_Aggregate_Fields>;
  nodes: Array<OnlineUser>;
};

/** aggregate fields of "online_user" */
export type OnlineUser_Aggregate_Fields = {
  __typename?: 'onlineUser_aggregate_fields';
  avg?: Maybe<OnlineUser_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<OnlineUser_Max_Fields>;
  min?: Maybe<OnlineUser_Min_Fields>;
  stddev?: Maybe<OnlineUser_Stddev_Fields>;
  stddev_pop?: Maybe<OnlineUser_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<OnlineUser_Stddev_Samp_Fields>;
  sum?: Maybe<OnlineUser_Sum_Fields>;
  var_pop?: Maybe<OnlineUser_Var_Pop_Fields>;
  var_samp?: Maybe<OnlineUser_Var_Samp_Fields>;
  variance?: Maybe<OnlineUser_Variance_Fields>;
};


/** aggregate fields of "online_user" */
export type OnlineUser_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<OnlineUser_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type OnlineUser_Avg_Fields = {
  __typename?: 'onlineUser_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "online_user". All fields are combined with a logical 'AND'. */
export type OnlineUser_Bool_Exp = {
  _and?: Maybe<Array<OnlineUser_Bool_Exp>>;
  _not?: Maybe<OnlineUser_Bool_Exp>;
  _or?: Maybe<Array<OnlineUser_Bool_Exp>>;
  id?: Maybe<Int_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "online_user" */
export type OnlineUser_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "online_user" */
export type OnlineUser_Insert_Input = {
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type OnlineUser_Max_Fields = {
  __typename?: 'onlineUser_max_fields';
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type OnlineUser_Min_Fields = {
  __typename?: 'onlineUser_min_fields';
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "online_user" */
export type OnlineUser_Mutation_Response = {
  __typename?: 'onlineUser_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<OnlineUser>;
};

/** Ordering options when selecting data from "online_user". */
export type OnlineUser_Order_By = {
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
};

/** select columns of table "online_user" */
export enum OnlineUser_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen'
}

/** input type for updating data in table "online_user" */
export type OnlineUser_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type OnlineUser_Stddev_Fields = {
  __typename?: 'onlineUser_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type OnlineUser_Stddev_Pop_Fields = {
  __typename?: 'onlineUser_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type OnlineUser_Stddev_Samp_Fields = {
  __typename?: 'onlineUser_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type OnlineUser_Sum_Fields = {
  __typename?: 'onlineUser_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type OnlineUser_Var_Pop_Fields = {
  __typename?: 'onlineUser_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type OnlineUser_Var_Samp_Fields = {
  __typename?: 'onlineUser_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type OnlineUser_Variance_Fields = {
  __typename?: 'onlineUser_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "online_user" */
  onlineUsers: Array<OnlineUser>;
  /** fetch aggregated fields from the table: "online_user" */
  onlineUsersAggregate: OnlineUser_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch data from the table: "user" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  usersAggregate: User_Aggregate;
};


export type Query_RootOnlineUsersArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Query_RootOnlineUsersAggregateArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "online_user" */
  onlineUsers: Array<OnlineUser>;
  /** fetch aggregated fields from the table: "online_user" */
  onlineUsersAggregate: OnlineUser_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user?: Maybe<User>;
  /** fetch data from the table: "user" */
  users: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  usersAggregate: User_Aggregate;
};


export type Subscription_RootOnlineUsersArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Subscription_RootOnlineUsersAggregateArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  createdAt: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['Int'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  name: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  createdAt?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  name?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};
