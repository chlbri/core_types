class Exception<T extends number = number> {
  constructor(
    public readonly statut: T,
    public readonly message: string
  ) {}
}

export { Exception };
