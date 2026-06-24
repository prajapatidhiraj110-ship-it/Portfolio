import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'dhiraj-portfolio-theme';
  readonly isDarkMode = signal(false);

  constructor() {
    const saved = localStorage.getItem(this.storageKey);
    this.isDarkMode.set(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches));
    this.applyTheme();
  }

  toggle(): void {
    this.isDarkMode.update((current) => !current);
    this.applyTheme();
  }

  isDark(): boolean {
    return this.isDarkMode();
  }

  private applyTheme(): void {
    const activeClass = 'dark-theme';
    document.body.classList.toggle(activeClass, this.isDarkMode());
    localStorage.setItem(this.storageKey, this.isDarkMode() ? 'dark' : 'light');
  }
}
