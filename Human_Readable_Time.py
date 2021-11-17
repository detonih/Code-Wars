def make_readable(seconds):
    SS = seconds % 60
    MM = seconds // 60 % 60
    HH = seconds / 3600

    return "{}:{}:{}".format('%02d' % HH, '%02d' % MM, '%02d' % SS)