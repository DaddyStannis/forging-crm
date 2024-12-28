import styles from "./hocs.module.css";

export interface WithErrorProps {
  error?: string;
}

export function withError<T extends WithErrorProps>(
  WrappedComponent: React.ComponentType<T>
) {
  function ComponentWithError({ error, ...props }: T) {
    return (
      <div className={styles.errorWrapper}>
        <WrappedComponent {...(props as T)} />
        {error && <div className={styles.error}>{error}</div>}
      </div>
    );
  }

  return ComponentWithError;
}
