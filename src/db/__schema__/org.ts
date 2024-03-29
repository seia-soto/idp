/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: xFxjnOHnnZQDKLfWpPvU88yu5whQZ6CAV1NZWYkgs38cS+nsxw7Eyu8ytogkVr6Is3AxshWnpZg2rQqjuFeAoQ==
 */

/* eslint-disable */
// tslint:disable

import User from './user'

interface Org {
  created_at: Date
  description: string
  /**
   * @default nextval('org_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'org_id'}
  is_disabled: boolean
  is_mfa_forced: boolean
  name: string
  /**
   * @default nextval('org_owner_id_seq'::regclass)
   */
  owner_id: User['id']
  updated_at: Date
}
export default Org;

interface Org_InsertParameters {
  created_at: Date
  description: string
  /**
   * @default nextval('org_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'org_id'}
  is_disabled: boolean
  is_mfa_forced: boolean
  name: string
  /**
   * @default nextval('org_owner_id_seq'::regclass)
   */
  owner_id?: User['id']
  updated_at: Date
}
export type {Org_InsertParameters}
