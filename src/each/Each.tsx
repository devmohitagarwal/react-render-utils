import React, { ReactElement } from "react";
import { EachProps } from "./Types";
export type { EachProps } from "./Types";

/**
 * @category Component
 *
 * A declarative list rendering component for React.
 * Iterates over an array and renders each item using a render function,
 * with optional empty state support.
 *
 * @example
 * // Basic list rendering
 * <Each
 *   of={users}
 *   render={(user, index) => <UserCard key={user.id} user={user} />}
 *   empty={<p>No users found</p>}
 * />
 *
 * @example
 * // Handles null/undefined gracefully
 * <Each
 *   of={data?.items}
 *   render={(item) => <ListItem key={item.id} {...item} />}
 * />
 *
 * @param props - {@link EachProps}
 *
 * @returns The rendered list items, empty state content, or null
 *
 * @since 1.3.0
 */
export default function Each<T>({
  of: items,
  render,
  empty,
}: EachProps<T>): ReactElement | null {
  if (!items || items.length === 0) {
    return empty ? <>{empty}</> : null;
  }

  return <>{items.map(render)}</>;
}
