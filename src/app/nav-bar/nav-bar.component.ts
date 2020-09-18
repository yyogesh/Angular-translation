import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  siteLanguage: string = 'English';
  siteLocale: string;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' }
  ];
  constructor(private _translate: TranslateService) {
    _translate.addLangs(['en', 'fr', 'de'])
    _translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this._translate.use(this.siteLocale);

    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
  }

}
