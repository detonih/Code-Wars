def bouncing_ball(h, bounce, window):
    height_bounces = [(bounce * h)]
    bounces_count = 1
    if not (bounce > 0 and bounce < 1):
        return -1
    elif not (window < h):
        return -1
    while (height_bounces[-1] > window):
        bounces_count += 2
        height_bounces.append(bounce * height_bounces[-1])

    return bounces_count

print(bouncing_ball(3, 0.66, 1.5))