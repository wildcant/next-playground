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


/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
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
  /** delete single row from the table: "todos" */
  todoDelete?: Maybe<Todo>;
  /** insert a single row into the table: "todos" */
  todoInsert?: Maybe<Todo>;
  /** update single row of the table: "todos" */
  todoUpdate?: Maybe<Todo>;
  /** delete data from the table: "todos" */
  todosDelete?: Maybe<Todo_Mutation_Response>;
  /** insert data into the table: "todos" */
  todosInsert?: Maybe<Todo_Mutation_Response>;
  /** update data of the table: "todos" */
  todosUpdate?: Maybe<Todo_Mutation_Response>;
  /** update single row of the table: "users" */
  userUpdate?: Maybe<User>;
  /** update data of the table: "users" */
  usersUpdate?: Maybe<User_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootTodoDeleteArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootTodoInsertArgs = {
  object: Todo_Insert_Input;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootTodoUpdateArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  pk_columns: Todo_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootTodosDeleteArgs = {
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootTodosInsertArgs = {
  objects: Array<Todo_Insert_Input>;
  on_conflict?: Maybe<Todo_On_Conflict>;
};


/** mutation root */
export type Mutation_RootTodosUpdateArgs = {
  _inc?: Maybe<Todo_Inc_Input>;
  _set?: Maybe<Todo_Set_Input>;
  where: Todo_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUserUpdateArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUsersUpdateArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};

/** columns and relationships of "online_users" */
export type OnlineUser = {
  __typename?: 'onlineUser';
  id?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<User>;
};

/** Boolean expression to filter rows from the table "online_users". All fields are combined with a logical 'AND'. */
export type OnlineUser_Bool_Exp = {
  _and?: Maybe<Array<OnlineUser_Bool_Exp>>;
  _not?: Maybe<OnlineUser_Bool_Exp>;
  _or?: Maybe<Array<OnlineUser_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  lastSeen?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "online_users". */
export type OnlineUser_Order_By = {
  id?: Maybe<Order_By>;
  lastSeen?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
};

/** select columns of table "online_users" */
export enum OnlineUser_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'lastSeen'
}

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
  /** fetch data from the table: "online_users" */
  onlineUsers: Array<OnlineUser>;
  /** fetch data from the table: "todos" using primary key columns */
  todo?: Maybe<Todo>;
  /** fetch data from the table: "todos" */
  todos: Array<Todo>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
};


export type Query_RootOnlineUsersArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Query_RootTodoArgs = {
  id: Scalars['Int'];
};


export type Query_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Query_RootUserArgs = {
  id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "online_users" */
  onlineUsers: Array<OnlineUser>;
  /** fetch data from the table: "todos" using primary key columns */
  todo?: Maybe<Todo>;
  /** fetch data from the table: "todos" */
  todos: Array<Todo>;
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<User>;
  /** fetch data from the table: "users" */
  users: Array<User>;
};


export type Subscription_RootOnlineUsersArgs = {
  distinct_on?: Maybe<Array<OnlineUser_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<OnlineUser_Order_By>>;
  where?: Maybe<OnlineUser_Bool_Exp>;
};


export type Subscription_RootTodoArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTodosArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Todo_Order_By>>;
  where?: Maybe<Todo_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
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

/** columns and relationships of "todos" */
export type Todo = {
  __typename?: 'todo';
  createdAt: Scalars['timestamptz'];
  id: Scalars['Int'];
  isCompleted: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  title: Scalars['String'];
  /** An object relationship */
  user: User;
  userId: Scalars['String'];
};

/** Boolean expression to filter rows from the table "todos". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Todo_Bool_Exp>>;
  _not?: Maybe<Todo_Bool_Exp>;
  _or?: Maybe<Array<Todo_Bool_Exp>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  isCompleted?: Maybe<Boolean_Comparison_Exp>;
  isPublic?: Maybe<Boolean_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "todos" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodosPkey = 'todos_pkey'
}

/** input type for incrementing numeric columns in table "todos" */
export type Todo_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "todos" */
export type Todo_Insert_Input = {
  isPublic?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "todos" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Todo>;
};

/** on conflict condition type for table "todos" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint;
  update_columns?: Array<Todo_Update_Column>;
  where?: Maybe<Todo_Bool_Exp>;
};

/** Ordering options when selecting data from "todos". */
export type Todo_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  isCompleted?: Maybe<Order_By>;
  isPublic?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

/** primary key columns input for table: todo */
export type Todo_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "todos" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted',
  /** column name */
  IsPublic = 'isPublic',
  /** column name */
  Title = 'title',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "todos" */
export type Todo_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  isCompleted?: Maybe<Scalars['Boolean']>;
};

/** update columns of table "todos" */
export enum Todo_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IsCompleted = 'isCompleted'
}

/** columns and relationships of "users" */
export type User = {
  __typename?: 'user';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<User_Bool_Exp>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<User_Bool_Exp>>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** response of any mutation on the table "users" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** Ordering options when selecting data from "users". */
export type User_Order_By = {
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum User_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "users" */
export type User_Set_Input = {
  lastSeen?: Maybe<Scalars['timestamptz']>;
};
