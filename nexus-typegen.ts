/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context"




declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  UserRegister: { // input type
    confirmPassword: string; // String!
    email: string; // String!
    name: string; // String!
    password: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  AuthPayload: { // root type
    name?: string | null; // String
    token?: string | null; // String
  }
  Mutation: {};
  Post: { // root type
    body?: string | null; // String
    id?: number | null; // Int
    published?: boolean | null; // Boolean
    title?: string | null; // String
  }
  Query: {};
  Slow: { // root type
    slow?: string | null; // String
  }
  User: { // root type
    id: string; // ID!
    name: string; // String!
    user: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  AuthPayload: { // field return type
    name: string | null; // String
    token: string | null; // String
  }
  Mutation: { // field return type
    createDraft: NexusGenRootTypes['Post']; // Post!
    publish: NexusGenRootTypes['Post']; // Post!
    register: NexusGenRootTypes['AuthPayload']; // AuthPayload!
  }
  Post: { // field return type
    body: string | null; // String
    id: number | null; // Int
    published: boolean | null; // Boolean
    title: string | null; // String
  }
  Query: { // field return type
    drafts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
    publishedPosts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
  }
  Slow: { // field return type
    slow: string | null; // String
  }
  User: { // field return type
    id: string; // ID!
    name: string; // String!
    user: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  AuthPayload: { // field return type name
    name: 'String'
    token: 'String'
  }
  Mutation: { // field return type name
    createDraft: 'Post'
    publish: 'Post'
    register: 'AuthPayload'
  }
  Post: { // field return type name
    body: 'String'
    id: 'Int'
    published: 'Boolean'
    title: 'String'
  }
  Query: { // field return type name
    drafts: 'Post'
    publishedPosts: 'Post'
  }
  Slow: { // field return type name
    slow: 'String'
  }
  User: { // field return type name
    id: 'ID'
    name: 'String'
    user: 'String'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createDraft: { // args
      body: string; // String!
      title: string; // String!
    }
    publish: { // args
      id: number; // Int!
      published: boolean; // Boolean!
    }
    register: { // args
      data?: NexusGenInputs['UserRegister'] | null; // UserRegister
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}