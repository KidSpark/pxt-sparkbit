{
    // rotate motor on output #1 500 ms clockwise
    sparkbitO.rotateMotorDuration(sparkbitO.__outputNumber(1), Directions.Clockwise, 100, 500);
    basic.pause(100);
    sparkbitO.stopMotor(1);

    // set light on output #2 red for 500 ms
    sparkbitO.setLightModule(sparkbitO.__outputNumber(2), Colors.Red, 100, 500);
    basic.pause(100);
    sparkbitO.stopLight(2);

    // Play V2 audio on speaker
    soundExpression.giggle.playUntilDone();

    // Play V1 audio on speaker
    music.startMelody(music.builtInMelody(Melodies.Dadadadum));

    // Read sensor #1
    basic.showNumber(sparkbitI.readAnalogSensorPercent(1));


}
