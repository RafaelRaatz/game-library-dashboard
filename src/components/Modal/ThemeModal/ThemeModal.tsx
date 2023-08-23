import { ThemePage } from '../../Theme';

export function ThemeModal({ isOpen }: any) {
  if (isOpen) {
    return (
      <div>
        <ThemePage />
      </div>
    );
  }
}
