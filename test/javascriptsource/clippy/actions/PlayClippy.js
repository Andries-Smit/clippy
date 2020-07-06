// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {"Clippy.AnimationClippy.Congratulate"|"Clippy.AnimationClippy.LookRight"|"Clippy.AnimationClippy.SendMail"|"Clippy.AnimationClippy.Thinking"|"Clippy.AnimationClippy.Explain"|"Clippy.AnimationClippy.IdleRopePile"|"Clippy.AnimationClippy.IdleAtom"|"Clippy.AnimationClippy.Print"|"Clippy.AnimationClippy.Hide"|"Clippy.AnimationClippy.GetAttention"|"Clippy.AnimationClippy.Save"|"Clippy.AnimationClippy.GetTechy"|"Clippy.AnimationClippy.GestureUp"|"Clippy.AnimationClippy.Idle1_1"|"Clippy.AnimationClippy.Processing"|"Clippy.AnimationClippy.Alert"|"Clippy.AnimationClippy.LookUpRight"|"Clippy.AnimationClippy.IdleSideToSide"|"Clippy.AnimationClippy.GoodBye"|"Clippy.AnimationClippy.LookLeft"|"Clippy.AnimationClippy.IdleHeadScratch"|"Clippy.AnimationClippy.LookUpLeft"|"Clippy.AnimationClippy.CheckingSomething"|"Clippy.AnimationClippy.Hearing_1"|"Clippy.AnimationClippy.GetWizardy"|"Clippy.AnimationClippy.IdleFingerTap"|"Clippy.AnimationClippy.GestureLeft"|"Clippy.AnimationClippy.Wave"|"Clippy.AnimationClippy.GestureRight"|"Clippy.AnimationClippy.Writing"|"Clippy.AnimationClippy.IdleSnooze"|"Clippy.AnimationClippy.LookDownRight"|"Clippy.AnimationClippy.GetArtsy"|"Clippy.AnimationClippy.Show"|"Clippy.AnimationClippy.LookDown"|"Clippy.AnimationClippy.Searching"|"Clippy.AnimationClippy.EmptyTrash"|"Clippy.AnimationClippy.Greeting"|"Clippy.AnimationClippy.LookUp"|"Clippy.AnimationClippy.GestureDown"|"Clippy.AnimationClippy.RestPose"|"Clippy.AnimationClippy.IdleEyeBrowRaise"|"Clippy.AnimationClippy.LookDownLeft"} animation
 * @returns {Promise.<void>}
 */
export async function PlayClippy(animation) {
	// BEGIN USER CODE
	if (window.__clippyAgent) {
		return new Promise((succes) => {
			window.__clippyAgent.play(animation, undefined, succes);
		})
	}
	// END USER CODE
}
