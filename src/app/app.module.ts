import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBar } from './side-bar/sidebar.component';
import { SideBarItem } from './side-bar-item/sidebaritem.component';
import { Navbar } from './nav-bar/navbar.component';
import { PageHeader } from './page-header/pageheader.component';
import { IconCard } from './icon-card/icon-card.component';
import { Environment } from './environments/enviroment.component';
import { AccessRequests } from './access-requests/access-requests.component';
import { Audit } from './audit/audit.component';
import { Table } from 'src/table/table.component';
import { ProgressBar } from 'src/progress-bar/progress-bar.component';
import { BarChart } from 'src/bar-chart/bar-chart.component';
import { Doughnut } from './doughnut/doughnut.component';
@NgModule({
  declarations: [
    AppComponent,
    SideBar,
    SideBarItem,
    Navbar,
    PageHeader,
    IconCard,
    Environment,
    AccessRequests,
    Audit,
    Table,
    ProgressBar,
    BarChart,
    Doughnut,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
