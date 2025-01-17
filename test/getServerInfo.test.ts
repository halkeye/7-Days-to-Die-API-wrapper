'use strict';
import * as chai from 'chai'
import * as chaiAsPromised from 'chai-as-promised'
import { SdtdServer } from '../lib/index'
let SdtdApi = require('../lib/index.js');

require('dotenv').config()

chai.use(chaiAsPromised)

let testServer: SdtdServer = {
    ip: process.env.TESTIP as string,
    port: process.env.TESTPORT as string,
    adminUser: process.env.TESTADMINUSER as string,
    adminToken: process.env.TESTADMINTOKEN as string
}
describe('/api/getServerInfo', async () => {
    it('Returns expected output', async () => {
        let response = await SdtdApi.getServerInfo(testServer);
        chai.expect(response.GameType.value).to.be.a('string');
        chai.expect(response.GameName.value).to.be.a('string');
        chai.expect(response.GameHost.value).to.be.a('string');
        chai.expect(response.ServerDescription.value).to.be.a('string');
        chai.expect(response.ServerWebsiteURL.value).to.be.a('string');
        chai.expect(response.LevelName.value).to.be.a('string');
        chai.expect(response.GameMode.value).to.be.a('string');
        chai.expect(response.Version.value).to.be.a('string');
        chai.expect(response.IP.value).to.be.a('string');
        chai.expect(response.CountryCode.value).to.be.a('string');
        chai.expect(response.SteamID.value).to.be.a('string');
        chai.expect(response.CompatibilityVersion.value).to.be.a('string');
        chai.expect(response.Platform.value).to.be.a('string');
        chai.expect(response.Port.value).to.be.a('number');
        chai.expect(response.CurrentPlayers.value).to.be.a('number');
        chai.expect(response.MaxPlayers.value).to.be.a('number');
        chai.expect(response.GameDifficulty.value).to.be.a('number');
        chai.expect(response.DayNightLength.value).to.be.a('number');
        chai.expect(response.ZombiesRun.value).to.be.a('number');
        chai.expect(response.DayCount.value).to.be.a('number');
        chai.expect(response.Ping.value).to.be.a('number');
        chai.expect(response.DropOnDeath.value).to.be.a('number');
        chai.expect(response.DropOnQuit.value).to.be.a('number');
        chai.expect(response.BloodMoonEnemyCount.value).to.be.a('number');
        chai.expect(response.EnemyDifficulty.value).to.be.a('number');
        chai.expect(response.PlayerKillingMode.value).to.be.a('number');
        chai.expect(response.CurrentServerTime.value).to.be.a('number');
        chai.expect(response.DayLightLength.value).to.be.a('number');
        chai.expect(response.BlockDurabilityModifier.value).to.be.a('number');
        chai.expect(response.AirDropFrequency.value).to.be.a('number');
        chai.expect(response.LootAbundance.value).to.be.a('number');
        chai.expect(response.LootRespawnDays.value).to.be.a('number');
        chai.expect(response.MaxSpawnedZombies.value).to.be.a('number');
        chai.expect(response.LandClaimSize.value).to.be.a('number');
        chai.expect(response.LandClaimDeadZone.value).to.be.a('number');
        chai.expect(response.LandClaimExpiryTime.value).to.be.a('number');
        chai.expect(response.LandClaimDecayMode.value).to.be.a('number');
        chai.expect(response.LandClaimOnlineDurabilityModifier.value).to.be.a('number');
        chai.expect(response.LandClaimOfflineDurabilityModifier.value).to.be.a('number');
        chai.expect(response.MaxSpawnedAnimals.value).to.be.a('number');
        chai.expect(response.IsDedicated.value).to.be.a('boolean');
        chai.expect(response.IsPasswordProtected.value).to.be.a('boolean');
        chai.expect(response.ShowFriendPlayerOnMap.value).to.be.a('boolean');
        chai.expect(response.BuildCreate.value).to.be.a('boolean');
        chai.expect(response.EACEnabled.value).to.be.a('boolean');
        chai.expect(response.Architecture64.value).to.be.a('boolean');
        chai.expect(response.StockSettings.value).to.be.a('boolean');
        chai.expect(response.StockFiles.value).to.be.a('boolean');
        chai.expect(response.RequiresMod.value).to.be.a('boolean');
        chai.expect(response.AirDropMarker.value).to.be.a('boolean');
        chai.expect(response.EnemySpawnMode.value).to.be.a('boolean');
        chai.expect(response.IsPublic.value).to.be.a('boolean');
    });
});