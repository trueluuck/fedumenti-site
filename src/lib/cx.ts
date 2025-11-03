// Junta classes ignorando valores falsy (substitui 'clsx' sem dependência)
export function cx(...args: Array<string | false | null | undefined>) {
  return args.filter(Boolean).join(' ');
}
