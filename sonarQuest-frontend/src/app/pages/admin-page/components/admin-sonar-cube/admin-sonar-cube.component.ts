import { WorldService } from './../../../../services/world.service';
import {Component, OnInit} from '@angular/core';
import {SonarCubeService} from '../../../../services/sonar-cube.service';
import {SonarCubeConfig} from '../../../../Interfaces/SonarCubeConfig';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-admin-sonar-cube',
  templateUrl: './admin-sonar-cube.component.html',
  styleUrls: ['./admin-sonar-cube.component.css']
})
export class AdminSonarCubeComponent implements OnInit {

  configName: string;

  sonarQubeUrl: string;

  sonarConfig: SonarCubeConfig;

  constructor(private sonarCubeService: SonarCubeService,
              private worldService: WorldService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.sonarCubeService.getConfig().then(config => {
        this.sonarConfig = config;
        if (this.sonarConfig) {
          this.aktualisiereFormGroup();
        }
      }
    );
  }

  private aktualisiereFormGroup() {
    this.configName = this.sonarConfig.name;
    this.sonarQubeUrl = this.sonarConfig.sonarServerUrl;
  }

  checkSonarCubeUrl() {
    // TODO
    const message = 'Sonar URL is reachable';
    this.snackBar.open(message, null, {duration: 2500});
  }

  save() {
    const config: SonarCubeConfig = {name: this.configName, sonarServerUrl: this.sonarQubeUrl};
    console.log('saving' + config + config.name + config.sonarServerUrl);
    this.sonarCubeService.saveConfig(config).then(()=>{
      return this.worldService.generateWorldsFromSonarQubeProjects();
    }).then(()=>{
      this.worldService.getAllWorlds()
    })
  }

}
