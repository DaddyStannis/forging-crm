import styles from "./hocs.module.css";

export interface WithLabelProps {
  label?: string;
}

export function withLabel<T extends WithLabelProps>(
  WrappedComponent: React.ComponentType<T>
) {
  function ComponentWithLabel({ label, ...props }: T) {
    return (
      <div className={styles.labelWrapper}>
        {label && <div className={styles.label}>{label}</div>}
        <WrappedComponent {...(props as T)} />
      </div>
    );
  }

  return ComponentWithLabel;
}
