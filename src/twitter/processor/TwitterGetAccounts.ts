import { CollegeBase } from "../enums/CollegeBase";
import { KeiwaCollege } from "../enums/KeiwaCollege";
import { OsakaFukusoGakuin } from "../enums/OsakaFukusoGakuin";
import { OsakaOngakuDaigaku } from "../enums/OsakaOngakuDaigaku";
import { ShingakuCareer } from "../enums/ShingakuCareer";
import { SocialGoodProject } from "../enums/SocialGoodProject";
import { MusashiCollege } from "../enums/MusashiCollege";

export class TwitterGetAccounts {

    /**
     * return accounts you want to use.
     */
    public static getAccounts(): CollegeBase[] {
        return [
            new ShingakuCareer,
            new OsakaFukusoGakuin,
            new OsakaOngakuDaigaku,
            new KeiwaCollege,
            new SocialGoodProject,
            new MusashiCollege
        ];
    }
}
