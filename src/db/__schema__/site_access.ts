/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: GyhyLwjST00d9AHLDpCWQ7iT3EfADn0j5YpYFROa13BNLkTGUrbJ1O2B4bJBqGnYYxOuuTtYGKSxXlAt2006nQ==
 */

/* eslint-disable */
// tslint:disable

import Member from './member'
import Org from './org'
import Site from './site'

interface SiteAccess {
  created_at: Date
  /**
   * @default nextval('site_access_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'site_access_id'}
  /**
   * @default nextval('site_access_member_id_seq'::regclass)
   */
  member_id: Member['id']
  /**
   * @default nextval('site_access_org_id_seq'::regclass)
   */
  org_id: Org['id']
  /**
   * @default nextval('site_access_site_id_seq'::regclass)
   */
  site_id: Site['id']
}
export default SiteAccess;

interface SiteAccess_InsertParameters {
  created_at: Date
  /**
   * @default nextval('site_access_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'site_access_id'}
  /**
   * @default nextval('site_access_member_id_seq'::regclass)
   */
  member_id?: Member['id']
  /**
   * @default nextval('site_access_org_id_seq'::regclass)
   */
  org_id?: Org['id']
  /**
   * @default nextval('site_access_site_id_seq'::regclass)
   */
  site_id?: Site['id']
}
export type {SiteAccess_InsertParameters}